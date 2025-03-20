'use client';

import React, {
  useCallback,
  useContext,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from 'react';
import { cn } from '@/libs/utlis';
import { XIcon } from 'lucide-react';
import dynamic from 'next/dynamic';

// Import individual Framer Motion components
const MotionConfig = dynamic(() => import('framer-motion').then(mod => mod.MotionConfig), { ssr: false });
const AnimatePresence = dynamic(() => import('framer-motion').then(mod => mod.AnimatePresence), { ssr: false });
const motion = dynamic(() => import('framer-motion').then(mod => mod.motion), { ssr: false });

// Context setup
const DialogContext = React.createContext(null);

function useDialog() {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error('useDialog must be used within a DialogProvider');
  }
  return context;
}

function DialogProvider({ children, transition }) {
  const [isOpen, setIsOpen] = useState(false);
  const uniqueId = useId();
  const triggerRef = useRef(null);
  const [triggerRect, setTriggerRect] = useState(null);
  
  const contextValue = useMemo(
    () => ({ isOpen, setIsOpen, uniqueId, triggerRef, triggerRect, setTriggerRect }),
    [isOpen, uniqueId, triggerRect]
  );

  return (
    <DialogContext.Provider value={contextValue}>
      {children}
    </DialogContext.Provider>
  );
}

// Basic non-animated Dialog component that doesn't rely on Framer Motion
function Dialog({ children, transition }) {
  return (
    <DialogProvider>
      {children}
    </DialogProvider>
  );
}

function DialogTrigger({ children, className, style }) {
  const { setIsOpen, isOpen, uniqueId, triggerRef, setTriggerRect } = useDialog();
  
  const handleClick = useCallback(() => {
    // Store the trigger element's position before opening the dialog
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setTriggerRect({
        top: rect.top + window.scrollY,
        left: rect.left + window.scrollX,
        width: rect.width,
        height: rect.height
      });
    }
    setIsOpen(!isOpen);
  }, [isOpen, setIsOpen, triggerRef, setTriggerRect]);
  
  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        handleClick();
      }
    },
    [handleClick]
  );
  
  // Fallback to regular div if motion isn't available
  const [Component, setComponent] = useState(() => "div");
  
  useEffect(() => {
    // Only import and use motion on the client side
    import('framer-motion')
      .then(mod => {
        if (mod.motion && mod.motion.div) {
          setComponent(() => mod.motion.div);
        }
      })
      .catch(err => {
        console.error("Failed to load framer-motion:", err);
      });
  }, []);

  const commonProps = {
    ref: triggerRef,
    className: cn('relative cursor-pointer', className),
    onClick: handleClick,
    onKeyDown: handleKeyDown,
    style,
    role: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": isOpen,
    "aria-controls": `dialog-content-${uniqueId}`
  };

  if (Component === "div") {
    return <div {...commonProps}>{children}</div>;
  }

  return (
    <Component 
      {...commonProps}
      layoutId={`dialog-${uniqueId}`}
    >
      {children}
    </Component>
  );
}

function DialogContent({ children, className, style }) {
  const { setIsOpen, isOpen, uniqueId, triggerRef } = useDialog();
  const containerRef = useRef(null);
  const [firstFocusableElement, setFirstFocusableElement] = useState(null);
  const [lastFocusableElement, setLastFocusableElement] = useState(null);
  const [Component, setComponent] = useState(() => "div");

  useEffect(() => {
    // Only import and use motion on the client side
    import('framer-motion')
      .then(mod => {
        if (mod.motion && mod.motion.div) {
          setComponent(() => mod.motion.div);
        }
      })
      .catch(err => {
        console.error("Failed to load framer-motion:", err);
      });
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setIsOpen(false);
      if (event.key === 'Tab' && firstFocusableElement && lastFocusableElement) {
        if (event.shiftKey) {
          if (document.activeElement === firstFocusableElement) {
            event.preventDefault();
            lastFocusableElement.focus();
          }
        } else if (document.activeElement === lastFocusableElement) {
          event.preventDefault();
          firstFocusableElement.focus();
        }
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [setIsOpen, firstFocusableElement, lastFocusableElement]);

  useEffect(() => {
    if (isOpen) {
      // Don't scroll to top when opening the dialog
      document.body.classList.add('overflow-hidden');
      const focusableElements = containerRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusableElements?.length > 0) {
        setFirstFocusableElement(focusableElements[0]);
        setLastFocusableElement(focusableElements[focusableElements.length - 1]);
        focusableElements[0].focus();
      }
    } else {
      document.body.classList.remove('overflow-hidden');
      triggerRef.current?.focus();
    }
  }, [isOpen, triggerRef]);

  const commonProps = {
    ref: containerRef,
    className: cn('overflow-hidden', className),
    style: {
      ...style,
      maxHeight: '80vh',  // Limit height to 80% of viewport height
      maxWidth: '90vh',  // Limit width
      overflowY: 'auto',  // Enable vertical scrolling
      scrollbarWidth: 'thin',
      scrollbarColor: '#3b82f6 #f1f1f1',
    },
    role: "dialog",
    "aria-modal": "true",
    "aria-labelledby": `dialog-title-${uniqueId}`,
    "aria-describedby": `dialog-description-${uniqueId}`
  };

  if (Component === "div") {
    return <div {...commonProps}>{children}</div>;
  }

  return (
    <Component
      {...commonProps}
      layoutId={`dialog-${uniqueId}`}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {children}
    </Component>
  );
}

function DialogContainer({ children, className }) {
  const { isOpen, setIsOpen, uniqueId, triggerRect } = useDialog();
  const [mounted, setMounted] = useState(false);
  const [AnimatePresenceComponent, setAnimatePresenceComponent] = useState(null);
  const [MotionDivComponent, setMotionDivComponent] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // Only import and use Framer Motion components on the client side
    import('framer-motion')
      .then(mod => {
        setAnimatePresenceComponent(() => mod.AnimatePresence);
        setMotionDivComponent(() => mod.motion.div);
      })
      .catch(err => {
        console.error("Failed to load framer-motion:", err);
      });
  }, []);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (isOpen && containerRef.current) {
      // Maintain the current scroll position when opening the dialog
      // We don't need to scroll to top anymore
    }
  }, [isOpen]);

  if (!mounted) return null;

  // Render without animations if Framer Motion isn't loaded
  if (!AnimatePresenceComponent || !MotionDivComponent) {
    if (!isOpen) return null;
    
    return (
      <>
        <div className="fixed inset-0 h-full z-50 w-full bg-white/40 backdrop-blur-sm dark:bg-black/40" 
             onClick={() => setIsOpen(false)} />
        <div 
          ref={containerRef}
          className={cn(`fixed inset-0 z-50 flex items-center justify-center pointer-events-none`, className)}
        >
          <div className="pointer-events-auto">
            {children}
          </div>
        </div>
      </>
    );
  }

  return (
    <AnimatePresenceComponent initial={false} mode="sync">
      {isOpen && (
        <>
          <MotionDivComponent
            key={`backdrop-${uniqueId}`}
            className="fixed inset-0 h-full z-50 w-full bg-white/40 backdrop-blur-sm dark:bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            onClick={() => setIsOpen(false)}
          />
          <div 
            ref={containerRef}
            className={cn(`fixed inset-0 z-50 flex items-center justify-center pointer-events-none`, className)}
          >
            <div className="pointer-events-auto">
              {children}
            </div>
          </div>
        </>
      )}
    </AnimatePresenceComponent>
  );
}

function DialogTitle({ children, className, style }) {
  const { uniqueId } = useDialog();
  const [Component, setComponent] = useState(() => "div");

  useEffect(() => {
    // Only import and use motion on the client side
    import('framer-motion')
      .then(mod => {
        if (mod.motion && mod.motion.div) {
          setComponent(() => mod.motion.div);
        }
      })
      .catch(err => {
        console.error("Failed to load framer-motion:", err);
      });
  }, []);

  if (Component === "div") {
    return <div className={className} style={style}>{children}</div>;
  }

  return (
    <Component
      layoutId={`dialog-title-container-${uniqueId}`}
      className={className}
      style={style}
      layout
    >
      {children}
    </Component>
  );
}

function DialogSubtitle({ children, className, style }) {
  const { uniqueId } = useDialog();
  const [Component, setComponent] = useState(() => "div");

  useEffect(() => {
    // Only import and use motion on the client side
    import('framer-motion')
      .then(mod => {
        if (mod.motion && mod.motion.div) {
          setComponent(() => mod.motion.div);
        }
      })
      .catch(err => {
        console.error("Failed to load framer-motion:", err);
      });
  }, []);

  if (Component === "div") {
    return <div className={className} style={style}>{children}</div>;
  }

  return (
    <Component
      layoutId={`dialog-subtitle-container-${uniqueId}`}
      className={className}
      style={style}
    >
      {children}
    </Component>
  );
}

function DialogDescription({
  children,
  className,
  variants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 }
  },
  disableLayoutAnimation,
}) {
  const { uniqueId } = useDialog();
  const [Component, setComponent] = useState(() => "div");

  useEffect(() => {
    // Only import and use motion on the client side
    import('framer-motion')
      .then(mod => {
        if (mod.motion && mod.motion.div) {
          setComponent(() => mod.motion.div);
        }
      })
      .catch(err => {
        console.error("Failed to load framer-motion:", err);
      });
  }, []);

  if (Component === "div") {
    return <div className={className} id={`dialog-description-${uniqueId}`}>{children}</div>;
  }

  return (
    <Component
      key={`dialog-description-${uniqueId}`}
      layoutId={disableLayoutAnimation ? undefined : `dialog-description-content-${uniqueId}`}
      variants={variants}
      className={className}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.2, ease: "easeOut" }}
      id={`dialog-description-${uniqueId}`}
    >
      {children}
    </Component>
  );
}

function DialogImage({ src, alt, className, style }) {
  const { uniqueId } = useDialog();
  const [Component, setComponent] = useState(() => "img");

  useEffect(() => {
    // Only import and use motion on the client side
    import('framer-motion')
      .then(mod => {
        if (mod.motion && mod.motion.img) {
          setComponent(() => mod.motion.img);
        }
      })
      .catch(err => {
        console.error("Failed to load framer-motion:", err);
      });
  }, []);

  const commonProps = {
    src,
    alt,
    className: cn(className),
    style
  };

  if (Component === "img") {
    return <img {...commonProps} />;
  }

  return (
    <Component
      {...commonProps}
      layoutId={`dialog-img-${uniqueId}`}
    />
  );
}

function DialogClose({ 
  children, 
  className, 
  variants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 }
  }
}) {
  const { setIsOpen, uniqueId } = useDialog();
  const handleClose = useCallback(() => setIsOpen(false), [setIsOpen]);
  const [Component, setComponent] = useState(() => "button");

  useEffect(() => {
    // Only import and use motion on the client side
    import('framer-motion')
      .then(mod => {
        if (mod.motion && mod.motion.button) {
          setComponent(() => mod.motion.button);
        }
      })
      .catch(err => {
        console.error("Failed to load framer-motion:", err);
      });
  }, []);

  const commonProps = {
    onClick: handleClose,
    type: "button",
    "aria-label": "Close dialog",
    className: cn('absolute right-6 top-6', className)
  };

  if (Component === "button") {
    return <button {...commonProps}>{children || <XIcon size={24} />}</button>;
  }

  return (
    <Component
      {...commonProps}
      key={`dialog-close-${uniqueId}`}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
    >
      {children || <XIcon size={24} />}
    </Component>
  );
}

export {
  Dialog,
  DialogTrigger,  
  DialogContainer,
  DialogContent,
  DialogClose,
  DialogTitle,
  DialogSubtitle,
  DialogDescription,
  DialogImage,
};
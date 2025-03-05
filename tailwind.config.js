import defaultTheme from "tailwindcss/defaultTheme";
import colors from "tailwindcss/colors";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

/** @type {import('tailwindcss').Config} */
export const content = ['./index.html', './src/**/*.{js,ts,jsx,tsx,html}'];
export const darkMode = "class";
export const theme = {
  extend: {
    colors: {
      primary: {
        DEFAULT: '#0D6EFD',
        foreground: '#FFFFFF',
      },
      secondary: {
        DEFAULT: '#F0F1F3',
        foreground: '#020817',
      },
      accent: {
        DEFAULT: '#6D7074',
        foreground: '#020817',
      },
      background: '#FAFAFB',
      foreground: '#020817',
      card: {
        DEFAULT: '#FFFFFF',
        foreground: '#020817',
      },
      popover: {
        DEFAULT: '#FFFFFF',
        foreground: '#020817',
      },
      muted: {
        DEFAULT: '#F0F1F3',
        foreground: '#6D7074',
      },
      destructive: {
        DEFAULT: '#FF4C4C',
        foreground: '#FFFFFF',
      },
      border: '#E0E0E0',
      input: '#E0E0E0',
      ring: '#0D6EFD',
      chart: {
        1: '#FF6F61',
        2: '#4CAF50',
        3: '#03A9F4',
        4: '#FFC107',
        5: '#8E44AD',
      },
      dark: {
        primary: {
          DEFAULT: '#0D6EFD',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#1E1E2C',
          foreground: '#FAFAFB',
        },
        accent: {
          DEFAULT: '#6D7074',
          foreground: '#FAFAFB',
        },
        background: '#020817',
        foreground: '#FAFAFB',
        card: {
          DEFAULT: '#121212',
          foreground: '#FAFAFB',
        },
        popover: {
          DEFAULT: '#121212',
          foreground: '#FAFAFB',
        },
        muted: {
          DEFAULT: '#1E1E2C',
          foreground: '#6D7074',
        },
        destructive: {
          DEFAULT: '#FF4C4C',
          foreground: '#FFFFFF',
        },
        border: '#3C3C3C',
        input: '#3C3C3C',
        ring: '#0D6EFD',
      },
    },
    scrollBehavior: {
      smooth: 'smooth',
    },
    borderRadius: {
      sm: '0.125rem',
    },
    boxShadow: {
      sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
    fontSize: {
      heading: '36px',
      body: '14px',
    },
    fontWeight: {
      heading: '700',
      body: '600',
    },
    animation: {
      // Scroll animation
      scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",

      // Combined animations
      'gradient-extreme': 'gradient 15s ease infinite',
      'gradient-reverse': 'gradient 15s ease-in-out infinite reverse',
      'gradient-move': 'gradientMove 3s linear infinite',
      'extreme-float': 'float 20s ease-in-out infinite',
      'particle': 'particle 10s linear infinite',
      'letter-rotate': 'letterRotate 0.5s ease-out forwards',
      'color-cycle': 'colorCycle 5s ease-in-out infinite',
      'orb-float': 'orbFloat 10s ease-in-out infinite',
      'glow': 'glow 2s ease-in-out infinite',
      'bounce-subtle': 'bounce 5s ease-in-out infinite',
      'spin-slow': 'spin 3s linear infinite',
      'float': 'float 10s ease-in-out infinite',
      'orbit': 'orbit 20s linear infinite',
    },
    keyframes: {
      scroll: {
        to: {
          transform: "translate(calc(-50% - 0.5rem))",
        },
      },
      float: {
        '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
        '50%': { transform: 'translate(20px, 20px) rotate(0deg)' },
      },
      orbit: {
        '0%': { transform: 'rotate(0deg) translateX(50px) rotate(0deg)' },
        '100%': { transform: 'rotate(360deg) translateX(50px) rotate(-360deg)' },
      }
    },
    backgroundSize: {
      '400%': '400% 400%',
    },
  },
};
export const plugins = [addVariablesForColors];

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
  addBase({
    ":root": newVars,
  });
}
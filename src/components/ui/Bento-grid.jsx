import { cn } from "@/libs/utlis";

export const BentoGrid = ({
  className,
  children
}) => {
  return (
    <div
      className={cn(
        "flex flex-wrap gap-4 pb-5 max-w-7xl mx-auto  overflow-hidden",
        className
      )}>
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon
}) => {
  return (
    <div
      className={cn(
        "flex-1 shadow-lg shadow-gray-200 basis-[calc(100%-1rem)] md:basis-[calc(50%-1rem)] lg:basis-[calc(33.333%-1rem)] rounded-xl group/bento hover:shadow-lg hover:shadow-blue-100 transition duration-200  p-4 bg-white border border-transparent flex flex-col space-y-4",
        className
      )}>
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div
          className="font-sans font-bold text-black dark:text-black mb-2 mt-2">
          {title}
        </div>
        <div
          className="font-sans font-normal text-black text-xs dark:text-black">
          {description}
        </div>
      </div>
    </div>
  );
};
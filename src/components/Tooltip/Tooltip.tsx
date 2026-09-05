import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import { cn } from "@/libs/utils";
import { entranceAnimations } from "@/libs/animations/entranceAnimation";

const tooltipVariants = cva(
  "z-50 overflow-hidden rounded-md px-3 py-1.5 text-sm font-medium shadow-md",
  {
    variants: {
      variant: {
        dark: "bg-slate-900 text-white",
        primary: "bg-indigo-600 text-white",
        secondary: "bg-indigo-500 text-white",
        destructive: "bg-red-700 text-white",
        ok: "bg-green-500 text-white",
        ghost: "bg-gray-50 text-gray-700",
        outline: "border border-gray-300 bg-white text-gray-700",
      },
    },
    defaultVariants: {
      variant: "dark",
    },
  }
);

interface TooltipProps
  extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>,
    VariantProps<typeof tooltipVariants> {
  animation?: keyof typeof entranceAnimations;
}

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  TooltipProps
>(
  (
    {
      className,
      sideOffset = 6,
      side = "top",
      variant,
      animation = "fadeIn",
      children,
      ...props
    },
    ref
  ) => {
    const tooltipRef = React.useRef<HTMLDivElement | null>(null);

    React.useEffect(() => {
      const element = tooltipRef.current;

      if (!element || animation === "none") return;

      entranceAnimations[animation]?.(element);
    }, [animation]);

    return (
      <TooltipPrimitive.Portal>
        <TooltipPrimitive.Content
          ref={(node) => {
            tooltipRef.current = node;

            if (typeof ref === "function") {
              ref(node);
            } else if (ref) {
              ref.current = node;
            }
          }}
          side={side}
          sideOffset={sideOffset}
          className={cn(tooltipVariants({ variant, className }))}
          {...props}
        >
          {children}

          <TooltipPrimitive.Arrow className="fill-slate-900" />
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Portal>
    );
  }
);

TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
  tooltipVariants,
};
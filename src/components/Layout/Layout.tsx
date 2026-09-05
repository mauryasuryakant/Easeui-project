import * as React from "react";
import { cn } from "@/libs/utils";

interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

interface LayoutHeaderProps
  extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

interface LayoutMainProps
  extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

interface LayoutSidebarProps
  extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

interface LayoutFooterProps
  extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
}

const Layout = React.forwardRef<HTMLDivElement, LayoutProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "min-h-screen w-full flex flex-col",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Layout.displayName = "Layout";

const LayoutHeader = React.forwardRef<
  HTMLElement,
  LayoutHeaderProps
>(({ className, children, ...props }, ref) => {
  return (
    <header
      ref={ref}
      className={cn(
        "w-full border-b border-gray-200",
        className
      )}
      {...props}
    >
      {children}
    </header>
  );
});

LayoutHeader.displayName = "LayoutHeader";

const LayoutMain = React.forwardRef<
  HTMLElement,
  LayoutMainProps
>(({ className, children, ...props }, ref) => {
  return (
    <main
      ref={ref}
      className={cn(
        "flex-1 w-full",
        className
      )}
      {...props}
    >
      {children}
    </main>
  );
});

LayoutMain.displayName = "LayoutMain";

const LayoutSidebar = React.forwardRef<
  HTMLElement,
  LayoutSidebarProps
>(({ className, children, ...props }, ref) => {
  return (
    <aside
      ref={ref}
      className={cn(
        "shrink-0 border-r border-gray-200",
        className
      )}
      {...props}
    >
      {children}
    </aside>
  );
});

LayoutSidebar.displayName = "LayoutSidebar";

const LayoutFooter = React.forwardRef<
  HTMLElement,
  LayoutFooterProps
>(({ className, children, ...props }, ref) => {
  return (
    <footer
      ref={ref}
      className={cn(
        "w-full border-t border-gray-200",
        className
      )}
      {...props}
    >
      {children}
    </footer>
  );
});

LayoutFooter.displayName = "LayoutFooter";

export {
  Layout,
  LayoutHeader,
  LayoutMain,
  LayoutSidebar,
  LayoutFooter,
};
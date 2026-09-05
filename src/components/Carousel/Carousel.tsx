import * as React from "react";
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react";
import { cn } from "@/libs/utils";

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

interface CarouselProps {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
  className?: string;
  children?: React.ReactNode;
}

interface CarouselContextProps {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: CarouselApi;
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
  orientation: "horizontal" | "vertical";
}

const CarouselContext =
  React.createContext<CarouselContextProps | null>(null);

const useCarousel = () => {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error("useCarousel must be used inside a <Carousel />");
  }

  return context;
};

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  (
    {
      orientation = "horizontal",
      opts,
      plugins,
      setApi,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins
    );

    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);

    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) return;

      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    }, []);

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev();
    }, [api]);

    const scrollNext = React.useCallback(() => {
      api?.scrollNext();
    }, [api]);

    React.useEffect(() => {
      if (!api || !setApi) return;

      setApi(api);
    }, [api, setApi]);

    React.useEffect(() => {
      if (!api) return;

      onSelect(api);

      api.on("reInit", onSelect);
      api.on("select", onSelect);

      return () => {
        api?.off("select", onSelect);
      };
    }, [api, onSelect]);

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api,
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
          orientation,
        }}
      >
        <div
          ref={ref}
          role="region"
          aria-roledescription="carousel"
          className={cn("relative", className)}
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    );
  }
);

Carousel.displayName = "Carousel";

interface CarouselContentProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  CarouselContentProps
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel();

  return (
    <div
      ref={carouselRef}
      className="overflow-hidden"
    >
      <div
        ref={ref}
        className={cn(
          "flex",
          orientation === "horizontal"
            ? "-ml-4"
            : "-mt-4 flex-col",
          className
        )}
        {...props}
      />
    </div>
  );
});

CarouselContent.displayName = "CarouselContent";

interface CarouselItemProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  CarouselItemProps
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel();

  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal"
          ? "pl-4"
          : "pt-4",
        className
      )}
      {...props}
    />
  );
});

CarouselItem.displayName = "CarouselItem";

interface CarouselButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  CarouselButtonProps
>(({ className, children = "←", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();

  return (
    <button
      ref={ref}
      type="button"
      aria-label="Previous slide"
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      className={cn(
        "absolute flex h-9 w-9 items-center justify-center rounded-full",
        "border border-gray-300 bg-white text-gray-700 shadow-sm",
        "transition-colors hover:bg-gray-100",
        "disabled:pointer-events-none disabled:opacity-50",
        orientation === "horizontal"
          ? "left-2 top-1/2 -translate-y-1/2"
          : "left-1/2 top-2 -translate-x-1/2 rotate-90",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
});

CarouselPrevious.displayName = "CarouselPrevious";

const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  CarouselButtonProps
>(({ className, children = "→", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel();

  return (
    <button
      ref={ref}
      type="button"
      aria-label="Next slide"
      disabled={!canScrollNext}
      onClick={scrollNext}
      className={cn(
        "absolute flex h-9 w-9 items-center justify-center rounded-full",
        "border border-gray-300 bg-white text-gray-700 shadow-sm",
        "transition-colors hover:bg-gray-100",
        "disabled:pointer-events-none disabled:opacity-50",
        orientation === "horizontal"
          ? "right-2 top-1/2 -translate-y-1/2"
          : "bottom-2 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
});

CarouselNext.displayName = "CarouselNext";

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  useCarousel,
};

export type {
  CarouselApi,
};
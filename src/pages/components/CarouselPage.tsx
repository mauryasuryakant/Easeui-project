import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/Carousel";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const CarouselPage = () => {
  const basicUsageCode = `
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/Carousel"

<Carousel>
  <CarouselContent>
    <CarouselItem>Slide 1</CarouselItem>
    <CarouselItem>Slide 2</CarouselItem>
    <CarouselItem>Slide 3</CarouselItem>
  </CarouselContent>

  <CarouselPrevious />
  <CarouselNext />
</Carousel>`;

  const propsData = [
    {
      prop: "orientation",
      type: '"horizontal" | "vertical"',
      default: '"horizontal"',
      description: "The direction in which the carousel slides",
    },
    {
      prop: "opts",
      type: "CarouselOptions",
      default: "undefined",
      description: "Embla carousel configuration options",
    },
    {
      prop: "plugins",
      type: "CarouselPlugin",
      default: "undefined",
      description: "Embla carousel plugins",
    },
    {
      prop: "setApi",
      type: "(api) => void",
      default: "undefined",
      description: "Provides access to the carousel API",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-12">
      <header className="space-y-2">
        <p
          className="text-4xl font-bold tracking-tight"
          style={{ color: "var(--text-color)" }}
        >
          Carousel
        </p>

        <p className="text-lg text-gray-600">
          A slideshow component for cycling through a collection of content.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>

        <ComponentDemo code={basicUsageCode}>
          <Carousel className="w-full max-w-xl mx-auto">
            <CarouselContent>
              <CarouselItem>
                <div className="flex h-48 items-center justify-center rounded-xl bg-indigo-600 text-3xl font-bold text-white">
                  Slide 1
                </div>
              </CarouselItem>

              <CarouselItem>
                <div className="flex h-48 items-center justify-center rounded-xl bg-indigo-500 text-3xl font-bold text-white">
                  Slide 2
                </div>
              </CarouselItem>

              <CarouselItem>
                <div className="flex h-48 items-center justify-center rounded-xl bg-slate-900 text-3xl font-bold text-white">
                  Slide 3
                </div>
              </CarouselItem>

              <CarouselItem>
                <div className="flex h-48 items-center justify-center rounded-xl bg-green-500 text-3xl font-bold text-white">
                  Slide 4
                </div>
              </CarouselItem>
            </CarouselContent>

            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>

        <PropsTable data={propsData} />
      </section>
    </div>
  );
};

export default CarouselPage;
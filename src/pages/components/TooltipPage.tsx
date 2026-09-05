import { Button } from "@/components/Button/Button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/Tooltip";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const TooltipPage = () => {
  const basicUsageCode = `
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/Tooltip"

<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button>Hover me</Button>
    </TooltipTrigger>

    <TooltipContent>
      This is a tooltip
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`;

  const propsData = [
    {
      prop: "variant",
      type: '"dark" | "primary" | "secondary" | "outline" | "destructive" | "ghost" | "ok"',
      default: '"dark"',
      description: "The visual style variant of the tooltip",
    },
    {
      prop: "side",
      type: '"top" | "right" | "bottom" | "left"',
      default: '"top"',
      description: "The side where the tooltip appears",
    },
    {
      prop: "sideOffset",
      type: "number",
      default: "6",
      description: "Distance between the tooltip and its trigger",
    },
    {
      prop: "animation",
      type: '"fadeIn" | "scaleIn" | "slideUp" | "bounceIn" | "none"',
      default: '"fadeIn"',
      description: "Animation when the tooltip appears",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-12">
      <header className="space-y-2">
        <p
          className="text-4xl font-bold tracking-tight"
          style={{ color: "var(--text-color)" }}
        >
          Tooltip
        </p>

        <p className="text-lg text-gray-600">
          Displays additional information when hovering or focusing an element.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>

        <ComponentDemo code={basicUsageCode}>
          <TooltipProvider>
            <div className="flex gap-4 flex-wrap">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="primary">
                    Hover me
                  </Button>
                </TooltipTrigger>

                <TooltipContent>
                  This is a tooltip
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="secondary">
                    Bottom
                  </Button>
                </TooltipTrigger>

                <TooltipContent
                  side="bottom"
                  variant="secondary"
                  animation="scaleIn"
                >
                  Tooltip at the bottom
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline">
                    Right
                  </Button>
                </TooltipTrigger>

                <TooltipContent
                  side="right"
                  variant="outline"
                  animation="slideUp"
                >
                  Tooltip at the right
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="destructive">
                    Left
                  </Button>
                </TooltipTrigger>

                <TooltipContent
                  side="left"
                  variant="destructive"
                  animation="bounceIn"
                >
                  Tooltip at the left
                </TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>

        <PropsTable data={propsData} />
      </section>
    </div>
  );
};

export default TooltipPage;
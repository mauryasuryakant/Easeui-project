import {
  Layout,
  LayoutFooter,
  LayoutHeader,
  LayoutMain,
  LayoutSidebar,
} from "@/components/Layout";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const LayoutPage = () => {
  const basicUsageCode = `
import {
  Layout,
  LayoutHeader,
  LayoutMain,
  LayoutFooter,
} from "@/components/Layout"

<Layout>
  <LayoutHeader>
    Header
  </LayoutHeader>

  <LayoutMain>
    Main Content
  </LayoutMain>

  <LayoutFooter>
    Footer
  </LayoutFooter>
</Layout>`;

  const propsData = [
    {
      prop: "className",
      type: "string",
      default: "undefined",
      description: "Additional CSS classes for customizing the layout",
    },
    {
      prop: "children",
      type: "React.ReactNode",
      default: "undefined",
      description: "Content displayed inside the layout",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-12">
      <header className="space-y-2">
        <p
          className="text-4xl font-bold tracking-tight"
          style={{ color: "var(--text-color)" }}
        >
          Layout
        </p>

        <p className="text-lg text-gray-600">
          Provides a flexible structure for organizing application content.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Usage
        </h2>

        <ComponentDemo code={basicUsageCode}>
          <div className="overflow-hidden rounded-lg border border-gray-700">
            <Layout className="min-h-[400px] w-60">
              <LayoutHeader className="flex h-16 items-center justify-center bg-slate-900 text-white">
                Header
              </LayoutHeader>

              <LayoutMain className="flex items-center justify-center bg-gray-50">
                <p className="text-lg font-medium text-gray-700">
                  Main Content
                </p>
              </LayoutMain>

              <LayoutFooter className="flex h-14 items-center justify-center bg-white text-gray-600">
                Footer
              </LayoutFooter>
            </Layout>
          </div>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          Sidebar Layout
        </h2>

        <ComponentDemo
          code={`
<Layout>
  <div className="flex flex-1">
    <LayoutSidebar>
      Sidebar
    </LayoutSidebar>

    <LayoutMain>
      Main Content
    </LayoutMain>
  </div>
</Layout>`}
        >
          <div className="overflow-hidden rounded-lg border border-gray-700">
            <Layout className="min-h-[300px]">
              <LayoutHeader className="flex h-14 items-center px-6 bg-slate-900 text-white">
                Header
              </LayoutHeader>

              <div className="flex flex-1">
                <LayoutSidebar className="w-25 bg-gray-50 p-4">
                  <div className="space-y-3">
                    <p className="font-medium text-gray-700">
                      Sidebar
                    </p>

                    <p className="text-sm text-gray-500">
                      Navigation
                    </p>

                    <p className="text-sm text-gray-500">
                      Settings
                    </p>
                  </div>
                </LayoutSidebar>

                <LayoutMain className="flex p-2 items-center justify-center">
                  <p className="text-lg font-medium text-gray-700">
                    Main Content
                  </p>
                </LayoutMain>
              </div>
            </Layout>
          </div>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">
          API Reference
        </h2>

        <PropsTable data={propsData} />
      </section>
    </div>
  );
};

export default LayoutPage;
import Link from "next/link";

const BrowseComponents = () => {
  const allComponents = [
    "Accordion/Collapse",
    "Alerts",
    "Breadcrumbs",
    "Buttons",
    "Cards",
    "Checkboxes",
    "Chips",
    "Clipboard",
    "Containers",
    "Dropdowns",
    "File Upload",
    "Inputs",
  ];

  return (
    <div className="flex justify-between m-auto w-[1440px] mt-[100px]">
      <div className="sticky top-24 self-start overflow-y-auto w-[300px]">
        <p className="text-xl font-semibold mb-4">All Components</p>
        <div className="flex">
          <div className="h-auto border-l-2 border-dark-blue opacity-65 ml-1 mr-5 mt-1 mb-3"></div>
          <div>
            {allComponents.sort().map((item) => {
              return <p className="text-md mb-2 hover:scale-125 origin-left  duration-200 ease-in-out">{item}</p>
            })}
          </div>
        </div>
      </div>
      <div className="grid gap-12 grid-cols-2 w-full ">
        {allComponents.sort().map((item) => {
          return (
            <Link href="/details" className="border rounded-3xl shadow h-96 p-5">
              <img
                className="rounded-t-3xl h-64 w-full"
                alt=""
                src="https://images.unsplash.com/photo-1737047119483-1ddb4cb13540?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <p className="text-lg font-semibold mb-1 mt-3">{item}</p>
              <p className="text-md leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                temporibus corporis consequatur tempore culpa pariatur
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BrowseComponents;

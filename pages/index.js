export default function Home() {
  const tools = [
    { name: "Product Database Builder", link: "/product-database" },
    { name: "Profit Calculator", link: "/profit-calculator" },
    { name: "Product Scoring Tool", link: "/product-scoring" },
    { name: "Trend Analyzer", link: "/trend-analyzer" },
    { name: "Best Seller Rank Tracker", link: "/bsr-tracker" },
    { name: "PPC Campaign Starter", link: "/ppc-campaign" },
    { name: "PPC Optimizer Tool", link: "/ppc-optimizer" },
    { name: "Review Insights Tool", link: "/review-insights" },
    { name: "Shopify Expansion Planner", link: "/shopify-expansion" }
  ];

  return (
    <div className="p-8 grid gap-8">
      <h1 className="text-4xl font-bold">Ecom Insight Pro - Unified Control Center</h1>
      <p className="text-lg">Access all your tools from one place!</p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-6">
        {tools.map((tool, index) => (
          <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold">{tool.name}</h2>
            <a href={tool.link}>
              <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Open Tool
              </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

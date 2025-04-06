import { useState, useEffect } from "react";

export default function ProfitCalculator() {
  const [sellingPrice, setSellingPrice] = useState("");
  const [productCost, setProductCost] = useState("");
  const [shippingCost, setShippingCost] = useState("");
  const [fbaFees, setFbaFees] = useState("");
  const [adsCost, setAdsCost] = useState("");

  const [profit, setProfit] = useState(0);
  const [roi, setRoi] = useState(0);
  const [netMargin, setNetMargin] = useState(0);
  const [breakEvenPrice, setBreakEvenPrice] = useState(0);

  useEffect(() => {
    calculateProfit();
  }, [sellingPrice, productCost, shippingCost, fbaFees, adsCost]);

  const calculateProfit = () => {
    const sp = parseFloat(sellingPrice) || 0;
    const pc = parseFloat(productCost) || 0;
    const sc = parseFloat(shippingCost) || 0;
    const fba = parseFloat(fbaFees) || 0;
    const ads = parseFloat(adsCost) || 0;

    const totalCosts = pc + sc + fba + ads;
    const netProfit = sp - totalCosts;
    const roiValue = totalCosts > 0 ? (netProfit / totalCosts) * 100 : 0;
    const netMarginValue = sp > 0 ? (netProfit / sp) * 100 : 0;
    const breakEven = totalCosts;

    setProfit(netProfit.toFixed(2));
    setRoi(roiValue.toFixed(2));
    setNetMargin(netMarginValue.toFixed(2));
    setBreakEvenPrice(breakEven.toFixed(2));
  };

  const clearFields = () => {
    setSellingPrice("");
    setProductCost("");
    setShippingCost("");
    setFbaFees("");
    setAdsCost("");
    setProfit(0);
    setRoi(0);
    setNetMargin(0);
    setBreakEvenPrice(0);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8">
      <div className="bg-white p-10 rounded-2xl shadow-2xl max-w-2xl w-full">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">Strategic Profit Calculator</h1>

        <div className="grid grid-cols-1 gap-4 mb-6">
          <input
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="number"
            placeholder="Selling Price ($)"
            value={sellingPrice}
            onChange={(e) => setSellingPrice(e.target.value)}
          />
          <input
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="number"
            placeholder="Product Cost ($)"
            value={productCost}
            onChange={(e) => setProductCost(e.target.value)}
          />
          <input
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="number"
            placeholder="Shipping Cost ($)"
            value={shippingCost}
            onChange={(e) => setShippingCost(e.target.value)}
          />
          <input
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="number"
            placeholder="FBA Fees ($)"
            value={fbaFees}
            onChange={(e) => setFbaFees(e.target.value)}
          />
          <input
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            type="number"
            placeholder="Ads Cost ($)"
            value={adsCost}
            onChange={(e) => setAdsCost(e.target.value)}
          />
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={clearFields}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg transition-all"
          >
            Clear All
          </button>
        </div>

        <div className="mt-8 bg-green-50 p-6 rounded-2xl shadow-inner">
          <h2 className="text-2xl font-semibold mb-4 text-green-700">Results:</h2>
          <p className="text-lg mb-2">Profit: <strong>${profit}</strong></p>
          <p className="text-lg mb-2">ROI: <strong>{roi}%</strong></p>
          <p className="text-lg mb-2">Net Margin: <strong>{netMargin}%</strong></p>
          <p className="text-lg">Break-Even Selling Price: <strong>${breakEvenPrice}</strong></p>
        </div>
      </div>
    </div>
  );
}

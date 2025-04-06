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
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">Strategic Profit Calculator</h1>

      <div className="grid grid-cols-1 gap-4">
        <input
          className="p-2 border rounded"
          type="number"
          placeholder="Selling Price ($)"
          value={sellingPrice}
          onChange={(e) => setSellingPrice(e.target.value)}
        />
        <input
          className="p-2 border rounded"
          type="number"
          placeholder="Product Cost ($)"
          value={productCost}
          onChange={(e) => setProductCost(e.target.value)}
        />
        <input
          className="p-2 border rounded"
          type="number"
          placeholder="Shipping Cost ($)"
          value={shippingCost}
          onChange={(e) => setShippingCost(e.target.value)}
        />
        <input
          className="p-2 border rounded"
          type="number"
          placeholder="FBA Fees ($)"
          value={fbaFees}
          onChange={(e) => setFbaFees(e.target.value)}
        />
        <input
          className="p-2 border rounded"
          type="number"
          placeholder="Ads Cost ($)"
          value={adsCost}
          onChange={(e) => setAdsCost(e.target.value)}
        />

        <button
          onClick={clearFields}
          className="bg-red-500 text-white py-2 rounded hover:bg-red-600 mt-4"
        >
          Clear All
        </button>

        <div className="mt-6 bg-green-100 p-4 rounded">
          <h2 className="text-2xl font-semibold mb-4">Results:</h2>
          <p>Profit: <strong>${profit}</strong></p>
          <p>ROI: <strong>{roi}%</strong></p>
          <p>Net Margin: <strong>{netMargin}%</strong></p>
          <p>Break-Even Selling Price: <strong>${breakEvenPrice}</strong></p>
        </div>
      </div>
    </div>
  );
}

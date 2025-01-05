import { Coins } from "./coins";
import { Card } from "@/components/ui/card";

export function MarketHeader() {
  return (
    <Card className="p-6 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div>
          <h2 className="text-sm text-green/60 mb-1">Total Account Value</h2>
          <div className="text-3xl font-bold text-green">$24,792.92</div>
        </div>

        <div className="flex gap-8">
          <Coins />
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div>
            <h2 className="text-sm text-green/60 mb-1">
              Positions <span className="text-emerald-600">+$72.99</span>
            </h2>
            <div className="text-2xl font-bold text-green">
              <div>$11,752.00</div>
            </div>
          </div>
          <div>
            <h2 className="text-sm text-green/60 mb-1">Available Funds</h2>
            <div className="text-2xl font-bold text-green">$22,372.71</div>
          </div>
        </div>
      </div>
    </Card>
  );
}

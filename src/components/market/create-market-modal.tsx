import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

interface CreateMarketModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateMarket: (
    question: string,
    category: string,
    endTime: number,
    liquidity: string
  ) => void;
}

export const CreateMarketModal: React.FC<CreateMarketModalProps> = ({
  isOpen,
  onClose,
  onCreateMarket,
}) => {
  const [question, setQuestion] = useState("");
  const [category, setCategory] = useState("crypto");
  const [endTime, setEndTime] = useState("");
  const [liquidity, setLiquidity] = useState("0");

  const handleSubmit = () => {
    const endTimeNumber = new Date(endTime).getTime() / 1000; // Convert to Unix timestamp
    onCreateMarket(question, category, endTimeNumber, liquidity);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 border border-dark-green">
        <h2 className="text-lg font-medium mb-4 text-dark-green text-center">
          Create Market
        </h2>
        <textarea
          placeholder="Question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="w-full mb-2 p-2 border border-dark-green rounded-lg text-sm"
        />
        {/* <label htmlFor="category" className="text-sm text-dark-green">
          Category
        </label> */}
        <Select defaultValue="crypto">
          <SelectTrigger
            onClick={() => setCategory(category)}
            className="w-full mb-4 p-2 border border-dark-green rounded-lg text-sm"
          >
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="crypto">Cryptocurrency</SelectItem>
            <SelectItem value="ai">Artificial Intelligence</SelectItem>
            <SelectItem value="medical">Medical</SelectItem>
            <SelectItem value="finance">Gaming</SelectItem>
          </SelectContent>
        </Select>
        <input
          type="datetime-local"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          className="w-full mb-4 p-2 border border-dark-green rounded-lg text-sm"
        />
        <input
          type="number"
          value={liquidity}
          onChange={(e) => setLiquidity(e.target.value)}
          className="w-full mb-4 p-2 border border-dark-green rounded-lg text-sm"
        />
        <div className="flex justify-end">
          <button
            type="button"
            onClick={handleSubmit}
            className="bg-emerald-50 hover:bg-emerald-100 border-emerald-200 text-emerald-700 px-2 py-1 rounded-lg mr-2 hover:bg-opacity-80 text-sm"
          >
            Create
          </button>
          <button
            type="button"
            onClick={onClose}
            className="text-dark-green px-2 py-1 rounded border bg-red-50 hover:bg-red-100 border-red-200 text-red-700 text-sm"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

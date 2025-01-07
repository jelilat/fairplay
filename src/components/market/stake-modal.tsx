"use client";
import { useState } from "react";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";

interface StakeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (amount: number) => void;
}

export const StakeModal: React.FC<StakeModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  const [stakeAmount, setStakeAmount] = useState<number | null>(null);

  const handleConfirm = () => {
    if (stakeAmount !== null) {
      onConfirm(stakeAmount);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-4">
        <h2 className="text-lg font-medium">Enter Stake Amount</h2>
        <input
          type="number"
          value={stakeAmount || ""}
          onChange={(e) => setStakeAmount(Number(e.target.value))}
          placeholder="Enter amount (GRASS)"
          className="mt-2 border border-gray-300 rounded-md p-2 w-full"
        />
        <Button
          className="mt-4 bg-[#2d4d31]/100 hover:bg-[#2d4d31]"
          onClick={handleConfirm}
        >
          Confirm Stake
        </Button>
      </div>
    </Modal>
  );
};

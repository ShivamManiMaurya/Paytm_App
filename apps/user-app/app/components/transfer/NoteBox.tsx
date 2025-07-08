/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useMemo, useState, useEffect } from "react";
import { Zap } from "lucide-react";
import { tranferShapes } from "../../lib/types/transferShapes";
import { toast } from "react-toastify";
import { createAutoWebhook } from "../../lib/actions/createAutoWebhook";
import { useRouter } from "next/navigation";

interface IProps {
  transactions: tranferShapes.TTxn[];
  autoWebhookRes: tranferShapes.TAutoWebhook;
}

// eslint-disable-next-line react/prop-types
const NoteBox: React.FC<IProps> = ({ transactions, autoWebhookRes }) => {
  const router = useRouter();
  const [autoWebhook, setAutoWebhook] = useState(false);

  const currTxn = useMemo(
    // eslint-disable-next-line react/prop-types
    () => transactions[transactions.length - 1],
    [transactions]
  );

  useEffect(() => {
    // eslint-disable-next-line react/prop-types
    setAutoWebhook(autoWebhookRes.isAutoWebhook ?? false);
  }, [autoWebhookRes]);

  const handleWebhookClick = async () => {
    alert("Webhook manually triggered! (Simulated)");

    try {
      if (!currTxn) {
        toast.error(
          "The current transaction hasn’t been processed yet. Please try again shortly."
        );
        return;
      }

      const payload = {
        token: currTxn.token,
        userId: currTxn.userId,
        amount: currTxn.amount,
        status: currTxn.status,
      };

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_WEBHOOK_BANK_SERVER_URL}/hdfcWebhook`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const result = await res.json();

      if (res.ok) {
        toast.success(
          result.message ?? "Amount added to your bank account successfully."
        );
        router.refresh();
      } else {
        toast.error(result.message ?? "Transaction failed.");
      }
    } catch (error: any) {
      toast.error(error ? error || error.message : "Something went wrong.");
    }
  };

  const handleSetAutoWebhook = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAutoWebhook(e.target.checked);

    const response = await createAutoWebhook(e.target.checked);

    if (response.status >= 200 && response.status <= 210) {
      toast.success("Auto webhook updated successfully.");
    } else {
      toast.error(response.message + " status: " + response.status);
    }
  };

  return (
    <div className="bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 p-2 rounded-xl shadow-md space-y-3">
      <h2 className="text-lg font-semibold">Important Note</h2>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-sm leading-relaxed flex-1">
          After clicking <strong>Add Money</strong>, you'll be redirected to the
          bank’s NetBanking page. Since this is a{" "}
          <strong>dummy wallet platform</strong>, you don’t need to take any
          action there. When you return, you need to manually trigger the
          webhook to simulate the bank's response.
        </p>
      </div>
      <button
        onClick={handleWebhookClick}
        className="flex items-center gap-2 px-5 py-1 cursor-pointer bg-yellow-600 text-white font-semibold rounded-lg shadow hover:bg-yellow-700 transition">
        <Zap size={18} className="stroke-white" />
        Trigger Webhook
      </button>

      <p className="text-sm leading-relaxed">
        In real-world scenarios, the bank would automatically call the webhook
        after processing your transaction to indicate whether it was{" "}
        <strong>successful</strong>, <strong>failed</strong>, or{" "}
        <strong>pending</strong>. Once successful, the money is added to your
        account.
      </p>

      <div className="bg-white border rounded-md p-4">
        <label className="flex items-start gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={autoWebhook}
            onChange={handleSetAutoWebhook}
            className="mt-1"
          />
          <span className="text-sm leading-relaxed">
            <strong>Automate webhook trigger:</strong>
            <br />
            If selected, the webhook will automatically be triggered after the{" "}
            <strong>Add Money</strong> action is completed successfully—no
            manual input needed.
          </span>
        </label>
      </div>
    </div>
  );
};

export default NoteBox;

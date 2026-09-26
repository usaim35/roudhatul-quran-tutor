"use client";

import { useState } from "react";
import { pricingPlans, currencies } from "@/lib/mock-data";

export function PricingTable() {
  const [currencyCode, setCurrencyCode] = useState("USD");
  const currency = currencies.find((c) => c.code === currencyCode)!;

  const format = (usd: number) => {
    const converted = usd * currency.rate;
    const rounded = currency.code === "USD" || currency.code === "CAD" || currency.code === "AUD" || currency.code === "EUR"
      ? Math.round(converted)
      : Math.round(converted);
    return `${currency.symbol}${rounded}`;
  };

  return (
    <div>
      <div className="mb-6 flex flex-wrap justify-center gap-2">
        {currencies.map((c) => (
          <button
            key={c.code}
            onClick={() => setCurrencyCode(c.code)}
            className={`rounded-lg border px-3 py-1.5 text-xs font-semibold transition ${
              currencyCode === c.code
                ? "border-brand-600 bg-brand-600 text-cream-50 dark:border-gold-500 dark:bg-gold-500 dark:text-brand-950"
                : "border-brand-200 text-brand-600 hover:bg-brand-50 dark:border-brand-700 dark:text-brand-300 dark:hover:bg-brand-800"
            }`}
          >
            {c.code} {c.label}
          </button>
        ))}
      </div>

      <div className="card overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="bg-brand-700 text-cream-50 dark:bg-brand-800">
              <th className="px-5 py-3 font-semibold">Schedule / Week</th>
              <th className="px-5 py-3 font-semibold">Classes / Month</th>
              <th className="px-5 py-3 font-semibold">Monthly Fee</th>
            </tr>
          </thead>
          <tbody>
            {pricingPlans.map((plan) => (
              <tr key={plan.id} className="border-b border-brand-100 last:border-0 dark:border-brand-800">
                <td className="flex items-center gap-2 px-5 py-4 font-medium text-brand-800 dark:text-cream-50">
                  {plan.name}
                  {plan.badge === "Popular" && (
                    <span className="rounded bg-brand-600 px-2 py-0.5 text-[10px] font-semibold text-cream-50">POPULAR</span>
                  )}
                  {plan.badge === "Best Value" && (
                    <span className="rounded bg-gold-500 px-2 py-0.5 text-[10px] font-semibold text-brand-950">BEST VALUE</span>
                  )}
                </td>
                <td className="px-5 py-4 text-brand-500 dark:text-brand-300">{plan.classesPerMonth} Classes</td>
                <td className="px-5 py-4 font-bold text-brand-700 dark:text-gold-300">{format(plan.monthlyFeeUsd)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-center text-xs text-brand-400 dark:text-brand-500">
        Rates are approximate. Connect a live FX API for exact conversions.
      </p>
    </div>
  );
}

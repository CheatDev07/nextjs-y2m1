"use client";

import { createContext, ReactNode, useContext } from "react";
import { cn } from "cn";

const PriceContext = createContext<{ onSale?: boolean }>({ onSale: false });
export const usePriceContext = () => useContext(PriceContext);


interface PriceProps {
  regular: number;
  sale?: number;
  currency: string;
  text?: string;
}

interface PriceValueProps {
  price?: number;
  currency?: string;
  variant?: "regular" | "sale";
  className?: string;
}

export type PriceType = {
  currency?: string;
  regular: number;
  sale?: number;
};

const formatterCache = new Map<string, Intl.NumberFormat>();

function formatCurrency(value: number, currency = "USD", locale = "en-US") {
  const key = `${locale}-${currency}`;
  if (!formatterCache.has(key)) {
    formatterCache.set(
      key,
      new Intl.NumberFormat(locale, { style: "currency", currency }),
    );
  }
  return formatterCache.get(key)!.format(value);
}

const Price = ({ regular, sale, currency }: PriceProps) => {
  if (!regular || !currency) return;

  const formatCurrency = (
    value: number,
    currency: string = "USD",
    locale: string = "en-US",
  ) => {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
    }).format(value);
  };

  return (
    <div className="flex items-center gap-2">
      {sale && (
        <span className="text-right text-2xl font-bold text-primary">
          {formatCurrency(sale, currency)}
        </span>
      )}
      <span
        className={`text-right text-2xl font-bold ${
          sale ? "text-muted-foreground line-through" : "text-foreground"
        }`}
      >
        {formatCurrency(regular, currency)}
      </span>
    </div>
  );
};


const PriceValue = ({
  price,
  currency = "USD",
  variant = "regular",
  className,
}: PriceValueProps) => {
  const { onSale } = usePriceContext();

  if (price == null) return null;

  return (
    <span
      className={cn(
        "leading-tight",
        variant === "regular"
          ? onSale
            ? "text-muted-foreground line-through"
            : "text-foreground"
          : "text-foreground",
        className,
      )}
    >
      {formatCurrency(price, currency)}
    </span>
  );
};

export { Price, PriceValue };

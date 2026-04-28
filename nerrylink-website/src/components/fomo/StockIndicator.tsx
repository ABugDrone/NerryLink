interface StockIndicatorProps {
  quantity: number;
}

export function StockIndicator({ quantity }: StockIndicatorProps) {
  if (quantity <= 5) {
    return (
      <span className="inline-flex items-center gap-1 text-xs font-semibold text-orange-400 bg-orange-400/10 border border-orange-400/30 px-2 py-0.5 rounded-full">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
        Only {quantity} left in stock!
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 text-xs font-semibold text-green-400 bg-green-400/10 border border-green-400/30 px-2 py-0.5 rounded-full">
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>
      In Stock
    </span>
  );
}

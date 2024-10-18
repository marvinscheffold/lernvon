type GetPriceForDateProps = {
  minimumPrice: number;
  timingFactors: { multiplier: number }[];
  events: { multiplier: number }[];
};

export function getPriceSuggestionForDate({
  minimumPrice,
  timingFactors,
  events,
}: GetPriceForDateProps): number {
  const priceWithTimingFactors = timingFactors.reduce(
    (prev, { multiplier }) => {
      return prev * multiplier;
    },
    minimumPrice
  );

  const priceWithTimingFactorsAndEvents = events.reduce(
    (prev, { multiplier }) => {
      return prev * multiplier;
    },
    priceWithTimingFactors
  );

  return Math.ceil(priceWithTimingFactorsAndEvents);
}

import { CalendarDateInformationType } from "./calendarDateInformation";

export type CalendarDatePriceSuggestion = {
  priceSuggestion: number;
};

export type CalendarDatePriceSuggestionWithInformation =
  CalendarDatePriceSuggestion & {
    information: CalendarDateInformationType;
  };

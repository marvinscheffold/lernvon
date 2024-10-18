export type CalendarDateInformationDataType = {
  date: string;
  events: CalendarDateInformationEventType[];
  timingFactors: CalendarDateInformationTimingFactorType[];
};

export type CalendarDateInformationType = {
  date: string;
  isHidden: boolean;
  events: CalendarDateInformationEventType[];
  timingFactors: CalendarDateInformationTimingFactorType[];
};

export type CalendarDateInformationEventType = {
  name: string;
  multiplier: number;
};

export type CalendarDateInformationTimingFactorType = {
  name: string;
  multiplier: number;
};

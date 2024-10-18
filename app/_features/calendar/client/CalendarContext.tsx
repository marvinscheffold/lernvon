import {
  createContext,
  useState,
  ReactNode,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";
import { CalendarDateModal, CalendarDateModalProps } from "./CalendarDateModal";
import dayjs from "dayjs";

export type CalendarDateModalContextType = {
  setCalendarDateModalState: Dispatch<SetStateAction<CalendarDateModalProps>>;
};

export const CalendarDateModalContext =
  createContext<CalendarDateModalContextType>(
    {} as CalendarDateModalContextType
  );

type CalendarProviderProps = {
  children: ReactNode;
};
export function useCalendarDateModal() {
  return useContext(CalendarDateModalContext);
}

export function CalendarDateModalProvider({ children }: CalendarProviderProps) {
  const [calendarDateModalState, setCalendarDateModalState] =
    useState<CalendarDateModalProps>({
      isOpen: false,
      onClose: () => null,
      city: "berlin",
      date: dayjs(),
      minimumPrice: 0,
    });

  return (
    <CalendarDateModalContext.Provider
      value={{
        setCalendarDateModalState,
      }}
    >
      {children}
      <CalendarDateModal {...calendarDateModalState} />
    </CalendarDateModalContext.Provider>
  );
}

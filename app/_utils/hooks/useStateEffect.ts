import {
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
  DependencyList,
} from "react";

export function useStateEffect<T>(
  initialState: T,
  deps?: DependencyList
): [T, Dispatch<SetStateAction<T>>] {
  const [state, setState] = useState(initialState);

  useEffect(
    () => {
      setState(initialState);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    deps ? [...deps] : [initialState]
  );

  return [state, setState];
}

import { useState, useCallback } from "react";

// hook initializer
export const useConstructor: (callback: () => void) => void = (callBack) => {
  const [hasBeenCalled, setHasBeenCalled] = useState<boolean>(false);
  if (hasBeenCalled) {
    return;
  }
  callBack();
  setHasBeenCalled(true);
};

// force update for side effects
export const useForceUpdate = () => {
  const [, setTick] = useState<number>(0);
  const update = useCallback(() => {
    setTick((tick) => tick + 1);
  }, []);
  return update;
};

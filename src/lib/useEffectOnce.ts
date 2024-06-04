import React from "react";

export const useEffectOnce = (effect: any) => {
  const [needToCall, setNeedToCall] = React.useState(false);

  React.useEffect(() => {
    if (needToCall) {
      effect();
    } else {
      setNeedToCall(true);
    }
  }, [needToCall]);
};

import React, { useState, ReactNode, useMemo, useCallback } from 'react';

const ICON_DOWN_DIRECTION: boolean = false;
type UseVisibilityToggle = [ReactNode, () => void, ReactNode];

const useVisibilityToggle = (
  component: ReactNode,
  visibility: boolean = false,
  [IconDown, IconRight]: [ReactNode, ReactNode],
): UseVisibilityToggle => {
  const [visible, setVisible] = useState(() => visibility);
  const memoSetVisible = useCallback(
    () => setVisible((prevState: boolean) => !prevState),
    [],
  );
  return [
    visible ? component : null,
    memoSetVisible,
    visible ? IconDown : IconRight,
  ];
};

export default useVisibilityToggle;

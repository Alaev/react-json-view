import { useState } from 'react';

const ICON_DOWN_DIRECTION: boolean = false;

const useVisibility = (
  component: any,
  visibility: boolean = false,
  [IconDown, IconRight]: any,
) => {
  const [visible, setVisible] = useState(() => visibility);
  const [iconDirection, setIconDirection] = useState(ICON_DOWN_DIRECTION);
  return [
    visible ? component : null,
    () => {
      setVisible((prevState: boolean) => !prevState);
      setIconDirection((prevState: boolean) => !prevState);
    },
    iconDirection ? IconDown : IconRight,
  ];
};

export default useVisibility;

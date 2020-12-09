import React, { ReactChild, useState } from 'react';
import _isString from 'lodash/isString';
import ChevronDown from '../../../components/icons/chevron-down';
import ChevronRight from '../../../components/icons/chevron-right';

interface Props {
  jsonKey: string | number;
  children: ReactChild;
}

function JsonNode({ jsonKey, children }: Props) {
  const [showChildren, setShowChildren] = useState(false);

  const toggleChildrenVisibility = () => {
    setShowChildren((prev: boolean) => !prev);
    setToggledIcon((prev: boolean) => !prev);
  };

  const [toggledIcon, setToggledIcon] = useState(false);
  if (jsonKey && !_isString(jsonKey)) {
    return null;
  }

  return (
    <>
      <div className="node" onClick={toggleChildrenVisibility}>
        {jsonKey} {toggledIcon ? <ChevronDown /> : <ChevronRight />}
      </div>
      {showChildren && <div className="child-node">{children}</div>}
    </>
  );
}

export default JsonNode;

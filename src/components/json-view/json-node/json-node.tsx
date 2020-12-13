import React, { ReactChild, useCallback, useMemo, useState } from 'react';
import _isString from 'lodash/isString';
import ChevronDown from '../../../components/icons/chevron-down';
import ChevronRight from '../../../components/icons/chevron-right';
import useVisibility from '../../../hooks/useVisibilityToggle';
import type { JsonObject } from '../json-node-child/json-node-child';
interface Props {
  jsonKey: string | number;
  children: JsonObject;
}

function JsonNode({ jsonKey, children }: Props) {
  if (jsonKey && !_isString(jsonKey)) {
    return null;
  }
  const [
    ChildrenVisibility,
    setVisibility,
    IconVisibility,
  ] = useVisibility(<div className="child-node">{children}</div>, false, [
    <ChevronDown />,
    <ChevronRight />,
  ]);
  const iconDirection = useMemo(() => IconVisibility, [IconVisibility]);

  return (
    <>
      <div className="node" onClick={setVisibility}>
        {jsonKey}
        {iconDirection}
      </div>
      {ChildrenVisibility}
    </>
  );
}

export default JsonNode;

import React, { ReactChild } from 'react';
import JsonNodeObject from '../json-node-object/json-node-object';
import NodeValue from '../json-node-value/json-node-value';
import _isObject from 'lodash/isObject';
import _isArray from 'lodash/isArray';
import _uuid from 'lodash/uniqueId';

interface Props {
  children: ReactChild;
  index?: number;
}

function JsonNodeChild({ children, index = undefined }: Props) {
  if (_isObject(children)) {
    return <JsonNodeObject>{children}</JsonNodeObject>;
  }

  if (_isArray(children)) {
    return (
      <>
        {children.map((child: ReactChild, index: number) => (
          <JsonNodeChild key={_uuid()} index={index}>
            {child}
          </JsonNodeChild>
        ))}
      </>
    );
  }

  return <NodeValue index={index}>{children}</NodeValue>;
}

export default JsonNodeChild;

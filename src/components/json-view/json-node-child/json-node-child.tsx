import React from 'react';
import _isObject from 'lodash/isObject';
import _isArray from 'lodash/isArray';
import _uuid from 'lodash/uniqueId';
import JsonNodeObject from '../json-node-object/json-node-object';
import NodeValue from '../json-node-value/json-node-value';

export type JsonObject = {} | [] | string | number | boolean | null;

interface Props {
  children: JsonObject;
  index?: number;
}

function JsonNodeChild({ children, index = undefined }: Props) {
  if (_isObject(children)) {
    return <JsonNodeObject>{children}</JsonNodeObject>;
  }

  if (_isArray(children)) {
    return (
      <>
        {children.map((child: JSON, index: number) => (
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

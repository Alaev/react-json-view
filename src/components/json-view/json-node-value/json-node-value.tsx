import React, { ReactChild } from 'react';
import _isString from 'lodash/isString';
import _isNumber from 'lodash/isNumber';
import _isBoolean from 'lodash/isBoolean';
import type { JsonObject } from '../json-node-child/json-node-child';

interface Props {
  children: JsonObject;
  index?: number;
}

function JsonNodeValue({ children, index }: Props) {
  if (children === null) {
    return <span className="text-alert">null</span>;
  }

  if (_isNumber(children)) {
    return <span className="text-node-number">{children}</span>;
  }

  if (_isString(children)) {
    return (
      <span className="text-node-value">
        {index && index >= 0 && `${index}: `}"{children}"
      </span>
    );
  }

  if (_isBoolean(children) || _isBoolean(children)) {
    return children ? (
      <span className="text-node-value">{children.toString()}</span>
    ) : (
      <span className="text-alert">{children.toString()}</span>
    );
  }

  return null;
}

export default JsonNodeValue;

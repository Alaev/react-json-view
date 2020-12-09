import React, { ReactChild } from 'react';
import _isString from 'lodash/isString';
import _isNumber from 'lodash/isNumber';
import _isBoolean from 'lodash/isBoolean';

interface Props {
  children: ReactChild;
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
      <div className="text-node-value children-in-array">
        {index && index >= 0 && `${index}: `}"{children}"
      </div>
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

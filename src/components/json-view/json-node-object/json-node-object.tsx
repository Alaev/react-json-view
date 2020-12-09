import React, { ReactChild } from 'react';
import JsonNodeChild from '../json-node-child/json-node-child';
import Node from '../json-node/json-node';
interface Props {
  children: ReactChild;
}
function JsonNodeObject({ children }: Props) {
  return (
    <>
      {Object.entries(children).map(([key, value]) => {
        return (
          <div key={key}>
            <Node jsonKey={key}>
              <JsonNodeChild>{value}</JsonNodeChild>
            </Node>
          </div>
        );
      })}
    </>
  );
}

export default JsonNodeObject;

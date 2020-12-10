import React, { ReactChild } from 'react';
import JsonNodeChild from '../json-node-child/json-node-child';
import JsonNode from '../json-node/json-node';
interface Props {
  children: ReactChild | object;
}
function JsonNodeObject({ children }: Props) {
  return (
    <>
      {Object.entries(children).map(([key, value]) => {
        return (
          <div key={key}>
            <JsonNode jsonKey={key}>
              <JsonNodeChild>{value}</JsonNodeChild>
            </JsonNode>
          </div>
        );
      })}
    </>
  );
}

export default JsonNodeObject;

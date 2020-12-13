import React, { ReactChild } from 'react';
import JsonNodeChild, { JsonObject } from '../json-node-child/json-node-child';
import JsonNode from '../json-node/json-node';
interface Props {
  children: JsonObject;
}
export default React.memo(function JsonNodeObject({ children }: Props) {
  return (
    <>
      {Object.entries(children!).map(([key, value]: [string, any]) => {
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
});

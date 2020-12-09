import React, { useState } from 'react';
import JsonNodeObject from './json-node-object/json-node-object';
import { isObject } from '../../utils/utils';
import FetchUrl from '../fetch-url/fetch-url';

import './json-view.css';

function JsonView() {
  const [data, setData] = useState(null);
  const [url, setUrl] = useState('');

  async function fetchData() {
    const response = await fetch(url);
    const json = await response.json();
    setData(json);
  }

  const onClick = () => {
    fetchData();
  };

  return (
    <div className="json-view-container">
      <FetchUrl
        label="Enter Url:"
        onClick={onClick}
        value={url}
        handleChange={setUrl}
      />
      {isObject(data) ? <JsonNodeObject>{data}</JsonNodeObject> : null}
    </div>
  );
}

export default JsonView;

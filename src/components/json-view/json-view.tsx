import React, { useState } from 'react';
import _isObject from 'lodash/isObject';
import JsonNodeObject from './json-node-object/json-node-object';
import FetchUrl from '../fetch-url/fetch-url';
import useFetch from '../../hooks/useFetch';

import './json-view.css';

function JsonView() {
  const { loading, data, updateUrl } = useFetch('');
  const [url, setUrl] = useState('');

  const onClick = () => updateUrl(url);

  return (
    <div className="json-view-container">
      <FetchUrl
        label="Enter Url:"
        onClick={onClick}
        value={url}
        handleChange={setUrl}
      />
      {loading ? <div>Loading...</div> : null}
      {_isObject(data) ? <JsonNodeObject>{data || {}}</JsonNodeObject> : null}
    </div>
  );
}

export default JsonView;

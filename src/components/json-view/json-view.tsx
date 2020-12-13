import React, { useState } from 'react';
import _isObject from 'lodash/isObject';
import JsonNodeChild from './json-node-child/json-node-child';
import FetchUrl from '../fetch-url/fetch-url';
import useFetch from '../../hooks/useFetch';

import './json-view.css';

export default React.memo(function JsonView() {
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

      <JsonNodeChild>{data || {}}</JsonNodeChild>
    </div>
  );
});

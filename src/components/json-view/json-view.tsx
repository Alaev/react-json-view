import React, { useState } from 'react';
import FetchUrl from '../fetch-url/fetch-url';


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

      {data && console.log(data)
      }
    </div>
  );
}

export default JsonView;

import React from 'react';
import axios from 'axios';

const SavePage = () => {
  const accessToken = '';
  const headers = {
    Authorization: accessToken
  };
  const targetUrl = 'https://qiita.com/';
  const data = { url: targetUrl };
  const api = 'http://localhost:8000/api/v1/pages';

  // eslint-disable-next-line space-before-function-paren
  const savePage = async() => {
    console.log('Hello');
    const res = await axios.post(api, data, { headers: headers });
    console.log(res);
  };

  return (
    <>
      <button onClick={() => savePage()}>hello</button>
    </>
  );
};

export default SavePage;

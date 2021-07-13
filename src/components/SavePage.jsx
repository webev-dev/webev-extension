import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const SavePage = (props) => {
  const { accessToken } = props;

  const api = 'http://localhost:8000/api/v1/pages';
  const headers = { Authorization: accessToken };
  const targetUrl = 'https://qiita.com/';

  // eslint-disable-next-line space-before-function-paren
  const savePage = async() => {
    const res = await axios.post(api, { url: targetUrl }, { headers: headers });
    console.log(res);
  };

  return (
    <>
      <button onClick={() => savePage()}>hello</button>
    </>
  );
};

SavePage.propTypes = {
  accessToken: PropTypes.string.isRequired
};

export default SavePage;

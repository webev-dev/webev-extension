import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Options from './Options';

const Welcome = () => {
  const [inputAccessToken, setInputAccessToken] = useState('');
  const [updateButtonPushed, setUpdateButtonPushed] = useState(false);

  const handleChange = (event) => {
    setInputAccessToken(event.target.value);
  };

  const handleSubmit = () => {
    // TODO: accessToken を保存する処理をかく
    setUpdateButtonPushed(true);
  };

  return (
    <>
      {!updateButtonPushed && (
        <>
          <p>Welcome Webev!!</p>
          <a href="https://www.webev.cloud/ja" target="_blank" rel="noreferrer">https://www.webev.cloud/ja</a>
          <form onSubmit={handleSubmit}>
            <label>
              accessToken
              <input type="text" value={inputAccessToken} onChange={(e) => { handleChange(e); }} />
            </label>
            <input type="submit" value="更新" />
          </form>
        </>
      )}

      {updateButtonPushed && (
        <Options />
      )}
    </>
  );
};

export default Welcome;

import React, { useState } from 'react';

import Settings from './Settings';

const Welcome = () => {
  const [apiTokenForExtension, setApiTokenForExtension] = useState('');
  const [updateButtonClicked, setUpdateButtonClicked] = useState(false);

  const handleChange = (event) => {
    setApiTokenForExtension(event.target.value);
  };

  const onClickSaveAccessTokenButton = () => {
    chrome.storage.local.set({ apiTokenForExtension });
    setUpdateButtonClicked(true);
  };

  return (
    <>
      {!updateButtonClicked && (
        <>
          <p>Welcome Webev!!</p>
          <a href="https://www.webev.cloud/ja" target="_blank" rel="noreferrer">https://www.webev.cloud/ja</a>
          <form onSubmit={onClickSaveAccessTokenButton}>
            <label>
              accessToken
              <input type="text" value={setApiTokenForExtension} onChange={(e) => { handleChange(e); }} />
            </label>
            <input type="submit" value="更新" />
          </form>
        </>
      )}

      {updateButtonClicked && (
        <Settings />
      )}
    </>
  );
};

export default Welcome;

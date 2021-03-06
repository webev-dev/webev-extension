import React, { useState } from 'react';

import Settings from './Settings';

const Welcome = () => {
  const [apiTokenForExtension, setApiTokenForExtension] = useState('');
  const [updateButtonClicked, setUpdateButtonClicked] = useState(false);

  const onClickSaveAccessTokenButton = (e) => {
    e.preventDefault();
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
              <input type="text" value={apiTokenForExtension} onChange={(e) => { setApiTokenForExtension(e.target.value); }} />
            </label>
            <button type="submit">
              更新
            </button>
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

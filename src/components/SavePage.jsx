import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import Settings from './Settings';

const api = process.env.REACT_APP_API;

const SavePage = (props) => {
  const { apiTokenForExtension } = props;
  const [saveStatusMessage, setSaveStatusMessage] = useState('saving...');
  const [openSettingsButtonClicked, setOpenSettingsButtonClicked] = useState(false);

  const getCurrentUrl = () => {
    return new Promise((resolve) => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        resolve(tabs[0].url);
      });
    });
  };

  useEffect(async() => {
    try {
      const currentUrl = await getCurrentUrl();
      await axios.post(`${api}/api/v1/pages`, { url: currentUrl, apiTokenForExtension });
      setSaveStatusMessage('Successfully saved!!');
    } catch (err) {
      console.log(err);
      setSaveStatusMessage('Failed to save!!');
    }
  }, []);

  return (
    <>
      {!openSettingsButtonClicked && (
        <>
          <p>{saveStatusMessage}</p>
          <button onClick={() => setOpenSettingsButtonClicked(true)}>オプション</button>
        </>
      )}
      {openSettingsButtonClicked && (
        <Settings />
      )}
    </>
  );
};

SavePage.propTypes = {
  apiTokenForExtension: PropTypes.string.isRequired
};

export default SavePage;

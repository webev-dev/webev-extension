import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const SavePage = (props) => {
  const { accessToken } = props;
  const [saveStatusMessage, setSaveStatusMessage] = useState('saving...');

  const api = 'http://localhost:8000/api/v1/pages';
  const headers = { Authorization: accessToken };

  const getCurrentUrl = () => {
    return new Promise((resolve) => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        console.log(tabs[0]);
        resolve(tabs[0].url);
      });
    });
  };

  useEffect(async() => {
    const currentUrl = await getCurrentUrl();

    try {
      await axios.post(api, { url: currentUrl }, { headers: headers });
      setSaveStatusMessage('Successfully saved!!');
    } catch (err) {
      console.log(err);
      setSaveStatusMessage('Failed to save!!');
    }
  }, []);

  return (
    <p>{saveStatusMessage}</p>
  );
};

SavePage.propTypes = {
  accessToken: PropTypes.string.isRequired
};

export default SavePage;

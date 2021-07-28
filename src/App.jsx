import React, { useState, useEffect } from 'react';

import Welcome from './components/Welcome';
import SavePage from './components/SavePage';

const App = () => {
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    chrome.storage.local.get('accessToken', (result) => {
      if (result.accessToken) {
        setAccessToken(result.accessToken);
      }
    });
  }, []);

  return (
    <div className="app-body">

      {accessToken == null && (
        <Welcome />
      )}

      {accessToken != null && (
        <SavePage accessToken={accessToken} />
      )}
    </div>
  );
};

export default App;

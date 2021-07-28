import React, { useState, useEffect } from 'react';

import Welcome from './components/Welcome';
import SavePage from './components/SavePage';

const App = () => {
  const [apiTokenForExtension, setApiTokenForExtension] = useState(null);

  useEffect(() => {
    chrome.storage.local.get('apiTokenForExtension', (result) => {
      if (result.apiTokenForExtension) {
        setApiTokenForExtension(result.apiTokenForExtension);
      }
    });
  }, []);

  return (
    <div className="app-body">

      {apiTokenForExtension == null && (
        <Welcome />
      )}

      {apiTokenForExtension != null && (
        <SavePage apiTokenForExtension={apiTokenForExtension} />
      )}
    </div>
  );
};

export default App;

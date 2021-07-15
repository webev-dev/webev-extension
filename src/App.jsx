import { React, useState, useEffect } from 'react';

import Welcome from './components/Welcome';
import SavePage from './components/SavePage';

const App = () => {
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    // TODO: accessToken を取得する処理を書く
    setAccessToken();
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

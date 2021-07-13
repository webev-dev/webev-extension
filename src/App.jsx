import React from 'react';

import Welcome from './components/Welcome';
import SavePage from './components/SavePage';

const App = () => {
  return (
    <div className="app-body">
      <Welcome />
      <SavePage />
    </div>
  );
};

export default App;

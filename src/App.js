import React from 'react';
import Website from './Website';
import { GlobalStyles } from '@mui/material';

function App() {

  const homePageStyles = (
    <GlobalStyles
      styles={{
        body: { backgroundColor: 'white' },
        '.MuiTypography-root': {
          color: 'black',
        },
      }}
    />
  );

  return (
    <div className="App">
      <React.Fragment>
      {homePageStyles}
          <Website/>   
      </React.Fragment>
    </div>
  );
}

export default App;

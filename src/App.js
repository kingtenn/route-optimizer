import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import { Box, CssBaseline } from '@mui/material';
import Header from './components/Header';
import RoutePanel from './components/RoutePanel';
import MapView from './components/MapView';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#ff4081',
    },
    background: {
      default: '#f5f5f5',
    },
  },
});

function App() {
  const [stops, setStops] = useState([]);
  const [optimizedRoute, setOptimizedRoute] = useState(null);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <Header />
        <Box sx={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
          <RoutePanel 
            stops={stops} 
            setStops={setStops}
            optimizedRoute={optimizedRoute}
            setOptimizedRoute={setOptimizedRoute}
          />
          <MapView 
            stops={stops}
            optimizedRoute={optimizedRoute}
          />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;

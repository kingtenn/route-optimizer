import React from 'react';
import { 
  Paper, 
  Box, 
  Typography, 
  List, 
  ListItem, 
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Button,
  TextField
} from '@mui/material';
import { DragHandle, Delete, Add } from '@mui/icons-material';

function RoutePanel({ stops, setStops, optimizedRoute, setOptimizedRoute }) {
  const handleAddStop = () => {
    setStops([...stops, { 
      id: `stop-${stops.length}`,
      address: '',
      coordinates: null
    }]);
  };

  const handleDeleteStop = (index) => {
    const newStops = stops.filter((_, i) => i !== index);
    setStops(newStops);
  };

  const handleAddressChange = (index, value) => {
    const newStops = [...stops];
    newStops[index].address = value;
    setStops(newStops);
  };

  const handleOptimize = () => {
    setOptimizedRoute([...stops].sort((a, b) => a.address.localeCompare(b.address)));
  };

  return (
    <Paper sx={{ width: 400, overflow: 'auto', p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Route Stops
      </Typography>
      
      <List>
        {stops.map((stop, index) => (
          <ListItem key={stop.id} sx={{ mb: 1 }}>
            <DragHandle sx={{ mr: 2, cursor: 'grab' }} />
            <TextField
              fullWidth
              size="small"
              placeholder="Enter address"
              value={stop.address}
              onChange={(e) => handleAddressChange(index, e.target.value)}
            />
            <IconButton 
              edge="end" 
              onClick={() => handleDeleteStop(index)}
              sx={{ ml: 1 }}
            >
              <Delete />
            </IconButton>
          </ListItem>
        ))}
      </List>

      <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
        <Button
          variant="outlined"
          startIcon={<Add />}
          onClick={handleAddStop}
        >
          Add Stop
        </Button>
        <Button
          variant="contained"
          onClick={handleOptimize}
          disabled={stops.length < 2}
        >
          Optimize Route
        </Button>
      </Box>
    </Paper>
  );
}

export default RoutePanel;

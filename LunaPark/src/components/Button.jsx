import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';

 function Button() {
  return (
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
      <Button size="sm">Small</Button>
    </Box>
  );
}
export default Button
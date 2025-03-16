import * as React from 'react';
import Box from '@mui/material/Box';

export default function CustomLogo(props: any) {
  return (
    <Box
      component="img"
      src="./TrieHard-Logo.png" // Make sure to place `logo.png` in `public/` directory
      alt="My Logo"
      sx={{ width: 64, height: 64, ...props.sx }}
    />
  );
}

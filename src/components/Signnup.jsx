// import { Typography } from '@mui/material'
// import React from 'react'

// const Signnup = () => {
//   return (
//     <div>
//       <Typography variant="h4">Signup Page</Typography>
//     </div>
//   )
// }

// export default Signnup
import { TextField, Button, Typography, Box } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';

const Signnup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/signup', {
        email,
        password,
      });
      alert(res.data.message);
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h5">Sign Up</Typography>
      <TextField label="Email" fullWidth margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} />
      <TextField label="Password" fullWidth type="password" margin="normal" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button variant="contained" onClick={handleSignup}>Sign Up</Button>
    </Box>
  );
};

export default Signnup;
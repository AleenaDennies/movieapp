// import React from 'react';
// import { Box, Paper, TextField, Typography, Button, Link } from '@mui/material';

// const Login = () => {
//   return (
//     <div style={{ display: 'flex', justifyContent: 'center', marginTop: '80px' }}>
//       <Box component={Paper} elevation={3} style={{ padding: 24, borderRadius: 12, minWidth: 300, textAlign: 'center' }}>
//         <Typography variant="h5" gutterBottom>
//           Login to Movie App
//         </Typography>
        
//         <TextField
//           fullWidth
//           variant="outlined"
//           label="Email"
//           color="primary"
//           margin="normal"
//         />
//         <TextField
//           fullWidth
//           variant="outlined"
//           label="Password"
//           type="password"
//           color="primary"
//           margin="normal"
//         />

//         <Button
//           variant="contained"
//           fullWidth
//           sx={{
//             mt: 2,
//             backgroundColor: '#1976d2',
//             '&:hover': { backgroundColor: '#115293' }
//           }}
//         >
//           LOGIN
//         </Button>

//         <Typography variant="body2" sx={{ mt: 2 }}>
//           <Link href="#" underline="always" sx={{ color: '#1976d2' }}>
//             Forgot Password?
//           </Link>
//         </Typography>

//         <Typography variant="body2" sx={{ mt: 2 }}>
//           Don’t have an account?{' '}
//           <Link href="/signup" underline="always" sx={{ color: '#1976d2' }}>
//             Sign up here
//           </Link>
//         </Typography>
//       </Box>
//     </div>
//   );
// };
import { TextField, Button, Typography, Box } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';

const Loginn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', {
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
      <Typography variant="h5">Login</Typography>
      <TextField label="Email" fullWidth margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} />
      <TextField label="Password" fullWidth type="password" margin="normal" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button variant="contained" onClick={handleLogin}>Login</Button>
    </Box>
  );
};

export default Loginn;

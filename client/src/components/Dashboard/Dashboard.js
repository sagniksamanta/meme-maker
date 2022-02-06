import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FileBase64 from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { submitMeme, getmemeData } from '../actions/memeFile';
import CircularProgress from '@mui/material/CircularProgress';


const Copyright = () => {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <a href="https://github.com/Shashank1306s">
        Shashank Singh
      </a>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();
const initialData = { file: '', id: '' };
const Dashboard = () => {

  const [data, setData] = useState(initialData);
  const dispatch = useDispatch();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const MemeData = useSelector((state) => state.memeReducer);
  const images = MemeData[0]?.memeData;
  console.log(images);
  
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('profile')));
    if (user.result._id)
      dispatch(getmemeData(user.result._id));
  }, [dispatch]);

  const handleSubmit = () => {
    dispatch(submitMeme(data));
    setData({
      file: '', id: ''
    });
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Add more meme to your Dashboard.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              {/* add a functionality to upload a picture */}
              <FileBase64
                type="file"
                multiple={false}
                onDone={({ base64 }) => setData({ ...data, id: user.result._id, file: base64 })}
              />
              <Button variant="contained" onClick={handleSubmit}>Upload</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}

          {
            !images ? (
              <Box sx={{ display: 'flex' }}>
                <CircularProgress />
              </Box>
            ) : images.length === 0 ? <h1>No meme exists..Please add or upload to see memes in your dashboard</h1> : (
              <Grid container spacing={4}>
                {images.map((card) => (
                  <Grid item key={Math.random()} xs={12} sm={6} md={4}>
                    <Card
                      sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                    >
                      <CardMedia
                        component="img"
                        sx={{
                          // 16:9
                          pt: '56.25%',
                        }}
                        image={card}
                        alt="random"
                      />
                    </Card>
                  </Grid>
                ))}
              </Grid>
            )
          }
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Meme
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}

export default Dashboard;
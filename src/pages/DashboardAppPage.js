import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async';

// @mui
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { getChannels } from '../services/channels';

// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const [rows, setRows] = useState([]);

  const getRows = async () => {
    const resp = await getChannels();
    setRows(resp);
  }

  useEffect(() => {
    getRows();
  }, []);

  return (
    <>
      <Helmet>
        <title> Dashboard </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back
        </Typography>

        <Grid container spacing={1}>
          {
            rows && rows.map(({ id, image, name, type }) => (
              <Grid key={id} item xs={12} md={6} lg={3}>
                <Card sx={{ maxWidth: 200 }}>
                  <CardMedia
                    sx={{ height: 120 }}
                    image={image}
                    title={name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {type}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      fullWidth
                      variant="contained"
                      size="small"
                      startIcon={<VisibilityIcon />}
                    >
                      Watch
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))
          }


        </Grid>
      </Container>
    </>
  );
}

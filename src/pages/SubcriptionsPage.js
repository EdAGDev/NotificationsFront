import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async';
// @mui
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { getTypesChannels, updateSubcriptions } from '../services/channels';

// ----------------------------------------------------------------------

export default function SubcriptionsPage() {
  const [rows, setRows] = useState();

  const handleChange = async (e, id) => {
    const values = {
      id,
      status: e.target.checked
    };

    await updateSubcriptions(values);
    getRows();
  };

  const getRows = async () => {
    const resp = await getTypesChannels();
    setRows(resp);
  }

  useEffect(() => {
    getRows();
  }, []);

  return (
    <>
      <Helmet>
        <title> Subcriptions </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Types of channels
        </Typography>

        <Grid container spacing={1}>

          {rows &&
            rows.map(({ id, name, image, status }) => (
              <Grid key={id} item xs={12} md={6} lg={4}>
                <Card sx={{ maxWidth: 345 }}>
                  <Grid container spacing={1}>
                    <Grid item xs={2} md={2} lg={2}>
                      <Checkbox
                        icon={<FavoriteBorder />}
                        checked={status}
                        checkedIcon={<Favorite />}
                        onChange={(e) => handleChange(e, id)}
                      />
                    </Grid>
                    <Grid item xs={10} md={10} lg={10}>
                      <Typography variant="h4" component="div">
                        {name}
                      </Typography>
                    </Grid>
                  </Grid>

                  <CardMedia
                    component="img"
                    height="194"
                    image={image}
                    alt={name}
                  />
                </Card>
              </Grid>
            ))}

        </Grid>
      </Container>
    </>
  );
}

import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import axios from "axios";
import { useParams } from "react-router-dom";

const API = process.env.REACT_APP_API_KEY;
const IMG_API = "http://image.tmdb.org/t/p/w500/";

export default function MovieDetail() {
  let params = useParams();
  const [detail, setDetail] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=${API}&language=en-US`
      )
      .then((response) => {
        console.log(response.data);
        setDetail(response.data);
      });
  }, []);
  return (
    <div>
      <Container sx={{ py: 8}} maxWidth="md">
        <Grid container spacing={3}>
          <Grid item xs={4} sm={6} md={6}>
            <Card
            >
              <CardMedia
                component="img"
                image={IMG_API + detail.poster_path}
                alt="title"
              />
            </Card>
          </Grid>
          <Grid item xs={8} sm={6} md={6}>
            <Card sx={{ maxWidth: 345 }} >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2" display="inline" align="right">
                  {detail.title}
                </Typography>
                <Typography>
                  {detail.overview}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

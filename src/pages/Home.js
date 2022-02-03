import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "../component/MovieCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

const API = process.env.REACT_APP_API_KEY;

export default function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API}&language=en-US&page=1`
      )
      .then((response) => {
        console.log(response.data.results);
        setMovies(response.data.results);
      });
  }, []);

  return (
    <div>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          {movies.map((movie) => {
            return (
              <Grid item xs={12} sm={6} md={4}>
                <MovieCard key={movie.id} {...movie} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
}

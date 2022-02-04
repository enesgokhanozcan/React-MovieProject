import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";

export default function MovieDetail() {
  return (
    <div>
      <Container sx={{ py: 8}} maxWidth="md">
        <Grid container spacing={3}>
          <Grid item xs={4} sm={6} md={6}>
            <Card
            >
              <CardMedia
                component="img"
                image="https://source.unsplash.com/random"
                alt="title"
              />
            </Card>
          </Grid>
          <Grid item xs={8} sm={6} md={6}>
            <Card sx={{ maxWidth: 345 }} >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2" display="inline" align="right">
                  Movie Detail
                </Typography>
                <Typography>
                If you prefer to design for a fixed set of sizes instead of trying to accommodate a fully fluid viewport, you can set the fixed prop. The max-width matches the min-width of the current breakpoint.
                </Typography>
                <Typography>
                If you prefer to design for a fixed set of sizes instead of trying to accommodate a fully fluid viewport, you can set the fixed prop. The max-width matches the min-width of the current breakpoint.
                </Typography>
                <Typography>
                If you prefer to design for a fixed set of sizes instead of trying to accommodate a fully fluid viewport, you can set the fixed prop. The max-width matches the min-width of the current breakpoint.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

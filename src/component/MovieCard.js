import React from "react";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import { Link } from "@mui/material";

const IMG_API = "http://image.tmdb.org/t/p/w500/";

export default function MovieCard({
  title,
  overview,
  vote_average,
  poster_path,
}) {
  return (
    <div>
      <Card>
        <CardMedia component="img" image={IMG_API + poster_path} alt="title" />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography
            overflow="hidden"
            whiteSpace="pre-line"
            textOverflow="ellipsis"
            height={95}
            gutterBottom
            variant="h5"
            component="h2"
          >
            {title}
          </Typography>
          <Typography
            overflow="hidden"
            whiteSpace="pre-line"
            textOverflow="ellipsis"
            height={70}
          >
            {overview}
          </Typography>
          <Link size="small">read more</Link>
        </CardContent>
        <CardActions>
          <Button size="small">View</Button>
          <Button size="small">Edit</Button>
        </CardActions>
      </Card>
    </div>
  );
}

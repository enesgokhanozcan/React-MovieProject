import React from "react";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import { Link } from "@mui/material";
import { makeStyles } from "@mui/styles";

const IMG_API = "http://image.tmdb.org/t/p/w500/";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    textAlign: "center",
  },
});
export default function MovieCard({
  title,
  overview,
  vote_average,
  poster_path,
}) {
  const classes = useStyles();
  return (
    <div>
      <Card>
        <CardMedia
          component="img"
          image={IMG_API + poster_path}
          alt="title"
          height="450"
        />
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
          <Link href="">read more</Link>
        </CardContent>
        <CardActions>
          <Typography className={classes.root}>Rate:{vote_average}</Typography>
        </CardActions>
      </Card>
    </div>
  );
}

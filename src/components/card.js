import React from "react";
// import { Link } from "react-router-dom";
import Loader from "../components/spiner";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { Grid } from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 700,
  },
  media: {
    height: 70,
  },
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px",
  },
});

const CardMovie = ({ moviesData, loading }) => {
  const classes = useStyles();
  if (loading) return <Loader />;
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid container justify="center" spacing={4}>
        {moviesData?.map((item, idx) => (
          <Grid key={idx} item xs={12} sm={4} md={4} justify="center">
            <Card key={idx}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://milenyo.net/wp-content/uploads/2020/05/netflix-n-logo-png.png"
                  title={item?.name}
                  alt={item?.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Title {item?.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Genre {item?.genre}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  size="small"
                  color="default"
                  href={`/actor/${item?.actor?.id}`}
                >
                  {item?.actor?.name}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      {/* //{" "} */}
    </Grid>
  );
};

export default CardMovie;

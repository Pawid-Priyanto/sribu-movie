import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },
}));

const Spiner = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress size={90} color="secondary" />
    </div>
  );
};
export default Spiner;

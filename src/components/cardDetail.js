import React from "react";
import Loader from "../components/spiner";
import { Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Card";
import CardContent from "@material-ui/core/Card";
import Button from "@material-ui/core/Card";
import CardActions from "@material-ui/core/Card";
import { useHistory } from "react-router-dom";
const CardDetail = ({ actorData, loading }) => {
  const history = useHistory();
  if (loading) return <Loader />;
  return (
    <div style={{ backgroundColor: "black" }}>
      <Grid item xs={3} align="center">
        <Card
          style={{
            minWidth: 200,
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {actorData?.name}
          <hr />
          Movie Title
          <CardContent>
            <Typography variant="h6" component="h2">
              {actorData?.movies?.map((item, idx) => (
                <div style={{ textAlign: "center" }} key={idx}>
                  {idx + 1}. {item?.name}
                </div>
              ))}
            </Typography>
            <CardActions>
              <Button
                style={{ cursor: "progress" }}
                size="small"
                color="secondary"
                onClick={() => history.goBack()}
              >
                Back To Home
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
};

export default CardDetail;

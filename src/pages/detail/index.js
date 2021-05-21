import React from "react";
import { useParams } from "react-router-dom";
import { GET_ACTOR } from "../../queries";
import { useQuery } from "@apollo/client";
import CardDetail from "../../components/cardDetail";
import { Grid } from "@material-ui/core";

const Detail = () => {
  const { id } = useParams();
  const { loading, data: actorData } = useQuery(GET_ACTOR, {
    variables: {
      id: id,
    },
  });

  return (
    <>
      <Grid
        container
        spacing={10}
        justify="center"
        style={{ minHeight: "100vh", maxWidth: "100%" }}
      >
        <CardDetail actorData={actorData?.actor} loading={loading} />
      </Grid>
    </>
  );
};

export default Detail;

import React from "react";
import { GET_MOVIES } from "../../queries";
import { useQuery } from "@apollo/client";
import Card from "../../components/card";
import Container from "@material-ui/core/Container";

const Home = () => {
  const { loading, data: moviesData } = useQuery(GET_MOVIES);

  return (
    <Container>
      <h4>Welcome To Netflix</h4>
      <Card moviesData={moviesData?.movies} loading={loading} />
    </Container>
  );
};
export default Home;

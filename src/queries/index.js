import { gql } from "@apollo/client";

export const GET_MOVIES = gql`
  query getMovies {
    movies {
      id
      name
      genre
      actor {
        id
        name
      }
    }
  }
`;

export const GET_ACTOR = gql`
  query actor($id: ID) {
    actor(id: $id) {
      id
      name
      movies {
        name
      }
    }
  }
`;

import { gql } from '@apollo/client';

const GET_TMEMORANDUMS = gql`
  query getTMemorandums {
    tmemorandums {
      id
      descripcion
      estado
      concurrencia
    }
  }
`;

const GET_TMEMORANDUM = gql`
  query getTMemorandum($id: ID!) {
    tmemorandum(id: $id) {
      id
      descripcion
      estado
      concurrencia
    }
  }
`;

export { GET_TMEMORANDUMS, GET_TMEMORANDUM };
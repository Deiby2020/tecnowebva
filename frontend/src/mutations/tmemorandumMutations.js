import { gql } from '@apollo/client';

const ADD_TMEMORANDUM = gql`
  mutation AddTMemorandum(
    $descripcion: String!
    $estado: TMemorandumStatus!
    $concurrencia: String!
  ) {
    addTMemorandum(
      descripcion: $descripcion
      estado: $estado
      concurrencia: $concurrencia
    ) {
      id
      descripcion
      estado
      concurrencia
    }
  }
`;

const DELETE_TMEMORANDUM = gql`
  mutation DeleteTMemorandum($id: ID!) {
    deleteTMemorandum(id: $id) {
      id
    }
  }
`;

const UPDATE_TMEMORANDUM = gql`
  mutation UpdateTMemorandum(
    $id: ID!
    $descripcion: String!
    $estado: TMemorandumStatusUpdate!
    $concurrencia: String!
  ) {
    updateTMemorandum(
      id: $id
      descripcion: $descripcion
      estado: $estado
      concurrencia: $concurrencia
    ) {
      id
      descripcion
      estado
      concurrencia 
    }
  }
`;

export { ADD_TMEMORANDUM, DELETE_TMEMORANDUM, UPDATE_TMEMORANDUM };

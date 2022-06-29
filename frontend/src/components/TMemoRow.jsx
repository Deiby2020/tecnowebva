import { FaTrash, FaEdit } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { GET_PROJECTS } from "../queries/projectQueries";
import { DELETE_TMEMORANDUM } from "../mutations/tmemorandumMutations";
import { GET_TMEMORANDUMS } from "../queries/tmemorandumQueries";

export default function TMemoRow({ tmemorandum }) {
  const [deleteTMemorandum] = useMutation(DELETE_TMEMORANDUM, {
    variables: { id: tmemorandum.id },
    refetchQueries: [{ query: GET_TMEMORANDUMS }, { query: GET_PROJECTS }],
    // update(cache, { data: { deleteClient } }) {
    //   const { clients } = cache.readQuery({ query: GET_CLIENTS });
    //   cache.writeQuery({
    //     query: GET_CLIENTS,
    //     data: {
    //       clients: clients.filter((client) => client.id !== deleteClient.id),
    //     },
    //   });
    // },
  });

  return (
    <tr>
      <td>{tmemorandum.descripcion}</td>
      <td>{tmemorandum.estado}</td>
      <td>{tmemorandum.concurrencia}</td>
      <td>
        <div className="d-grid gap-2 d-md-flex justify-content-md-center">
        <a className="btn btn-primary btn-sm" href={`/tmemorandums/${tmemorandum.id}`}>
          <FaEdit />
        </a>
        <button className="btn btn-danger btn-sm" onClick={deleteTMemorandum}>
          <FaTrash />
        </button>
        </div>
      </td>
    </tr>
  );
}

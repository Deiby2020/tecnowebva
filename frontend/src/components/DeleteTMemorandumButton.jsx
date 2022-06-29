import { useNavigate } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import { useMutation } from '@apollo/client';
import { DELETE_TMEMORANDUM } from '../mutations/tmemorandumMutations';
import { GET_TMEMORANDUMS } from '../queries/tmemorandumQueries';

export default function DeleteTMemorandumButton({ tmemorandumId }) {
  const navigate = useNavigate();

  const [deleteTMemorandum] = useMutation(DELETE_TMEMORANDUM, {
    variables: { id: tmemorandumId },
    onCompleted: () => navigate('/'),
    refetchQueries: [{ query: GET_TMEMORANDUMS }],
  });

  return (
    <div className='d-flex mt-5 ms-auto'>
      <button className='btn btn-danger m-2' onClick={deleteTMemorandum}>
        <FaTrash className='icon' /> Eliminar
      </button>
    </div>
  );
}

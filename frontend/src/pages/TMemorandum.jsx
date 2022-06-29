import { Link, useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { useQuery } from '@apollo/client';
import { GET_TMEMORANDUM } from '../queries/tmemorandumQueries';
import DeleteTMemorandumButton from '../components/DeleteTMemorandumButton';
import EditTMemorandumForm from '../components/EditTMemorandumForm';

export default function TMemorandum() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_TMEMORANDUM, { variables: { id } });

  if (loading) return <Spinner />;
  if (error) return <p>Error al cargar</p>;

  return (
    <>
      {!loading && !error && (
        <div className='mx-auto w-75 card p-5 text-dark bg-cuaderno'>
          <Link to='/' className='btn btn-light btn-sm w-25 d-inline ms-auto'>
            Atras
          </Link>

          <h1>Tipo: {data.tmemorandum.descripcion}</h1>

          <h5 className='mt-3'>Estado del TMemorandum</h5>
          <p className='lead'>{data.tmemorandum.estado}</p>
          <hr/>
          <EditTMemorandumForm tmemorandum={data.tmemorandum} />

          <DeleteTMemorandumButton tmemorandumId={data.tmemorandum.id} />
        </div>
      )}
    </>
  );
}

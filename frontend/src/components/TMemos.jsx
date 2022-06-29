import { useQuery } from '@apollo/client';
import Spinner from './Spinner';
import { GET_TMEMORANDUMS } from '../queries/tmemorandumQueries';
import TMemoRow from './TMemoRow';

export default function TMemos() {
  const { loading, error, data } = useQuery(GET_TMEMORANDUMS);

  if (loading) return <Spinner />;
  if (error) return <p>Error al cargar la página</p>;

  return (
    <>
      {!loading && !error && (
        <table className='table table-hover table-striped table-responsive table-bordered border-5 caption-top mt-3'>
            <caption className='text-center'>
               <h3>LISTADO DE TMEMORANDUMS</h3> 
            </caption>
          <thead className='table-dark text-center'>
            <tr>
              <th>Descripción</th>
              <th>Estado</th>
              <th>Concurrencia</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.tmemorandums.map((tmemorandum) => (
              <TMemoRow key={tmemorandum.id} tmemorandum={tmemorandum} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

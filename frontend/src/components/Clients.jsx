import { useQuery } from '@apollo/client';
import ClientRow from './ClientRow';
import Spinner from './Spinner';
import { GET_CLIENTS } from '../queries/clientQueries';

export default function Clients() {
  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading) return <Spinner />;
  if (error) return <p>Algo salió mal, pronto lo resolveremos!</p>;

  return (
    <>
      {!loading && !error && (
        <table className='table table-hover table-striped table-responsive table-bordered border-5 caption-top mt-3'>
        <caption className='text-center'>
           <h3>LISTADO DE CLIENTES</h3> 
        </caption>
          <thead className='table-dark text-center'>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Telefono</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.clients.map((client) => (
              <ClientRow key={client.id} client={client} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

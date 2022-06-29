import Spinner from './Spinner';
import { useQuery } from '@apollo/client';
import { GET_TMEMORANDUMS } from '../queries/tmemorandumQueries';
import TMemorandumCard from './TMemorandumCard';

export default function TMemorandums() {
  const { loading, error, data } = useQuery(GET_TMEMORANDUMS);

  if (loading) return <Spinner />;
  if (error) return <p>Error vuelve a intentarlo!</p>;

  return (
    <>
      {data.tmemorandums.length > 0 ? (
        <div className='row mt-4'>
          {data.tmemorandums.map((tmemorandum) => (
            <TMemorandumCard key={tmemorandum.id} tmemorandum={tmemorandum} />
          ))}
        </div>
      ) : (
        <p>No TMemorandums</p>
      )}
    </>
  );
}

import { useState } from 'react';
import { FaList } from 'react-icons/fa';
import { useMutation, useQuery } from '@apollo/client';
import { ADD_TMEMORANDUM } from '../mutations/tmemorandumMutations';
import { GET_TMEMORANDUMS } from '../queries/tmemorandumQueries';

export default function AddTMemorandumModal() {
  const [descripcion, setDescripcion] = useState('');
  const [estado, setEstado] = useState('vacio');
  const [concurrencia, setConcurrencia] = useState('');

  const [addTMemorandum] = useMutation(ADD_TMEMORANDUM, {
    variables: { descripcion, estado, concurrencia },
    update(cache, { data: { addTMemorandum } }) {
      const { tmemorandums } = cache.readQuery({ query: GET_TMEMORANDUMS });
      cache.writeQuery({
        query: GET_TMEMORANDUMS,
        data: { tmemorandums: [...tmemorandums, addTMemorandum] },
      });
    },
  });
  const { loading, error } = useQuery(GET_TMEMORANDUMS);

  const onSubmit = (e) => {
    e.preventDefault();

    if (descripcion === '' || estado === '' || concurrencia === '') {
      return alert('Por favor rellene todos los campos');
    }

    addTMemorandum(descripcion, estado, concurrencia);

    setDescripcion('');
    setEstado('vacio');
    setConcurrencia('');
    console.log(e);
  };

  if (loading) return null;
  if (error) return 'Por favor rellene todos los campos';

  return (
    <>
      {!loading && !error && (
        <>
          <button
            type='button'
            className='btn btn-success'
            data-bs-toggle='modal'
            data-bs-target='#addTMemorandumModal'
          >
            <div className='d-flex align-items-center'>
              <FaList className='icon' />
              <div>Nuevo TMemorandum</div>
            </div>
          </button>

          <div
            className='modal fade'
            id='addTMemorandumModal'
            aria-labelledby='addTMemorandumModalLabel'
            aria-hidden='true'
          >
            <div className='modal-dialog'>
              <div className='modal-content'>
                <div className='modal-header'>
                  <h5 className='modal-title' id='addTMemorandumModalLabel'>
                    Nuevo TMemorandum
                  </h5>
                  <button
                    type='button'
                    className='btn-close'
                    data-bs-dismiss='modal'
                    aria-label='Close'
                  ></button>
                </div>
                <div className='modal-body'>
                  <form onSubmit={onSubmit}>
                    <div className='mb-3'>
                      <label className='form-label'>Descripción</label>
                      <input
                        type='text'
                        className='form-control'
                        id='descripcion'
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                      />
                    </div>
                    <div className='mb-3'>
                      <label className='form-label'>Estado</label>
                      <select
                        id='estado'
                        className='form-select'
                        value={estado}
                        onChange={(e) => setEstado(e.target.value)}
                      >
                        <option value='vacio'>Seleccione una opción!</option>
                        <option value='activo'>Activo</option>
                        <option value='incativo'>Inactivo</option>
                      </select>
                    </div>

                    <div className='mb-3'>
                      <label className='form-label'>Concurrencia</label>
                      <input
                        type='text'
                        className='form-control'
                        id='concurrencia'
                        value={concurrencia}
                        onChange={(e) => setConcurrencia(e.target.value)}
                      />
                    </div>
                    <div className='modal-footer'>
                    <button
                      type='submit'
                      data-bs-dismiss='modal'
                      className='btn btn-primary'
                    >
                      Agregar
                    </button>
                    <button
                    type='button'
                    className='btn btn-danger'
                    data-bs-dismiss='modal'
                    aria-label='Close'
                  >Cancelar</button>
                  </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

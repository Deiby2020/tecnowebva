import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_TMEMORANDUM } from '../mutations/tmemorandumMutations';
import { GET_TMEMORANDUM } from '../queries/tmemorandumQueries';

export default function EditTMemorandumForm({ tmemorandum }) {
  const [descripcion, setDescripcion] = useState(tmemorandum.descripcion);
  const [estado, setEstado] = useState('');
  const [concurrencia, setConcurrencia] = useState(tmemorandum.concurrencia);

  const [updateTMemorandum] = useMutation(UPDATE_TMEMORANDUM, {
    variables: { id: tmemorandum.id, descripcion, estado, concurrencia },
    refetchQueries: [{ query: GET_TMEMORANDUM, variables: { id: tmemorandum.id } }],
  });

  const onSubmit = (e) => {
    e.preventDefault();

    if (!descripcion || !estado || !concurrencia) {
      return alert('Por favor no olvide llenar los campos.');
    }
    updateTMemorandum(descripcion, estado, concurrencia);
  };

  return (
    <div className='mt-5'>
      <h3 className='text-center fs-3'>Actualizar Detalles</h3>
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
            <option value='inactivo'>Inactivo</option>
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

        <button type='submit' className='btn btn-primary'>
          Actualizar
        </button>
      </form>
    </div>
  );
}

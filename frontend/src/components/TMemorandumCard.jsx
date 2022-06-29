export default function TMemorandumCard({ tmemorandum }) {
    return (
      <div className='borber col-md-6'>
        <div className='card mb-3 bg-cuaderno border-dark'>
          <div className='card-body'>
            <div className='d-flex justify-content-between align-items-center'>
              <h5 className='card-title'>{tmemorandum.descripcion}</h5>
  
              <a className='btn btn-outline-secondary text-dark' href={`/tmemorandums/${tmemorandum.id}`}>
                Ver
              </a>
            </div>
            <p className='small'>
              Estado: <strong>{tmemorandum.estado}</strong>
            </p>
          </div>
        </div>
      </div>
    );
  }
  
const mongoose = require('mongoose');

const TMemorandumSchema = new mongoose.Schema({
  descripcion: {
    type: String,
  },
  estado: {
    type: String,
    enum: ['No Seleccionado', 'Activo', 'Inactivo'],
  },
  concurrencia: {
    type: String,
  },
});

module.exports = mongoose.model('TMemorandum', TMemorandumSchema);
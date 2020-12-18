import moment from "moment";

 function load() {
  const pacientesStr = localStorage.getItem("pacientes");
  if (pacientesStr) {
    return JSON.parse(pacientesStr);
  }
  return [];
}

function save(pacientes) {
  localStorage.setItem("pacientes", JSON.stringify(pacientes));
}

export function listPaciente() {
  return load();
}

export function addPaciente(paciente) {
  const pacientes = load();                    

  paciente.id =  pacientes.length + 1;
  paciente.fecha = moment().unix();
  paciente.estado = "activo";

  pacientes.push(paciente);
  save(pacientes);
}

export function get(id) {
  const pacientes = load();
  const filtered = pacientes.filter(i => i.id === id);
  if (filtered.length > 0) return filtered[0];
  return null;
}

export function close(id) {
  const pacientes = load();
  const filtered = pacientes.filter(i => i.id === id);
  if (filtered.length > 0) {
    const paciente = filtered[0];
    paciente.estado = 'suspendido';
    paciente.modificado = moment().unix();
    save(pacientes);
  }
}

export function reopen(id) {
  const pacientes= load();
  const filtered = pacientes.filter(i => i.id === id);
  if (filtered.length > 0) {
    const paciente = filtered[0];
    paciente.estado = 'activo';
    paciente.modificado = moment().unix();
    save(pacientes);
  }
}

export const sampleData = [
    {
      id: 1,
      titulo: "Arreglar error al dar de alta",
      contenido: "El error se da en el ABM de clientes",
      estado: "open",
      usuario: "aceccoli",
      fecha: 1579263883,
      modificado: null
    },
    {
      id: 2,
      titulo: "ABM Productos",
      contenido: "Desarrollar el ABM de productos",
      estado: "closed",
      usuario: "aceccoli",
      fecha: 1579263883,
      modificado: 1579587883
    },
    {
      id: 3,
      titulo: "Arreglar error al dar de alta",
      contenido: "El error se da en el ABM de clientes",
      estado: "open",
      usuario: "aceccoli",
      fecha: 1579458283,
      modificado: null
    },
    {
      id: 4,
      titulo: "ABM Productos",
      contenido: "Desarrollar el ABM de productos",
      estado: "closed",
      usuario: "aceccoli",
      fecha: 1579458283,
      modificado: 1579587883
    }
]
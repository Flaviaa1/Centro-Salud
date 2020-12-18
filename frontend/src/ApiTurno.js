import moment from "moment";

 function load() {
  const turnosStr = localStorage.getItem("turnos");
  if (turnosStr) {
    return JSON.parse(turnosStr);
  }
  return [];
}

function save(turnos) {
  localStorage.setItem("turnos", JSON.stringify(turnos));
}

export function listTurno() {
  return load();
}

export function addTurno(turno) {
  const turnos = load();                    

  turno.id =  turnos.length + 1;
  turno.fecha = moment().unix();
  turno.estado = "asignado";

  turnos.push(turno);
  save(turnos);
}

export function get(id) {
  const turnos = load();
  const filtered = turnos.filter(i => i.id === id);
  if (filtered.length > 0) return filtered[0];
  return null;
}

export function close(id) {
  const turnos = load();
  const filtered = turnos.filter(i => i.id === id);
  if (filtered.length > 0) {
    const turno = filtered[0];
    turno.estado = 'cancelado';
    turno.modificado = moment().unix();
    save(turnos);
  }
}

export function reopen(id) {
  const turnos= load();
  const filtered = turnos.filter(i => i.id === id);
  if (filtered.length > 0) {
    const turno = filtered[0];
    turno.estado = 'asignado';
    turno.modificado = moment().unix();
    save(turnos);
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
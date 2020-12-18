
import moment from "moment";

function load() {
 const historialesStr = localStorage.getItem("historiales");
 if (historialesStr) {
   return JSON.parse(historialesStr);
 }
 return [];
}

function save(historiales) {
 localStorage.setItem("historiales", JSON.stringify(historiales));
}

export function listHistorial() {
 return load();
}

export function addHistorial(historial) {
 const historiales = load();

 historial.id =  historiales.length + 1;
 historial.fecha = moment().unix();
 historial.estado = "open";

 historiales.push(historial);
 save(historiales);
}

export function get(id) {
 const historiales = load();
 const filtered = historiales.filter(i => i.id === id);
 if (filtered.length > 0) return filtered[0];
 return null;
}

export function close(id) {
 const historiales = load();
 const filtered = historiales.filter(i => i.id === id);
 if (filtered.length > 0) {
   const historial = filtered[0];
   historial.estado = 'closed';
   historial.modificado = moment().unix();
   save(historiales);
 }
}

export function reopen(id) {
 const historiales= load();
 const filtered = historiales.filter(i => i.id === id);
 if (filtered.length > 0) {
   const historial = filtered[0];
   historial.estado = 'open';
   historial.modificado = moment().unix();
   save(historiales);
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
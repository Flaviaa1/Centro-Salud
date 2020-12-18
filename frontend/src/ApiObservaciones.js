import moment from "moment";
function load() {
    const observacionesStr = localStorage.getItem("observaciones");
    if (observacionesStr) {
      return JSON.parse(observacionesStr);
    }
    return [];
   }
   
   function save(observaciones) {
    localStorage.setItem("observaciones", JSON.stringify(observaciones));
   }
   
   export function listObservacion() {
    return load();
   }
   
   export function addObservacion(observacion) {
    const observaciones = load();
   
    observacion.id =  observaciones.length + 1;
    observacion.fecha = moment().unix();
    observacion.estado = "open";
   
    observaciones.push(observacion);
    save(observaciones);
   }
   
   export function get(id) {
    const observaciones = load();
    const filtered = observaciones.filter(i => i.id === id);
    if (filtered.length > 0) return filtered[0];
    return null;
   }
   
   export function close(id) {
    const observaciones = load();
    const filtered = observaciones.filter(i => i.id === id);
    if (filtered.length > 0) {
      const observacion = filtered[0];
      observacion.estado = 'closed';
      observacion.modificado = moment().unix();
      save(observaciones);
    }
   }
   
   export function reopen(id) {
    const observaciones= load();
    const filtered = observaciones.filter(i => i.id === id);
    if (filtered.length > 0) {
      const observacion = filtered[0];
      observacion.estado = 'open';
      observacion.modificado = moment().unix();
      save(observaciones);
    }
   }
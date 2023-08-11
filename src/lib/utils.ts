export const serializeNonPOJOs = (obj: Object) => {
  return structuredClone(obj);
};

export const getURLImagen = (tablaID, registroId, nombreArchivo, tamano = '80x80') => {
	return `https://eventos-cs.pockethost.io/api/files/${tablaID}/${registroId}/${nombreArchivo}?thumb=${tamano}`;
};
import { NoticiaInterface, NoticiaRequestAll } from "./@types.notice";

const initialNoticiaInterface: NoticiaInterface = {
  id: 0,
  usuario_crea: '',
  fecha_crea: '',
  fecha_modifica: '',
  titulo: '',
  descripcion: '',
  coments: []
}

const initialNoticiaRequestAll: NoticiaRequestAll = {
  count: 0,
  next: null,
  previous: null,
  results: []
}

export { initialNoticiaInterface, initialNoticiaRequestAll }
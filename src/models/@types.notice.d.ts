interface Comment {
  id: number
  usuario_crea: string
  fecha_crea: string
  fecha_modifica: string
  noticia_id: string
  coment: string
}

interface NoticiaInterface {
  id: number
  usuario_crea: string
  fecha_crea: string
  fecha_modifica: string
  titulo: string
  descripcion: string
  coments: Comment[]
}

interface NoticiaForm {
  titulo: string
  descripcion: string
}

interface NoticiaRequestAll {
  count: number
  next: string | null
  previous: string | null
  results: NoticiaInterface[]
}

export {
  Comment, NoticiaInterface,
  NoticiaForm, NoticiaRequestAll
}

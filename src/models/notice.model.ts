export interface Comment {
  id: number
  usuario_crea_id: string
  fecha_crea: string
  fecha_modifica: string
  noticia_id: string
  coment: string
}

export interface NoticiaInterface {
  id: number
  usuario_crea_id: string
  fecha_crea: string
  fecha_modifica: string
  titulo: string
  descripcion: string
  comments: Comment[]
}

export interface NoticiaForm {
  titulo: string
  descripcion: string
}

export interface NoticiaRequest {
  count: number
  next: string | null
  previous: string | null
  results: NoticiaInterface[] | undefined
}
import React from 'react'
import styles from './styles/NoticeCard.module.css'
import { NoticiaInterface } from '@/models'
import { Link } from 'react-router-dom'

export interface NoticeCardInterface {
  notice: NoticiaInterface
}

const NoticeCard : React.FC<NoticeCardInterface> = ({notice}) => {
	return (
    <article className={styles.noticecard}>
      <h2>{notice.titulo}</h2>
      <p>{notice.descripcion}</p>
      <p>Número de comentarios: {notice.coments.length}</p>
      <Link to={`/notice/${notice.id}`}>Ver Noticia</Link>
    </article>
  )
}

export default NoticeCard

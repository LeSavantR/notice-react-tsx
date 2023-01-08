import React, { useEffect, useState } from 'react'
import styles from './styles/Notice.module.css'
import { useNavigate, useParams } from 'react-router-dom'
import { getNoticie } from '@/services'
import { NoticiaInterface } from '@/models'

export interface NoticeInterface {}

const Notice : React.FC<NoticeInterface> = () => {
  const [ notice, setNotice ] = useState<NoticiaInterface | undefined>()
  const [ fechaOne, setFechaOne ] = useState('')
  const [ fechaTwo, setFechaTwo ] = useState('')
  const { idNotice='' } = useParams()
  const location = useNavigate()

  useEffect(() => {
    const fetchNotice = async () => {
      const data = await getNoticie(idNotice) as NoticiaInterface
      const { fecha_crea, fecha_modifica } = data
      const fechaUno = new Date(fecha_crea)
      const fechaDos = new Date(fecha_modifica)
      setFechaOne(fechaUno.toDateString())
      setFechaTwo(fechaDos.toDateString())
      setNotice(data)
    }
    if (!idNotice) {
      location('/404')
    } else {
      fetchNotice()
    }
  }, [])
	return (
    <div className={styles.notice}>
      {!!notice && (
        <article>
          <div>
            <span>Creado: {fechaOne}</span> <br /> <span>Modificado: {fechaTwo}</span>
          </div>
          <h2>{notice.titulo}</h2>
          <p>{notice.descripcion}</p>
          {notice.coments.length > 0 && notice.coments.map((comment, index) => (
            <div key={comment.id}>
              <h3>{comment.coment}</h3>
            </div>
          ))}
        </article>
      )}
    </div>
  )
}

export default Notice

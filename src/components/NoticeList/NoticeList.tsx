import React from 'react'
import { NoticiaInterface } from '@/models'
import { NoticeCard } from '../NoticeCard'
export interface NoticeListInterface {
  title?: string
  latestNotice: NoticiaInterface[]
}

const NoticeList : React.FC<NoticeListInterface> = ({ title, latestNotice }) => {
  const heading = title ? title : 'Listado de Noticias'
  const large = latestNotice.length
	return (
    <>
      <h2>{heading}</h2>
      <div>
        {large === 0 && <p>Sin Noticias 😵‍💫 ...</p>}
        {large >= 0 && latestNotice.map((notice) => (
          <NoticeCard key={notice.id} notice={notice} />
        ))}
      </div>
    </>
  )
}

export default NoticeList

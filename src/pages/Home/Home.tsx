import { NoticeList } from '@/components';
import { NoticiaInterface, NoticiaRequest } from '@/models';
import { getAllNotices } from '@/services';
import React, { useEffect, useState } from 'react';
export interface HomeInterface {}

const Home : React.FC<HomeInterface> = () => {
  const [ allNotices, setAllNotices ] = useState<NoticiaInterface[]>([])
  const [ total, setTotal ] = useState(0)

  useEffect(() => {
    const fetching = async () => {
      const { results, count } = await getAllNotices() as NoticiaRequest
      setTotal(count)
      setAllNotices(results)
    }
    fetching()
  }, [])

  return (
    <>
      <h1>You're logged to the home page!</h1>
      <div>
        <NoticeList title={`Mis Noticias ${total}`} latestNotice={allNotices} />
      </div>
    </>
  );
};

export default Home;

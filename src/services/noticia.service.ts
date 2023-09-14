import { config } from '@/config';
import {
  ContextTypes, NoticiaForm, NoticiaInterface,
  NoticiaRequestAll, initialNoticiaInterface,
  initialNoticiaRequestAll, initialStateToken,
  noticiaLinks
} from '@/models';
import { getLocalStorageData } from '@/utilities';
import axios from 'axios';


const getAllNotices = async () => {
  const token = getLocalStorageData(
    ContextTypes.AUTHTOKEN, initialStateToken
  )
  if (token.access === '') return initialNoticiaRequestAll
  const { data } = await axios.get<NoticiaRequestAll>(noticiaLinks(), config(token))
  return data
}

const getNoticie = async (id: string) => {
  const token = getLocalStorageData(
    ContextTypes.AUTHTOKEN, initialStateToken
  )
  if (token.access === '') return initialNoticiaInterface
  const { data } = await axios.get<NoticiaInterface>(noticiaLinks(`${id}`), config(token))
  return data
}

const createNotice = async (noticie: NoticiaForm) => {
  const token = getLocalStorageData(
    ContextTypes.AUTHTOKEN, initialStateToken
  )
  if (token.access === '') return initialNoticiaInterface
  const { data } = await axios.post<NoticiaInterface>(noticiaLinks(), noticie, config(token))
  return data
}

const updateNotice = async (notice: NoticiaForm) => {
  const token = getLocalStorageData(
    ContextTypes.AUTHTOKEN, initialStateToken
  )
  if (token.access === '') return initialNoticiaInterface
  const { data } = await axios.patch<NoticiaInterface>(noticiaLinks(), notice, config(token))
  return data
}

const deleteNotice = async (id: string) => {
  const token = getLocalStorageData(
    ContextTypes.AUTHTOKEN, initialStateToken
  )
  const { status } = await axios.delete(noticiaLinks(`${id}`), config(token))
  if (status === 200) return true
  return false
}

export { getAllNotices, getNoticie, createNotice, updateNotice, deleteNotice };


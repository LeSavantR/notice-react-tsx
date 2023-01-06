import { config } from '@/config';
import { ContextTypes, NoticiaForm, NoticiaInterface, NoticiaRequest, noticiaLinks } from '@/models';
import { getLocalStorage } from '@/utilities';
import axios from 'axios';


const getAllNotices = async () => {
  const token = getLocalStorage(ContextTypes.AUTHUSER)
  if (!token) return []
  const { data } = await axios.get(noticiaLinks(), config(token))
  return data as NoticiaRequest
}

const getNoticie = async ({ id }: NoticiaInterface) => {
  const token = getLocalStorage(ContextTypes.AUTHUSER)
  if (!token) return []
  const { data } = await axios.get(noticiaLinks(`${id}`), config(token))
  return data as NoticiaInterface
}

const createNotice = async ( noticie: NoticiaForm) => {
  const token = getLocalStorage(ContextTypes.AUTHUSER)
  if (!token) return []
  const { data } = await axios.post(noticiaLinks(), noticie, config(token))
  return data as NoticiaInterface
}

const updateNotice = async ( notice: NoticiaForm) => {
  const token = getLocalStorage(ContextTypes.AUTHUSER)
  if (!token) return []
  const { data } = await axios.patch(noticiaLinks(), notice, config(token))
  return data as NoticiaInterface
}

const deleteNotice = async ({ id }: NoticiaInterface) => {
  const token = getLocalStorage(ContextTypes.AUTHUSER)
  if (!token) return []
  const { status } = await axios.delete(noticiaLinks(`${id}`), config(token))
  if (status === 200) return true
  return false
}

export { getAllNotices, getNoticie, createNotice, updateNotice, deleteNotice };


import axios from 'axios';
import { ContextTypes } from '@/models/context';
import { NoticiaForm, NoticiaRequest } from '@/models/notice.model';
import { noticiaLinks } from '@/models/links';
import { NoticiaInterface } from '@/models/notice.model';
import { getLocalStorage } from '@/utilities';


const getAllNotices = async () => {
  const token = getLocalStorage(ContextTypes.AUTHUSER)
  const { data } = await axios.get(noticiaLinks(), {
    headers: {
      "Authorization": token
    }
  })
  return data as NoticiaRequest
}

const getNoticie = async (notice: NoticiaInterface) => {
  const token = getLocalStorage(ContextTypes.AUTHUSER)
  const { data } = await axios.get(noticiaLinks(`${notice.id}`), {
    headers: {
      "Authorization": token
    }
  })
  return data as NoticiaInterface
}

const createNotice = async ( noticie: NoticiaForm) => {
  const token = getLocalStorage(ContextTypes.AUTHUSER)
  const { data } = await axios.post(noticiaLinks(), noticie, {
    headers: {
      "Authorization": token
    }
  })
  return data as NoticiaInterface
}

const updateNotice = async ( notice: NoticiaForm) => {
  const token = getLocalStorage(ContextTypes.AUTHUSER)
  const { data } = await axios.patch(noticiaLinks(), notice, {
    headers: {
      "Authorization": token
    }
  })
  return data as NoticiaInterface
}

const deleteNotice = async (notice: NoticiaInterface) => {
  const token = getLocalStorage(ContextTypes.AUTHUSER)
  const { status } = await axios.delete(noticiaLinks(`${notice.id}`), {
    headers: {
      "Authorization": token
    }
  })
  if (status === 200) return true
  return false
}

export { getAllNotices, getNoticie, createNotice, updateNotice, deleteNotice }

import {getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage'
import { v4 } from 'uuid'


const uploadFile = async (file) =>{
  if(file){
    const storage = getStorage()
    const storageRef = ref(storage, v4())
    const idImg = await uploadBytes(storageRef, file)
    const urlImg = await getDownloadURL(storageRef)
    const imgObj = {idImg, urlImg}
    return imgObj
  }
}

const deleteFile = async (file) => {
  const storage = getStorage();
  const storageRef = ref(storage, file);
  return await deleteObject(storageRef);
}


export const storageService = { uploadFile, deleteFile }
import React, { useEffect, useState } from 'react'
import ModalEditProduct from '../admin/ModalEditProduct'
import { storageService } from '../../services/storage';
import { productService } from '../../services/data';

function ListProductItem({ product, setRefresh }) {
  const { img, title, price } = product;
  const [showModal, setShowModal] = useState(false);
  const [file, setFile] = useState('');
  const [editedProduct, setEditedProduct] = useState({ ...product });
  const [deleteImg, setDeleteImg] = useState([])

  const handleChangeProductInfo = (e) => {
    const name = e.target.name
    const value = e.target.value
    switch (name) {
      case 'xs':
      case 's':
      case 'm':
      case 'l':
      case 'xl':
        setEditedProduct({
          ...editedProduct,
          stock: { ...editedProduct.stock, [name]: Number(value) }
        })
        break;
      case 'featured':
        setEditedProduct({
          ...editedProduct,
          [name]: e.target.checked
        });
        break;
      case 'price':
        setEditedProduct({
          ...editedProduct,
          [name]: Number(value)
        });
        break;
      case 'maninImg':
        setFile({ file: e.target.files[0], name: 'img' })
        break;
      case 'galery0':
        setFile({ file: e.target.files[0], name: 'galery0' })
        break;
      case 'galery1':
        setFile({ file: e.target.files[0], name: 'galery1' })
        break;
      case 'galery2':
        setFile({ file: e.target.files[0], name: 'galery2' })
        break;
      case 'galery3':
        setFile({ file: e.target.files[0], name: 'galery3' })
        break;
      default:
        setEditedProduct({
          ...editedProduct,
          [name]: value
        });
        break;
    }
  }

  const handleModal = () => {
    setShowModal(!showModal)
  }

  const handleRemoveImg = (e) => {
    e.preventDefault();
    const id = e.target.id;
    storageService.deleteFile(editedProduct.idGalery[id]);
    const newGalery = [...editedProduct.galery];
    const newIdGalery = [...editedProduct?.idGalery];
    newGalery.splice(id, 1)
    newIdGalery.splice(id, 1)
    setEditedProduct({ ...editedProduct, galery: newGalery , idGalery: newIdGalery })
  }

  const handleEdit = (e) => {
    e.preventDefault()
    productService.updateProduct(editedProduct).then(() => {
      deleteImg.forEach((item) => {
        storageService.deleteFile(item);
      })
      alert('se actualizo correctamente')
      setRefresh(true);
      setShowModal(false)
    }).catch((e) => alert('ocurrio un error: ' + e))
  }

  const handleDelete = () => {
    storageService.deleteFile(product.idImg)
    productService.deleteProduct(product.id)
    .then(() => {
      product.idGalery.forEach(element => {
        storageService.deleteFile(element)
      });
      alert('eliminado correctamente');
      setRefresh(true);
    })
    .catch((e) => alert('ocurrio un error: ' + e))
  }

  const uploadFile = async () => {
    const imgRute = await storageService.uploadFile(file.file)
    const newGalery = [...editedProduct.galery];
    const newIdGalery = [...editedProduct?.idGalery];
    switch (file.name) {
      case 'img':
        setEditedProduct({ ...editedProduct, [file.name]: imgRute.urlImg, idImg: imgRute.idImg.metadata.name })
        setDeleteImg([...deleteImg, product.idImg])
        break;
      case 'galery0':
        newGalery[0] = imgRute.urlImg;
        newIdGalery[0] = imgRute.idImg.metadata.name;
        setEditedProduct({ ...editedProduct, galery: newGalery , idGalery: newIdGalery })
        setDeleteImg([...deleteImg, product.idGalery[0]]);
        break;
      case 'galery1':
        newGalery[1] = imgRute.urlImg;
        newIdGalery[1] = imgRute.idImg.metadata.name;
        setEditedProduct({ ...editedProduct, galery: newGalery , idGalery: newIdGalery})
        setDeleteImg([...deleteImg, product.idGalery[1]]);
        break;
      case 'galery2':
        newGalery[2] = imgRute.urlImg;
        newIdGalery[2] = imgRute.idImg.metadata.name;
        setEditedProduct({ ...editedProduct, galery: newGalery , idGalery: newIdGalery})
        setDeleteImg([...deleteImg, product.idGalery[2]]);
        break;
      case 'galery3':
        newGalery[3] = imgRute.urlImg;
        newIdGalery[3] = imgRute.idImg.metadata.name;
        setEditedProduct({ ...editedProduct, galery: newGalery , idGalery: newIdGalery})
        setDeleteImg([...deleteImg, product.idGalery[3]]);
        break;
    }
  }

  useEffect(() => {
    if(file){
      uploadFile()
    }
  }, [file])

  return (
    <div className='listProductItemContainer'>
      <div className='ListProductItemImg'>
        <img src={img} />
      </div>
      <div className='ListProductItemTitle'>
        <h2>{title}</h2>
      </div>
      <div className='ListProductItemPrice'>
        <h2>${price}</h2>
      </div>
      <div className='ListProductItemButtons'>
        <button onClick={handleDelete}>Eliminar</button>
        <button onClick={handleModal}>modificar</button>
      </div>
      <div className='modal'>
        {showModal && <ModalEditProduct handleModal={handleModal} handleEdit={handleEdit} handleRemoveImg={handleRemoveImg} product={editedProduct} setEditedProduct={setEditedProduct} handleChangeProductInfo={handleChangeProductInfo} />}
      </div>
    </div>
  )
}

export default ListProductItem
import React, { useState, useEffect } from 'react'
import { storageService } from '../../services/storage'
import FormProduct from './FormProduct'
import { productService } from '../../services/data';
import { ToastContainer, toast } from 'react-toastify';
function AddProducts() {

  const [file, setFile] = useState('');
  const [arrayFiles, setArrayFiles] = useState([]);
  const [newProduct, setNewProduct] = useState({
    title: '',
    price: 0,
    description: '',
    stock: {
      xs: 0,
      s: 0,
      m: 0,
      l: 0,
      xl: 0
    },
    category: '',
    featured: false,
    img: '',
    idImg: '',
    galery: [],
    idGalery: []
  });

  const handleProductInfoChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    switch (name) {
      case 'xs':
      case 's':
      case 'm':
      case 'l':
      case 'xl':
        setNewProduct({
          ...newProduct,
          stock: { ...newProduct.stock, [name]: Number(value) }
        })
        break;
      case 'featured':
        setNewProduct({
          ...newProduct,
          [name]: event.target.checked
        });
        break;
      case 'price':
        setNewProduct({
          ...newProduct,
          [name]: Number(value)
        });
        break;
      case 'maninImg':
        setFile(event.target.files[0]);
        break;
      case 'galery':
        setArrayFiles(event.target.files);
        break;
      default:
        setNewProduct({
          ...newProduct,
          [name]: value
        });
        break;
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      productService.addProduct(newProduct);
      cleanForm();
      notify("se agregó correctamente el producto")
    } catch (error) {
      console.error(error);
      alert('no se pudo subir el producto correctamente, intente mas tarde')
    }
  }

  const notify = (msg) => {
    toast.success(msg, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  }

  const cleanForm = () => {
    setNewProduct({
      title: '',
      price: 0,
      description: '',
      stock: {
        xs: 0,
        s: 0,
        m: 0,
        l: 0,
        xl: 0
      },
      category: '',
      featured: false,
      img: '',
      idImg: '',
      galery: [],
      idGalery: []
    })
  }

  const uploadMainImg = async () => {
    const imgRute = await storageService.uploadFile(file)
    setNewProduct({ ...newProduct, img: imgRute.urlImg, idImg: imgRute.idImg.metadata.name })
  }

  const uploadGalery = async () => {
    const imgRute = await Promise.all(
      Object.entries(arrayFiles).map(async ([key, value]) => {
        const rute = await storageService.uploadFile(value);
        return rute;
      })
    );
    const urlGalery = imgRute.map(e => e.urlImg)
    const idGalery = imgRute.map(e => e.idImg.metadata.name)
    setNewProduct({ ...newProduct, galery: [...urlGalery], idGalery: [...idGalery] })
  }

  useEffect(() => {
    if (file) {
      uploadMainImg();
    }
  }, [file]);

  useEffect(() => {
    if (arrayFiles.length > 0) {
      uploadGalery();
    }
  }, [arrayFiles]);

  return (
    <>
      <div className='addProductsContainer'>
        <h2>Agregar Productos</h2>
        <FormProduct handleSubmit={handleSubmit} handleProductInfoChange={handleProductInfoChange} newProduct={newProduct} />
      </div>
      <ToastContainer />
    </>
  )
}

export default AddProducts
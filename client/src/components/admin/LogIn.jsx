import React, {useEffect, useState} from 'react'
import { authService } from '../../services/auth';

function LogIn({setIsAdminPage}) {
  useEffect(() => {
    setIsAdminPage(true);
    return () => setIsAdminPage(false);
  }, [setIsAdminPage]);

  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");

  const submit = (e) => {
    e.preventDefault()
    authService.logIn(correo, contraseña)
  }

  return (
    <>
      <div className='container-form-login'>
        <form className='logInForm'>
          <input type='text' placeholder='Correo' value={correo} onChange={ (e)=> setCorreo(e.target.value)}/>
          <input type='password' placeholder='Contraseña' value={contraseña} onChange={ (e)=> setContraseña(e.target.value)}/>
          <button onClick={submit}>Enviar</button>
        </form>
      </div>
    </>
  )
}

export default LogIn
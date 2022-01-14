import React, { useState } from 'react';
import firebase from '../firebase/firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';

const auth = firebase.auth();

const UserPage = () => {
    const [user] = useAuthState(auth);
    const [nombre, setNombre] = useState(user.displayName);
    const [correo, setCorreo] = useState(user.email);
    const [imageUrl, setImageUrl] = useState(user.photoURL);
    const [result, setResult] = useState("");

    console.log(user)

    const actualizarDatos = (e) => {
        e.preventDefault();
        user.updateProfile({
            displayName: nombre,
            photoURL: imageUrl,
            }).then(() => {
                setResult(  <div className="alert alert-success d-flex align-items-center" role="alert">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                                </svg>
                                <div>
                                    Informacion actualizada :)
                                </div>
                            </div>);
            }).catch((error) => {
                setResult(  <div className="alert alert-danger d-flex align-items-center" role="alert">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
                                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                </svg>
                                <div>
                                    Ha ocurrido un error :(
                                </div>
                            </div>);
        });
        user.updateEmail(correo)
    }

    return(
        <section>
            <div className='card border-dark m-4 p-4 '>
                <h1 style={{textAlign: 'center'}}>Informacion Personal</h1>
                <div className='row g-0'>
                    <div className='col-md-4 d-flex justify-content-center align-self-center'>
                        <img style={{borderRadius: 100}} height="150" className='' src={user.photoURL}/>
                    </div>
                    <div className='col-md-8'>
                        <section>
                            <label>Nombre:</label>
                            <input readOnly type="text" value={nombre}/>
                        </section>
                        <section>
                            <label>Correo:</label>
                            <input readOnly type="email" value={correo}/>
                        </section>
                        <section>
                            <label>URL de Imagen:</label>
                            <input readOnly type="text" value={imageUrl}/>
                        </section>
                        <section className='d-flex justify-content-center'>
                            <button type='button' 
                                typeof='submit'
                                data-bs-target="#exampleModal" 
                                data-bs-toggle="modal" 
                                className='btn btn-dark mt-2'>
                                Editar
                            </button>
                        </section>
                    </div>
                </div>
            </div>

            <div className='modal fade' aria-labelledby="exampleModalLabel" id="exampleModal" tabindex="-1" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel"><b>Actualizar informacion</b></h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <section>
                                    <label>Nuevo Nombre:</label>
                                    <input type="text" placeholder='userName' onChange={(e) => setNombre(e.target.value)}/>
                                </section>
                                <section>
                                    <label>Nuevo Correo:</label>
                                    <input type="email" placeholder='user@example.com' onChange={(e) => setCorreo(e.target.value)}/>
                                </section>
                                <section>
                                    <label>Nueva URL de Imagen:</label>
                                    <input type="text"placeholder='https://example.com' onChange={(e) => setImageUrl(e.target.value)}/>
                                </section>
                                <section className='mt-2 d-flex justify-content-center'>
                                    <button 
                                        type="button" 
                                        className="btn btn-success" 
                                        onClick={(e) => actualizarDatos(e)}>Actualizar</button>
                                </section >
                            </form>
                            {result}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default (UserPage)
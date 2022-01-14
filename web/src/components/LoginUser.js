import React, {useState} from 'react';
import firebase from '../firebase/firebaseConfig';

const auth = firebase.auth();

export const LoginUser = () => {

    const [login, setLogin] = useState({
        email: "",
        password: ""
    });

    const signInWithUser = () => {
    
        auth.signInWithEmailAndPassword(login.email, login.password)
            .then()
            .catch((error) => alert(error));

    };

    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    };
  
    return (
        <div className='modal fade' aria-labelledby="exampleModalLabel" id="exampleModal" tabindex="-1" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel"><b>Iniciar sesion</b></h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                    </div>
                    <div className="modal-body">
                    <form>
                        <section>
                            <label>Correo electronico:</label>
                            <input type="text" placeholder='example@gmail.com' onChange={(e) => setLogin({...login, email: e.target.value})}/>
                        </section>
                        <section>
                            <label>Contraseña:</label>
                            <input type="password" placeholder='password' onChange={(e) => setLogin({...login, password: e.target.value})}/>
                            </section>
                        <section className='mt-2 d-flex justify-content-center'>
                            <div className="d-grid gap-2 col-6 mx-auto">
                                <button onClick={signInWithUser} data-bs-dismiss="modal" className="btn btn-primary" type="button">Login</button>
                                <button onClick={signInWithGoogle} data-bs-dismiss="modal" aria-label="Close" className="btn btn-danger" type="button">Sign in with google</button>
                            </div>
                        </section >
                    </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
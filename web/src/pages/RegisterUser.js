import React, { useState } from 'react';
import firebase from '../firebase/firebaseConfig';

const auth = firebase.auth()

const RegisterUser = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        passwordConfirm: "",
        photoURL: ""
    })
    const verifyPassword = () => {
        (user.password === user.passwordConfirm) ? registerUser() : alert("Las contraseñas no coinciden")
    }
    const registerUser = () => {
        auth.createUserWithEmailAndPassword(user.email, user.password)
        .then((currentUser) => {
            currentUser.user.updateProfile({
                displayName: user.name,
                photoURL: user.photoURL
            }).then(() => {
                alert("Usuario Registrado")
                window.location.reload();
            }).catch((error) => {
                alert(error)
            })
        })
        .catch((error) => {
            alert(error)
        })
    }

    return(
        <section>
            <div className='card border-dark mt-4 p-3 col-md-8 mx-auto'>
                <h1 style={{textAlign: 'center'}}>Informacion Personal</h1>
                <form className='m-4'>
                    <section> 
                        <label>Username:</label>
                        <input type="text" placeholder='exampleUsername' onChange={(e) => setUser({...user, name: e.target.value})}/>
                    </section>
                    <section> 
                        <label>Password:</label>
                        <input type="password" placeholder='passwordExample' onChange={(e) => setUser({...user, password: e.target.value})}/>
                    </section>
                    <section> 
                        <label>Confirm Password:</label>
                        <input type="password" placeholder='passwordExample' onChange={(e) => setUser({...user, passwordConfirm: e.target.value})}/>
                    </section>
                    <section>
                        <label>Email:</label>
                        <input type="email" placeholder='example@gmail.com' onChange={(e) => setUser({...user, email: e.target.value})}/>
                    </section>
                    <section>
                        <label>URL of image:</label>
                        <input type="text" placeholder='http://example.com'onChange={(e) => setUser({...user, photoURL: e.target.value})}/>
                    </section>
                    <section className='d-flex justify-content-center'>
                        <button type='button' 
                            typeof='submit'
                            className='btn btn-dark mt-2'
                            onClick={verifyPassword}>
                            Registrar
                        </button>
                    </section>
                </form>
            </div>
        </section>
    );
}

export default (RegisterUser)
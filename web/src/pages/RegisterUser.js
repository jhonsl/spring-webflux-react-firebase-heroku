import React from 'react';

const RegisterUser = () => {

    return(
        <section>
            <div className='card border-dark mt-4 p-3 col-md-8 mx-auto'>
                <h1 style={{textAlign: 'center'}}>Informacion Personal</h1>
                <form className='m-4'>
                    <section> 
                        <label>Nombre:</label>
                        <input type="text"/>
                    </section>
                    <section> 
                        <label>Contraseña:</label>
                        <input type="password"/>
                    </section>
                    <section>
                        <label>Correo:</label>
                        <input type="email"/>
                    </section>
                    <section>
                        <label>URL de Imagen:</label>
                        <input type="text"/>
                    </section>
                    <section className='d-flex justify-content-center'>
                        <button type='button' 
                            typeof='submit'
                            data-bs-target="#exampleModal" 
                            data-bs-toggle="modal" 
                            className='btn btn-dark mt-2'>
                            Registrar
                        </button>
                    </section>
                </form>
            </div>
        </section>
    );
}

export default (RegisterUser)
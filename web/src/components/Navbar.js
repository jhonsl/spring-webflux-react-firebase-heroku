import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import user from '../images/user.png'
import firebase from '../firebase/firebaseConfig'
import { logout, login } from '../actions/authActions'

const auth = firebase.auth();

export const PublicNavbar = ({dispatch}) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className='container-fluid'>
      <a className='navbar-brand mx-3' href='#'>
        <img
          src={logo}
          width="50"
          height="50"
        />
        SofkaQuestions
      </a>
      <div className='mx-auto'>
        <ul className='navbar-nav '>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/questions">Questions</Link></li>
        </ul>
      </div>
      <div className='me-4'> 
        <ul className='navbar-nav'>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <img
                src={user}
                width="50"
                height="50"
              />
            </a>
            <div className="dropdown-menu dropdown-menu-end text-center" aria-labelledby="navbarDropdown">
              <Link data-bs-target="#exampleModal" 
                    data-bs-toggle="modal"  
                    className="dropdown-item ms-1">
                    Login
              </Link>
              <Link to="/register" className="dropdown-item ms-1">Register</Link> 
            </div>
          </li>
        </ul>
      </div>
    </div>
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
                <label>Nombre de usuario:</label>
                <input type="text" placeholder='userName'/>
              </section>
              <section>
                <label>Contraseña:</label>
                <input type="password" placeholder='password'/>
              </section>
              <section className='mt-2 d-flex justify-content-center'>
                <div className="d-grid gap-2 col-6 mx-auto">
                  <button className="btn btn-primary" type="button">Login</button>
                  <SignIn dispatch={dispatch}/>
                </div>
              </section >
            </form>
          </div>
        </div>
      </div>
    </div>
  </nav>
)

export const PrivateNavbar = ({dispatch}) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className='container-fluid'>
      <a className='navbar-brand mx-2' href='#'>
        <img
          src={logo}
          width="50"
          height="50"
        />
        SofkaQuestions
      </a>
      <div>
        <ul className='navbar-nav '>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/questions">Questions</Link></li>
          <li><Link to="/new">New</Link></li>
          <li><Link to="/list">List</Link></li>
        </ul>
      </div>
      <div className='me-4'> 
        <ul className='navbar-nav'>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <img
                src={user}
                width="50"
                height="50"
              />
            </a>
            <div className="dropdown-menu dropdown-menu-end text-center" aria-labelledby="navbarDropdown">
              <Link to="/user" className="dropdown-item ms-1" href="#">Profile</Link>
              <SignOut dispatch={dispatch}/> 
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

function SignOut({ dispatch }) {
  return (
    auth.currentUser && (
      <Link
        className="dropdown-item ms-1"
        onClick={() => {
          dispatch(logout())
          auth.signOut();
        }}
      >
        Sign out
      </Link>
    )
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  return <button data-bs-dismiss="modal" aria-label="Close" className="btn btn-danger" type="button" onClick={signInWithGoogle}>Sign in with google</button>;
}

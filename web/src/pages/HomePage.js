import React from 'react'
import firebase from '../firebase/firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom'

const auth = firebase.auth();

const HomePage = ({children}) => {
  const [user] = useAuthState(auth);
  const name = user ? user.displayName : ""

  return(  
  <section>
    <h1 className='mt-4 mb-3 text-center'>Welcome {name}</h1>
    <div>
      {children}
    </div>
    <p>welcome to the question and answer app: </p>
    <ul className='mb-3'>
      <li>Please Sign In now in the button of the icon user in the navbar</li>
      <li>if you don´t have a account Register now</li>
    </ul>
    <section className='mt-3 d-flex justify-content-center'>
      <Link to="/questions" className="button">
        View Questions
      </Link>
    </section>
  
  </section>
  )

}

export default HomePage

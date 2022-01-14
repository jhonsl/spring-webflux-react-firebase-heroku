import React from 'react'
import firebase from '../firebase/firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom'

const auth = firebase.auth();

const HomePage = ({children}) => {
  const [user] = useAuthState(auth);
  const name = user ? user.displayName : ""

  return(  <section>
    <h1 className='mt-4'>Welcome {name}</h1>
    <div>
      {children}
    </div>
    <p>welcome to the question and answer app.</p>
    <Link to="/questions" className="button">
      View Questions
    </Link>
  
  </section>
  )

}

export default HomePage

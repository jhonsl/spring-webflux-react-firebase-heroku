import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import firebase from "./firebase/firebaseConfig";
import { login } from './actions/authActions';

import { PublicNavbar, PrivateNavbar } from './components/Navbar'
import HomePage from './pages/HomePage'
import SingleQuestionPage from './pages/SingleQuestionPage'
import QuestionsPage from './pages/QuestionsPage'
import QuestionFormPage from './pages/QuestionFormPage'
import AnswerFormPage from './pages/AnswerFormPage'
import OwnerQuestionsPage from './pages/OwnerQuestionsPage'
import RegisterUser from './pages/RegisterUser'
import UserPage from './pages/UserPage'
import { Footer } from './components/Footer';
import { useAuthState } from "react-firebase-hooks/auth";

const auth = firebase.auth();

const App = ({ dispatch }) => {
  const [user] = useAuthState(auth);
  if(user){
    dispatch(login(user.email, user.uid))
  }
  return (
    <Router>
      {user ?
        <>
          <PrivateNavbar dispatch={dispatch}/>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/questions" component={QuestionsPage} />
            <Route exact path="/question/:id" component={SingleQuestionPage} />
            <Route exact path="/list" component={OwnerQuestionsPage} />
            <Route exact path="/answer/:id" component={AnswerFormPage} />
            <Route exact path="/new" component={QuestionFormPage} />
            <Route exact path="/user" component={UserPage} />
            <Redirect to="/" />
          </Switch>
          <Footer />
        </> :
        <>
          <PublicNavbar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/register" component={RegisterUser} />
            <Route exact path="/questions" component={QuestionsPage} />
            <Route exact path="/question/:id" component={SingleQuestionPage} />
            <Route exact path="/answer/:id" component={AnswerFormPage} />
            <Redirect to="/" />
          </Switch>
          <Footer />
        </>
      }
    </Router>
  )
}

export default App

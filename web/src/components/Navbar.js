import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import user from '../images/user.png'

export const PublicNavbar = () => (
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
      <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </nav>
)

export const PrivateNavbar = () => (
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
          <li><Link to="/new">New</Link></li>
          <li><Link to="/list">List</Link></li>
        </ul>
      </div>
      <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <Link className='navbar-brand mx-0' to='/user'>
        <img
          src={user}
          width="50"
          height="50"
        />
      </Link>
    </div>
  </nav>
)

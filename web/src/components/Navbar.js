import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'

export const PublicNavbar = () => (
  <nav>
    <section>
      <div>
        <a href='#'>
          <img
            src={logo}
            width="40"
            height="40"
          />
        </a>
      </div>

      <Link to="/">Home</Link>
      <Link to="/questions">Questions</Link>
    </section>
  </nav>
)

export const PrivateNavbar = () => (
  <nav>
    <section>
      <a href='#'>
        <img
          src={logo}
          width="40"
          height="40"
        />
      </a>
      <Link to="/">Home</Link>
      <Link to="/questions">Questions</Link>
      <Link to="/new">New</Link>
      <Link to="/list">List</Link>
    </section>
  </nav>
)

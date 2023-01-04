import React from 'react'
import { NavLink } from 'react-router-dom'

export default function menu() {
  return (
    <>
        <ul className="nav d-flex justify-content-between shadow-sm mb-2">
        <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/">
                HOME
            </NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/login">
                LOGIN
            </NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" aria-current="page" to="/register">
                REGISTER
            </NavLink>
        </li>
        </ul>
    </>
  )
}

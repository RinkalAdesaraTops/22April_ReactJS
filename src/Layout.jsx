import React from 'react'
import { Link } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
        <ul>
            <li>
                <Link to='/home'>Home</Link>

            </li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}

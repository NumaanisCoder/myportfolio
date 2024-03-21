import React from 'react'
import style from '@/styles/Navbar.module.css'

const NavBar = () => {
  return (
    <nav className={style.navbar}>
       <h1 className={style.Logo}>N</h1>

        <ul className={style.LinkContainer}>
          <li><a href="/">Home</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>

        <button className={style.hiremebtn}>
          Hire Me
        </button>
      </nav>
  )
}

export default NavBar

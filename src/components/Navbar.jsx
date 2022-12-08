import '../styles/Navbar.css'
import React, {useState} from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {Link} from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  // Change nav color when scrolling
  const [color, setColor] = useState(false)
  const changeColor = () => {
    if (window.scrollY <= ((window.screen.height) - (160 + 60))) {
      setColor(false)
    } else if (window.scrollY <= ((window.screen.height * 2) - ( 160 * 2 + 60))) {
      setColor(true)
    } else if (window.scrollY <= ((window.screen.height * 3) - (160 * 3 + 60))) {
      setColor(false)
    } else {
      setColor(true)
    }
  }

  window.addEventListener('scroll', changeColor)

  return (
    <div className={color ? 'header header-bg-dark' : 'header header-bg-light'}>

      {/* Menu */}
      <ul className=' hidden md:flex'>
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[50px] ml-[-100px] flex justify-between items-center hover:ml-[-10px] duration-300 bg-blue-500'>
            <a href="https://www.linkedin.com/in/c%C3%A9dric-le-brun-64926383/" rel='noopener' className='flex justify-between items-center w-full text-gray-300'>
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[50px] ml-[-100px] flex justify-between items-center hover:ml-[-10px] duration-300 bg-gray-500'>
            <a href="https://github.com/CEDRICLEBRUN" rel='noopener' className='flex justify-between items-center w-full text-gray-300'>
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[50px] ml-[-100px] flex justify-between items-center hover:ml-[-10px] duration-300 bg-red-500'>
            <Link to="contact" smooth={true} duration={500} className='flex justify-between items-center w-full text-gray-300'>
              Contact <HiOutlineMail size={30}/>
            </Link>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Navbar

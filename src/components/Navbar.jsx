import logo from '../assets/hugo_logo.png';
import '../styles/components_styles.css'
//npm install --save react-router-hash-link
//import { HashLink as Link } from 'react-router-hash-link';

export const Navbar = () => {
  return (
    <>
      <a name="header"></a>
      <div className='navbar_div'>
        
        <div></div>
        <div> <img src={logo} alt="" /></div>
        <a href="#aboutme"> <li>Acerca de mi</li></a>
        <a href="#knowledge"> <li>Conocimientos</li></a>
        <a href="#project"> <li>Mis proyectos</li></a>
        <a href="#contact"> <li>Contáctame</li></a>
      </div>
    </>
  )
}


import './header.css';
import { Link } from 'react-router-dom';

export default function Header(){
  return(
    <header>
      <Link className="logo" to="/" >MovieApp</Link>
      <Link className="favoritos-botao" to="/favoritos" >Favoritos</Link>
    </header>
  )
}
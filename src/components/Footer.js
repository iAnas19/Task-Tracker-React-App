import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; 2021</p>
      <Link to='/about' style={{ textDecoration: 'none'}}>About</Link>
    </footer>
  )
}

export default Footer
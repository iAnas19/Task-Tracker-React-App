import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; 2021</p>
      <Link to='/about' className="footerbtn" style={{ textDecoration: 'none',color:'#000', fontSize:'16px', background:'lightgrey', padding:'2px 15px',borderRadius:'5px'}}>About</Link>
    </footer>
  )
}

export default Footer
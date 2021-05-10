import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='aboutsec'>
      <h4>Version 1.0.1</h4>
      <Link to='/' className='gobacklink' style={{ textDecoration: 'none', color:'green', fontSize:'20px'}}>Go Back</Link>
    </div>
  )
}

export default About
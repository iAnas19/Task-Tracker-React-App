import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='aboutsec'>
      <h4>Version 1.0.0</h4>
      <Link to='/' style={{ textDecoration: 'none' }}>Go Back</Link>
    </div>
  )
}

export default About
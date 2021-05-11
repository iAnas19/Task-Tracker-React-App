import { Link } from 'react-router-dom'



const About = () => {
  return (
    <div className='aboutsec'>
      <h4>Version 1.0.1</h4>
      <Link to='/' className='goback' style={{ textDecoration: 'none', fontSize:'1.1em', border:'1px solid darkgreen', padding:'2px 8px', borderRadius:'5px'}}>Go Back</Link>
    </div>
  )
}

export default About
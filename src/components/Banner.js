import logo from '../assets/logo.png'
import '../styles/Banner.css'
const Banner = () => {
    const title = 'La maison jungle'
    return (
        <div className="lmj-jungle">
            <img src= {logo} alt='la maison de jungle' className='logo-jungle'/>
            <h1>{title}</h1>
        </div> 
        
     );
}
 
export default Banner;
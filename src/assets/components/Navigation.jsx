import styles from '../css/navbar.module.css';
import { Link } from 'react-router-dom'
import Services from './Service';
const Navigation = () => {
  return (
    <nav>
        <div className={styles.nav}>
            <Link to="/">Home</Link>
            <Link to="/about">About me</Link>
            <Link to="/work">Work</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/services">Services</Link>
            
          <div>
                <p>© 2021, All Rights Reserved</p>
                {/* <Services name ="Bukky" description= "Pharmacy"/> */}
          </div>
       </div>
       
      
    </nav>
  );
};

export default Navigation;
import { Nav, Navbar } from "rsuite"
import HomeIcon from '@rsuite/icons/legacy/Home';
import logg from '../assets/images/user.png'
// import CogIcon from '@rsuite/icons/legacy/Cog';
import { Link } from "react-router-dom";
import '../assets/css/navbar.css'
const CustomNavbar = ()=>{
    return(
        <Navbar className="nav">
        <Navbar.Brand href="#">CURIS</Navbar.Brand>
        <Nav>
          <Nav.Item icon={<HomeIcon />}><Link to={'/home'}>Home</Link></Nav.Item>
          <Nav.Item><Link to={'/about'}>Courses</Link></Nav.Item>
          {/* <Nav.Item><Link to={'/contact'}>Academies</Link></Nav.Item> */}
          <Nav.Item><Link to={'/contact'}>Contact</Link></Nav.Item>
          <Nav.Item><Link to={'/contact'}>EnrolledCourses</Link></Nav.Item>

          {/* <Nav.Item><Link to={'/login'}>Login</Link></Nav.Item> */}
          {/* <Nav.Item><Link to={'/sign'}>Signup</Link></Nav.Item> */}
          <Nav.Item><img className="img22" src={logg}></img></Nav.Item>
          {/* <Nav.Menu title="About">
            <Nav.Item>Company</Nav.Item>
            <Nav.Item>Team</Nav.Item>
            <Nav.Menu title="Contact">
              <Nav.Item>Via email</Nav.Item>
              <Nav.Item>Via telephone</Nav.Item>
            </Nav.Menu>
          </Nav.Menu> */}
        </Nav>
      </Navbar>
    )
}
export default CustomNavbar
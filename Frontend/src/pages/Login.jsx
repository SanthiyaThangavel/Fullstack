import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button, ButtonToolbar, Form } from "rsuite"
import '../assets/css/login.css'
import logo from "../assets/images/logg1.jpg"
import { Link } from "react-router-dom"
import { signIn } from "../services/auth"
const Login=()=>{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Access the navigation function

  const handleEmailChange = (value) => {
      setEmail(value);
  };

  const handlePasswordChange = (value) => {
      setPassword(value);
  };

  const handleFormSubmit = (e) => {
      e.preventDefault();

      const form = {
          email: email,
          password: password
      }
      signIn(form)
          .then((res) => {
              
              sessionStorage.setItem('token', res.data.token);
              setEmail("");
              setPassword("");
              navigate('/home');
          })
          .catch((err) => {
              setEmail("");
              setPassword("");
              console.log(err);
          });
  };
    return(
      <div className="log">
        <div>
          <img className="img11" src={logo}   ></img>
        </div>
      <div className="box">
          <p className="p">LOGIN</p>
          <br></br>
        <Form>
          <Form.Group controlId="name" className="name">
            <Form.ControlLabel>Username</Form.ControlLabel>
            <Form.Control name="name" />
            <Form.HelpText>Username is required</Form.HelpText>
          </Form.Group>
          <Form.Group controlId="email" className="name">
            <Form.ControlLabel>Email</Form.ControlLabel>
            <Form.Control placeholder="Email" name="email" autoComplete="off" onChange={handleEmailChange} value={email} />
            <Form.HelpText tooltip>Email is required</Form.HelpText>
          </Form.Group>
          <Form.Group controlId="password" className="name">
            <Form.ControlLabel>Password</Form.ControlLabel>
            <Form.Control placeholder="Password" name="password" type="password" autoComplete="off" onChange={handlePasswordChange} value={password}/>
          </Form.Group>
          <Form.Group>
      <ButtonToolbar>
        <Button onClick={handleFormSubmit} className="name">Submit</Button>
        <Button appearance="default">Cancel</Button>
      </ButtonToolbar>
    </Form.Group>
  </Form>
  <br></br>
  <br></br>
  <div className="name">
    <p>New User?</p><p><Link to={'/register'}>Register Here</Link></p>
  </div>
  </div>
  </div>
    )
}
export default Login;
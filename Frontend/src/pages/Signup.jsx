import { Button, ButtonToolbar, Form } from "rsuite"
import logg1 from "../assets/images/yog2.jpeg"
import '../assets/css/signup.css'
import {  useNavigate } from "react-router-dom"
import { useState } from "react"
import { signUp } from "../services/auth"

const Signup=()=>
{
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [healthinformation, setHealthinformation] = useState("");

  const navigate = useNavigate(); // Access the navigation function

  const handleEmailChange = (value) => {
      setEmail(value);
  };
  const handleNameChange = (value) => {
    setName(value);
};

  const handlePasswordChange = (value) => {
    setPassword(value);
};

const handleGenderChange = (value) => {
  setGender(value);
};
const handleHealthChange = (value) => {
  setHealthinformation(value);
};

  const handleFormSubmit = async (e) => {
      e.preventDefault();

      const form = {
          name: name ,
          email: email,
          password: password,
          gender : gender,
          healthinformation : healthinformation
      }
      await signUp(form)  
          .then(() => {
              setName("");
              setEmail("");
              setPassword("");
              setGender("");
              setHealthinformation("");
              navigate('/login');
          })
          .catch((err) => {
              setEmail("");
              setPassword("");
              setPassword("");
              setGender("");
              setHealthinformation("");
              console.log(err);
             
          });
          console.log(form)
  };

  return(
    <div style={{marginTop:"-200px"}}>
      <h2 style={{marginLeft:"700px",marginTop:"300px"}}>Sign up</h2>
    <div>
      <div>
        <img className="signupimg" src={logg1}></img>
      </div>
    <div >
    <div className="s">
      {/* <p className="s1">SIGNUP</p> */}
    <Form layout="horizontal" className="horizontal4">
    <Form.Group controlId="name-6" className="name" >
      <Form.ControlLabel className="signupp4">Username</Form.ControlLabel>
      <Form.Control placeholder="UserName" name="name" autoComplete="off" onChange={handleNameChange} value={name} />
      
    </Form.Group>
    <Form.Group controlId="email-6"  className="name">
      <Form.ControlLabel className="signupp4">Email</Form.ControlLabel>
      <Form.Control placeholder="Email" name="email" autoComplete="off" onChange={handleEmailChange} value={email} />

    </Form.Group>
    <Form.Group controlId="password-6" className="name" >
      <Form.ControlLabel className="signupp4">Password</Form.ControlLabel>
      <Form.Control placeholder="Password" name="password" type="password" autoComplete="off" onChange={handlePasswordChange} value={password} />
    </Form.Group>

    <Form.Group controlId="name-6" className="name" >
      <Form.ControlLabel className="signupp4">MobileNo</Form.ControlLabel>
      <Form.Control name="healthinformation" onChange={handleHealthChange} value={healthinformation} />
    </Form.Group>

    <Form.Group controlId="password-6" className="name" >
      <Form.ControlLabel className="signupp4"> Gender </Form.ControlLabel>
      <Form.Control  rows={5} name="gender"  autoComplete="off" onChange={handleGenderChange} value={gender}
 />
    </Form.Group>
    <Form.Group>
      <ButtonToolbar>
        <Button appearance="primary" onClick={handleFormSubmit}>Submit</Button>
        <Button appearance="default">Cancel</Button>
      </ButtonToolbar>
    </Form.Group>
  </Form>
  </div>
  </div></div>
  </div>
  )
}
export default Signup

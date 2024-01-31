import { Button, ButtonToolbar, Form } from "rsuite"
import logg1 from "../assets/images/yog2.jpeg"
import '../assets/css/signup.css'
import { Link } from "react-router-dom"
const Signup=()=>
{
  return(
    <div>
      <div>
        <img className="signimg" src={logg1}></img>
      </div>
    <div className="signups">
      <p className="p11">SIGN UP</p>
      <br></br>
      <br></br>
    <Form layout="horizontal">
    <Form.Group controlId="name-6">
      <Form.ControlLabel>Username</Form.ControlLabel>
      <Form.Control name="name" />
      <Form.HelpText>Required</Form.HelpText>
    </Form.Group>
    <Form.Group controlId="email-6">
      <Form.ControlLabel>Email</Form.ControlLabel>
      <Form.Control name="email" type="email" />
      <Form.HelpText tooltip>Required</Form.HelpText>
    </Form.Group>
    <Form.Group controlId="name-6">
      <Form.ControlLabel>Mobile No</Form.ControlLabel>
      <Form.Control name="email" type="email" />
      <Form.HelpText tooltip>Required</Form.HelpText>
    </Form.Group>
    <Form.Group controlId="name-6">
      <Form.ControlLabel>Date Of Birth</Form.ControlLabel>
      <Form.Control name="email" type="email" />
      <Form.HelpText tooltip>Required</Form.HelpText>
    </Form.Group>
    <Form.Group controlId="password-6">
      <Form.ControlLabel>Password</Form.ControlLabel>
      <Form.Control name="password" type="password" autoComplete="off" />
    </Form.Group>
    <Form.Group controlId="password-6">
      <Form.ControlLabel>Confirm Password</Form.ControlLabel>
      <Form.Control name="textarea" rows={5}  />
    </Form.Group>
    <Form.Group>
      <ButtonToolbar>
        <Button appearance="primary"><Link to={'/login'}>Submit</Link></Button>
        <Button appearance="default">Cancel</Button>
      </ButtonToolbar>
    </Form.Group>
  </Form>
  </div>
  </div>
  )
}

export default Signup
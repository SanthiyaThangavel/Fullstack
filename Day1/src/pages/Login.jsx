import { Button, ButtonToolbar, Form } from "rsuite"
import '../assets/css/login.css'
import logo from "../assets/images/yoga-position.png"
import { Link } from "react-router-dom"
const Login=()=>{
    return(
      <div>
        <div>
          <img className="img11" src={logo}   alt=''></img>
        </div>
      <div className="box">
          <p className="p1">LOGIN</p>
          <br></br>
        <Form>
    <Form.Group controlId="name">
      <Form.ControlLabel>Username</Form.ControlLabel>
      <Form.Control name="name" />
      <Form.HelpText>Username is required</Form.HelpText>
    </Form.Group>
    {/* <Form.Group controlId="email">
      <Form.ControlLabel>Email</Form.ControlLabel>
      <Form.Control name="email" type="email" />
      <Form.HelpText tooltip>Email is required</Form.HelpText>
    </Form.Group> */}
    <Form.Group controlId="password">
      <Form.ControlLabel>Password</Form.ControlLabel>
      <Form.Control name="password" type="password" autoComplete="off" />
    </Form.Group>
    {/* <Form.Group controlId="textarea">
      <Form.ControlLabel>Textarea</Form.ControlLabel>
      <Form.Control rows={5} name="textarea"  />
    </Form.Group> */}
    <Form.Group>
      <ButtonToolbar>
        <Button appearance="primary"><Link to={'/home'}>Submit</Link></Button>
        <Button appearance="default">Cancel</Button>
      </ButtonToolbar>
    </Form.Group>
  </Form>
  <br></br>
  <br></br>
  <div>
    <p>New User?</p><p><Link to={'/sign'}>Register Here</Link></p>
  </div>
  </div>
  </div>
    )
}
export default Login
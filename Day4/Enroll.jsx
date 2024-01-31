import { Button, ButtonToolbar, Form } from "rsuite"
import "../assets/css/enroll.css"
// import hnr from "../assets/images/enr.jpeg"
const Enroll=()=>{
    return(
        <div className="enr">
            {/* <img src={hnr} className="img123"></img> */}
            <h1>Enroll</h1>
            <div>
            <Form>
    <Form.Group controlId="name">
      <Form.ControlLabel>Username</Form.ControlLabel>
      <Form.Control name="name" />
      <Form.HelpText>Username is required</Form.HelpText>
    </Form.Group>
    <Form.Group controlId="email">
      <Form.ControlLabel>Email</Form.ControlLabel>
      <Form.Control name="email" type="email" />
      <Form.HelpText tooltip>Email is required</Form.HelpText>
    </Form.Group>
    <Form.Group controlId="password">
      <Form.ControlLabel>Password</Form.ControlLabel>
      <Form.Control name="password" type="password" autoComplete="off" />
    </Form.Group>
    <Form.Group controlId="textarea">
      <Form.ControlLabel>Type of course</Form.ControlLabel>
      <Form.Control rows={5} />
    </Form.Group>
    <Form.Group>
      <ButtonToolbar>
        <Button appearance="primary">Enroll</Button>
        <Button appearance="default">Cancel</Button>
      </ButtonToolbar>
    </Form.Group>
  </Form>
  </div>
        </div>
    )
}
export default Enroll
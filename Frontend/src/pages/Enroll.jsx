import { Button, ButtonToolbar, Form } from "rsuite"
import "../assets/css/enroll.css"
import hnr from "../assets/images/enr1.jpg"
const Enroll=()=>{
    return(
        <div className="enroll">
          <div>
            <img src={hnr} className="img123"></img>
            </div>
            <div className="box123">
            <h3>Enroll</h3>
            <div >
            <Form>
              <Form.Group controlId="name" className="names">
                <Form.ControlLabel>Username</Form.ControlLabel>
                <Form.Control name="name" />
                <Form.HelpText>Username is required</Form.HelpText>
              </Form.Group>
              <Form.Group controlId="email" className="names">
                <Form.ControlLabel>Email</Form.ControlLabel>
                <Form.Control name="email" type="email" />
                <Form.HelpText tooltip>Email is required</Form.HelpText>
              </Form.Group>
              <Form.Group controlId="password" className="names">
                <Form.ControlLabel>Password</Form.ControlLabel>
                <Form.Control name="password" type="password" autoComplete="off"/>
              </Form.Group>
              <Form.Group controlId="textarea" className="names">
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
        </div>
    )
}
export default Enroll
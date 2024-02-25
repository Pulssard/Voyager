import { useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Modals(props) {
  const [show, setShow] = useState(props);

  const handleClose = () => {
    setShow(!props);
    props.changeState(show);
};

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group className="mb-3" >
              <Form.Label>Name and Surname</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name, Surname"
                autoFocus
              />
              </Form.Group>
              <Form.Group className="mb-3" >
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="222-555"
                autoFocus
              />
              </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Your Adress</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Example of a checkout modal"/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modals;
import React, { useState, useEffect } from 'react';
import SplitPanel from '../splitPanel/index';
import 'react-splitter-layout/lib/index.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

export default (YourComponent) => {
  const [screen, setScreen] = useState();

  useEffect(() => {
  }, []);

  function splitHandle() {
    setScreen(SplitPanel)
  }

  function splitHandleBack() {
    setScreen(!SplitPanel)
  }

  return (
    <div>
      <Navbar bg="light" expand="lg">
          <Nav className="mr-auto">
            <NavDropdown title="Reservation" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">New Reservation</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">Update Reservation</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Front Desk" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Arrivals</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">In-House Guests</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">Maintenance</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Finance" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Billing</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Reports" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Housekeeping Report</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">Detailed Availability</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">House Status</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <i className="fas fa-columns fa-2x" style={{ marginRight: '30px' }}></i>
            <Navbar.Text>
              User: <a href="#login" style={{ marginRight: '20px' }}>Mark Otto</a>
            </Navbar.Text>
            <Navbar.Text>
              {/* <button className="btn btn-danger" id="logOut" ><i className="fa fa-sign-out-alt"></i></button> */}
              <button onClick={splitHandle}>Click me</button>
              <button onClick={splitHandleBack}>Click Back</button>
            </Navbar.Text>
          </Navbar.Collapse>
      </Navbar>
      <div className="screen">
        {screen}
      </div>
    </div>
  );
}
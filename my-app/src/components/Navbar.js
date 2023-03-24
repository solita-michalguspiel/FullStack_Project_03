import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";

function MyNavbar({search}) {

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    console.log("Handle search", searchQuery)
    search(searchQuery);
  };

  const editSearch = (event) => {
    setSearchQuery(event.target.value)
  }

  return (
    <div fluid>
      <Navbar expand="lg">
        <nav className="navbar">
          <span className="navbar-brand mb-0 h1">Fake News</span>
        </nav>
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
            </Nav>
            <Form >
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={searchQuery}
                onChange={editSearch}
                />
                    <Button variant="dark" className ="MyButton" onClick= {handleSearch} >Search</Button>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Navbar>
    </div>
  );
}

export default MyNavbar;

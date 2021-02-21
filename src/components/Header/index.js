import React from 'react';
import {Button, Form, FormControl, Navbar} from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/cjs/Nav";
import logo from "../../logo.svg"

const Header = ({repo, owner, setOwner, setRepo, clickHandle}) => {
    const handleRepoChange = (e)=>{
        setRepo(e.target.value)
    }
    const handleOwnerChange = (e)=>{
        setOwner(e.target.value)
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#">
                <img
                    alt=""
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top App-logo"
                />{' '}
                Github
            </Navbar.Brand>
            <Form style={{"flex": "auto"}} inline className="justify-content-end">
                <FormControl onChange={handleOwnerChange} value={owner} type="text" placeholder="Owner Name" className="mr-sm-2" />
                <FormControl onChange={handleRepoChange} value={repo} type="text" placeholder="Repository Name" className="mr-sm-2" />
                <Button onClick={clickHandle} variant="outline-info">Search</Button>
            </Form>
        </Navbar>
    );
};

export default Header;
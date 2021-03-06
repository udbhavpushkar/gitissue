import React from 'react';
import {Button, Form, FormControl, Navbar} from "react-bootstrap";
import logo from "../../githublogo.svg"

const Header = ({repo, owner, setOwner, setRepo, clickHandle}) => {
    const handleRepoChange = (e)=>{
        setRepo(e.target.value)
    }
    const handleOwnerChange = (e)=>{
        setOwner(e.target.value)
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>
                <img
                    alt=""
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                Github Issue
            </Navbar.Brand>
            <Form style={{"flex": "auto"}} inline className="justify-content-end">
                <FormControl onChange={handleOwnerChange} value={owner} type="text" placeholder="Owner Name" className="mr-sm-2" />
                <FormControl onChange={handleRepoChange} value={repo} type="text" placeholder="Repository Name" className="mr-sm-2" />
                <Button onClick={clickHandle} variant="info">Search</Button>
            </Form>
        </Navbar>
    );
};

export default Header;
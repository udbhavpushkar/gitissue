import React, {useEffect, useState} from 'react';
import {Alert, Spinner, Badge, ListGroup, ListGroupItem} from "react-bootstrap";
import Pagination from "../Pagination";

const Issue = ({data, error, loading}) => {

    const [active, setActive] = useState(1)
    const [perPage, setPerPage] = useState(5)

    const indexOfLastItem = active * perPage
    const indexOfFirstItem = indexOfLastItem - perPage
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem)
    const paginate = (number)=>{
        setActive(number)
    }



    if (error){
        return (
            <div className="m-6">
                <Alert style={{"textAlign":"center"}} variant="danger">
                    <Alert.Heading>Not Found</Alert.Heading>
                </Alert>
            </div>
        )
    }

    if (loading){
        return (
            <div style={{"margin": "100px auto", "textAlign" : "center"}}>
                <Spinner style={{"padding": "50px"}} variant="info" animation="grow" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </div>
        )
    }

    return (
        <div className="m-5">
            <ListGroup>
                {currentItems.map(ele=>(
                    <ListGroupItem>{ele.title}
                        {ele.labels.map(la=>(
                            <Badge pill style={{"backgroundColor" : `#${la.color}`, "color": "white"}}>{la.name}</Badge>
                        ))}
                        <p><small className="text-secondary">#{ele.number} opened by {ele.user.login}</small></p>
                    </ListGroupItem>
                ))}
            </ListGroup>
            <Pagination perPage={perPage} paginate={paginate} totalItems={data.length}/>
        </div>
    );
};

export default Issue;
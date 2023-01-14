import React, { Component } from 'react';
import { Card , CardBody, CardTitle, CardSubtitle, CardText, CardLink } from 'reactstrap';

function MenuItem(props)  {
    return ( 
        <div>
            <Card style={{ width: '20rem', padding : '10px'}}>
                <CardBody>
                    <CardTitle tag="h5">{props.dish.name}</CardTitle>
                    <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                    >
                    {props.dish.category}
                    </CardSubtitle>
                </CardBody>
                <img
                    alt="Card cap"
                    src={props.dish.image}
                    width="100%"
                />
                <CardBody>
                    <CardText>{props.dish.description}</CardText>
                    <CardLink href="#">
                    Card Link
                    </CardLink>
                    <CardLink href="#">
                    Another Link
                    </CardLink>
                </CardBody>
            </Card>
        </div>
     );
}

export default MenuItem;
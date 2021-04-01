import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
    }

    renderDish(selectedDish) {
        if (selectedDish != null)
            return(
                <Card>
                    <CardImg top src={selectedDish.image} alt={selectedDish.name} />
                    <CardBody>
                    <CardTitle>{selectedDish.name}</CardTitle>
                    <CardText>{selectedDish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    renderComments(selectedDish) {
        
        if (selectedDish != null) {
            const com = selectedDish.comments.map((comment) => {
                return(
                    <div>
                        <ul className="list-unstyled" key={comment.id}>
                            <li>
                                <p>{comment.comment}</p>
                                <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                            </li>
                        </ul>
                    </div>
                );
            });

            return(com);
        } else
            return(
                <div></div>
            );
    }

    render() {
        if (this.props.dish != null) {
            return (
                <div className="container">
                    <div className="row">
                        <div  className="col-12 col-md-5 m-1">
                            {this.renderDish(this.props.dish)}
                        </div>
                        <div className="col col-md-5 m-1">
                            <h4>Comments</h4>
                            {this.renderComments(this.props.dish)}
                        </div>
                    </div>
                </div>
            );
        } else
            return (
                <div></div>
            );
    }
}

export default DishDetail;
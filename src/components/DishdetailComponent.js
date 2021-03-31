import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
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
                                <p>-- {comment.author} , {comment.date}</p>
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
        return (
            <div className="row">
                <div  className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.selectedDish)}
                </div>
                <div className="col col-md-5 m-1">
                    <h4>Comments</h4>
                    {this.renderComments(this.props.selectedDish)}
                </div>
            </div>
        );
        
    }
}

export default DishDetail;
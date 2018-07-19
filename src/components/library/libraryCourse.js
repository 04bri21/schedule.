import { connect } from "react-redux";
import { toggleEnrolled } from "../../actions";
import React, { Componet } from 'react';
import Arrow from '../arrow';
import Action from '../add';



class LibraryCourse extends Componet {

    constructor(props) {
        super(props)

        this.state = {
            status: true
        }
    }



    renderDescription = function(){
        if(!this.state.status) {
            return (
                <div className="library-course__description">
                <label>Course Description</label>
                    <p>
                    {this.props.course.description}
                    </p>
                </div>
            );
        }
    }.bind(this);

    handleCallback = function(status) {
        this.setState({ status })
    }.bind(this)

    render(){
        return(
            <div className="library-course">
            <div className="library-course__title-check">
            <label className="Library-course__title">{this.props.course.title}</label>
            </div>

            <div className="library-course__line"></div>
        <Arrow 
    callback={status => this.handleCallback(status)}
    id={this.props.id} 
    className="library-course__arrow"
    />

        <Add onClick={() => this.props.toggleEnrolled(this.props.id)} className="library-course__action"/>
        {this.renderDescription()}
        </div>

        );
    }
}

export default connect(null,[togged])(LibraryCourse);
import React, { Componet } from 'react';

import { connect } from "react-redux"
;
class scheduleCourse extends Componet {
    render(){
        return(
            <div className="schedule-course">
                 <label className="schedule-course__label">{this.props.title}</label>
                 <Add onClick={() => this.props.toggleEnrolled(this.props.id)} className="schedule-course__action"/>
            </div>

        )
    }
}

export default connect(null,[togged])(ScheduleCourse);
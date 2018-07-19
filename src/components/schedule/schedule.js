import React, {Componet} from 'react';
import Gradient from '../gradient';
import ScheduleCourse from './scheduleCourse';
import ProgressTracker from './scheduleCourse';

class Schedule extends Componet {
    renderCourses(){
        const data = this.props.courses 

        return data.map((course, index)=> {
            if(course.enrolled &&this.amountEnrolled!=5) {
                this.amountEnrolled++;
                return <ScheduleCourse {...course} key={index}/>
            }
        })
    }
    render(){
        this.amountEnrolled = 0
        return(
            <div className="schedule">
                <h1 className="schedule__title">My schedule</h1>
                { this.renderCourses()}
                <ProgressTracker amountPossible={5} amountEnrolled={this.amountEnrolled}/>
                <Gradient/>
            </div>
        )
    }
}

export default Schedule
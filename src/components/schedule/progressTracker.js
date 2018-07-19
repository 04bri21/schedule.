import React, { Componet } from 'react';

class Progresstracker extends Componet {

    calculateProgress = function(){
        return (this.props.amountEnrolled / this.props.amountPossible) * 100;
    }.bind(this);
    render(){
        return (
            <div className="progress-tracker">
                <Label className="progress-tracker__label">Progress Tracker</Label>
                <div className="progress-tracker__percentage">
                    0%
                </div>
            </div>
        )
    }
}

export default ProgressTracker;
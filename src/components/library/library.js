import React, {Componet} from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

import LibraryCourse from './LibraryCourse';

class Library extends Componet {

    componetDidMount() {
        this.props.fetchCourses ()
    }

    renderCourses(){
        const data = this.props.courses 

        return data.map ((course, index)=> {
        return <libraryCourse {...course} key={index}/>
    });
    render(); {      return(
            <div className="library">
                <h1 className="library__title">Course Library</h1>
                <LibraryCourse/>
                <LibraryCourse/>
                <LibraryCourse/>
            </div>
        )
    }


//export default connect(null, actions){library};
}
}
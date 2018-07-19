import 
{ FETCH_COURSES ,
    TOGGLE_ENROLLED
} from './types';

export function toggleEnrolled (id) {
    return {
        type:TOGGLE_ENROLLED,
        payload: id
    }
}


export function fetchCourses() {
    return {
        type: FETCH_COURSES,
        payload: [
            {
                id: 0,
                title: "Problem Solving",
                description: "How to find ways to solve problems."
            },
            {
                id: 1,
                title: "Html and Css bootcamp",
                description: "Languages that you can learn to code!"
            },
           
            {
                id: 2,
                title: "UX FOR DEVELOPERS",
                description: " This helps Developers"
            },
        ]
            
    }
}
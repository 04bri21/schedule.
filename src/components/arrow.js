import React, { Componet }from 'react';

class Arrow extends Componet {

    constructor(props) {
        super(props)

        this.state = {
            status: false
        }
    }

toggleArrow = function(){
    this.props.callback (this.state.status)

    if(this.state.status) {

        document.getElementById('arrow').classList.remove('arrow-closed');
    } else {

        document.getElementById('arrow').classList.add('arrow-closed');
    }

    this.setState({ status: !this.state.status})
}.bind(this);
    
render() {
    this.id = `arrow-${this.props.id}`
        return (
            <a id="arrow"onClick={() => this.handle.toggleArrow()} className={`${this.props.className}arrow`}></a>
        )
    }
}

export default Arrow
import React, { Componet }from 'react';
class Add extends Componet {
    render() {
        return (
            <button onClick={this.props.onClick()}  className={`${this.props.className}add`}>
            
            </button>
        )
    }
}

export default Add
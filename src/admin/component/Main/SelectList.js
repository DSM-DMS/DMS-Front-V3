import React, {Component} from 'react';

class SelectList extends Component {

    componentWillUnmount() {
        this.props.onSelectOff()
    }

    render() {
        return (
            <div className = "main--download--selectbox--list--wrapper">
                {this.props.children}
            </div>
        )
    }
}

export default SelectList;
import React from 'react';

let SubmitButton = React.createClass({
    render() {
        return (
            <button type="submit" className="ap-ui__btn-default">{this.props.title}</button>
        );

    }
});

export default SubmitButton;

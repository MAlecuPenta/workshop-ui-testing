import React from 'react';
import PropTypes from 'prop-types';

const debounceTime = 200;

class Button extends React.PureComponent {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.timeout = null;
    }

    handleClick(event) {
        if (this.timeout) {
            clearTimeout(this.timeout);
        }

        this.timeout = setTimeout(() => this.props.onClick(event), debounceTime);
    }

    render() {
        return <button onClick={this.handleClick}>{this.props.children}</button>;
    }
}

Button.defaultProps = { children: '' };

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node
};

export default Button;

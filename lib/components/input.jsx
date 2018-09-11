import React from 'react';
import PropTypes from 'prop-types';

const minInputLength = 4;

const isValid = val => val && val.length >= minInputLength;

const minLengthErrorMessage = `Your input must be at least ${minInputLength} characters without any space`;

class Input extends React.PureComponent {
    constructor(props) {
        super(props);

        this.timeout = null;
        this.state = { errors: null };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const { value } = event.target;

        if (isValid(value)) {
            this.props.onChange(value);
            this.setState({ errors: null });
        } else {
            this.setState({ errors: minLengthErrorMessage });
        }
    }

    render() {
        const { errors } = this.state;

        return (
            <div>
                <input onChange={this.handleChange} />
                <span>{errors}</span>
            </div>
        );
    }
}

Input.defaultProps = { onChange: () => {} };

Input.propTypes = { onChange: PropTypes.func };

export default Input;

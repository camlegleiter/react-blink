import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

class Blink extends Component {
  constructor(props) {
    super(props);
  }

  getInitialState() {
    return {
      isVisible: true,
    };
  }

  componentDidMount() {
    this._animate();
  }

  componentDidUpdate() {
    this._animate();
  }

  componentWillUnmount() {
    clearInterval(this._blinkTimer);
  }

  render() {
    const { className, children, text } = this.props;
    const style = {
      visibility: this.state.isVisible ? 'visible' : 'hidden',
    };

    return (
      <div className={`ui-blink ${className}`}>
        <span ref="text" style={style}>{children}</span>
      </div>
    );
  }

  _animate() {
    clearInterval(this._blinkTimer);
    const { rate } = this.props;

    this._blinkTimer = setInterval(() => {
      this.setState({
        isVisible: !this.state.isVisible,
      });
    }, rate);
  }
}

Blink.propTypes = {
  rate: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.node,
};

Blink.defaultProps = {
  rate: 1000,
  className: '',
  children: '',
}

export default Blink;

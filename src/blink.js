import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
    };
  }

  componentDidMount() {
    this.animate();
  }

  componentDidUpdate() {
    this.animate();
  }

  componentWillUnmount() {
    clearInterval(this.blinkTimer);
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

  animate() {
    clearInterval(this.blinkTimer);

    const { rate } = this.props;

    this.blinkTimer = setInterval(() => {
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

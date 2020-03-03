import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const withBooleanFlag = (Component) => {
  class WithBooleanFlag extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        booleanFlag: props.booleanFlag,
      };

      this._handleToggleFlag = this._handleToggleFlag.bind(this);
    }

    _handleToggleFlag() {
      this.setState((prevState) => ({
        booleanFlag: !prevState.booleanFlag,
      }));
    }

    render() {
      return (
        <Component
          {...this.props}
          booleanFlag={this.state.booleanFlag}
          onToggleFlag={this._handleToggleFlag}
        />
      );
    }
  }

  WithBooleanFlag.propTypes = {
    booleanFlag: PropTypes.bool.isRequired,
  };

  return WithBooleanFlag;
};

export default withBooleanFlag;

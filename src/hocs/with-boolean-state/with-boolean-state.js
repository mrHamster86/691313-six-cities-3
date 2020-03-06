import React, {PureComponent} from 'react';

const withBooleanState = (Component) => {
  class WithBooleanState extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        booleanState: false,
      };

      this._handleToggle = this._handleToggle.bind(this);
    }

    _handleToggle() {
      this.setState((prevState) => ({
        booleanState: !prevState.booleanState,
      }));
    }

    render() {
      return (
        <Component
          {...this.props}
          booleanState={this.state.booleanState}
          onToggle={this._handleToggle}
        />
      );
    }
  }

  WithBooleanState.propTypes = {};

  return WithBooleanState;
};

export default withBooleanState;

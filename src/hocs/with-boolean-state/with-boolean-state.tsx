import * as React from 'react';

type Props = null
type State = {
  booleanState: boolean;
}

const withBooleanState = (Component) => {
  class WithBooleanState extends React.PureComponent<Props, State> {
    props: Props;
    state: State;
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

  return WithBooleanState;
};

export default withBooleanState;

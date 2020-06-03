import React, { Component, ComponentType } from "react";

export interface ResponsivenessProps {
  isMobile?: boolean;
  isTablet?: boolean;
  isBigScreen?: boolean;
}

// TODO: re-use 
const withResponsiveness = <P extends ResponsivenessProps>(C: ComponentType<P>) => {
  return class withResponsivenessWrapper extends Component<
    P & ResponsivenessProps
  > {
    readonly state = {
      isMobile: false,
      isTablet: false,
      isBigScreen: false,
    };

    constructor(props: P) {
      super(props);
      this.updatePredicate = this.updatePredicate.bind(this);
    }

    componentDidMount() {
      this.updatePredicate();
      window.addEventListener("resize", this.updatePredicate);
    }

    componentWillUnmount() {
      window.removeEventListener("resize", this.updatePredicate);
    }

    updatePredicate = () => {
      this.setState({
        isMobile: window.innerWidth <= 600,
        isTablet: window.innerWidth > 600 && window.innerWidth <= 1024,
        isBigScreen: window.innerWidth >= 2400,
      });
    };

    render() {
      return (
        <C
          {...(this.props as P)}
          {...this.state}
          isMobile={this.state.isMobile}
          isTablet={this.state.isTablet}
          isBigScreen={this.state.isBigScreen}
        />
      );
    }
  };
};

export default withResponsiveness;

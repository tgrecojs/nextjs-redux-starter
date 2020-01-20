import React, { Component } from 'react';
import { Global, css } from '@emotion/core';

const withLayout = ComposedComponent => {
  return class HOC extends Component {
    render() {
      console.log('withLayout is first');
      console.log('this.props', this.props);
      return (
        <>
          <Global
            styles={css`
              body {
                margin: 0;
                padding: 0;
                font-family: 'Noto Sans', sans-serif;
              }
              div {
                font-family: 'Noto Sans', sans-serif;
              }
              .content {
                flex: 1;
                min-height: 100vh;
              }
            `}
          />
          <ComposedComponent className="content" {...this.props} />
        </>
      );
    }
  };
};

export default withLayout;

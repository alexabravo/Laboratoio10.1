import React from 'react';

class Display extends React.Component {
  render() {
    const { estilo } = this.props
    const { valor } = this.props
    return (
      <input id='display' type='display' className={estilo} value={valor} readOnly />
    )
  }
}
export default Display

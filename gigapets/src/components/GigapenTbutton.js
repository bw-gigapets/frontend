import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'

class ButtonExampleToggle extends Component {
  state = {}
  handleClick = () =>
    this.setState((prevState) => ({ active: !prevState.active }))

  render() {
    const { active } = this.state

    return (
      <Button toggle active={active} onClick={this.handleClick}>
        Submit
      </Button>
    )
  }
}

export default ButtonExampleToggle
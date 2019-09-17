import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Button , Input , Form , FormGroup} from 'reactstrap'

class ChatInput extends Component {
  static propTypes = {
    onSubmitMessage: PropTypes.func.isRequired,
  }
  state = {
    message: '',
  }

  render() {
    return (
      <div className="down">
      <Form
        action="."
        onSubmit={e => {
          e.preventDefault()
          this.props.onSubmitMessage(this.state.message)
          this.setState({ message: '' })
        }}
      >
        <Input
          type="text"
          placeholder={'Enter message...'}
          value={this.state.message}
          onChange={e => this.setState({ message: e.target.value })}
          // className="col-md-9"
          style={{float:"left"},{width: 800 + "px"}}
        />
        <Button type="submit" value={'Send'}  style={{float:"right"}}> Send </Button>
      </Form>
      </div> 
    )
  }
}

export default ChatInput

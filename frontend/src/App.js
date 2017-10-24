import React from "react"
import { Container, Row, Col, Button } from "reactstrap"

import Form from "./Form"
import Person from "./Person"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      people: [],
      showControls: false
    }
    this._toggleControls = this._toggleControls.bind(this)
    this._handleSubmitData = this._handleSubmitData.bind(this)
  }

  async componentWillMount() {
    const res = await fetch("http://localhost:3333")
    const data = await res.json()
    this.setState({ people: data })
    console.log(this.state)
  }

  _toggleControls() {
    this.setState(state => ({
      showControls: !state.showControls
    }))
  }

  _handleSubmitData(data) {
    console.log(data)
    this.setState(prevState => ({
      people: prevState.people.concat([data])
    }))
  }

  render() {
    return (
      <Container>
        <Row>
          <Col className="m-1">
            <h3>Submission Form</h3>
            <Form onSubmitData={this._handleSubmitData} />
          </Col>
        </Row>
        <Row>
          <Col className="m-1">
            <h3>Settings</h3>
            <Button onClick={this._toggleControls}>Toggle Controls</Button>
          </Col>
        </Row>
        <Row>
          {this.state.people.map(person => {
            return (
              <Person
                key={person.id}
                name={person.name}
                age={person.age}
                email={person.email}
                image={person.image}
                showControls={this.state.showControls}
              />
            )
          })}
        </Row>
      </Container>
    )
  }
}

export default App

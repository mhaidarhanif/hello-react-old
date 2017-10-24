import React from "react"
import PropTypes from "prop-types"
import {
  Col,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardTitle,
  CardText
} from "reactstrap"

class Person extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      age: props.age || 0,
      showEmail: true,
      showAge: true
    }
    this._incrementAge = this._incrementAge.bind(this)
    this._decrementAge = this._decrementAge.bind(this)
    this._toggleEmail = this._toggleEmail.bind(this)
    this._toggleAge = this._toggleAge.bind(this)
  }

  _incrementAge() {
    this.setState(prevState => ({
      age: prevState.age + 1
    }))
  }

  _decrementAge() {
    this.setState(prevState => ({
      age: prevState.age - 1
    }))
  }

  _toggleEmail() {
    this.setState(state => ({
      showEmail: !state.showEmail
    }))
  }

  _toggleAge() {
    this.setState(state => ({
      showAge: !state.showAge
    }))
  }

  render() {
    return (
      <Col className="m-1">
        <Card>
          <CardBody>
            <CardTitle>{this.props.name}</CardTitle>
            <CardText>
              {this.state.showEmail && `(${this.props.email})`}{" "}
              {this.state.showAge &&
                `is ${this.state.age} year${this.state.age > 1
                  ? `s old`
                  : ` old`}`}
            </CardText>
            {this.props.showControls && (
              <ButtonGroup>
                <Button onClick={this._toggleEmail} color="primary">
                  {`Email`}
                </Button>
                <Button onClick={this._toggleAge} color="secondary">
                  {`Age`}
                </Button>
                <Button onClick={this._incrementAge} color="success">
                  {`+`}
                </Button>
                <Button onClick={this._decrementAge} color="danger">
                  {`-`}
                </Button>
              </ButtonGroup>
            )}
          </CardBody>
        </Card>
      </Col>
    )
  }
}

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

Person.defaultProps = {
  email: "unknown@impactbyte.com"
}

export default Person

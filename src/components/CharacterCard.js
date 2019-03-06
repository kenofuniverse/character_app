import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { Row, Col, Card, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import '../styles/character-card.scss'

const fromNow = date => moment(date).fromNow()

const CharacterCard = ({ item, isSelected, onSelectItem }) => {
  return (
    <Card className="card">
      <Card.Img variant="top" src={item.image} className="card__image" />
      <Card.Body>
        <Card.Title>
          <Link to={`/character/${item.id}`}>{item.name}</Link>
        </Card.Title>
        <Card.Text>{item.type}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Row>
          <Col xs={8}>
            <small className="text-muted">
              Created {fromNow(item.created)}
            </small>
          </Col>
          <Col xs={4} className="text-right">
            <Form.Check
              type="checkbox"
              checked={isSelected}
              onChange={onSelectItem}
            />
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  )
}

CharacterCard.defaultProps = {
  isSelected: false
}

CharacterCard.propTypes = {
  item: PropTypes.object.isRequired,
  isSelected: PropTypes.bool,
  onSelectItem: PropTypes.func.isRequired,
}

export default CharacterCard

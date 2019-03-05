import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { Row, Col, Card, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CharacterContext } from './CharacterContext'
import '../styles/character-card.scss'

const fromNow = date => moment(date).fromNow()

const CharacterCard = ({ item }) => {
  const [selected, setSelected] = useContext(CharacterContext)
  const handleCheckChange = e => {
    if (e.target.checked) {
      if (selected.indexOf(item.id) === -1) {
        setSelected([...selected, item.id])
      }
    } else {
      if (selected.indexOf(item.id) > -1) {
        const index = selected.indexOf(item.id)
        const modified = [...selected]
        modified.splice(index, 1)
        setSelected(modified)
      }
    }
  }

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
              checked={selected.indexOf(item.id) > -1}
              onChange={handleCheckChange}
            />
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  )
}

CharacterCard.propTypes = {
  item: PropTypes.object.isRequired
}

export default CharacterCard

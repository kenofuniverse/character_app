import React from 'react'
import PropTypes from 'prop-types'
import {
  Card
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import * as moment from 'moment'

const fromNow = (date) => moment(date).fromNow()

const CharacterCard = ({item}) => (
  <Card>
    <Card.Img variant="top" src={item.image} />
    <Card.Body>
      <Card.Title>
        <Link to={`/character/${item.id}`}>{item.name}</Link>
      </Card.Title>
      <Card.Text>
        {item.type}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">{fromNow(item.created)}</small>
    </Card.Footer>
  </Card>
)

CharacterCard.propTypes = {
  item: PropTypes.object.isRequired,
}

export default CharacterCard

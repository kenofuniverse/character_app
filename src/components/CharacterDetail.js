import React, { useEffect } from 'react'
import { Redirect } from 'react-router'
import PropTypes from 'prop-types'
import { Container } from 'react-bootstrap'
import Loader from 'react-loader-spinner'
import { Row, Col, Image, Table, Button } from 'react-bootstrap'
import moment from 'moment'
import _ from 'lodash'

const CharacterDetail = ({
  detail,
  match,
  history,
  isFetching,
  loadDetail
}) => {
  if (!match.params.id) {
    return <Redirect to="/" />
  }

  useEffect(() => {
    if (match.params.id) {
      loadDetail(match.params.id)
    }
  }, [])

  return (
    <div className="character-detail">
      {isFetching && (
        <Container className="text-center">
          <Loader
            className="mt-10"
            type="Oval"
            color="#007bff"
            height="50"
            width="50"
          />
        </Container>
      )}
      {!_.isEmpty(detail) && !isFetching && (
        <Row>
          <Col sm={12} className="mb-4">
            <Button variant="light" onClick={() => history.goBack()}>
              Go Back
            </Button>
          </Col>
          <Col sm={4}>
            <Image src={detail.image} thumbnail />
          </Col>
          <Col sm={8}>
            <h1 className="character-detail__page-title mb-3">{detail.name}</h1>
            <Table striped bordered hover>
              <tbody>
                <tr>
                  <td>Status</td>
                  <td>{detail.status}</td>
                </tr>
                <tr>
                  <td>Species</td>
                  <td>{detail.species}</td>
                </tr>
                <tr>
                  <td>Type</td>
                  <td>{detail.type}</td>
                </tr>
                <tr>
                  <td>Gender</td>
                  <td>{detail.gender}</td>
                </tr>
                <tr>
                  <td>Origin</td>
                  <td>{detail.origin.name}</td>
                </tr>
                <tr>
                  <td>Location</td>
                  <td>{detail.location.name}</td>
                </tr>
                <tr>
                  <td>Created</td>
                  <td>{moment(detail.created).format("MMMM Do YYYY")}</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      )}
    </div>
  )
}

CharacterDetail.defaultProps = {
  detail: {}
}

CharacterDetail.propTypes = {
  detail: PropTypes.object,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  loadDetail: PropTypes.func.isRequired
}

export default CharacterDetail

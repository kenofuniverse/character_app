import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Container, Button, Row, Col, Alert } from 'react-bootstrap'
import Loader from 'react-loader-spinner'
import CharacterList from './CharacterList'
import Pagination from './Pagination'
import { CharacterContext } from './CharacterContext'

const Landing = ({
  match,
  history,
  characterList,
  pageInfo,
  isFetching,
  isError,
  loadCharacters
}) => {
  const [page, setPage] = useState(parseInt(match.params.page) || 1)
  const [selected, setSelected] = useState([])
  const handleViewSelected = () => {
    history.push(`/characters/${selected.join(",")}`)
  }
  const handlePageChange = page => {
    setPage(page)
    history.push(`/${page}`)
  }

  useEffect(() => {
    loadCharacters(page)
  }, [page])

  return (
    <div className="landing">
      <h1 className="landing__page-title mb-3">All Characters</h1>
      <CharacterContext.Provider value={[selected, setSelected]}>
        <CharacterList items={characterList} />
      </CharacterContext.Provider>
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
      {isError && <Alert variant="danger">Sorry! Not Found</Alert>}
      <Row>
        <Col sm={6}>
          {pageInfo && pageInfo.pages && (
            <Pagination
              current={page}
              total={pageInfo.pages}
              onClickItem={handlePageChange}
            />
          )}
        </Col>
        <Col sm={6} className="text-right">
          {selected.length > 0 && (
            <Button onClick={handleViewSelected}>View Selected</Button>
          )}
        </Col>
      </Row>
    </div>
  )
}

Landing.defaultProps = {
  characterList: [],
  pageInfo: {}
}

Landing.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  characterList: PropTypes.array,
  pageInfo: PropTypes.object,
  isFetching: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  loadCharacters: PropTypes.func.isRequired
}

export default Landing

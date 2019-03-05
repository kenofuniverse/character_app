import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Container } from 'react-bootstrap'
import Loader from 'react-loader-spinner'
import CharacterList from './CharacterList'
import Pagination from './Pagination'

const Landing = ({characterList, pageInfo, isFetching, loadCharacters}) => {
  const [page, setPage] = useState(1)
  useEffect(() => {
    loadCharacters(page)
  }, [page]); // similar to componentDidMount

  return (
    <div className='landing'>
      <h1 className='landing__page-title mb-3'>
        All Characters
      </h1>
      <CharacterList items={characterList} />
      { isFetching &&
        <Container className='text-center'>
          <Loader 
            className='mt-10'
            type='Oval'
            color='#007bff'
            height='50'	
            width='50'
          />
        </Container>
      }
      { pageInfo && pageInfo.pages &&
        <Pagination current={page} total={pageInfo.pages} onClickItem={(page) => setPage(page)} />
      }
    </div>
  )
}

Landing.defaultProps = {
  characterList: [],
  pageInfo: {}
}

Landing.propTypes = {
  characterList: PropTypes.array,
  pageInfo: PropTypes.object,
  isFetching: PropTypes.bool.isRequired,
  loadCharacters: PropTypes.func.isRequired,
}

export default Landing

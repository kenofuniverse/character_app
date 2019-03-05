import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Container } from 'react-bootstrap'
import { Redirect } from 'react-router'
import Loader from 'react-loader-spinner'
import { Form, FormControl, Button } from 'react-bootstrap'
import CharacterList from './CharacterList'
import Pagination from './Pagination'

const Search = ({characterList, pageInfo, match, history, isFetching, searchCharacters}) => {
  if (!match.params.keyword) {
    return (
      <Redirect to='/' />
    )
  }

  const [page, setPage] = useState(1)
  const [keyword, setKeyword] = useState(match.params.keyword || '')
  const handleSearch = (e) => {
    e.preventDefault()
    searchCharacters(keyword, page)
    history.push(`/search/${keyword}`)
  }

  useEffect(() => {
    if (keyword) {
      searchCharacters(keyword, page)
    }
  }, [page]); // similar to componentDidMount

  return (
    <div className='landing'>
      <h1 className='landing__page-title mb-3'>
        Search Characters
      </h1>
      <div className='mb-3'>
        <Form inline onSubmit={handleSearch}>
          <FormControl
            type='text'
            placeholder='Search Chracters'
            className='mr-sm-2'
            value={keyword}
            onChange={e => setKeyword(e.target.value)}
          />
          <Button variant='primary' type='submit'>Search</Button>
        </Form>
      </div>
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

Search.defaultProps = {
  characterList: [],
  pageInfo: {}
}

Search.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  characterList: PropTypes.array,
  pageInfo: PropTypes.object,
  isFetching: PropTypes.bool.isRequired,
  searchCharacters: PropTypes.func.isRequired,
}

export default Search

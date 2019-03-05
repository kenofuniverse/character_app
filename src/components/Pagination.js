import React from 'react'
import PropTypes from 'prop-types'
import { Pagination } from 'react-bootstrap'
import _ from 'lodash';

const generatePageNumbers = (totalPages, currentPage) => {
  const limit = 5;
  const offset = 2;

  if (currentPage <= offset + 1) {
    return _.range(1, limit > totalPages ? totalPages + 1 : limit + 1);
  }
  if (currentPage >= totalPages - offset) {
    return _.range(limit > totalPages ? 1 : totalPages - limit + 1, totalPages + 1);
  }
  return _.range(currentPage - offset, currentPage + offset + 1);
}

const PaginationButons = ({current, total, onClickItem}) => (
  <Pagination>
    <Pagination.Prev disabled={current <= 1} onClick={() => onClickItem(current - 1)} />
    { generatePageNumbers(total, current).map((page, index) => (
        <Pagination.Item key={index} active={page === current} onClick={() => onClickItem(page)}>{page}</Pagination.Item>
      ))
    }
    <Pagination.Next disabled={current >= total} onClick={() => onClickItem(current + 1)} />
  </Pagination>
)

PaginationButons.propTypes = {
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  onClickItem: PropTypes.func.isRequired
}

export default PaginationButons

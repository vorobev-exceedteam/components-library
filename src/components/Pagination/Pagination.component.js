import React, { useCallback, useEffect, useMemo, useState } from 'react';
import BasePaginationBg from '../Base/BasePagination/BasePaginationBg';
import BasePaginationButton from '../Base/BasePagination/BasePaginationButton';

const Pagination = ({
  page,
  totalElements,
  limit,
  toFirstPageElement,
  toPreviousPageElement,
  toNextPageElement,
  toLastPageElement,
  nextPreviousButtons,
  firstLastButtons
}) => {
  const totalPages = useMemo(() => Math.ceil(totalElements / limit) || 1, [
    totalElements,
    limit
  ]);

  const validatePage = useMemo(
    () => (page) => {
      switch (true) {
        case page > totalPages:
          return totalPages;
        case !page:
        case page < 1:
          return 1;
        default:
          return page;
      }
    },
    [totalPages]
  );

  const [currentPage, setPage] = useState(validatePage(page));

  const changePage = (page) => () => {
    setPage(validatePage(page));
  };

  const toNextPage = useCallback(() => setPage(validatePage(currentPage + 1)), [
    setPage,
    validatePage,
    currentPage
  ]);

  const toPrevPage = useCallback(() => setPage(validatePage(currentPage - 1)), [
    setPage,
    validatePage,
    currentPage
  ]);

  const toLastPage = useCallback(() => setPage(totalPages), [
    setPage,
    totalPages
  ]);

  const toFirstPage = useCallback(() => setPage(1), [setPage]);

  const pagesId = useMemo(() => {
    const pages = [];
    for (let p = 1; p <= totalPages; p++) {
      pages.push(p);
    }
    return pages;
  }, [totalPages]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setPage(totalPages);
    }
  }, [setPage, totalPages, currentPage]);

  return (
    <BasePaginationBg>
      {firstLastButtons ? (
        <BasePaginationButton
          onClick={toFirstPage}
          disabled={currentPage === 1}
        >
          {toFirstPageElement || 'First'}
        </BasePaginationButton>
      ) : null}
      {nextPreviousButtons ? (
        <BasePaginationButton onClick={toPrevPage} disabled={currentPage === 1}>
          {toPreviousPageElement || 'Previous'}
        </BasePaginationButton>
      ) : null}

      {pagesId.map((page) => (
        <BasePaginationButton
          key={'page: ' + page}
          active={currentPage === page}
          onClick={changePage(page)}
        >
          {page}
        </BasePaginationButton>
      ))}

      {nextPreviousButtons ? (
        <BasePaginationButton
          onClick={toNextPage}
          disabled={currentPage === totalPages}
        >
          {toNextPageElement || 'Next'}
        </BasePaginationButton>
      ) : null}
      {firstLastButtons ? (
        <BasePaginationButton
          onClick={toLastPage}
          disabled={currentPage === totalPages}
        >
          {toLastPageElement || 'Last'}
        </BasePaginationButton>
      ) : null}
    </BasePaginationBg>
  );
};

export default Pagination;

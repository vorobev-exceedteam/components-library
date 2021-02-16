import React, { useCallback, useEffect, useMemo, useState } from 'react';
import BasePaginationBg from '../Base/BasePagination/BasePaginationBg';
import BasePaginationButton from '../Base/BasePagination/BasePaginationButton';

const Pagination = ({
  page,
  color,
  totalElements,
  limit,
  toFirstPageElement,
  toPreviousPageElement,
  toNextPageElement,
  toLastPageElement,
  nextPreviousButtons,
  nextPreviousButtonsSeparated,
  firstLastButtons,
  firstLastButtonsSeparated,
  pagesBeforeCollapse,
  pagesWithinCollapse
}) => {
  const totalPages = useMemo(() => Math.ceil(totalElements / limit) || 1, [
    totalElements,
    limit
  ]);

  const validatePage = (page) => {
    switch (true) {
      case page > totalPages:
        return totalPages;
      case !page:
      case page < 1:
        return 1;
      default:
        return page;
    }
  };

  const [currentPage, setPage] = useState(validatePage(page));

  const changePage = (page) => () => {
    switch (page) {
      case 'collapseStart':
        setPage(currentPage - pagesWithinCollapse - 1);
        break;
      case 'collapseFromStart':
        setPage(pagesBeforeCollapse + 1);
        break;
      case 'collapseFromEnd':
        setPage(totalPages - pagesBeforeCollapse);
        break;
      case 'collapseEnd':
        setPage(currentPage + pagesWithinCollapse + 1);
        break;
      default:
        setPage(validatePage(page));
        break;
    }
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
    switch (true) {
      case currentPage > pagesBeforeCollapse &&
        totalPages - currentPage >= pagesBeforeCollapse:
        pages.push('collapseStart');
        for (
          let p = currentPage - pagesWithinCollapse;
          p <= currentPage + pagesWithinCollapse;
          p++
        ) {
          pages.push(p);
        }
        pages.push('collapseEnd');
        break;
      case currentPage <= pagesBeforeCollapse &&
        totalPages > pagesBeforeCollapse:
        for (let p = 1; p <= pagesBeforeCollapse; ++p) {
          pages.push(p);
        }
        pages.push('collapseFromStart');
        break;
      case currentPage > pagesBeforeCollapse &&
        totalPages - currentPage < pagesBeforeCollapse:
        pages.push('collapseFromEnd');
        for (
          let p = totalPages - pagesBeforeCollapse + 1;
          p <= totalPages;
          ++p
        ) {
          pages.push(p);
        }
        break;
      default:
        break;
    }
    return pages;
  }, [totalPages, currentPage, pagesBeforeCollapse, pagesWithinCollapse]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setPage(totalPages);
    }
  }, [setPage, totalPages, currentPage]);

  const firstButton = useMemo(() => {
    if (firstLastButtons) {
      return (
        <BasePaginationButton
          color={color}
          onClick={toFirstPage}
          disabled={currentPage === 1}
        >
          {toFirstPageElement || 'First'}
        </BasePaginationButton>
      );
    }
  }, [firstLastButtons, toFirstPage, currentPage, toFirstPageElement]);

  const previousButton = useMemo(() => {
    if (nextPreviousButtons) {
      return (
        <BasePaginationButton
          color={color}
          onClick={toPrevPage}
          disabled={currentPage === 1}
        >
          {toPreviousPageElement || 'Previous'}
        </BasePaginationButton>
      );
    }
  }, [nextPreviousButtons, toPrevPage, currentPage, toPreviousPageElement]);

  return (
    <BasePaginationBg>
      {firstButton}
      {previousButton}

      {pagesId.map((page) => {
        console.log(page);
        switch (page) {
          case 'collapseFromStart':
          case 'collapseStart':
          case 'collapseEnd':
          case 'collapseFromEnd':
            return (
              <BasePaginationButton
                color={color}
                key={'collapse: ' + page}
                onClick={changePage(page)}
              >
                ...
              </BasePaginationButton>
            );
          default:
            return (
              <BasePaginationButton
                color={color}
                key={'page: ' + page}
                active={currentPage === page}
                onClick={changePage(page)}
              >
                {page}
              </BasePaginationButton>
            );
        }
      })}

      {nextPreviousButtons ? (
        <BasePaginationButton
          onClick={toNextPage}
          color={color}
          disabled={currentPage === totalPages}
        >
          {toNextPageElement || 'Next'}
        </BasePaginationButton>
      ) : null}
      {firstLastButtons ? (
        <BasePaginationButton
          onClick={toLastPage}
          color={color}
          disabled={currentPage === totalPages}
        >
          {toLastPageElement || 'Last'}
        </BasePaginationButton>
      ) : null}
    </BasePaginationBg>
  );
};

export default Pagination;

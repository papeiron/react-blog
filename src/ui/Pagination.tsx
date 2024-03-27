import styled from 'styled-components';

import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { useSearchParams } from 'react-router-dom';

const StyledPagination = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

type ButtonProps = {
  detailstwo: string;
};

const Buttons = styled.div<ButtonProps>`
  display: flex;
  gap: 0.3rem;

  margin: ${(props) => (props.detailstwo === 'true' ? '0 auto' : '0 0 0 auto')};
`;

const PaginationButton = styled.button`
  background-color: var(--color-grey-50);
  border: 1px solid var(--color-grey-300);
  border-radius: 7px;
  padding: 1rem;
  font-size: 1.7rem;

  &:active {
    transform: translateY(3%);
  }
`;

const PageCount = styled.div`
  display: flex;
  align-items: center;
  margin: 0 1rem;
`;

type PaginationProps = {
  count: number;
  itemByPage?: number;
  detailsOne?: boolean;
  detailsTwo?: boolean;
};

function Pagination({
  count,
  itemByPage = 10,
  detailsOne = false,
  detailsTwo = false
}: PaginationProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get('page') ? 1 : Number(searchParams.get('page'));

  const pageCount = Math.ceil(count / itemByPage);

  const nextPage = () => {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;

    searchParams.set('page', next.toString());
    setSearchParams(searchParams);
  };

  const prevPage = () => {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;

    searchParams.set('page', prev.toString());
    setSearchParams(searchParams);
  };

  const pageNumbers = [];
  for (let i = 1; i <= pageCount; i++) {
    pageNumbers.push();
  }

  if (pageCount <= 1) return null;
  // Showing 1 to 10 of 24 results
  return (
    <StyledPagination>
      {detailsOne && (
        <p>
          Showing <span>{(currentPage - 1) * itemByPage + 1}</span> to{' '}
          <span>{currentPage === pageCount ? count : currentPage * itemByPage}</span> of{' '}
          <span>{count} results</span>
        </p>
      )}
      <Buttons detailstwo={detailsTwo.toString()}>
        <PaginationButton onClick={prevPage} disabled={currentPage === 1}>
          <SlArrowLeft />
        </PaginationButton>
        {detailsTwo && (
          <PageCount>
            <p>
              {currentPage} of {pageCount}
            </p>
          </PageCount>
        )}

        <PaginationButton onClick={nextPage} disabled={currentPage === pageCount}>
          <SlArrowRight />
        </PaginationButton>
      </Buttons>
    </StyledPagination>
  );
}

export default Pagination;

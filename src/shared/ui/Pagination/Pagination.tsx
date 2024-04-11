import ReactPaginate from "react-paginate";
import "./paginationStyles.css";
import { FC } from "react";

type Props = {
  onPageChange: (currentPage: number) => void;
  pageCount?: number;
  pageRangeDisplayed?: number;
  forcePage: number;
};

export const Pagination: FC<Props> = (props) => {
  const { onPageChange, pageCount } = props;
  return (
    <div className='flex items-center justify-center mt-2'>
      <ReactPaginate
        {...props}
        containerClassName='pagination'
        pageClassName='pagination__page'
        breakLabel='...'
        nextLabel='>'
        onPageChange={({ selected }) => onPageChange(selected + 1)}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        pageCount={pageCount as number}
        previousLabel='<'
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

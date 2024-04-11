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
        prevRel={null}
        containerClassName='pagination'
        pageClassName='pagination__page'
        breakLabel='...'
        nextLabel='>'
        onPageChange={({ selected }) => onPageChange(selected + 1)}
        pageRangeDisplayed={5}
        pageCount={pageCount || 10}
        previousLabel='<'
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

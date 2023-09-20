import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { ourProfessionals } from "../../../data";
const items = ourProfessionals.data;
function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div className="success-stories-item">
            <div className="success-stories-item-wrapper">
              <div className="success-stories-item-thumbnail">
                <img
                  loading="lazy"
                  src={item?.profileImage}
                  alt="Success Story Item Banner"
                  width="403"
                  height="568"
                />
              </div>
              <div className="success-stories-item-content">
                <h3 className="success-stories-item-title">{item?.name}</h3>
                <h4 className="success-stories-item-subtitle">{item?.title}</h4>
                <p>{item?.about}</p>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}
export const BackButton = () => {
  return <i className="icon icon-chevron-left"></i>;
};
export const NextButton = () => {
  return <i className="icon icon-chevron-right"></i>;
};
function PaginatedItems({ itemsPerPage }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };
  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        nextLabel={<NextButton />}
        className="custom-pagination-list"
        pageClassName={"custom-pagination-item"}
        pageLinkClassName={""}
        activeClassName={"active"}
        activeLinkClassName={"active"}
        previousClassName={"custom-pagination-item prev"}
        nextClassName={"custom-pagination-item next"}
        onPageChange={handlePageClick}
        pageCount={pageCount}
        previousLabel={<BackButton />}
        renderOnZeroPageCount={null}
      />
    </>
  );
}
export default PaginatedItems;

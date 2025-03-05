import React, { useContext, useState } from 'react';
import { DataContext } from '../context/DataContext'
import { PageList, PageItem, PaginationButton, PageJump, PageJumpInput, PageJumpButton } from '../styles/PaginationStyles';
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight, MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

export default function Pagination() {
  const { totalItems, currentPage, setCurrentPage, perPage, loading } = useContext(DataContext);
  const maxPageButtons = 10;
  const totalPages = Math.ceil(totalItems / perPage);
  const startPage = Math.floor((currentPage - 1) / maxPageButtons) * maxPageButtons + 1;
  const endPage = Math.min(startPage + maxPageButtons - 1, totalPages);
  const [inputValue, setInputValue] = useState(currentPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  
  const handleInputChange = (e) => {
    const value = Math.max(1, Math.min(totalPages, parseInt(e.target.value, 10)));
    setInputValue(value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setCurrentPage(inputValue);
    }
  };

  return (
    <> 
      {loading ? <div></div>
      :
          <nav>
            <PageList>
              <li>
                <PaginationButton onClick={() => setCurrentPage(1)} disabled={currentPage === 1}>
                  <MdKeyboardDoubleArrowLeft />
                </PaginationButton>
              </li>
              <li>
                <PaginationButton onClick={handlePrev} disabled={currentPage === 1}>
                  <MdKeyboardArrowLeft />
                </PaginationButton>
              </li>
              {[...Array(endPage - startPage + 1)].map((_, index) => (
                <PageItem
                  key={startPage + index}
                  $isActive={currentPage === startPage + index}
                  onClick={() => setCurrentPage(startPage + index)}
                >
                  <a href="#">{startPage + index}</a>
                </PageItem>
              ))}
              <li>
                <PaginationButton onClick={handleNext} disabled={currentPage === totalPages}>
                  <MdKeyboardArrowRight />
                </PaginationButton>
              </li>
              <li>
                <PaginationButton onClick={() => setCurrentPage(totalPages)} disabled={currentPage === totalPages}>
                  <MdKeyboardDoubleArrowRight />
                </PaginationButton>
              </li>
            </PageList>
            
            <PageJump>
              <PageJumpInput
                type="number"
                value={inputValue}
                placeholder="1"
                min="1"
                max={totalPages}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
              />
              <div>
                <span>/</span>
                {totalPages}
              </div>
              <PageJumpButton onClick={() => setCurrentPage(inputValue)}>
                이동
              </PageJumpButton>
            </PageJump>
          </nav>
      }
    </>
  )
}
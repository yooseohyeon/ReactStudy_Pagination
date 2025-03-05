import React, { useContext, useState } from 'react';
import { DataContext } from '../context/DataContext'
import { IoIosArrowDown } from "react-icons/io";
import { SelectContainer, SelectHeaber, SelectOption, SelectItem } from '../styles/SelectStyle';

export default function PerPageSelect() {
  const [isOpen, setIsOpen] = useState(false);
  const {perPage, setPerPage} = useContext(DataContext);

  const viewDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleChange = (value) => {
    setPerPage(value);
    setIsOpen(false);
  };

  return (
    <SelectContainer>
      <SelectHeaber $isOpen={isOpen} onClick={viewDropdown} aria-haspopup="listbox">
        <span>{perPage}개씩</span>
        <IoIosArrowDown />
      </SelectHeaber>
      {isOpen &&
        <SelectOption role="listbox">
          <SelectItem role="option" onClick={() => handleChange(10)}>10개씩</SelectItem>
          <SelectItem role="option" onClick={() => handleChange(20)}>20개씩</SelectItem>
          <SelectItem role="option" onClick={() => handleChange(30)}>30개씩</SelectItem>
          <SelectItem role="option" onClick={() => handleChange(40)}>40개씩</SelectItem>
        </SelectOption>
      }
    </SelectContainer>
  );
}
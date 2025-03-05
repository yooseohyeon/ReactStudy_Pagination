import React, { useContext, useState } from 'react';
import { DataContext } from '../context/DataContext'
import { IoIosArrowDown } from "react-icons/io";
import { SelectContainer, SelectHeaber, SelectOption, SelectItem } from '../styles/SelectStyle';

export default function PerPageSelect() {
  const [isOpen, setIsOpen] = useState(false);
  const {isSortedByLatest, SetIsSortedByLatest, SetIsSortedByPeopleCount, isSortedByInstitutionName, SetIsSortedByInstitutionName} = useContext(DataContext);

  const sortStateMap = {
    latest: SetIsSortedByLatest,
    institution: SetIsSortedByInstitutionName,
    peopleCount: SetIsSortedByPeopleCount,
  };

  const viewDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleChange = (sortType) => {
    SetIsSortedByLatest(false);
    SetIsSortedByInstitutionName(false);
    SetIsSortedByPeopleCount(false);

    if (sortStateMap[sortType]) {
      sortStateMap[sortType](true);
    }

    setIsOpen(false);
  };

  return (
    <SelectContainer>
      <SelectHeaber $isOpen={isOpen} onClick={viewDropdown} aria-haspopup="listbox">
        <span>
          {isSortedByLatest ? '최신순' : isSortedByInstitutionName ? '기관이름순' : '인원많은순'}
        </span>
        <IoIosArrowDown />
      </SelectHeaber>
      {isOpen &&
        <SelectOption role="listbox">
          <SelectItem role="option" onClick={() => handleChange('latest')}>
            최신순
          </SelectItem>
          <SelectItem role="option" onClick={() => handleChange('institution')}>
            기관이름순
          </SelectItem>
          <SelectItem role="option" onClick={() => handleChange('peopleCount')}>
            인원많은순
          </SelectItem>
        </SelectOption>
      }
    </SelectContainer>
  );
}
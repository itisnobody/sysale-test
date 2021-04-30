import React, {useState} from "react";

import "./select.scss";

// const findUnique = arr => {
//   let result = [];
//
//   for (let str of arr) {
//     if (!result.includes(str)) {
//       result.push(str);
//     }
//   }
//
//   return result;
// };

const Select = () => {
  const variants = ['black', 'read', 'green', 'yellow', 'white'];
  const [selectColor, setSelectColor] = useState(null);
  const onSelect = selected => setSelectColor(selected);

  return (
    <div className={`select`} >
      <span className={`select__item select__title`} >{selectColor ? selectColor : 'Выберите цвет'}</span>
      <div className={'select__list'}>
        {
          // findUnique(items.map(item => item.color))
          variants.map(item => (
            <span className={'select__item select__list-item'}
                  key={item}
                  onClick={() => onSelect(item)}>
                  {item}
            </span>
          ))
        }
      </div>
    </div>
  );
};

export default Select;
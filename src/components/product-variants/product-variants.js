import React from "react";

import "./product-variants.scss";

const ProductVariants = ({item: {id, variants}, onItemSelect, activeOption}) => {
  return (
    <div className={"form-radio"}>
      {
        variants.map(({sku, volume}, idx) => {
          return (
            <div key={sku} className={'form-radio__item'}>
              <input type="radio"
                     id={id+volume}
                     name={id}
                     onChange={() => onItemSelect(idx)}
                     checked={idx === activeOption} />
              <label htmlFor={id+volume}>{volume} мл</label>
            </div>
          );
        })
      }
    </div>
  );
};

export default ProductVariants;
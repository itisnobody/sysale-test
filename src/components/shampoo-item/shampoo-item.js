import React, { useState } from "react";

import "./shampoo-item.scss";
import Select from "../select";
import ProductImages from "../product-image";
import ProductVariants from "../product-variants";

const ShampooItem = ({item}) => {

  const { name, description, images, variants, fresh } = item;

  const initialOrder = {
    activeOption: 0,
    count: 1,
    total: variants[0].price,
    comparison: false
  };
  const [order, setOrder] = useState(initialOrder);

  const sendDataHandler = order => {
    console.log(order);
  };

  const onIncHandler = () => {
    setOrder(order => {
      const {count, activeOption} = order;
      return {
        ...order,
        count: count + 1,
        total: (count + 1) * variants[activeOption].price
      };
    })
  };

  const onDecHandler = () => {
    setOrder(order => {
      const {count, activeOption} = order;
      const newCount = count > 1 ? count - 1 : count;
      return {
        ...order,
        count: newCount,
        total: newCount * variants[activeOption].price
      };
    })
  };

  const onOptionSelect = optionSelected => {
    setOrder(order => {
      return {
        ...order,
        total: order.count * variants[optionSelected].price,
        activeOption: optionSelected
      }
    });
  };

  const onComparisonToggle = () => {
    setOrder(order => {
      return {
        ...order,
        comparison: !order.comparison
      };
    })
  };

  const {total, activeOption, count, comparison} = order;

  return (
    <div className={'list-item'}>
      <ProductImages images={images} />
      <h2 className={'list-item__title'}>{name}</h2>
      <p className={'list-item__description'}>{description}</p>
      <div className={'list-item__row'}>
        <Select />
        <span className={'list-item__price'}>{total}грн</span>
      </div>
      <ProductVariants item={item} onItemSelect={onOptionSelect} activeOption={activeOption}/>
      <div className={'list-item__row'}>
        <div className={'btn-group'}>
          <button className={'btn'}
                  onClick={onDecHandler}>–</button>
          <span>{count}</span>
          <button className={'btn'}
                  onClick={onIncHandler}>+</button>
        </div>
        <button className={'btn btn--large'}
                onClick={() => sendDataHandler(order)}>
                Купить
        </button>
      </div>
      { fresh ? <div className={'pills'}>New</div> : null }
      <button className={`btn btn-comparison${comparison ? ' active' : ''}`}
              onClick={onComparisonToggle}>
              Сравнить
      </button>
    </div>
  );
};

export default ShampooItem;
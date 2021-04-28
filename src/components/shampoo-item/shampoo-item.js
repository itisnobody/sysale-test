import React, {useState, Fragment, useCallback} from "react";
import "./shampoo-item.scss";

const findUnique = arr => {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
};

const Volumes = ({variants: {volume}, id, onVolumeSelect, currentVolume}) => {
  return (
    <>
      <input type="radio" id={id+volume} name={id} onChange={() => onVolumeSelect(volume)} checked={currentVolume === volume}/>
      <label htmlFor={id+volume}>{volume} мл</label>
    </>
  );
};

const Select = ({items}) => {
  const [toggledActive, setToggledActive] = useState(null);
  const onActive = () => {
    setToggledActive(prev => !prev);
  };

  return (
    <div className={`select${toggledActive ? ' active' : ''}`} >
          <span className={`select__item select__title`}
                onClick={onActive}>Выберите цвет</span>
      <div className={'select__list'}>
        {
          findUnique(items.map(item => item.color))
            .map(item => (
              <span className={'select__item select__list-item'}
                    key={item}>
                    {item}
              </span>
            ))
        }
      </div>
    </div>
  );
};

const ImageItem = ({images}) => {
  const [imgHover, setImgHover] = useState(false);
  return (
    <div className={'list-item__img'}
         onMouseOut={useCallback(() => setImgHover(false), [setImgHover])}
         onMouseOver={useCallback(() => setImgHover(true), [setImgHover])} >
      <img src={imgHover ? images[0] : images[1]} alt="" />
    </div>
  );
};

const ShampooItem = ({item}) => {

  const {name, description, images, variants, fresh } = item;

  const initialOrder = {
    item: {
      ...item
    },
    count: 1,
    total: item.variants[0].price,
    comparison: false
  };
  const [order, setOrder] = useState(initialOrder);

  const sendDataHandler = order => {
    console.log(order);
  };

  const onIncHandler = () => {
    setOrder(({count}) => {
      const newCount = count ?  count + 1 : count;
      return {
        ...order,
        count: count + 1,
        total: newCount * order.item.variants[0].price
      };
    })
  };

  const onDecHandler = () => {
    setOrder(({count}) => {
      const newCount = count > 1 ?  count - 1 : count;
      return {
        ...order,
        count: newCount,
        total: newCount * order.item.variants[0].price
      };
    })
  };

  const onVolumeSelect = volume => {
    setOrder(order => {
      const newVariants = variants.filter( item => item.volume === volume );
      return {
        ...order,
        item: {
          ...item,
          variants: newVariants
        },
        total: order.count * newVariants[0].price
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

  return (
    <div className={'list-item'}>
      <ImageItem images={images} />
      <h2 className={'list-item__title'}>{name}</h2>
      <p className={'list-item__description'}>{description}</p>
      <div className={'list-item__row'}>
        <Select items={variants}/>
        <span className={'list-item__price'}>
          {order.total}грн
        </span>
      </div>
      {
        variants.map(item => {
          return (
            <div key={item.sku} className={'form-radio'}>
              <Volumes
                variants={item}
                id={order.item.id}
                onVolumeSelect={onVolumeSelect}
                currentVolume={order.item.variants[0].volume} />
            </div>
          );
        })
      }
      <div className={'list-item__row'}>
        <div className={'btn-group'}>
          <button className={'btn'}
                  onClick={onDecHandler}>–</button>
          <span>{order.count}</span>
          <button className={'btn'}
                  onClick={onIncHandler}>+</button>
        </div>
        <button className={'btn btn--large'}
                onClick={() => sendDataHandler(order)}>
                Купить
        </button>
      </div>
      { fresh ? <div className={'pills'}>New</div> : null }
      <button className={`btn btn-comparison${order.comparison ? ' active' : ''}`}
              onClick={onComparisonToggle}>
              Сравнить
      </button>
    </div>
  );
};

export default ShampooItem;
import React, {useCallback, useState} from "react";

import "./product-images.scss";

const ProductImages = ({images}) => {
  const [imgHover, setImgHover] = useState(false);
  return (
    <div className={'product-image'}
         onMouseOut={useCallback(
           () => setImgHover(false),
           [setImgHover]
         )}
         onMouseOver={useCallback(
           () => setImgHover(true),
           [setImgHover]
         )} >
      <img src={imgHover ? images[0] : images[1]} alt="" />
    </div>
  );
};

export default ProductImages;
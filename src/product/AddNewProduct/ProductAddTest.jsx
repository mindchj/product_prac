import React, { useState } from "react";
import axios from "axios";

const ProductAddTest = () => {
  const [img, setImg] = useState(null);

  const imageChange = (e) => {
    setImg(e.target.files[0]);
    console.log(e.target.files[0].name);
  };

  const [imgUrl, setimgUrl] = useState();
  const imgUpload = async () => {
    const formData = new FormData();
    formData.append("image", img);
    const res = await axios.post("https://alconn.co/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log(res);
    setimgUrl(res.data.data.publicPath);
  };

  const [product2, setProduct2] = useState({
    price: 10,
    stockQuantity: 10,
    optionName: "",
    optionValue: "",
  });

  const handleChange2 = (e) => {
    const { name, value } = e.target;
    console.log(e.target);
    setProduct2({ ...product2, [name]: value });
  };

  const [product, setProduct] = useState({
    itemName: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target);
    setProduct({ ...product, [name]: value });
  };

  const productData = {
    itemName: product.itemName,
    itemComment: "상품설명입니다.",
    itemDetailFormList: [
      {
        price: product2.price,
        stockQuantity: product2.stockQuantity,
        optionName: product2.optionName,
        optionValue: product2.optionValue,
        mainImg: imgUrl,
      },
    ],
  };

  const addProduct = () => {
    const axiosAddProduct = async () => {
      await axios.post("https://alconn.co/api/item/add", productData);
    };
    axiosAddProduct();
    alert("상품이 등록되었습니다.");
  };

  return (
    <div>
      <div>
        <div style={{ float: "left" }}>itemName</div>
        <input
          type="text"
          name="itemName"
          value={product.itemName}
          onChange={handleChange}
          placeholder="상품명을 입력하시오."
        />
      </div>
      <div>
        <div style={{ float: "left" }}>price</div>
        <input
          type="text"
          name="price"
          value={product2.price}
          onChange={handleChange2}
          placeholder="상품 가격 입력하시오."
        />
      </div>
      <div>
        <div style={{ float: "left" }}>stockQuantity</div>
        <input
          type="text"
          name="stockQuantity"
          value={product2.stockQuantity}
          onChange={handleChange2}
          placeholder="잔고수량 입력하시오."
        />
      </div>
      <div>
        <div style={{ float: "left" }}>optionName</div>
        <input
          type="text"
          name="optionName"
          value={product2.optionName}
          onChange={handleChange2}
          placeholder="옵션명 입력하시오."
        />
      </div>
      <div>
        <div style={{ float: "left" }}>optionValue</div>
        <input
          type="text"
          name="optionValue"
          value={product2.optionValue}
          onChange={handleChange2}
          placeholder="옵션값 입력하시오."
        />
      </div>
      <div>
        <div style={{ float: "left" }}>대표이미지</div>
        <br />
        <br />
        <div>
          <input
            style={{ width: "100%", height: "100%" }}
            type="file"
            onChange={imageChange}
          />
        </div>
        <br />
        <div
          style={{ border: "1px solid black", width: "200px", height: "200px" }}
        >
          <img
            style={{ border: "1px solid black", width: "100%", height: "100%" }}
            alt=""
            src={imgUrl}
          />
        </div>
        <br />
        <div style={{ float: "left" }}>
          <button onClick={imgUpload}>이미지 등록</button>
        </div>
      </div>
      <button onClick={addProduct}>상품등록하기</button>
    </div>
  );
};

export default ProductAddTest;

import React from "react";
import Draggable from "react-draggable";
import {
  Container,
  ProductWrap,
  ProductList,
  ProductItem,
  Atag,
  ImageWrap,
  Img,
  TextWrap,
  Title,
} from "../styles/Product";

import newproduct01 from "../assets/newproduct01.avif";
import newproduct02 from "../assets/newproduct02.avif";
import newproduct03 from "../assets/newproduct03.avif";

const products = [
  { image: newproduct01, title: "LG 디오스 오브제컬렉션\n김치톡톡" },
  {
    image: newproduct02,
    title: "LG 휘센 오브제컬렉션\n이동식에어컨 (일반창용)",
  },
  { image: newproduct03, title: "LG 코드제로 오브제컬렉션\nA9S" },
  { image: newproduct01, title: "LG 디오스 오브제컬렉션\n김치톡톡" },
  {
    image: newproduct02,
    title: "LG 휘센 오브제컬렉션\n이동식에어컨 (일반창용)",
  },
  { image: newproduct03, title: "LG 코드제로 오브제컬렉션\nA9S" },
  { image: newproduct01, title: "LG 디오스 오브제컬렉션\n김치톡톡" },
  {
    image: newproduct02,
    title: "LG 휘센 오브제컬렉션\n이동식에어컨 (일반창용)",
  },
  { image: newproduct03, title: "LG 코드제로 오브제컬렉션\nA9S" },
];

const Product = () => {
  const handleDrag = (e, data) => {
    const scrollContainer = e.target.parentNode.parentNode;
    scrollContainer.scrollLeft -= data.deltaX;
  };

  return (
    <Container>
      <Draggable axis="x" onDrag={handleDrag}>
        <ProductWrap className="section-list">
          <ProductList>
            {products.map((item, index) => (
              <ProductItem key={index}>
                <Atag href="/">
                  <ImageWrap>
                    <Img src={item.image} alt="/" />
                  </ImageWrap>
                  <TextWrap>
                    <Title>{item.title}</Title>
                  </TextWrap>
                </Atag>
              </ProductItem>
            ))}
          </ProductList>
        </ProductWrap>
      </Draggable>
    </Container>
  );
};

export default Product;

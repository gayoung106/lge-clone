import styled from "styled-components";

export const CarouselWrap = styled.div`
  width: 100%;
  height: 600px;
  overflow: hidden;
  /* top: 0; */
  left: 0;
  display: block;
  /* position: absolute; */
  /* z-index: 1; */
  margin-top: 5px;
`;

export const CarouselImg = styled.img`
  width: auto;
  height: auto;
  min-height: 100%;
  min-width: 100%;
  margin: 0;
  object-fit: contain; //

  /* @media (min-width: 2600px) {
    max-width: 2600px;
  }

  @media (max-width: 767px) {
    max-width: 767px;
  } */
`;

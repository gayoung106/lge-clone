import styled from "styled-components";

export const CarouselWrap = styled.div`
  width: 100%;
  height: 100%;
  /* top: 0; */
  left: 0;
  display: block;
  position: absolute;
  /* z-index: 1; */
  margin-top: 5px;
`;

export const CarouselImg = styled.img`
  width: 100%;
  height: 600px;
  margin: 0;

  @media (min-width: 2600px) {
    max-width: 2600px;
  }

  @media (max-width: 767px) {
    max-width: 767px;
  }
`;

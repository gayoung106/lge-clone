import styled from "styled-components";

export const PopupWrap = styled.div`
  left: 0;
  width: 100%;
  margin-top: 0;

  height: 100px;
  background-color: rgb(96, 60, 225) !important;
  z-index: 1;
`;
export const TextWrap = styled.div`
  /* position: absolute; */
  /* bottom: 0; */
  /* top: 1%;
  left: 20px; */
  /* transform: translateY(-50%); */
  width: 100%;
  padding: 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  color: #fff;
  font-size: 20px;
  line-height: 32px;
  font-weight: 800;
`;

export const Text = styled.div`
  color: #fff;
  display: inline-flex;
  align-items: center;
  margin-top: 8px;
  font-size: 19px;
`;

export const Line = styled.div`
  width: 386px;
  margin: 0 auto;
  background: linear-gradient(
    to top,
    rgb(255, 255, 255, 0.4) 35%,
    transparent 35%
  );
  font-size: 20px;
  height: 28px;
`;

export const ButtonWrap = styled.div`
  /* color: rgb(47, 44, 44);
  text-align: center;
  cursor: pointer;
  font-size: 20px !important;
  line-height: 40px !important;
  width: 40px; */
  position: absolute;
  top: calc((100px - 40px) / 2);
  right: min(7%, 200px) !important;
  left: initial;
  width: 40px;
  z-index: 2;
  display: block !important;
  border-radius: initial !important;

  text-align: inherit;
  font-style: inherit;
`;

export const ButtonClose = styled.div`
  color: rgba(255, 255, 255) !important;
  text-align: center;
  cursor: pointer;
  font-size: 20px !important;
  line-height: 40px !important;
  width: 40px;
  border-radius: initial !important;
  display: block;
  font-style: inherit;
`;

export const Close = styled.span`
  color: inherit !important;
  border-radius: initial !important;
  box-sizing: border-box;
`;

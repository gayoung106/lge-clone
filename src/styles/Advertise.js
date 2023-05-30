import styled from "styled-components";

export const Banner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* max-width: 1476px; */
  /* margin: 200px auto;
  padding: 0 48px; */
  /* margin: 40px 450px 56px; */
  /* margin-top: 40px; */
  padding: 0px 48px;
  height: 100%;
  row-gap: 30px;
`;

export const Image = styled.div`
  position: relative;
  width: auto;
  height: 100%;
  /* margin-top: 30px; */
  /* padding-top: 30px; */
`;

export const TextWrap = styled.div`
  position: absolute;
  /* bottom: 0; */
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  width: 100%;
  padding: 20px;

  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 24px;
  line-height: 32px;
  font-weight: 700;
`;

export const Text = styled.div`
  display: inline-flex;
  align-items: center;
  margin-top: 8px;
`;

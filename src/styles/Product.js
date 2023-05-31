import styled from "styled-components";

export const ProductWrap = styled.div`
  visibility: visible;
  width: calc((100% - 24px) / 4 * 3);
`;

export const ProductList = styled.div`
  padding-bottom: 16px;
  display: flex;
  overflow-x: auto;
  column-gap: 24px;
`;

export const ProductItem = styled.div`
  margin-left: -24px;
  padding-left: 24px;
  max-width: calc(33.33% + 8px);
  flex: none;
`;

export const Atag = styled.a`
  color: inherit;
  text-decoration: none;
`;

export const ImageWrap = styled.div`
  border-radius: 16px;
  overflow: hidden;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  vertical-align: middle;
  border: 0 none;
`;

export const TextWrap = styled.div`
  margin-top: 16px;
  padding: 0 16px 0 8px;
`;

export const Title = styled.div`
  height: 56px;
  font-size: 20px;
  line-height: 28px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

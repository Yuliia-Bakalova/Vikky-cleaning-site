import styled from "styled-components";

 export const Backdrop =styled.div`
 position: fixed;
 left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
 `;

export const ModalContainer =styled.div`
max-width: 700px;
max-height: 600px;
position: relative;
background-color:  ${p => p.theme.colors.colorPink};
overflow: auto;

`;
export const ModalBox =styled.div`
padding: 40px;

`;

export const CloseBtn = styled.button`
cursor: pointer;
  font-family: inherit;
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: transparent;
  border: none;
  font-size: 23px;
`;

export const ModalDescription = styled.p`
color: ${p => p.theme.colors.titleMainColor};
font-size: 24px;
display: flex;
justify-content: start;
text-align: start;
`;

export const ModalPrice = styled.p`
color: ${p => p.theme.colors.titleMainColor};
font-size: 38px;
`;

export const ModalPriceDesc = styled.p`
color: ${p => p.theme.colors.titleMainColor};
font-size: 38px;
`;



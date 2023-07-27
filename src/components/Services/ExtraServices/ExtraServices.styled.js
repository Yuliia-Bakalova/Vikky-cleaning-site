import styled from 'styled-components';


export const WrapBtn = styled.button`
margin-bottom: 50px;
background-color: transparent;
color: transparent;
border: none;

`;

export const CloseButton = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  /* padding: 10px; */
  cursor: pointer;

  font-family: inherit;
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: ${p => p.theme.colors.colorPink};
  font-size: 30px;
`;

export const ModalDescription = styled.p`
  color: ${p => p.theme.colors.colorWhite};
  font-size: 35px;
  margin-right: 20px;
`;

export const ModalPrice = styled.p`
  color: ${p => p.theme.colors.titleMainColor};
  font-size: 38px;
`;

export const ModalPriceDesc = styled.p`
  color: ${p => p.theme.colors.titleMainColor};
  font-size: 35px;
  margin-left: 10px;
`;

export const ModalType = styled.p`
  color: ${p => p.theme.colors.titleMainColor};
  font-size: 35px;
  margin-left: 10px;
`;


export const Backdrop = styled.div`
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

export const ModalContainer = styled.div`
  width: 1000px;
 height: 1000px;
  position: relative;
  background-color: ${p => p.theme.colors.colorPink};
  overflow: auto; /* Доданий стиль прокрутки */
  padding: 20px; /* Доданий відступ, щоб текст не прилягав до країв модального вікна */
`;

export const ModalText = styled.div`
  margin-bottom: 20px;
  display: flex;

`;
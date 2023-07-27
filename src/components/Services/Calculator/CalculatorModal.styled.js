
import styled from 'styled-components';


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
export const Container =styled.div`
position: relative;

`;


export const CalcBox =styled.div`
max-width: 950px;
max-height: 900px;

background-color:  ${p => p.theme.colors.colorPink};
overflow: auto;
`;

export const CalcTitle = styled.h2`
color: ${p => p.theme.colors.titleMainColor};
font-size: 40px;
margin-top: 30px;
`;


export const CloseCalcBtn = styled.button`
cursor: pointer;

`; 
export const WrapBtn = styled.button`
margin-bottom: 50px;
background-color: transparent;
color: transparent;
border: none;

`;

export const CloseButton = styled.button`
  width: 55px;
  height: 55px;
  border: none;
  /* padding: 10px; */
  cursor: pointer;

  font-family: inherit;
  position: absolute;
  top: 70px;
  right: 40px;
  background-color: ${p => p.theme.colors.colorPink};
  font-size: 30px;
`;
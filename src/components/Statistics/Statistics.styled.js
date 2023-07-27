import styled from 'styled-components';

export const Wrapper =styled.div`
padding: 20px;
margin-right:auto;
margin-left:auto;
/* margin-top:30px; */

background-color: #8d8d8dac;
box-shadow: 10px 10px 10px rgba(173, 18, 18, 0.12),
10px 10px 10px rgba(86, 83, 83, 0.969),
10px 10px 10px rgba(169, 162, 162, 0.2);
border-radius: 20px;
display:flex;
justify-content: space-around;

`;
export const Title = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 27px;
  margin-bottom: 35px;
 color: ${p => p.theme.colors.titleMainColor};
 text-align: center;
`;


export const Box =styled.div`
width: 450px;
margin-right: 10px;

`;

export const Icon =styled.svg`
width: 70px;
  height: 70px;
  display: flex;
  align-items: center; 
  justify-content: center;
  font-size: 50px;
  color: ${p => p.theme.colors.titleMainColor};
  background-color:  ${p => p.theme.colors.colorPink};
  border-radius: 50%;
 margin: auto;
 padding: 10px;
`;

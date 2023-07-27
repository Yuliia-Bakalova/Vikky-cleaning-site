import styled from 'styled-components';

export const Container =styled.div`
margin-left: auto;
margin-right: auto;
display: flex;
flex-wrap: wrap;
justify-content: center;
width: 1280px;
margin-top: 50px;
`;
 export const ServiceBox = styled.div`
 width: 290px;
 height: 290px;
border-radius: 10px;
 padding: 10px;
 margin-right: 20px;
 margin-bottom: 20px;
 cursor: pointer;
 background-color:  ${p => p.theme.colors.colorPink};
 `;
export const ServiceImage = styled.img`
width: 180px;
height: 180px;
/* background-color:  ${p => p.theme.colors.colorPink}; */
  `;

export const ServiceText = styled.p`
color:  ${p => p.theme.colors.titleMainColor};
font-size: 24px;
margin-top: 10px;
margin-bottom: 13px;
margin-right: 10px;
    `;

export const CalculatorButton = styled.button`
cursor: pointer;
  font-family: inherit;
  /* position: absolute; */
  /* top: 20px;
  right: 20px; */
  display: flex;
  justify-content: center;
align-items: center;
  background-color:  ${p => p.theme.colors.colorPink};
  margin-bottom: 40px;
  margin-top: 40px;
  width: 400px;
height: 60px;
border-radius: 10px;
  border: none;
`;  

export const ExtraButton = styled.button`

 width: 290px;
 height: 290px;
border-radius: 10px;
 padding: 10px;
 margin-right: 20px;
 margin-bottom: 20px;
 cursor: pointer;
 background-color:  ${p => p.theme.colors.colorPink};
 border: none;
`; 


// export const IconCalc = styled.img`
// font-size: 20px;


//   `;
import styled from 'styled-components';

export const CalcContainer =styled.div`
padding: 30px;

`;

// export const CalculatorBox =styled.div`

// `;

export const CalculatorTitle = styled.h2`
font-size: 30px;
`;
export const CalculatorTotal = styled.h2`
font-size: 30px;
`;

export const CalcList = styled.ul`

`;
export const Item = styled.li`
  font-size: 20px;
  margin-top: 10px;
  margin-right: 10px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-align: center;
  color: ${p => p.theme.colors.titleMainColor};
`;
export const BtnChange = styled.button`
width: 90px;
height: 30px;
margin-left: 15px;
font-size: 18px;
color: ${p => p.theme.colors.titleMainColor};
border: 4px solid green;
border-radius: 30px;
background-color:  ${p => p.theme.colors.colorPink};
`;
export const DeleteBtn = styled.button`
width: 95px;
height: 30px;
font-size: 18px;
margin-left: 15px;
color: ${p => p.theme.colors.titleMainColor};
border: 4px solid red;
background-color:  ${p => p.theme.colors.colorPink};
border-radius: 30px;
`;
 
export const Input = styled.input`
max-width: 80px;
height: 30px;
font-size: 18px;
margin-left: 15px;
color: ${p => p.theme.colors.titleMainColor};
border: 4px solid red;
background-color:  ${p => p.theme.colors.colorPink};
border-radius: 30px;
padding: 7px;
`;
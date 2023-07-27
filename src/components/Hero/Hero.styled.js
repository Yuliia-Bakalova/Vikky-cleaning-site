import styled from 'styled-components';
import backgroundImage from "../../images/img5.jpg";




export const Wrap =styled.div`
height: 200px;
margin-top: 20px;
margin-bottom: 20px;

box-shadow: 10px 10px 10px rgba(173, 18, 18, 0.12),
10px 10px 10px rgba(86, 83, 83, 0.969),
10px 10px 10px rgba(169, 162, 162, 0.2);
padding: 20px;
background-color:  ${p => p.theme.colors.colorPink};
box-shadow: 10px 10px 10px rgba(173, 18, 18, 0.12),
10px 10px 10px rgba(86, 83, 83, 0.969),
10px 10px 10px rgba(169, 162, 162, 0.2);
border-radius: 20px;
/* background-image: url(${backgroundImage});
background-color:  ${p => p.theme.colors.colorPink};
background-size: auto; 
  background-repeat: no-repeat; */
`;
// export const Image = styled.img`
// width: 100%;
// /* height: 400px; */

//   `;

export const Title = styled.h2`
color: ${p => p.theme.colors.titleMainColor};
font-size: 98px;
display: flex;
justify-content: center;
align-items: center;
font-family: system-ui;
 text-shadow: #671629 4px 4px 3px;
`;






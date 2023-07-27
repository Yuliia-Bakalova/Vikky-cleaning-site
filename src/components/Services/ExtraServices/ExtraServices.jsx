import axios from "axios";
import { useEffect, useState } from "react";
import {
  WrapBtn,
  ModalText,
  CloseButton,
  ModalDescription,
  ModalPrice,
  ModalType,

  ModalPriceDesc,
  ModalContainer,
  Backdrop,
} from "./ExtraServices.styled";
import { GrClose } from "react-icons/gr";


const ExtraServices = ({ type, closeModal }) => {
    const [dataExtra, setDataExtra] = useState([]);

 

  
  const getServices = async() => {
  try{
    const extraResponse = await axios.get(
        "http://3.74.246.7/api/v1/extra/"
      );
      setDataExtra(extraResponse.data);
    } catch (error) {
      console.error(error);
    }
//      await axios.get('http://3.74.246.7/api/v1/extra/')
//      .then(response => {
//        const extra = response.data; 
//        // Отримані дані про послуги з API
   
//        // Виведення списку послуг з цінами
//     //    extra.forEach(extra => {
//     //      console.log(`${extra.title}: ${extra.price} ${extra.price_description}`);
//     //    });
//      })
//   }
//   catch(error){console.error(error)}
  }
  

  
  useEffect(() => {
    getServices();
  }, []);
  
 
    
  

    return (
     
    <Backdrop>
      <ModalContainer>
        <WrapBtn>
      <CloseButton onClick={closeModal}>
    <GrClose />
  </CloseButton>
  </WrapBtn>
  {dataExtra.map(extra => (
    <ModalText>
      <ModalDescription>{extra.title} : </ModalDescription>
     
      <ModalPrice>{extra.price}</ModalPrice>
      <ModalPriceDesc>{extra.price_description}</ModalPriceDesc>
    </ModalText>
  ))}
  


        </ModalContainer>
    </Backdrop>
     

    );
  };
  
  export default ExtraServices;


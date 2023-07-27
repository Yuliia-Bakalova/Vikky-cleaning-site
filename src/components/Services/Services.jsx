import axios from "axios";
import { useEffect, useState } from "react";
import {
  Container,
  ServiceBox,
  ServiceImage,
  ServiceText,
  CalculatorButton,
  ExtraButton,
  IconCalc
} from "./Services.styled";
import Modal from "./Modal";
import CalculatorModal from "../Services/Calculator/CalculatorModal";
import ExtraServices from "./ExtraServices/ExtraServices";
import image from "../../images/vacuum-cleaner.png";
import { BsFillCalculatorFill } from "react-icons/bs";
// import img from "../../images/uzbakoisya-4.jpg";

const Services = () => {
  const [data, setData] = useState([]);
  const [selectedServiceId, setSelectedServiceId] = useState(null);
  const [isCalculatorModalOpen, setCalculatorModalOpen] = useState(false);
  const [isOpenExtra, setOpenExtra] = useState(false);



  useEffect(() => {
   
  getServices()
  }, []);


// console.log(data);

const getServices = async() => {
try{
   await axios.get("http://3.74.246.7/api/v1/services/").then(response => setData(response.data));
  
}
catch(error){console.error(error)}
}



const openModal = (id) => {
  setSelectedServiceId(id);
};

const closeModal = () => {
  setSelectedServiceId(null);
};


const openCalculatorModal = () => {
  setCalculatorModalOpen(true);
};

const closeCalculatorModal = () => {
  setCalculatorModalOpen(false);
};

const openExtra = () => {
  setOpenExtra(true);
};
const closeExtra = () => {
  setOpenExtra(false);
};


  return (
    <Container>

      {data.map(item => {return  <ServiceBox key={item.id} onClick={() => openModal(item.id)}>
        <ServiceImage src={item.image} alt={item.title} />
        <ServiceText>{item.title} </ServiceText>
      </ServiceBox>})}

      {selectedServiceId && (
        <Modal
          serviceId={selectedServiceId}
          closeModal={closeModal}
        />
      )}

       

       <ExtraButton onClick={openExtra}>
       <ServiceImage src={image} alt="пилосос"/>
       <ServiceText>Додаткові послуги </ServiceText>
       
       </ExtraButton>
      
       {isOpenExtra && (
        <ExtraServices closeModal={closeExtra} />
      )}
      

     <CalculatorButton onClick={openCalculatorModal}>
     <ServiceText> Розрахувати вартість </ServiceText>
    <BsFillCalculatorFill fontSize={27} />  
      </CalculatorButton>
     {isCalculatorModalOpen && (
        <CalculatorModal closeModal={closeCalculatorModal} />
      )}
    </Container>
  );
};

export default Services;





// import axios from "axios";
// import { useEffect, useState } from "react";
// import {
//   Container,
//   ServiceBox,
//   ServiceImage,
//   ServiceText,
//   CalculatorButton,
// } from "./Services.styled";
// import Modal from "./Modal";
// import ModalExtra from "./ExtraServices/ExtraServicesModal";
// import CalculatorModal from "../Services/Calculator/CalculatorModal";

// const Services = () => {
//   const [data, setData] = useState([]);
//   const [extraData, setExtraData] = useState([]);
//   const [selectedServiceId, setSelectedServiceId] = useState(null);

//   const [selectedExtraId, setSelectedExtraId] = useState(null);

//   const [isCalculatorModalOpen, setCalculatorModalOpen] = useState(false);

//   useEffect(() => {
//     getServices();
//   }, []);

//   const getServices = async () => {
//     try {
//       const response = await axios.get("http://3.74.246.7/api/v1/services/");
//       setData(response.data);

//       const extraResponse = await axios.get("http://3.74.246.7/api/v1/extra/");
//       setExtraData(extraResponse.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const openModal = (id) => {
//     setSelectedServiceId(id);
//   };

//   const closeModal = () => {
//     setSelectedServiceId(null);
//   };

//   const openExtraModal = (id) => {
//     setSelectedExtraId(id);
//   };

//   const closeExtraModal = () => {
//     setSelectedExtraId(null);
//   };

//   const openCalculatorModal = () => {
//     setCalculatorModalOpen(true);
//   };

//   const closeCalculatorModal = () => {
//     setCalculatorModalOpen(false);
//   };

//   return (
//     <Container>
//       {data.map((item) => (
//         <ServiceBox key={item.id} onClick={() => openModal(item.id)}>
//           <ServiceImage src={item.image} alt={item.title} />
//           <ServiceText>{item.title}</ServiceText>
//         </ServiceBox>
//       ))}

//       {extraData.length > 7 && (
//         <>
//           {extraData.map((item) => (
//             <ServiceBox key={item.id} onClick={() => openExtraModal(item.id)}>
//               <ServiceImage src={item.image} alt={item.title} />
//               <ServiceText>{item.title}</ServiceText>
//             </ServiceBox>
//           ))}
//         </>
//       )}

//       <CalculatorButton onClick={openCalculatorModal}>
//         Розрахувати вартість
//       </CalculatorButton>

//       {selectedServiceId && (
//         <Modal serviceId={selectedServiceId} closeModal={closeModal} />
//       )}
//       {selectedExtraId && (
//         <ModalExtra extraId={selectedExtraId} closeModal={closeExtraModal} />
//       )}

//       {isCalculatorModalOpen && (
//         <CalculatorModal closeModal={closeCalculatorModal} />
//       )}
//     </Container>
//   );
// };

// export default Services;




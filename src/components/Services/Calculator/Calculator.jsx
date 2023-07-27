
import axios from "axios";
import { useEffect, useState } from "react";
import {CalcContainer, CalculatorTitle, CalculatorTotal, CalcList, Item, BtnChange, DeleteBtn, Input} from "./Calculator.styled";


const Calculator = () => {
  const [services, setServices] = useState([]);
  const [extra, setExtra] = useState([]);
  // const [selectedItems, setSelectedItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState({});
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const servicesResponse = await axios.get("http://3.74.246.7/api/v1/services/");
      setServices(servicesResponse.data);

      const extraResponse = await axios.get("http://3.74.246.7/api/v1/extra/");
      setExtra(extraResponse.data);
    } catch (error) {
      console.error(error);
    }
  };




  const isItemSelected = (itemId, type) => {
    return selectedItems.hasOwnProperty(`${itemId}-${type}`);
  };

  const handleServiceSelection = (itemId, type, quantity) => {
    const selectedItem = type === "service" 
      ? services.find((service) => service.id === itemId)
      : extra.find((item) => item.id === itemId);
  
    const selectedItemKey = `${itemId}-${type}`;
  
    setSelectedItems((prevSelectedItems) => ({
      ...prevSelectedItems,
      [selectedItemKey]: { ...selectedItem, key: selectedItemKey, quantity: Number(quantity) },
    }));
  };
  
  const handleRemoveItem = (itemKey) => {
    setSelectedItems((prevSelectedItems) => {
      const updatedItems = { ...prevSelectedItems };
      delete updatedItems[itemKey];
      return updatedItems;
    });
  };



  useEffect(() => {
    const amount = Object.values(selectedItems).reduce(
      (total, item) => total + Number(item.price) * item.quantity,
      0
    );
    setTotalAmount(amount);
  }, [selectedItems]);


  return (

<CalcContainer>
<CalculatorTitle>Доступні послуги:</CalculatorTitle>
<CalcList>
  {services.map((service) => (
    <Item key={service.id}>
      {service.title} - {service.price} ({service.price_description})
      {isItemSelected(service.id, "service") ? (
        <Input
          type="number"
          min="1"
          value={selectedItems[`${service.id}-service`].quantity}
          onChange={(e) => handleServiceSelection(service.id, "service", e.target.value)}
        />
      ) : (
        <span>{}</span>
      )}
      <BtnChange onClick={() => handleServiceSelection(service.id, "service", 1)}>
        Вибрати
      </BtnChange>
    </Item>
  ))}
</CalcList>

<CalculatorTitle>Доступні додаткові послуги:</CalculatorTitle>
<CalcList>
  {extra.map((item) => (
    <Item key={item.id}>
      {item.title} - {item.price} ({item.price_description})
      {isItemSelected(item.id, "extra") ? (
        <Input
          type="number"
          min="1"
          value={selectedItems[`${item.id}-extra`].quantity}
          onChange={(e) => handleServiceSelection(item.id, "extra", e.target.value)}
        />
      ) : (
        <span>{}</span>
      )}
      <BtnChange onClick={() => handleServiceSelection(item.id, "extra", 1)}>
        Вибрати
      </BtnChange>
    </Item>
  ))}
</CalcList>

<CalculatorTitle>Вибрані послуги та додаткові послуги:</CalculatorTitle>
<CalcList>
{Object.keys(selectedItems).map((itemKey) => (
  <Item key={itemKey}>
    {selectedItems[itemKey].title} - {selectedItems[itemKey].price} ({selectedItems[itemKey].price_description}) - Кількість: {selectedItems[itemKey].quantity}
    <DeleteBtn onClick={() => handleRemoveItem(itemKey)}>Видалити</DeleteBtn>
  </Item>
))}
</CalcList>

<CalculatorTotal>Загальна сума: {totalAmount}</CalculatorTotal>
</CalcContainer>
);
};

export default Calculator;
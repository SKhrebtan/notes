import styled from "styled-components";
export const StyledMainDiv = styled.div`
.list {
  list-style: none; 
  display: flex;
   justify-content: center;
   flex-wrap: wrap;
   padding: 16px;
    gap: 15px;
 }

.li {
  width: 400px;
   display: flex; 
   align-items:center;
   justify-content: space-between;
    gap:20px; 
    border: 3px solid #27ae60;
     border-radius: 6px; 
     padding: 15px 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
      background-color: #ecf0f1;
      @media screen and (min-width:768px) {
        width: calc((100% - 15px) / 2);
       }
       @media screen and (min-width:1168px) {
        width: calc((100% - 30px) / 3);
       }
            @media screen and (min-width:1440px) {
        width: calc((100% - 45px) / 4);
       }
}

.translate-block{
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  align-items:center;
  gap:10px;
}
`

export const StyledForm = styled.form`
max-width: 400px; /* Максимальна ширина форми */
  margin: 20px auto; /* Автоматичний зовнішній відступ по вертикалі та горизонталі */
  padding: 20px; /* Внутрішній відступ форми */
  background-color: #f5f5f5; /* Колір фону форми */
  border-radius: 8px; /* Закруглені кути форми */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Тінь форми */

  .input {
    width: 100%; /* Ширина інпуту */
  padding: 10px; /* Відступ всередині інпуту */
  margin-bottom: 15px; /* Зовнішній відступ між інпутами */
  border: 1px solid #ddd; /* Колір та товщина рамки інпуту */
  border-radius: 4px; /* Закруглені кути інпуту */
  box-sizing: border-box; /* Враховувати товщину рамки у визначенні ширини */
  }
  .button {
         width: 100%; /* Ширина кнопки */
        padding: 10px; /* Відступ всередині кнопки */
        background-color: #3498db; /* Колір фону кнопки */
        color: #fff; /* Колір тексту на кнопці */
        border: none; /* Видаляємо рамку кнопки */
        border-radius: 4px; /* Закруглені кути кнопки */
        cursor: pointer; /* Змінюємо курсор при наведенні на кнопку */
  }
`
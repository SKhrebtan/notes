import styled from "styled-components";

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
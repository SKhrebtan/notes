import styled from "styled-components";

export const StyledMainDiv = styled.div`
.list {
  list-style: none; 
  display: flex;
  flex-direction:row;
   
   flex-wrap: wrap;
   padding: 16px;
   gap: 15px;
}

.li {
  width: 100%;
   display: flex; 
   align-items:center;
   justify-content: space-between;
   border: 2px solid #8B0000; /* Колір гнилої вишні для рамки */
   border-radius: 10px; /* Закруглені кути рамки */
   box-shadow: 0 0 20px rgba(0, 0, 0, 0.5); /* Тінь для контейнера */
      padding: 12px 10px;
  
       @media screen and (min-width:968px) {
        width: calc((100% - 15px) / 2);
       }
     
       @media screen and (min-width:1440px) {
        width: calc((100% - 30px) / 3);
       }

       .author{
        width: 100px;
        flex-shrink: 0;
  font-size: 16px; /* Розмір шрифту для імені автора */
  font-weight: bold; /* Жирний шрифт для імені автора */
  text-align: left; /* Вирівнювання імені автора по правому краю */
  color: #8B0000; /* Колір гнилої вишні для імені автора */
       }

       .quote {
        font-size: 18px; /* Розмір шрифту тексту цитати */
        color: #333; /* Колір тексту */
        font-style: italic; /* Курсивний стиль для тексту цитати */
        text-align: center; /* Вирівнювання тексту по центру */
       }
}

.translate-block{
    flex-grow: 1;
    display: flex;
    justify-content: space-between;
    align-items:center;
    gap:10px;
    margin-right: 10px;
}
`
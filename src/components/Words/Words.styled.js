import styled from "styled-components";

export const StyledMainDiv = styled.div`
.list {
  list-style: none; 
  display: flex;
  flex-direction:row;
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
    border: 2px solid #3498db;
    border-radius: 8px; 
     box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
      background-color: #ecf0f1;
      padding: 12px 10px;
    @media screen and (min-width:768px) {
        width: calc((100% - 15px) / 2);
       }
       @media screen and (min-width:1024px) {
        width: calc((100% - 30px) / 3);
       }
       @media screen and (min-width:1280px) {
        width: calc((100% - 45px) / 4);
       }
       @media screen and (min-width:1440px) {
        width: calc((100% - 60px) / 5);
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
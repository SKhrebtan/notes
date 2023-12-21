import styled from "styled-components";

export const StyledMainDiv = styled.div`
.highlight-orange-text {
  color: orange;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  margin: 5px 0;
  text-align: center;
}
.choosebutton {
  background-color: black;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s; /* Smooth transition for the background color */
}

.choosebutton:hover {
  background-color: darkslategray; /* Change the background color on hover */
}

.translatelist {
  list-style: none; 
  max-width: 400px;
  display: flex;
  padding:0;
  margin: 0 auto;
  justify-content: space-between;
  padding: 0 30px;

}

.list {
  list-style: none; 
  display: flex;
  flex-direction:row;

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
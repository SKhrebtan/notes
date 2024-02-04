import styled from "styled-components";


export const StyledModal = styled.div`
padding: 10px;
position: absolute;
right: 35px;
width: 200px;
height: 40px;
border: 1px solid red;
border-radius: 4px;
background-color: yellow;
display: flex;
justify-content: center;
align-items: center;
.input {
    height:15px;
    width:110px;
    border: 1px solid #ccc;
    border-radius: 5px;
}
.btn{
    padding:0;
    height:26px;
    width:26px;
    border:none;
    border-radius: 50%;
    display:flex;
    align-items:center;
    justify-content:center;
}
`
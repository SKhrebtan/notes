import { StyledModal } from "./Modal.styled"
import { useState } from 'react';
export const Modal = ({ handleDelete, data, setShowModal }) => {
    const [inputValue, setInputValue] = useState('');
    const handleChange = e => {
        setInputValue(e.target.value)
        console.log(inputValue )
    } 
    const deleteApprove = () => {
        if (inputValue !== '46464646') return setInputValue('Invalid code');
handleDelete(data)
    }
    return (
        <StyledModal>
              <button className='btn' onClick={deleteApprove}>ok</button>
                <input
                name='name'
                type='text'
                className='input'
                required
                value={inputValue}
                onChange={handleChange}
            />
            <button className='btn' onClick={()=>setShowModal(false)}>X</button>
            </StyledModal>
      
    )
}
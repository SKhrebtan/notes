import { useRef, useState, useEffect } from 'react'
import {ReactComponent as ArrowSvg} from 'img/arrowdown2.svg'
import './Accordion.css'
import { Accordion2 } from './Accordion2/Accordion2'



export const AccordionItem = ({ faqItem, onClick, isOpen }) => {
const itemRef = useRef(null)
const [itemHeight, setItemHeight] = useState(0);
const [contentHeight, setContentHeight] = useState(0);
const [initialHeight, setInitialHeight] = useState(0);


useEffect(() => {
    
    if(!itemRef.current.scrollHeight) return;
    
    if(itemHeight !== null){       
        setInitialHeight(itemRef.current.scrollHeight)
        setContentHeight(itemRef.current.scrollHeight + itemHeight);
    } 
    if(itemHeight === 0){        
        if(initialHeight === 0){
            setContentHeight(itemRef.current.scrollHeight)
        }else{
            setContentHeight(initialHeight);
        }
        }       
        // eslint-disable-next-line react-hooks/exhaustive-deps     
}, [faqItem.q, faqItem.a, faqItem.additionalInfo, faqItem.summary,itemHeight]);
 
    return (
            <li className='accordion-item'>
            <button
                onClick={()=>onClick()}
                type='button'
                className='accordion-header'>
                {faqItem.q}
                <ArrowSvg className={`accordion-arrow ${isOpen ? 'active' : ''}`} />
            </button>
            <div
                className="accordion-collapse"
                style={isOpen ? {height: contentHeight + 'px' } : {height: '0px'}}
            >
                        <div className='accordion-body' ref={itemRef}>
                            {faqItem.a}
                            {faqItem.additionalInfo && <Accordion2 setItemHeight={setItemHeight} data={faqItem.additionalInfo}/>}
                            {faqItem.summary && faqItem.summary}
                            </div>
                        </div>
                       
                    </li>
    )
}
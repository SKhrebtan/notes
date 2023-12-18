import React, { useRef, useState, useEffect } from 'react'
import {ReactComponent as ArrowSvg} from 'img/arrowdown2.svg'
import './Accordion.css'
import { Accordion2 } from './Accordion2/Accordion2'

interface QA {
    id: string,
    q: string,
    a: string
      }
 
interface AccordionItemProps {
    faqItem: {
        id: string
        q: string,
        a: string,
        additionalInfo?: QA[],
        summary?: string
    }; // Replace YourItemType with the actual type of faqItem
    onClick: () => void; // Replace void with the actual return type of your onClick function
    isOpen: boolean;
  }

export const AccordionItem: React.FC<AccordionItemProps> = ({ faqItem, onClick, isOpen }) => {
const itemRef = useRef<HTMLDivElement | null>(null)
const [itemHeight, setItemHeight] = useState<number | null>(0);
const [contentHeight, setContentHeight] = useState<number | null>(0);
const [initialHeight, setInitialHeight] = useState<number | null>(0);


useEffect(() => {
    
    if(!itemRef.current?.scrollHeight) return;
    
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
        
}, [faqItem.q, faqItem.a, faqItem.additionalInfo, faqItem.summary, itemHeight, initialHeight]);
 
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
import React, { useRef } from 'react'
// import {ReactComponent as ArrowSvg} from 'img/arrowdown2.svg'
import './Accordion2.css'
import { ReactComponent as PlusSvg } from 'img/plus.svg';
import { ReactComponent as MinusSvg } from 'img/minus.svg';

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
    };
    onClick: () => void;
    isOpen: boolean;
    setItemHeight: (height:number) => void
  }

export const AccordionItem2: React.FC<AccordionItemProps> = ({faqItem, onClick, isOpen, setItemHeight}) => {
    const itemRef = useRef<HTMLDivElement | null>(null)

    return (
            <li className={`accordion-item2 ${isOpen ? 'isopened' : ''}`}>
                 <button
                onClick={()=>{
                                      onClick()
                    if (itemRef.current?.scrollHeight !== null){
                        setItemHeight(isOpen ? 0 : itemRef.current?.scrollHeight ?? 0);
                    } 
                                                      
                }}
                type='button'
                className='accordion-header2'>
                {faqItem.q}
                {isOpen ? <MinusSvg className='accordion-minus' /> : <PlusSvg className='accordion-plus' />}
            </button>
            <div
                className="accordion-collapse2"
                style={
                    isOpen ? {height: itemRef.current?.scrollHeight} : {height: '0px'}
                }
            >
                        <div className='accordion-body' ref={itemRef}>{faqItem.a}</div>
                        </div>
                       
                    </li>
    )
}
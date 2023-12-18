import React, { useState } from "react";
import { AccordionItem2 } from "./AccordionItem2";
import './Accordion2.css';


interface QA {
    id: string,
    q: string,
    a: string
    
  }
interface AccordionItemProps {
  
    setItemHeight: (height:number) => void; 
    data: QA[]
  }

export const Accordion2: React.FC<AccordionItemProps> = ({ setItemHeight, data}) => {
    const [openId, setOpenId] = useState<number | null>(null);
   
    return (
        <ul className="accordion2">
            {data.map((faqItem, id) => 
                <AccordionItem2
                setItemHeight={setItemHeight}               
                    onClick={()=> id===openId ? setOpenId(null) : setOpenId(id)}
                    faqItem={faqItem}
                    isOpen={id === openId}
                    key={id}
                />
            )}
        </ul>
    )
}
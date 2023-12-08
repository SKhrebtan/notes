import { useState } from "react";
import { AccordionItem2 } from "./AccordionItem2";
import './Accordion2.css';

export const Accordion2 = ({ setItemHeight, data}) => {
    const [openId, setOpenId] = useState(null);
 
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
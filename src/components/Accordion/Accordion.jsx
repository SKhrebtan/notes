import { useState, useMemo } from "react";
import { AccordionData } from "./data";
import { AccordionItem } from "./AccordionItem";
import './Accordion.css';

export const Accordion = () => {
    const [openId, setOpenId] = useState(null);
    const [filterValue, setFilterValue] = useState('');
    const changeFilter = (event) => setFilterValue(event.currentTarget.value);
    const normalizedFilter = filterValue.toLowerCase();
    const filteredTerms = useMemo(() => {
        if (AccordionData) { 
        return AccordionData.filter(item =>
          item.q.toLowerCase().includes(normalizedFilter))
      }
    },[normalizedFilter])

    return (
        <div>
        <input 
        type="text"
         name="filter"
         className="input"
         value={filterValue}
         onChange={changeFilter}
         />
        <ul className="accordion">
            {filteredTerms.map((faqItem, id) => 
                <AccordionItem
                    onClick={()=> id===openId ? setOpenId(null) : setOpenId(id)}
                    faqItem={faqItem}
                    isOpen={id === openId}
                    key={id}
                />
            )}
        </ul>
</div>
    )
}
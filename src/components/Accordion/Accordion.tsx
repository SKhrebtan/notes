import { useState, useMemo, FormEvent } from "react";
import { AccordionData } from "./data";
import { AccordionItem } from "./AccordionItem";
import './Accordion.css';
interface QA {
    id: string,
    q: string,
    a: string
    }

  interface AccordionItemProps {
        id: string,
        q: string,
        a: string,
        additionalInfo?: QA[] | undefined,
        summary?: string
         }

export const Accordion = () => {
    const [openId, setOpenId] = useState<number | null>(null);
    const [filterValue, setFilterValue] = useState('');
    const changeFilter = (event:FormEvent<HTMLInputElement>) => setFilterValue(event.currentTarget.value);
    const normalizedFilter = filterValue.toLowerCase();
    const filteredTerms: AccordionItemProps[] = useMemo(() => {
        if (AccordionData) { 
        return AccordionData.filter(item =>
          item.q.toLowerCase().includes(normalizedFilter))
      } else {
        return []
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
            {filteredTerms && filteredTerms.map((faqItem:AccordionItemProps, id) => 
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
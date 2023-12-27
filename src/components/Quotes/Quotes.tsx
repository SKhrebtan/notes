import { useEffect, useState, FormEvent } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection,getDoc,updateDoc, setDoc, doc } from 'firebase/firestore/lite';
import {ReactComponent as DeleteSvg} from '../../img/delete.svg';
import { StyledForm } from "components/Sentences/Sentences.styled";
import { StyledMainDiv } from "./Quotes.styled";

const firebaseConfig = {
  apiKey: "AIzaSyAbHFE1wTJXRbo8Iwye_MU_tTlQDfCr15I",
  authDomain: "vocabluary-ff9a9.firebaseapp.com",
  databaseURL: "https://vocabluary-ff9a9-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "vocabluary-ff9a9",
  storageBucket: "vocabluary-ff9a9.appspot.com",
  messagingSenderId: "780669558098",
  appId: "1:780669558098:web:67551e1f80e0dc8b16ee8b"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export const Quotes = () => {
    const [quotes, setQuotes] = useState({})
const fetchData = async () => {
    const vocabCollection = collection(db, 'vocabulary')
    const querySnapshot = await getDoc(doc(vocabCollection, 'quotes'));
      const updatedData = { ...querySnapshot.data()};
    setQuotes(updatedData)
};
useEffect(() => {fetchData();
},[])

const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
e.preventDefault();
const formElements = e.currentTarget.elements as HTMLFormControlsCollection;

  const author = (formElements.namedItem('author') as HTMLInputElement)?.value;
  const quote = (formElements.namedItem('quote') as HTMLInputElement)?.value;
  e.currentTarget.reset();
const wordsCollection = collection(db, 'vocabulary');

const docSnapshot = await getDoc(doc(wordsCollection, 'quotes'));
if (docSnapshot.exists()) {
  const updatedData = { [author]: quote , ...docSnapshot.data() };
  await updateDoc(doc(wordsCollection, 'quotes'), updatedData);
  fetchData();

    }

}

const handleDelete = async (key: string) => {
    const wordsCollection = collection(db, 'vocabulary');
    const docRef = doc(wordsCollection, 'quotes');
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()) {
      const updatedData = { ...docSnapshot.data() };
       delete updatedData[key];
      setQuotes(updatedData)
      await setDoc(docRef, updatedData);
          }
  

  fetchData(); 
}
return (
    <StyledMainDiv>
      <StyledForm onSubmit={handleSubmit}>
      <input className='input' type='text' name='author' placeholder='Author'/>
      <input className='input' type='text' name='quote' placeholder='Quote'/>
    <button className='button' type="submit">Add new quote</button>
      </StyledForm>
      <ul className='list'>
        {Object.entries(quotes).map(([key, value]: [string, any]) => (
          <li className='li' key={key}>
            <div className='translate-block'>
            <strong className='author'>{key}</strong><span className='quote' style={{flexGrow: '1'}}>{value}</span>
            </div>
            <button style={{width: '24px', height: '24px',padding:'0px', cursor: 'pointer', backgroundColor: 'transparent', border: 'none'}} type='button' onClick={()=>handleDelete(key)}><DeleteSvg/></button>
          </li>
        ))}
      </ul>
    </StyledMainDiv>
)
}
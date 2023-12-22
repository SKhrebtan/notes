import { useEffect, useState, FormEvent } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, getDoc,updateDoc, doc , setDoc} from 'firebase/firestore/lite';
import {ReactComponent as DeleteSvg} from '../../img/delete.svg';
import { StyledForm } from "components/Sentences/Sentences.styled";
import { StyledMainDiv } from "./Words.styled";
import axios from "axios";
type TranslationObject = {
  translation: string;
  // other properties if applicable
};
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


export const Words = () => {
    const [words, setWords] = useState({});
    const [englishWord, setEnglishWord] = useState('');
    const [ukrainianWord, setUkrainianWord] = useState('');
    const [word, setWord] = useState('');
    const [translateList, setTranslateList] = useState<TranslationObject[]>([]);

const fetchData = async () => {
  const vocabCollection = collection(db, 'vocabulary')
  const querySnapshot = await getDocs(vocabCollection);
  querySnapshot.forEach((doc) => {
      setWords(doc.data());
    });
};
useEffect(() => {fetchData();
},[])

const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
e.preventDefault();
const formElements = e.currentTarget.elements as HTMLFormControlsCollection;

  const enWord = englishWord || (formElements.namedItem('en') as HTMLInputElement)?.value;
  const uaWord = (formElements.namedItem('ua') as HTMLInputElement)?.value;

const wordsCollection = collection(db, 'vocabulary');

const docSnapshot = await getDoc(doc(wordsCollection, 'words'));
if (docSnapshot.exists()) {
  const updatedData = { [enWord]: uaWord , ...docSnapshot.data() };
  await updateDoc(doc(wordsCollection, 'words'), updatedData);
    }
fetchData();
setEnglishWord('');
setUkrainianWord('');
}
const handleDelete = async (key: string) => {
    const wordsCollection = collection(db, 'vocabulary');
    const docRef = doc(wordsCollection, 'words');
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()) {
      const updatedData = { ...docSnapshot.data() };
console.log(updatedData)
       delete updatedData[key];
      console.log(updatedData)
      setWords(updatedData)
      await setDoc(docRef, updatedData);
          }
  

  fetchData(); 
}

const handleDefinitionSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
    const {data: {matches}} = await axios.get(`https://api.mymemory.translated.net/get?q=${word}&langpair=en|uk`);
    setTranslateList(matches);
    
  setEnglishWord(word)
  setWord('');
}

const handleWordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.currentTarget;
if (name === 'en') {
  setEnglishWord(value)
} else if (name === 'ua'){
  setUkrainianWord(value)
} else {
  setWord(value)
}
}

const handleWordPick = (word: string) => {
  setUkrainianWord(word)
  setTranslateList([])
}
function removeDotAtEnd(word:string) {
   if (word.endsWith('.')) {
    return word.slice(0, -1);
   }
  return word;
}
return (
    <StyledMainDiv>
    <StyledForm onSubmit={handleDefinitionSubmit}>
      <input onChange={handleWordInput} className='input' type='text' name='word' placeholder='English' value={word}/>
      <button className='button' type="submit">find definition</button>
      </StyledForm>
      {translateList.length > 0 && <ul className='translatelist'>
      {translateList.map(({translation}) => {
        const lowercaseTranslation = translation && typeof translation === 'string'
        ? removeDotAtEnd(translation.toLowerCase())
        : '';
        return(
          <li key={translation}>
            <p className='highlight-orange-text'>{lowercaseTranslation}</p>
            <button className='choosebutton' type='button' onClick={()=> handleWordPick(translation)}>Choose</button>
            </li>        
        )
      })}
      </ul>}
     
      <StyledForm onSubmit={handleSubmit}>
      <input onChange={handleWordInput} value={englishWord} className='input' type='text' name='en' placeholder='English'/>
      
      <input onChange={handleWordInput} value={ukrainianWord} className='input' type='text' name='ua' placeholder='Ukrainian'/>
    <button className='button' type="submit">Add new word</button>
      </StyledForm>
      <ul className='list'>
        {Object.entries(words).map(([key, value]: [string, any]) => (
          <li className='li' key={key}>
            <div className='translate-block'>
            <strong style={{width: 'calc((100% - 10px) / 2)'}}>{key}</strong><span style={{width: 'calc((100% - 10px) / 2)'}}>{value}</span>
            </div>
            <button style={{width: '24px', height: '24px',padding:'0px', cursor: 'pointer', backgroundColor: 'transparent', border: 'none'}} type='button' onClick={()=>handleDelete(key)}><DeleteSvg/></button>
          </li>
        ))}
      </ul>
    </StyledMainDiv>
)
}

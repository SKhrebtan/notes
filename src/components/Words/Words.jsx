import { useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, getDoc,updateDoc, doc , setDoc} from 'firebase/firestore/lite';
import {ReactComponent as DeleteSvg} from '../../img/delete.svg';
import { StyledForm } from "components/Sentences/Sentences.styled";

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
    const [words, setWords] = useState({})
const fetchData = async () => {
  const vocabCollection = collection(db, 'vocabulary')
  const querySnapshot = await getDocs(vocabCollection);
  querySnapshot.forEach((doc) => {
      setWords(doc.data());
    });
};
useEffect(() => {fetchData();
},[])

const handleSubmit = async (e) => {
e.preventDefault();
const enWord = e.target.elements.en.value
const uaWord = e.target.elements.ua.value
const wordsCollection = collection(db, 'vocabulary');

const docSnapshot = await getDoc(doc(wordsCollection, 'words'));
if (docSnapshot.exists()) {
  const updatedData = { [enWord]: uaWord , ...docSnapshot.data() };
  await updateDoc(doc(wordsCollection, 'words'), updatedData);
    }
fetchData();
e.target.reset();
}
const handleDelete = async (key) => {
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
return (
    <div>
      <StyledForm onSubmit={handleSubmit}>
      <input className='input' type='text' name='en' placeholder='English'/>
      
      <input className='input' type='text' name='ua' placeholder='Ukrainian'/>
    <button className='button' type="submit">Add new word</button>
      </StyledForm>
      <ul style={{listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: "20px"}}>
        {Object.entries(words).map(([key, value]) => (
          <li style={{display:'flex', gap: '15px', alignItems:'center', border: '2px solid #3498db', borderRadius: '8px', padding: "10px", boxShadow: '0 0 10px rgba(0, 0, 0, 0.4)'}} key={key}>
            <strong style={{width: '100px'}}>{key}</strong><span style={{width: '140px'}}>{value}</span><button style={{width: '24px', height: '24px',padding:'0px', cursor: 'pointer', backgroundColor: 'transparent', border: 'none'}} type='button' onClick={()=>handleDelete(key)}><DeleteSvg/></button>
          </li>
        ))}
      </ul>
    </div>
)
}

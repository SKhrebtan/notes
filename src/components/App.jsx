import { useEffect, useState } from "react";
import { Accordion } from "./Accordion/Accordion";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, getDoc,updateDoc, doc } from 'firebase/firestore/lite';
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
export const App = () => {
  const [words, setWords] = useState({})
  const fetchData = async () => {
    const vocabCollection = collection(db, 'vocabulary')
    const querySnapshot = await getDocs(vocabCollection);
    querySnapshot.forEach((doc) => {
        console.log(doc.data())
        setWords(doc.data());
      });
  };
useEffect(() => {
    

      fetchData();
},[])

const handleSubmit = async (e) => {
  e.preventDefault();
  const enWord = e.target.elements.en.value
  const uaWord = e.target.elements.ua.value
  const wordsCollection = collection(db, 'vocabulary');

  const docSnapshot = await getDoc(doc(wordsCollection, 'words'));
console.log(docSnapshot)
  if (docSnapshot.exists()) {
    const updatedData = { ...docSnapshot.data(), [enWord]: uaWord };
    await updateDoc(doc(wordsCollection, 'words'), updatedData);
      }
  fetchData();
  e.target.reset();
}
  return (
    <>
     <Accordion />
     <div>
      <form onSubmit={handleSubmit}>
        <label>
          EN
        <input type='text' name='en'/>
        </label>
        <label>
          UA
          <input type='text' name='ua'/>
        </label>
        
        
        <button type="submit">Add new word</button>
      </form>
      <ul>
        {Object.entries(words).map(([key, value]) => (
          <li key={key}>
            <strong>{key}    -   </strong> {value}
          </li>
        ))}
      </ul>
    </div>
    </>
   
  );
};

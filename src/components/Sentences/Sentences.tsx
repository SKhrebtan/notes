import { useEffect, useState, FormEvent } from 'react';
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  getDoc,
  updateDoc,
  setDoc,
  doc,
} from 'firebase/firestore/lite';
// import { ReactComponent as DeleteSvg } from '../../img/delete.svg';
import { StyledForm, StyledMainDiv } from './Sentences.styled';

const firebaseConfig = {
  apiKey: 'AIzaSyAbHFE1wTJXRbo8Iwye_MU_tTlQDfCr15I',
  authDomain: 'vocabluary-ff9a9.firebaseapp.com',
  databaseURL:
    'https://vocabluary-ff9a9-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'vocabluary-ff9a9',
  storageBucket: 'vocabluary-ff9a9.appspot.com',
  messagingSenderId: '780669558098',
  appId: '1:780669558098:web:67551e1f80e0dc8b16ee8b',
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const Sentences = () => {
  const [sentences, setSentences] = useState({});
  const fetchData = async () => {
    const vocabCollection = collection(db, 'vocabulary');
    const querySnapshot = await getDoc(doc(vocabCollection, 'sentences'));
    const updatedData = { ...querySnapshot.data() };
    setSentences(updatedData);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formElements = e.currentTarget.elements as HTMLFormControlsCollection;
    const enWord = (formElements.namedItem('en') as HTMLInputElement)?.value;
    const uaWord = (formElements.namedItem('ua') as HTMLInputElement)?.value;
    const wordsCollection = collection(db, 'vocabulary');
    e.currentTarget.reset();
    const docSnapshot = await getDoc(doc(wordsCollection, 'sentences'));

    if (docSnapshot.exists()) {
      const updatedData = { ...docSnapshot.data(), [enWord]: uaWord };
      await updateDoc(doc(wordsCollection, 'sentences'), updatedData);
      fetchData();
    }
  };

  // const handleDelete = async (key: string) => {
  //   const wordsCollection = collection(db, 'vocabulary');
  //   const docRef = doc(wordsCollection, 'sentences');
  //   const docSnapshot = await getDoc(docRef);

  //   if (docSnapshot.exists()) {
  //     const updatedData = { ...docSnapshot.data() };
  //     delete updatedData[key];
  //     setSentences(updatedData);
  //     await setDoc(docRef, updatedData);
  //   }
  //   fetchData();
  // };
  return (
    <StyledMainDiv>
      <StyledForm onSubmit={handleSubmit}>
        <input className="input" type="text" name="en" placeholder="English" />
        <input
          className="input"
          type="text"
          name="ua"
          placeholder="Ukrainian"
        />
        <button className="button" type="submit">
          Add new sentence
        </button>
      </StyledForm>
      <ul className="list">
        {Object.entries(sentences).map(([key, value]: [string, any]) => (
          <li className="li" key={key}>
            <div className="translate-block">
              <strong style={{ width: 'calc((100% - 10px) / 2)' }}>
                {key}
              </strong>
              <span style={{ width: 'calc((100% - 10px) / 2)' }}>{value}</span>
            </div>
            {/* <button
              style={{
                width: '24px',
                height: '24px',
                padding: '0px',
                cursor: 'pointer',
                backgroundColor: 'transparent',
                border: 'none',
              }}
              type="button"
              onClick={() => handleDelete(key)}
            >
              <DeleteSvg />
            </button> */}
          </li>
        ))}
      </ul>
    </StyledMainDiv>
  );
};

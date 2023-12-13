
import { Route, Routes } from "react-router-dom";
import { Accordion } from "./Accordion/Accordion";
import { Layout } from "./Layout";
import { Words } from "./Words/Words";
import { Sentences } from "./Sentences/Sentences";
import { Quotes } from "./Quotes/Quotes";
export const App = () => {

  return (

    <Routes>
    <Route path="/" element={<Layout/>}>
      <Route index element={<Accordion />} />
      <Route path="/words" element={<Words />} />
      <Route path="/sentences" element={<Sentences />} />
      <Route path="/quotes" element={<Quotes />} />
            </Route>
      </Routes>

   
  );
};

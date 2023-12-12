
import { Route, Routes } from "react-router-dom";
import { Accordion } from "./Accordion/Accordion";
import { Layout } from "./Layout";
import { Words } from "./Words/Words";
import { Sentences } from "./Sentences/Sentences";
export const App = () => {

  return (

    <Routes>
    <Route path="/" element={<Layout/>}>
      <Route index element={<Accordion />} />
      <Route path="/words" element={<Words />} />
      <Route path="/sentences" element={<Sentences />} />
            </Route>
      </Routes>

   
  );
};

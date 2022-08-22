import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Characters from "./pages/Characters";
import Profile from "./pages/CharacterProfile";

const Application: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="characters" element={<Characters />} />
        <Route path="/characters/:id" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Application;

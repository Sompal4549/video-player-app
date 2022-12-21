import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllMeetup from "./../src/pages/AllMeetup";
import AddNewMeetup from "./pages/AddNewMeetup";
import Favorites from "./../src/pages/Favorites";
import NoPage from "./pages/NoPage";
import MainUi from "./components/UI/mainUI/MainUi";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <MainUi></MainUi>
        <Routes>
          <Route path="/" exact element={<AllMeetup />}></Route>
          {/* <Route index element={<AllMeetup />} /> */}
          <Route path="/addnewmeetup" element={<AddNewMeetup />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
      {/* <MainUi>
     
            <Route path="/" exact element={<AllMeetup />}></Route>

            <Route path="addnewmeetup" element={<AddNewMeetup />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="*" element={<NoPage />} />
        
      </MainUi> */}
    </>
  );
};

export default App;

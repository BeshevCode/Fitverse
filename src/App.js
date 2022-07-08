import React from 'react';
import { Routes as DomRoutes, Route as DomRoute, Link } from "react-router-dom";
import './App.css';
import styled from 'styled-components';
import Routes from "./components/Routes/Routes";
import Navbar from "./components/Navbar/Navbar";
import Dashbaord from "./components/Dashbaord/Dashboard";
import Leaderboard from "./components/Leaderboard/Leaderboard";
import leaderboardData from "./components/Leaderboard/LeaderboardData";
import routesData from "./components/Routes/RotesData";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
`;

const onRowClicked = (item, index) => {
  console.log(item, index);
}


const App = () => {
  // user object: username, email, full_name
  // const [user, setUser] = useState({});

  // chartTitle,         // string or empty -- the title of the chart
  // const horizontalLabels = ['x', 'y', 'z', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  // const verticalLabel = 'Distance X';
  // // const verticalValues = [54, 14, 71, 32, 7, 59, 42];
  // const verticalValues = [];

  // this is to test the linechart
  // const horizLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Someday"];
  // const vertLabel = "M";
  // const vertValues = [33, 53, 85, 41, 44, 65, 71];



  return (

    <div className="App">

      <Navbar />
      <DomRoutes>
        <DomRoute path="/" element={<Dashbaord />} />
        <DomRoute path="/routes" element={<Routes data={routesData} />} />
        <DomRoute path="/leaderboard" element={<Leaderboard items={leaderboardData} onClick={() => { }} />} />
      </DomRoutes>
    </div>


  );
};

export default App;

// chartTitle,         // string or empty -- the title of the chart
// horizontalLabels,   // array: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// verticalLabel,      // 'Distance'
// verticalValues,     // array: values for the vertical point, one for each horizontal label
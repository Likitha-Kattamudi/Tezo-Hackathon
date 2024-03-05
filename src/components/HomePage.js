import React from "react";
import "../styles/HomePage.css";
import { useNavigate, useParams } from "react-router-dom";
import App from "../App";
import NavBar from "./NavBar";
import MenuSection from "./MenuSection";

const HomePage = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <App />
      <NavBar />
      <MenuSection />
      <div className="eventsSection">
        <div className="eventDiv">
          <h4>Upcoming Events</h4>
          <table className="upcomingTable">
            <tr>
              <th>Title</th>
              <th>Scheduled Time</th>
            </tr>
            <tr>
              <td>Project X</td>
              <td>{Date.now().toString()}</td>
            </tr>
            <tr>
              <td>Project Y</td>
              <td>{Date.now().toString()}</td>
            </tr>
            <tr>
              <td>Project Z</td>
              <td>{Date.now().toString()}</td>
            </tr>
            <tr>
              <td>Project A</td>
              <td>{Date.now().toString()}</td>
            </tr>
          </table>
          <button id="viewAllBtn">View All</button>
        </div>
        <div className="eventDiv">
          <h4>Completed Events</h4>
          <table className="upcomingTable">
            <tr>
              <th>Title</th>
              <th>Scheduled Time</th>
            </tr>
            <tr>
              <td>Project B</td>
              <td>{Date.now().toString()}</td>
            </tr>
            <tr>
              <td>Project C</td>
              <td>{Date.now().toString()}</td>
            </tr>
            <tr>
              <td>Project D</td>
              <td>{Date.now().toString()}</td>
            </tr>
            <tr>
              <td>Project E</td>
              <td>{Date.now().toString()}</td>
            </tr>
          </table>
          <button id="viewAllBtn">View All</button>
        </div>
        <div className="eventDiv">
          {" "}
          <h4>ScoreBoard</h4>
          <table className="upcomingTable">
            <tr>
              <th>Title</th>
              <th>Score</th>
              <th>Rank</th>
            </tr>
            <tr>
              <td>Project B</td>
              <td>20</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Project C</td>
              <td>20</td>
              <td>2</td>
            </tr>
            <tr>
              <td>Project D</td>
              <td>20</td>
              <td>3</td>
            </tr>
            <tr>
              <td>Project E</td>
              <td>20</td>
              <td>4</td>
            </tr>
          </table>
          <button id="viewAllBtn">View All</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

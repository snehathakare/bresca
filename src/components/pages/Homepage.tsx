import React from "react";
import bg from "../../assets/images/bg-homepage.jpeg";

function Homepage() {
  return (
    <div className="bg-common">
      <div className="container-home">
        <img src={bg} />
        <div>
          <p>Reservations</p>
          <p>Wednesday | Thursday | Sunday : 5.30 - 9.30PM</p>
          <p>Friday & Saturday : 5.00 - 10.00 pm</p>
          <p>Sunday Lunch : 12.30 - 1.30 PM</p>
          <p>Closed Monday & Tuesday</p>
        </div>
      </div>
    </div>
  );
}

export default Homepage;

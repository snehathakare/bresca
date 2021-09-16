import React from "react";
import bg from "../../assets/images/event-bg.jpeg";

function Events() {
  return (
    <div className="bg-common">
      <div>
        <img src={bg} />
        <h1>PRIVATE DINING</h1>
        <div className="events-banner">
          <h1>FULL & PARTIAL RESTAURANT EVENTS</h1>
          <p>
            We welcome groups to exclusively reserve Bresca and treat their
            guests to our exciting approach to modern bistronomy. We can
            accommodate standing receptions of up to 115 guests or seated
            dinners of up to 70 in our main dining room.{" "}
          </p>
          <p>
            LARGE GROUP DINNER EVENTS- We can also accommodate dinner groups
            with a specially curated menu in the dining room. Groups will be
            seated in our dining room at either one table or multiple adjacent
            tables. A variety of dining options are available from a
            family-style communal feast to a seasonally inspired tasting menu.
            Please contact us for more information. We look forward to hosting
            you!
          </p>
          <button className="btn-primary">EVENT ENQUIRY</button>
        </div>
      </div>
    </div>
  );
}

export default Events;

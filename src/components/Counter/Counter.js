import "./Counter.scss";
import React from "react";
import CountUp from "react-countup";

let counterData = [
  {
    count: 259,
    matter: "STUDY PROGRMS",
  },
  {
    count: 180,
    matter: "ONLINE COURSES",
  },
  {
    count: 974,
    matter: "STUDENTS ONLINE",
  },
  {
    count: 159,
    matter: "AMAZING TUTORS",
  },
];
const Counter = () => {
  return (
    <div className="Counter-container">
      <div className="each-count-container">
        {counterData.map((item,i) => {
          return (
            <div className="each-count" key={i}>
              <CountUp
                scrollInHeight={50}
                className="count"
                start={0}
                end={item.count}
                duration={4}
                useEasing={true}
                useGrouping={true}
              />
              <p className="matter">{item.matter}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Counter;

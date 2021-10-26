import { React, useState } from "react";
import { Link } from 'react-router-dom';
import "./tabs.css";

function Tabs({ questionsAnswered, questionsUnanswered }) {
  // console.log(questionsAnswered);
  // console.log(questionsUnanswered);

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Unanswered
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Answered
        </button>

      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <h2>Unanswered</h2>
          <hr />
          {questionsUnanswered.map((question) => (
            <div className ="details-view">
              <h3 className = "author-name" >{question.author} asks:</h3>
              <label>{question.timestamp}</label>
              <h5 className ="would" >Would you rather ? </h5>
              <div className ="option-label">
                <b>Option 1:</b> {question.optionOne.text} <br />
                <b>Option 2:</b> {question.optionTwo.text}
              </div>
              <Link className = "details" to={`/questions/${question.id}`}>View Details</Link>

            </div>
          ))}
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>Answered</h2>
          <hr />
          {questionsAnswered.map((question) => (
            <div className ="details-view">
            <h3 className = "author-name" >{question.author} asks:</h3>
              <label>{question.timestamp}</label>
              <h5 className ="would" >Would you rather ? </h5>
              <div className ="option-label">
                <b>Option 1:</b> {question.optionOne.text} <br />
                <b>Option 2:</b> {question.optionTwo.text}
              </div>
              <Link className = "details" to={`/questions/${question.id}`}>View Details</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tabs;
import React, { useState } from 'react';
import { problemms } from './Questionss';
import { useNavigate } from 'react-router-dom';
import './Quizz.css';

function Quizz() {
  const [currentQues, setCurrentQues] = useState(0);
  const [choosenAns, setChoosenAns] = useState('');
  const [indexOfChoosenAns, setIndexOfChoosenAns] = useState(null);
  const [result, setResult] = useState(false);
  const [grades, setGrades] = useState({
    marks: 0,
    rightAnswers: 0,
    wrongAnswers: 0,
  });
  const [isAnsSelected, setIsAnsSelected] = useState(false);
  const totalQuestions = problemms.length;
  const navigate = useNavigate();

  const handleNext = () => {
    if (isAnsSelected) {
      setGrades((current) =>
        choosenAns
          ? {
              ...current,
              marks: current.marks + 5,
              rightAnswers: current.rightAnswers + 1,
            }
          : {
              ...current,
              wrongAnswers: current.wrongAnswers + 1,
            }
      );

      if (currentQues !== problemms.length - 1) {
        setCurrentQues((current) => current + 1);
      } else {
        setCurrentQues(0);
        setResult(true);
      }

      setChoosenAns('');
      setIndexOfChoosenAns(null);
      setIsAnsSelected(false);
    }
  };

  const ChoosenAns = (ans, index) => {
    setIndexOfChoosenAns(index);
    if (ans === problemms[currentQues].right_answer) {
      setChoosenAns(true);
    } else {
      setChoosenAns(false);
    }
    setIsAnsSelected(true);
  };

  const { question, answers } = problemms[currentQues];
  const numRightAnswers = grades.rightAnswers;
  const percentageRightAnswers = (numRightAnswers / totalQuestions) * 100;

  const handleCertificate = () => {
    navigate('/certificate');
  };

  return (
    <div className='q-container'>
      {!result ? (
        <div className='q-wrapper'>
          <div className='div-h1'>
            <h1 className='q-h1'> HTML QUIZ </h1>
            <p className='q-total'>Total Questions : {totalQuestions}</p>
          </div>

          <div className='div-h2'>
            {' '}
            <h2 className='q-h2'> {question} </h2>
          </div>

          <div className='div-ul'>
            <ul className='q-ul'>
              {answers.map((ans, index) => (
                <li
                  onClick={() => ChoosenAns(ans, index)}
                  key={ans}
                  className='choosen-ans'
                >
                  - {ans}
                </li>
              ))}
            </ul>
          </div>

          <button className='q-btn' onClick={handleNext} disabled={!isAnsSelected}>
            {currentQues === problemms.length - 1 ? 'finish' : 'next'}
          </button>
        </div>
      ) : (
        <div className='r-wrapper'>
          <h2 className='r-h2'>Result </h2>
          <p className='r-p'>Your degree is : {(numRightAnswers / totalQuestions) * 100} % </p>

          {percentageRightAnswers >= 50 ? (
            <a className='r-link'  > 
            <button className='.q-btn' onClick={handleCertificate}>
                        View My Certificate
            </button>
            </a>
          ) : (
            <p className='good'>Good luck, try again</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Quizz;
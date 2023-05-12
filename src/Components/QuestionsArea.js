// import * as React from 'react';
// import { useState , useEffect } from 'react';
// import styled from 'styled-components'
// import Pagination from '@mui/material/Pagination';
// import Stack from '@mui/material/Stack';
// import axios from 'axios';
// import { problems } from './Questions';


// const Container = styled.div`
// width:100%;
// height:100vh;
// background-color:#cacfe9;
// display:flex;
// justify-content:center;
// align-items:center;
// `

// const Content = styled.div`
// width:60%;
// height:500px;
// padding-top:30px;
// border:solid 5px #2f5188;
// border-radius:10px;
// margin:100px auto;
// display:flex;
// flex-direction:column;
// justify-content:space-between;
// align-items:center;
// background-color:#1b1e32;
// color: #fff;
// gap: 30px;
// `
// const Header = styled.div`
// flex: 1;
// display:flex;
// flex-direction:column;
// gap:10px;
// justify-content:center;
// align-items:center;
// `
// const QuizLabel = styled.h2`
// text-transform:uppercase;
// `
// const QuestionsCount = styled.h5`
// text-transform:uppercase;
// `
// const QuesAndAns = styled.div`
// width: 100%;
// flex: 5;
// display:flex;
// flex-direction:column;
// gap:20px;
// justify-content:flex-start;
// `
// const QuestionArea = styled.div`
// flex: 1;
// display:flex;
// justify-content:flex-start;
// align-items:center;
// padding-left:15px;
// `
// const Question = styled.div`
// display:flex;
// gap:5px;
// justify-content:center;
// align-items:center;

// `
// const AnswersArea = styled.div`
// flex: 6;
// display:flex;
// flex-direction:column;
// gap:15px;
// justify-content:flex-start;
// padding-left:15px;
// `
// const Answer = styled.div`
// display:flex;
// align-items:center;
// padding-left:15px;
// gap:10px;
// `
// const Label = styled.label`
// cursor:pointer ;`
// const SubmitAndTimerArea = styled.div`
// flex: 1;
// width: 90%;
// display: flex;
// justify-content:space-between;
// align-items:center;
// `
// const Submit = styled.button`
// padding: 10px 40px;
// border:none ;
// border-radius:5px;
// background-color:#2f5188 ;
// font-size:18px;
// color: #fff;

// &:hover{
//     letter-spacing:1px;
//     cursor:pointer ;
//     transition: all 0.6s ease-in;
//     -moz-transition: all 0.6s ease-in;
//     -webkit-transition: all 0.6s ease-in;
//     -ms-transition: all 0.6s ease-in;
//     -o-transition: all 0.6s ease-in;
// }
// `
// const Timer = styled.span`
// background-color:#2f5188 ;
// width: 60px;
// height: 25px;
// display: flex;
// justify-content:center;
// align-items:center;
// `
// const PrevAndNextArea = styled.div`

// `
// const Previous = styled.button`
// padding: 10px 0;
// width: 100px;
// border: none;
// border-right: #000b76 solid 2px;
// background-color:#2f5188 ;
// font-size:18px;
// color: #fff;
// border-radius:5px ;

// &:hover{
// cursor: pointer;
// background-color:#fff;
// color: #000;
// border: #000 1px solid;
// letter-spacing:3px;


// transition: all 0.6s ease-in;
//     -moz-transition: all 0.6s ease-in;
//     -webkit-transition: all 0.6s ease-in;
//     -ms-transition: all 0.6s ease-in;
//     -o-transition: all 0.6s ease-in;
// }
// `
// const Next = styled.button`
// padding: 10px 0;
// width: 100px;
// border: none;
// border-left: #000b76 solid 2px;
// background-color:#2f5188 ;
// font-size:18px;
// color: #fff;
// border-radius:5px ;


// &:hover{
// cursor: pointer;
// background-color:#fff;
// color: #000;
// border: #000 1px solid;
// letter-spacing:3px;

// transition: all 0.6s ease-in;
//     -moz-transition: all 0.6s ease-in;
//     -webkit-transition: all 0.6s ease-in;
//     -ms-transition: all 0.6s ease-in;
//     -o-transition: all 0.6s ease-in;
// }
// `
// const PaginationArea = styled.div`
// flex: 1;
// display: flex;
// justify-content:center;
// align-items:center;
// width: 80%;
// margin: auto;
// padding-bottom:10px ;
// color: 1e293b;
// `

// function QuestionsArea() {

//     const [ques, setQues] = useState([]);
//     const [rightAnswer, setRightAnswer] = useState([]);

//     const [id,setId] = useState(0);


//         useEffect(() => {
//             axios.get(problems)
//             .then(res =>setQues(res.data))
//             .catch(err => console.log(err));
//         },);


//         const handleNext= () => {
//             setId(id + 1)
//             if(id===9){
//                 setId(id);
//             }
//         }
//         const handlePrevious= () => {
//             setId(id - 1)
//             if(id===0){
//                 setId(id);
//             }
//         }
    
//             const btn = document.querySelector("#btn");
//             const marking = document.querySelector("#mark");
//             const radioButtons = document.querySelectorAll("input[name='answer']") ;
//             const output = document.querySelector("#out");


//             useEffect(() => {
//                 let selectedAns ;
//                     for(const radioButton of radioButtons){
//                         if(radioButton.checked){
//                             selectedAns = radioButton.value;
//                             output.innerHTML=selectedAns;
//                         }}
//             }, );
//             // useEffect(() => {
//             //     btn.addEventListener("click", ()=>{
//             //         let selectedAns ;
//             //         for(const radioButton of radioButtons){
//             //             if(radioButton.checked){
//             //                 selectedAns = radioButton.value;
//             //                 if(selectedAns === problems[id].right_answer){
//             //                     marking.innerText = "true"
//             //                 }else{
//             //                     marking.innerText = "no"
//             //                 }
//             //             }
//             //             }
//             //             output.innerText = selectedAns ? `your Answer is ${selectedAns}`:"you haven't selected any answer";
                        
                        
//             //         })
//             // }, );

            
//     return (
//         <Container>
//             <Content>

//                 <Header>
//                     <QuizLabel> HTML Quiz </QuizLabel>
//                     <QuestionsCount> Questions Count : {10-((problems[id].id)+1)}</QuestionsCount>
//                 </Header>
                    

//                 <QuesAndAns>
//                     <QuestionArea>
//                         <Question>
//                                 Q{(problems[id].id)+1} : {problems[id].title}
//                         </Question>
//                     </QuestionArea>

//                     <AnswersArea>
//                         <Answer>
//                             <input  type="radio" id="answer_1" name='answer' value={problems[id].answer_1} ></input>
//                             <Label for="answer_1"> {problems[id].answer_1} </Label>
//                         </Answer>
//                         <Answer>
//                             <input   type="radio" id="answer_2" name='answer' value={problems[id].answer_2} ></input>
//                             <Label for="answer_2"> {problems[id].answer_2} </Label>
//                         </Answer>
//                         <Answer>
//                             <input   type="radio" id="answer_3" name='answer' value={problems[id].answer_3} ></input>
//                             <Label for="answer_3"> {problems[id].answer_3}</Label>
//                         </Answer>    
//                         <Answer>
//                             <input   type="radio" id="answer_4" name='answer' value={problems[id].answer_4} ></input>
//                             <Label for="answer_4"> {problems[id].answer_4} </Label>
//                         </Answer>
//                         <button id="btn" >show</button>
//                         <p id="out"></p>
//                         <p id="mark"></p>
//                     </AnswersArea>
//                 </QuesAndAns>


//                 <SubmitAndTimerArea>
//                     <Submit>
//                         Submit
//                     </Submit>
//                     <Timer>
//                         30:55
//                     </Timer>
//                 </SubmitAndTimerArea>
                
//                 <PrevAndNextArea>
//                     <Previous onClick={handlePrevious} className='btn' >
//                         Previous
//                     </Previous>
//                     <Next onClick={handleNext}  className='btn'>
//                         Next
//                     </Next>
//                 </PrevAndNextArea>
                
//                 <PaginationArea>
//                     <Stack spacing={2}>
//                         <Pagination count={10} color="primary" />
//                     </Stack>
//                 </PaginationArea>
//             </Content>
//         </Container>
//     )
// }

// export default QuestionsArea

import React from 'react'
import ReactDOM from 'react-dom/client'

const isMorning = true;
const morningText = "good morning user"
const afternoonText = "afternoon user"

function handleClick(state) {
    console.log("i was clicked", state);
}

const morningElement = <div>{morningText}<span onClick={() => handleClick(morningText)}>it is 8am</span></div>
const afternoonElement = <div>{afternoonText} it is 6pm</div>
const greetingElement = isMorning ? morningElement : afternoonElement

const GreetingElement = () => <>
    {greetingElement}
    i am inside component
</>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<GreetingElement />);

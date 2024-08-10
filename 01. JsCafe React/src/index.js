import React from 'react'
// const div = React.createElement('div', {className: 'text'}, "hello from vedant, i am inside react now")
const child1 = React.createElement('p', {}, "I am a child1")
const child2 = React.createElement('p', {}, "I am child2")
const div = React.createElement('div', {className: 'text'}, [child1, child2]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(div);
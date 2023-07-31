import React from 'react';
import './App.css';

function hello() {
  debugger
   alert ('Hello IT-KAMASUTRA')
}

hello()


function App() {
  return (
      <div>
      This is APP component
    <Rating/>
    </div>
  );
}
export default App;

function Rating() {
    return ( <div>
            <Star/>
            <Star/>
            <Star/>
        </div>
    )
}

function Star() {
    return ( <div>
            <div>star</div>
        </div>
    )
}

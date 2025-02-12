import React, { useState } from 'react';
    import './App.css';

    function App() {
      const [buttonText, setButtonText] = useState("Yes, I'm your girlfriend");
      const [isClicked, setIsClicked] = useState(false);

      const handleGirlfriendClick = () => {
        if (!isClicked) {
          setButtonText("Are you sure?");
          setIsClicked(true);
        } else {
          window.location.href = './emoji.html';
        }
      };

      return (
        <div className="App">
          <div className="container">
            <h1>No girls permitted on this website other than my girlfriend</h1>
            <a href="./haha.html">
              <button className="grey-button">I'm sorry, I shall close the page</button>
            </a>
            <button className="pink-button" onClick={handleGirlfriendClick}>
              {buttonText}
            </button>
          </div>
        </div>
      );
    }

    export default App;

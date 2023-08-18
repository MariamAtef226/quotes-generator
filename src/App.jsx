import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import q from "./data.json";

// background, hover
let colors = [
  ["#16a085", "#16a085"],
  ["#9b59b6", "a569bd"],
  ["#472e32", "#594246"],
  ["#77b1a9", "#84b9b1"],
  ["#bdbb99", "#c3c2a3"],
  ["#342224", "#483839"],
  ["#fb6964", "#fb7873"],
  ["#9b59b6", "#a569bd"],
  ["#f39c12", "#f4a629"],
  ["#27ae60", "#3cb670"],
  ["#2c3e50", "#415161"],
];

function App() {
  let [index, setIndex] = useState(Math.floor(Math.random() * q.length)); // dummy index for now
  let [color, setColor] = useState(
    colors[Math.floor(Math.random() * colors.length)]
  );
  let [quotes, setQuotes] = useState(q);

  function mouseOverHandler(event) {
    event.target.style.backgroundColor = color[1];



  }
  function mouseOutHandler(event) {
    event.target.style.backgroundColor = color[0];

  }
  function changeQuote() {
    setIndex(Math.floor(Math.random() * q.length));
    setColor(colors[Math.floor(Math.random() * colors.length)]);
  }
  return (
    <>
      <main style={{ backgroundColor: color[0] }}>
        <div id="quote-box" style={{ color: color[0] }}>
          <div id='text' className="quote">
            <FontAwesomeIcon icon={faQuoteLeft} /> {quotes[index].quote}
          </div>

          <div id='author' className="author">- {quotes[index].author}</div>
          <div className="buttons">
            <button
            id='tweet-quote'
              style={{ backgroundColor: color[0] }}
              onMouseOver={mouseOverHandler}
              onMouseLeave={mouseOutHandler}
            >

              <a href={"https://twitter.com/intent/tweet?hashtags=quote&text=\""+quotes[index].quote+" \" - "+quotes[index].author} target="_blank">
              Share to Twitter
              </a>
            </button>
            <button
                        id='new-quote'

              style={{ backgroundColor: color[0] }}
              onMouseOver={mouseOverHandler}
              onMouseLeave={mouseOutHandler}
              onClick={changeQuote}
            >
              New Quote
            </button>
          </div>
        </div>

      </main>
    </>
  );
}

export default App;

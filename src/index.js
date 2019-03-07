import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const quotesList = [
  ["In every walk with nature one receives far more than he seeks.", "John Muir"],
  ["The most beautiful gift of nature is that it gives one pleasure to look around and try to comprehend what we see.", "Albert Einstein"],
  ["Going to the mountains is going home.", "John Muir"],
  ["Over every mountain there is a path, although it may not be seen from the valley.", "Theodore Roethke"],
  ["There are always flowers for those who want to see them.", "Henri Matisse"],
  ["Nature does not hurry, yet everything is accomplished.", "Lao Tzu"],
  ["I felt my lungs inflate with the onrush of scenery—air, mountains, trees, people. I thought, ‘This is what it is to be happy.’", "Sylvia Plath"],
  ["Adopt the pace of nature: her secret is patience.", "Ralph Waldo Emerson"],
  ["Should you shield the canyons from the windstorms you would never see the true beauty of their carvings.", "Elisabeth Kübler-Ross"],
  ["Nature is not a place to visit. It is home.", "Gary Snyder"],
  ["In all things of nature there is something of the marvelous.", "Aristotle"],
  ["Instructions for living a life: Pay attention. Be astonished. Tell about it.", "Mary Oliver"],
  ["We do not see nature with our eyes, but with our understandings and our hearts.", "William Hazlett"],
  ["Nature gives to every time and season some beauties of its own.", "Charles Dickens"]
];

class QuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomIndex: Math.floor(Math.random() * quotesList.length),
    };
    this.changeQuote = this.changeQuote.bind(this);
  }

  changeQuote() {
    this.setState({
      randomIndex: Math.floor(Math.random() * quotesList.length),
    });
  }

  render() {
    return (
      <div className="container" id="quote-box">
        <Quote randomIndex={this.state.randomIndex} changeQuote={this.changeQuote}/>
      </div>
    );
  }
}

class Quote extends React.Component {
  render() {
    const quote = quotesList[this.props.randomIndex][0];
    const author = quotesList[this.props.randomIndex][1];
    const encodedURL = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(quote) + " - " + encodeURIComponent(author);
    return (
      <div>
        <div className="quote">
          <blockquote id="text"><p>{quote}</p></blockquote>
          <br />
          <cite id="author">{author}</cite>
        </div>
        <div className="button">
          <button id="new-quote" onClick={this.props.changeQuote}>Get A New Quote</button>
          <a id="tweet-quote" target="_blank" rel="noopener noreferrer" href={encodedURL}>Tweet Quote</a>
        </div>
       </div>
    );
  }
}

ReactDOM.render(<QuoteMachine />, document.getElementById("root"));

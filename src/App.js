import React from 'react';
import Scoreboard from './components/scoreboard'
import Card from './components/card'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      cards: [0,1,2,3,4,5,6,7,8,9],
      cardsUI: [],
      id: 0,
      cardId: 0,
      clicks: [],
      highScore: 0,
      score: 0,
      status: "Click on a card",
      isOver: false
    }
    this.getCards = this.getCards.bind(this)
    this.handleCallback = this.handleCallback.bind(this)
    this.checkGame = this.checkGame.bind(this)
  }
  
  

  handleCallback = (childData) =>{
  
    //checks if the game is over
    this.checkGame(childData)
    //saved the card if
    this.setState({cardId: childData, clicks: [...this.state.clicks, childData]})
    //generate random cards
    this.getCards()
    

  }
//the function will randomise cards array on button click
  getCards(){
    let array = this.state.cards
    let i = 9;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  let uis = [];
  //creates cards in a random order and then pushes them in an array
  array.forEach((item)=>{
    uis.push(<Card id={item} checkGame={this.checkGame} parentCallback = {this.handleCallback} data={this.state.cardId}/>)
  })
  this.setState({cardsUI: uis})


  
  }
   checkGame(childData){
 
     //regex that check if there are at least 2 digits that are the same
    let regex = /([0-9]).*?\1/
    //join the array elements so it can be checked with regex
    let hits = this.state.clicks.join('')
    console.log(hits, this.state.clicks)
    //game over if the test is true and updates highscore with current score, or just increment the current score by 1 if it is false
    if(regex.test(hits)===true){
      this.setState({status: 'Game over!', highScore: this.state.score})
      this.setState({score: 0, clicks: []})
    
    }else {
      this.setState({score: this.state.score+1})
    }
    
   }




  render(){
 return(
   <div className='content'>
   <div className='header'>
  <button type='button' onClick={this.getCards}>Shuffle cards</button>
  <div className='status'>{this.state.status}</div>
   <Scoreboard score={this.state.score} highScore={this.state.highScore} />
   </div>
   <div className='cardsContainer'>
    {this.state.cardsUI}
   </div>
   
   </div>
 )}
}




export default App;

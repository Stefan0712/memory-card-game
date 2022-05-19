import React, {useEffect, useState} from 'react';
 

class Scoreboard extends React.Component{
render(){
return (
    <div className='scoreboard'>
        <div id="currentScore">Current score: {this.props.score}</div>
        <div id='highestScore'>Highscore: {this.props.highScore}</div>
    </div>
)
}



}

export default Scoreboard
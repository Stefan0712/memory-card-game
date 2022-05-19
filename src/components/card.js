import React, {useState, useEffect} from 'react'



class Card extends React.Component{
    constructor(props){
        super(props)
        this.state={
            names:['Cassidy','Johnatan','Carol','Muriel','Arthur','Tom','Jolyne','Dio','Giorno','Brandon']
        }
        this.onTrigger = this.onTrigger.bind(this)
      
    }
    onTrigger = () => {
            this.props.parentCallback(this.props.id);
          };
    render(){
    return (
      <div id={this.props.id} key={this.props.id+1} className='cardContainer' onClick={this.onTrigger}>
          <div className='imageContainer'>
              <img src={`./imgs/cat${this.props.id}.jpg`} alt="Cat" />
          </div>
          <div className='cardName'>{`${this.state.names[this.props.id]}`}</div>
      </div>
  )}
    }

export default Card;
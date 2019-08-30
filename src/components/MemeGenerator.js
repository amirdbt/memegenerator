import React from "react"


class MemeGenerator extends React.Component{
    constructor(){
        super()
        this.state={
            topText: "",
            bottomText: "",
            randImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs : []
        }
        
    }
  handleChange = (event) =>{
    const {name,value} = event.target
    this.setState({
        [name] : value
    })
  }
  handleSubmit=(event)=>{
    event.preventDefault()
   const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
   const randmg = this.state.allMemeImgs[randNum].url
    this.setState({
        randImg : randmg
    })
  }
  componentDidMount(){
      fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response =>{
          const {memes} = response.data
          this.setState({
              allMemeImgs : memes
          })
      })
  }
    render(){
        return(
            <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    <input type="text" name="topText" value={this.state.topText} placeholder="top text" onChange={this.handleChange} />
                    <input type="text" name="bottomText" value={this.state.bottomText} placeholder="bottom text" onChange={this.handleChange} />

                    <button>Gen</button>
                </form>
                <div className="meme">
                    <img src={this.state.randImg} alt="memes" height="700px"/>
                  <h2 className="top">{this.state.topText}</h2>  
                  <h2 className="bottom"> {this.state.bottomText}</h2> 
                </div>
            </div>
        )
    }
}

export default MemeGenerator
/**
     * Create a method that, when the "Gen" button is clicked, chooses one of the
     * memes from our `allMemeImgs` array at random and makes it so that is the
     * meme image that shows up in the bottom portion of our meme generator site
     */

     
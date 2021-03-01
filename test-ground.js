class App extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        hand: [] 
      }
    }

    drawCard = () => {
      const { hand } = this.state
      let suit = ["❤️", "♦️", "♠️", "♣️"]
      let rank = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
      let draw = `${rank[Math.floor(Math.random() * rank.length)]} ${suit[Math.floor(Math.random() * suit.length)]}`
      if(hand.indexOf(draw) === -1){
        this.setState({ hand: [...hand, draw]})
      } else if(hand.length !== 52){
        this.drawCard()
      } else {
        alert("All cards have been dealt.")
      }
    }

    shuffle = () => {
      this.setState({ hand: [] })
    }
  }

  console.log(typeof App)
import React,{Component} from "react"
import Scroll from "./Scroll"
import CardList from "./CardList"
import SearchBox from "./SearchBox"
import "./App.css"



class App extends Component{
    constructor(){
        super()
        this.state={
            robots: [],
            serachField:''
        }
        
    }
    onSearchChange=(event)=>{
        this.setState({serachField: event.target.value})
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            return response.json()
        })
        .then(users => {
            this.setState({robots:users})
        })
    }

    render(){
        const filteredRobots=this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.serachField.toLowerCase())
        })
        if(this.state.robots.length===0){
            return(<h3 className='tc'>Loading....</h3>)
        }else{
            return(
                <div className="tc">
                    <h1 className='f1'>Robo-Friends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={filteredRobots}/>
                    </Scroll>
                    
                    
                </div>
                
            )

        }
        

    }
    
}
export default App
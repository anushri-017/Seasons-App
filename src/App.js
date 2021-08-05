import React from "react";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component{
    constructor(props){
    super(props);
    this.state = {
        lat:null,
        errorMessage:''//the only time we assigned value to  state directly
    }

}
componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
        position => this.setState({lat:position.coords.latitude}),
        error => {
            this.setState({errorMessage:error.message})
        }
    )
}

    render() {
      //React says we have to define render() always
     if(!this.state.errorMessage && this.state.lat){
         return(
            <SeasonDisplay latitude={this.state.lat}/>
         )
     }
     if(this.state.errorMessage && !this.state.lat){
            return(
                <div>Error:{this.state.errorMessage}</div>
            )
        }
     return(
        <Spinner msg='Please accept message request'/>
     )
    }
}

export default App;
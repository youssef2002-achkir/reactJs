import React, {Component} from 'react'
import Form  from './Components/Form';
import Weather from './Components/Weather';


//Stateful Component
const API_KEY = '45bdb68ef89ce158181b1dc7a7d2f6c0';
//https://api.openweathermap.org/data/2.5/weather?q=cairo%2Cegypt&appid=45bdb68ef89ce158181b1dc7a7d2f6c0
class App extends Component{
  state = {
    tempreature: '',
    city:'',
    country: '',
    humidity:'',
    description: '',
    error: ''

  }
 getWeather = async (e) =>{
   e.preventDefault();
   const city  = e.target.elements.city.value;
   const country  = e.target.elements.country.value;
   const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`)
   const data = await api.json();
   //console.log(data)
   if (city &&  country) {
     this.setState({
      tempreature: data.main.temp,
      city:data.name,
      country: data.sys.country,
      humidity:data.main.humidity,
      description: data.weather[0].description,
      error: ''
     })
   } else{
     this.setState({
      tempreature: '',
      city:'',
      country: '',
      humidity:'',
      description: '',
      error: 'Please enter DATA'
     })
   }
   
  
 }
  render(){
    return(
      <div className='App'>
      <Form weather={this.getWeather}/>
      <Weather
    tempreature={this.state.tempreature}
    city={this.state.city}
    country={this.state.country}
    humidity={this.state.humidity}
    description={this.state.description}
    error={this.state.error}
      />

      </div>
    )
  }
  
}
export default App;

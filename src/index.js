import React from 'react';
import ReactDOM from 'react-dom';
import MostarEstaciones from './mostrarestaciones';
import Spinner from './spinner';

class App extends React.Component {

  state= {lat: null, mensajeErro: ''};

  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(

       posicion => this.setState({lat: posicion.coords.latitude}),
       err => this.setState({mensajeErro:err.message})

    );
  }

  //React dice que tenemos que definir render

  render(){

    if(this.state.mensajeErro && !this.state.lat){
      return <div>Error: {this.state.mensajeErro}</div>
    }else if(this.state.lat && !this.state.mensajeErro){
      return <div><MostarEstaciones lat={this.state.lat}/></div>
    }else{
      return <Spinner mensaje="Por favor comparte tu ubicación "/>
    }

  }
  }

ReactDOM.render(  <App/>, document.querySelector('#root'));

import { useEffect, useState } from 'react';
import './App.css';
import {  Container, Options, Card, BigCard, Title, LineAnswers } from "./appStyle";
import dispositivos from "./public/icons/dispositivos.svg";
import casinha from "./public/icons/casinha.svg";
import api_get_first_alert from './services/api_play_alert_sound';
import api from './services/api';

function App() {

  const traduction ={
    "ARRIVE_DOOR" : "Campainha tocando"
  }
  const [myNotifications, setMyNotifications] = useState([]);

  function playSound(value){
    const response = api_get_first_alert.post();
    alert(response);
  }

  async function charge (){
    var notifications = [];
    var notification = null;

    do{
      notification = await api.get();
      if ( !(notification.data === "") ){
        notifications.push([notification.data.id, notification.data.name, new Date().toLocaleTimeString().substring(0, 5)]);
      } 
    }while(!(notification.data === ""));

    if (notifications.length > 0){
      setMyNotifications(oldState => [...oldState, notifications]);
    }

    return null;
  }

  const app = {
    start: function() {
      setInterval(async () => charge(), 5000);
    }
  };

  const disable = {
    opacity: 0.3,
    cursor: "not-allowed"
  }

  useEffect(() => {
    app.start();
  }, []);

  return (
    <Container>
      <Options>
        <div className="two-cards">
          <Card>
            <img src={dispositivos} alt="icon"/>
            <h2>Dispositivos</h2>
          </Card>
          <Card>
            <img src={casinha} alt="icon"/>
            <h2>House</h2>
          </Card>
        </div>
        <BigCard>
          <Title>Notificações</Title>
          <div className='null'>
            {
              myNotifications ?
                  myNotifications.map(x =>(
                    <h4 key={x[0][0]}>{traduction[x[0][1]] + " - " + x[0][2]}</h4>
                  )) 
                : 
                  null
            }
          </div>
        </BigCard>
        <BigCard>
          <Title>Respostas rapidas</Title>
          <div className='respostas'>
            <LineAnswers>
              <h3>“Já vou”</h3>
              <button onClick={() => playSound(1)}>Enviar</button>
            </LineAnswers>
            <LineAnswers style={disable}>
              <h3>“Um minuto”</h3>
              <button onClick={() => playSound(2)}>Enviar</button>
            </LineAnswers>
            <LineAnswers style={disable}>
              <h3>“Não estou em casa”</h3>
              <button onClick={() => playSound(3)}>Enviar</button>
            </LineAnswers>
          </div>
        </BigCard>
        <BigCard>
          <Title>Sobre o App</Title>
        </BigCard>

      </Options>
    </Container>
  );
}

export default App;

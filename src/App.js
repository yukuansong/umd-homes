import "./App.css";
import LoginPage from './routes/loginPage';
import {useState} from 'react';
import View from './routes/View';

function App() {
  const [screen, setScreen] = useState("auth")
  return (
    <div>
      {
        screen === "auth"? <LoginPage screen={screen} setScreen={setScreen} />: <View screen={screen} setScreen={setScreen}/>
      }

    </div>
  );
}

export default App;

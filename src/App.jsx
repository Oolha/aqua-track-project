import './App.css';
import { Calendar } from './components/Calendar/Calendar';
const App = () => {
  const date = new Date();
  // console.log(date)
  return <div>
 <Calendar initialDate={date}/>
  </div>;
};

export default App;

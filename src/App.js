
import './App.css';
import HeroLiist from './heroeslist/HeroLiist';
import Details from './Details/Details';
import Message from './Message/Message';
import {useEffect ,useState} from 'react';

import axios from 'axios';
function App() {
  const [selectedItem , setSelectedItem]=useState({});
  const [hero, setheroes] = useState([]);
  const [message, setMessage] = useState([]);
  useEffect(() => {

      axios({
          method: 'GET',
          url: "https://60dff0ba6b689e001788c858.mockapi.io/heroes",
      }).then(response => {
          console.log('response = ', response);
          setheroes(response.data);
      });
  },[]); 
  function changeName(item) {
    const changeItem = hero.find(({id}) => id === item.id);
    if (!changeItem) return;
    changeItem.name = item.name;
 
    setheroes([...hero]);
  }
  return (
   
     <div className="heroes-page">
     <h1> Heroes</h1>
      <HeroLiist
        hero={hero}
        setheroes={setheroes}
        setSelectedItem={setSelectedItem}
        selectedItem={selectedItem}
        message={message}
        setMessage={setMessage}
      />
      <Details
        selectedItem={selectedItem} onChangeName={(item) => {changeName(item)}}
      />
      <Message message={message} setMessage={setMessage} />  
    </div>
  );
}

export default App;

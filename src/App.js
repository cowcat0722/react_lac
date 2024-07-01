import './App.css';
import Header from './componets/Heater';
import Body from './componets/Body';
import Body2 from './componets/Body2';
import Post from './componets/Post';

function App() {
  return (
    <div>
      <Header />
      <Body />
      <Body2 username={"ssar"} password={"1234"} />
      <Post />
    </div>
  )
}

export default App;

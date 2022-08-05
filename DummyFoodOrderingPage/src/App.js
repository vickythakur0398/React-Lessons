
import Header from "./components/Layout/Header";
import Meals from './components/Meals/Meals'
import Cart from '../src/components/Cart/Cart';

function App() {
  return (
    <div>
    <Cart/>
      <Header/>
      <main>
      <Meals></Meals>
      </main>
    </div>
  );
}

export default App;

import Foods from './components/Foods';
import HeadlineCards from './components/HeadlineCards';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Rating from './components/Rating';
import { FoodsComponent } from './store/FoodsContext';

function App() {
  return (
    <div className='max-width'>
      <Navbar />
      <Hero />
      <HeadlineCards />
      <FoodsComponent>
        <Foods />
      </FoodsComponent>
      <Rating />
    </div>
  );
}

export default App;

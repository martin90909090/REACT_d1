import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import MyCard from './MyCard';
import Tags from './Tags';
import Footer from './Footer';

const App = () => {
  const tag1 = ['Husky'];
  const tag2 = ['Bobtail'];
  const tag3 = ['Shar Pei'];
  const tag4 = ['Beagle'];
  return (
    <div className="App">
      <Header className="header" title="Adopta un perrito" />
      <div className='Cards'>
        <div className='Card'>
          <MyCard imgUrl="https://www.akc.org/wp-content/uploads/2017/11/Siberian-Husky-standing-outdoors-in-the-winter.jpg"
            title="El Aventurero Husky"
            description="El perro husky es una raza que se utiliza harto en el tiraje de los trineos"
          />
          <Tags className="tag" tags={tag1} />
        </div>
        <div className='Card'>
          <MyCard imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Bobtail.JPG/640px-Bobtail.JPG" 
            title="El Amigable Bobtail"
            description="El perro bobtail con su cara de tener muchos amigos, siempre te acompañará con una sonrisa"
          />
          <Tags className="tag" tags={tag2} />
        </div>
        <div className='Card'>
          <MyCard imgUrl="https://cdn.britannica.com/56/236456-050-D13140E2/Chinese-shar-pei-dog.jpg" 
            title="El Arrugado Shar Pei"
            description="El perro shar pei, con su arrugado pelaje, necesita de muchos cuidados veterinarios"
          />
          <Tags className="tag" tags={tag3} />
        </div>
        <div className='Card'>
          <MyCard imgUrl="https://cdn.britannica.com/16/234216-050-C66F8665/beagle-hound-dog.jpg" 
            title="El Incansable Beagle"
            description="El perro beagle es una raza de perro muy popular, conocida por su carácter 
            alegre y juguetón"
          />
          <Tags className="tag" tags={tag4} />
        </div>
      </div>
      <Footer footer="Estas son imágenes de perritos. Espero que no fijes tanto en el aspecto de cada uno, sino que 
      te concentres en el llamado a adoptar que sientas por alguno de ellos"/>
    </div>
  );
}

export default App;
import Card2 from './Card2';
import Carousel from './Carousel';
import Footer from './Footer';

const Home = () => {
    return(
    <div id='image' style={{height:850}}>
        <div>
          <div>
            <div className = 'row'>
            <Carousel />
            </div>
          </div>

          <div className='container-fluid'>
          <div className = 'row'>
            <div className = 'col-11 ms-4'>
            <Card2 />
            </div>

          </div>
          </div>      
        </div>
    </div>

    );

}

export default Home;
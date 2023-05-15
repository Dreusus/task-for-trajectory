import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Main from '../Main/Main'
import carsApi from '../../utilis/CarsApi'
import { useEffect, useState } from 'react';
import MapWithObjects from '../Maps/Maps'



function App() {
  const [carsList, setCarsList] = useState([])
  useEffect(() => {
    carsApi.getCarsList()
      .then(res => setCarsList(res))
      .catch(err => console.log(err))

  }, [])

  return (
    <>
      <Header />
      <Main cards={carsList} />
      <MapWithObjects carsList={carsList} />
      <Footer />
    </>
  );
}

export default App;

import Card from '../Card/Card'

function CarsList({
  cards
}) {

  console.log(cards)
  return (
    <section className='cars__container'>
      <Card />
     
    </section>

  )
}
export default CarsList;
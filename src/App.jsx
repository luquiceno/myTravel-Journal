import Navbar from './components/Navbar'
import Card from './components/Card'
import Footer from './components/Footer'
import './App.css'
import data from './data'

function App() {
  
  const cards = data.map(item => {
    return (
      <Card 
        key={item.id}
        {...item}   //spread method
      />
    )
  })

  return (
    <div>
     <Navbar />
     {cards}
     <Footer />
    </div>
  )
}

export default App



/*
<Card 
  title={item.title}
  location={item.location}
  googleMapsUrl={item.googleMapsUrl}
  startDate={item.startDate}
  endDate={item.endDate}
  description={item.description} 
  imageUrl={item.imageUrl}
/>
*/
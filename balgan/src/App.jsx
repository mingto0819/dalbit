import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import ProductSplash from './components/ProductSplash'
import Ingredients from './components/Ingredients'
import Recipes from './components/Recipes'
import Features from './components/Features'
import FooterCTA from './components/FooterCTA'

function App() {
  return (
    <div className="min-h-screen bg-dalbit-black text-dalbit-silver">
      <Header />
      <main>
        <Hero />
        <ProductSplash />
        <Ingredients />
        <Recipes />
        <Features />
        <FooterCTA />
      </main>
    </div>
  )
}

export default App

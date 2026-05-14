import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import ProductSplash from './components/ProductSplash'
import Solution from './components/Solution'
import Ingredients from './components/Ingredients'
import Recipes from './components/Recipes'
import Features from './components/Features'
import FooterCTA from './components/FooterCTA'

function App() {
  return (
    <div className="min-h-screen bg-hanji text-ink">
      <Header />
      <main>
        <Hero />
        <ProductSplash />
        <Solution />
        <Ingredients />
        <Recipes />
        <Features />
        <FooterCTA />
      </main>
    </div>
  )
}

export default App

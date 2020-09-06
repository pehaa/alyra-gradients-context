import React from "react"
import "./App.css"
import { gradients } from "./gradients"
import GradientsList from "./components/GradientsList"
import GradientsHeader from "./components/GradientsHeader"

function App() {
  return (
    <div className="App">
      <GradientsHeader list={gradients}>
        <h1 className="display-1">Alyra Gradients</h1>
        <p className="tagline">Ultime collection de plus beaux dégradés</p>
      </GradientsHeader>
      <section className="container">
        <h1 className="text-center my-4">Alyra Gradients</h1>
        <GradientsList list={gradients} />
      </section>
    </div>
  )
}

export default App

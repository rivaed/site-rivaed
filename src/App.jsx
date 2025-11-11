import { Routes, Route, Link } from 'react-router-dom'
import './App.css'

// Crie estes componentes como arquivos simples em 'src/'
// Ex: Home.jsx, About.jsx

// ----- Exemplo de componente Home (Home.jsx) -----
// function Home() {
//   return <h2>Página Inicial</h2>
// }
// export default Home

// ----- Exemplo de componente About (About.jsx) -----
// function About() {
//   return <h2>Sobre Nós</h2>
// }
// export default About


function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link> | {" "}
        <Link to="/sobre">Sobre</Link>
      </nav>

      {/* Área onde as páginas serão renderizadas */}
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/sobre" element={<About />} /> */}

        {/* Por enquanto, vamos usar o texto direto: */}
        <Route path="/" element={<h2>Página Inicial</h2>} />
        <Route path="/sobre" element={<h2>Sobre Nós</h2>} />
      </Routes>
    </div>
  )
}

export default App
import { Header, Footer, Home, About } from "./components/index";

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <div className="container">
          <h1>React Portfolio</h1>
        </div>
        <About />
      </main>
      <Footer />
    </>
  );
}

export default App;

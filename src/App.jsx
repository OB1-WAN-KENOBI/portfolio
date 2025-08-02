import { Header, Footer, Home, About, SkillsInfo, Services, Portfolio } from "./components/index";

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <SkillsInfo />
        <Services />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}

export default App;

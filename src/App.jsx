import { Header, Footer, Home, About, SkillsInfo, Services, Portfolio, GetInTouch, Clients, Contact } from "./components/index";

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
        <GetInTouch />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;

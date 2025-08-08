import { Header, Footer, Home, About, SkillsInfo, Services, Portfolio, GetInTouch, Clients } from "./components/index";

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
      </main>
      <Footer />
    </>
  );
}

export default App;

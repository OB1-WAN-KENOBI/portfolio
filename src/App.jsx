import { Header, Footer, Home, About, SkillsInfo, Services } from "./components/index";

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <SkillsInfo />
        <Services />
      </main>
      <Footer />
    </>
  );
}

export default App;

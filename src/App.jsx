import { Header, Footer, Home, About, SkillsInfo } from "./components/index";

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <SkillsInfo />
      </main>
      <Footer />
    </>
  );
}

export default App;

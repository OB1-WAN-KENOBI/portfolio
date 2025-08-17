import {
  Header,
  Footer,
  Home,
  About,
  SkillsInfo,
  Services,
  Portfolio,
  GetInTouch,
  Clients,
  Contact,
  ScrollToTop,
} from "./components/index";

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
      <ScrollToTop />
    </>
  );
}

export default App;

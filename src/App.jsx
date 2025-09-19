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
  ThemeToggle,
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
      <ThemeToggle />
    </>
  );
}

export default App;

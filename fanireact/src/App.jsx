
import Header from './header.jsx';
import Footer from './footer.jsx';
import Card from './card.jsx';

function App() {
  return (
    <>
      <Header />
      <Footer />
      <Card name="fani" age="40" isEnrolled={true} />
      <Card name="fani" age="40" isEnrolled={false} />
      <Card />
    </>
  );

}

export default App

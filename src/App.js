import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Section1 from "./components/Section1";
import Product from "./components/Product";
import data from "./data";

const ProductElement = data.map((item) => {
  return (
    <Product
      key={item.id}
      // img={item.coverImg}
      // rating={item.rating}
      // reviewCount={item.stats.rating}
      // location={item.location}
      // title={item.title}
      // price={item.price}
      // openSpots={item.openSpots}
      {...item}
    />
  );
});

function App() {
  return (
    <div className="max-w-2xl mx-auto border-cyan-600 p-2 border-2">
      <NavBar></NavBar>
      <Hero></Hero>
      <Section1></Section1>
      <div className="flex flex-auto space-x-4">{ProductElement}</div>
    </div>
  );
}

export default App;

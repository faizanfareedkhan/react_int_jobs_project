import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeCards />

      <section className="m-auto my-10 max-w-lg px-6">
        <a
          href="jobs.html"
          className="block rounded-xl bg-black px-6 py-4 text-center text-white hover:bg-gray-700"
        >
          View All Jobs
        </a>
      </section>
    </>
  );
};

export default App;

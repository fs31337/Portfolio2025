import Navbar from "./components/Navbar";
import CustomCursor from "./components/CustomCursor";

export default function App() {
  return (
    <div className="relative">
      <CustomCursor />
      <Navbar />

      <section
        id="home"
        className="h-screen flex items-center justify-center bg-gray-200 snap-start"
      >
        <h1 className="text-4xl font-bold">Home</h1>
      </section>

      <section
        id="about"
        className="h-screen flex items-center justify-center bg-gray-300 snap-start"
      >
        <h1 className="text-4xl font-bold">About Me</h1>
      </section>

      <section
        id="projects"
        className="h-screen flex items-center justify-center bg-gray-400 snap-start"
      >
        <h1 className="text-4xl font-bold">Projects</h1>
      </section>

      <section
        id="contact"
        className="h-screen flex items-center justify-center bg-gray-500 snap-start"
      >
        <h1 className="text-4xl font-bold">Contact</h1>
      </section>
    </div>
  );
}

import "./App.css";
import Nav from "./components/Nav";

function App() {
  return (
    <section className="bg-roxo all">
      <div className="h-screen bg-custom flex flex-col justify-between items-center pb-8">
        <Nav />
        <div className="overflow-hidden bg-bigblob absolute bg-contain bg-no-repeat"></div>
        <section className="w-screen flex justify-between items-center">
          <div className="bg-blob bg-center bg-no-repeat bg-contain flex flex-col gap-4 ml-40">
            <h1 className="text-white text-8xl font-italian">we are an</h1>
            <h1 className="text-white text-8xl font-italian">experienced</h1>
            <h1 className="text-white text-8xl font-italian">design studio</h1>
            <p className="text-white font-poppins-normal opacity-50 w-2/4">
              Digital solutions based on human understanding. Amazing websites
              and brand strategy done right.
            </p>
          </div>
          <div className="bg-blob bg-center bg-no-repeat bg-contain flex items-center justify-center gap-2 mr-40">
            <div className="w-80 h-80 bg-fundo bg-cover bg-no-repeat bg-center rounded-lg"></div>
            <div className="w-40 h-80 bg-figure bg-contain bg-no-repeat bg-center"></div>
          </div>
        </section>
        <p></p>
      </div>
    </section>
  );
}

export default App;

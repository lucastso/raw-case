import "./App.css";
import Nav from "./components/Nav";

function App() {
  return (
    <section className="all">
      <div className="h-screen flex flex-col justify-between items-center bg-custom">
        <Nav />
        <section className="w-screen flex justify-between items-center">
          <div className="bg-blob bg-center bg-no-repeat bg-contain flex flex-col gap-4 ml-40">
            <h1 className="text-zinc-900 text-8xl font-italian">we are an</h1>
            <h1 className="text-zinc-900 text-8xl font-italian">experienced</h1>
            <h1 className="text-zinc-900 text-8xl font-italian">
              design studio
            </h1>
            <p className="text-zinc-900 font-poppins-normal opacity-50 w-2/4">
              Digital solutions based on human understanding. Amazing websites
              and brand strategy done right.
            </p>
          </div>
          <div className="bg-bigblob bg-center bg-no-repeat bg-contain flex items-center justify-center gap-2 mr-40">
            <div className="w-96 h-96 bg-fundo bg-contain bg-no-repeat bg-center rounded-lg"></div>
            <div className="w-40 h-80 bg-figure bg-contain bg-no-repeat bg-center"></div>
          </div>
        </section>
        <div className="h-px bg-zinc-900 w-3/4 opacity-10 rounded-xl"></div>
      </div>

      <div className="h-96 flex justify-evenly items-center px-40 bg-customLighter">
        <div className="flex gap-8 justify-center items-center text-zinc-900">
          <h1 className="font-italian font-bold text-8xl">50k</h1>
          <p className="font-poppins-light w-32">people trusted our services</p>
        </div>
        <div className="flex gap-8 justify-center items-center text-zinc-900">
          <h1 className="font-italian font-bold text-8xl bg-line bg-contain bg-center bg-no-repeat p-4">
            200+
          </h1>
          <p className="font-poppins-light w-32">projects saved from failure</p>
        </div>
        <div className="flex gap-8 justify-center items-center text-zinc-900">
          <h1 className="font-italian font-bold text-8xl">750+</h1>
          <p className="font-poppins-light w-32">
            partners who have worked with us
          </p>
        </div>
      </div>

      <div className="bg-custom h-screen flex flex-col justify-between">
        <div className="h-px bg-zinc-900 w-3/4 opacity-10 mx-auto rounded-xl"></div>
        <div className="flex justify-between items-center px-40">
          <div className="flex flex-col justify-center items-start w-full text-zinc-900 gap-8">
            <p>your best performance</p>
            <div className="h-96 w-11/12 bg-red-500 shadow-xl"></div>
          </div>
          <div className="flex flex-col justify-center items-center w-full">
            <div className="h-96 w-11/12 bg-orange-500 shadow-xl"></div>
            <p>iaeeeeeeeeeeeeeeeeeee</p>
          </div>
          <div className="flex flex-col justify-center items-end w-full">
            <p>iaeeeeeeeeeeeeeeeeeee</p>
            <div className="h-96 w-11/12 bg-yellow-500 shadow-xl"></div>
          </div>
        </div>
        <p></p>
      </div>
    </section>
  );
}

export default App;

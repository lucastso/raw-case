import "./App.css";
import Nav from "./components/Nav";
import image1 from "./assets/image1.png";

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

      <section className="bg-custom h-screen flex flex-col justify-between">
        <div className="h-px bg-zinc-900 w-3/4 opacity-10 mx-auto rounded-xl"></div>

        <section className="flex justify-between items-center px-40 w-full h-full">
          <div className="flex flex-col justify-center items-center w-1/2 text-zinc-900">
            <img src={image1} alt="first image"></img>
          </div>
          <div className="flex flex-col justify-center items-start w-1/2">
            <h1 className="font-italian font-bold text-6xl mb-6">
              all your company content in our hands
            </h1>
            <p className="font-poppins-light mb-6">
              Know who made changes, when and why. Compare changes side by side
              with our sprint.
            </p>
            <div className="flex gap-4 mb-4 justify-center items-center">
              <div className="p-1 h-1 bg-zinc-300 rounded-full"></div>
              <div>
                <span className="font-poppins-bold">
                  Audience segmentation:
                </span>
                <span className="font-poppins-light">
                  {" "}
                  improve audience engagement by segmenting. Boost your
                  conversions by targeting subsets from your contacts.
                </span>
              </div>
            </div>
            <div className="flex gap-4 justify-center items-center mb-8">
              <p className="p-1 h-1 bg-zinc-300 rounded-full"></p>
              <div>
                <span className="font-poppins-bold">Contact monitoring:</span>
                <span className="font-poppins-light">
                  {" "}
                  just import your contact list, segment your contacts and we'll
                  get you a detailed real-time report of their activity.
                </span>
              </div>
            </div>

            <button className="flex self-end bg-customBlue py-3 px-6 rounded-full text-white font-poppins-bold">
              Read more
            </button>
            <div className="border-t-2 border-zinc-300 border-dashed w-full mt-16"></div>
          </div>
        </section>
        <p></p>
      </section>
    </section>
  );
}

export default App;

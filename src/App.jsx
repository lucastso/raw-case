import "./App.css";
import Nav from "./components/Nav";
import image1 from "./assets/image1.png";
import image2 from "./assets/image2.png";

function App() {
  return (
    <section className="all">
      <section className="h-screen flex flex-col justify-between items-center bg-back bg-center bg-no-repeat bg-cover">
        <Nav />
        <section className="w-screen flex justify-center items-center">
          <div className="text-center flex flex-col gap-4">
            <h1 className="text-zinc-900 text-8xl font-italian">we are an</h1>
            <h1 className="text-zinc-900 text-8xl font-italian">experienced</h1>
            <h1 className="text-zinc-900 text-8xl font-italian">
              design studio
            </h1>
            <p className="text-zinc-900 font-poppins-normal opacity-50 w-full">
              Digital solutions based on human understanding. Amazing websites
              and brand strategy done right.
            </p>
          </div>
        </section>
        <div className="h-px bg-zinc-900 w-3/4 opacity-10 rounded-xl"></div>
      </section>

      <section className="h-96 flex justify-evenly items-center px-40 bg-customLighter">
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
      </section>

      <section className="bg-custom h-screen flex flex-col justify-between">
        <div className="h-px bg-zinc-900 w-3/4 opacity-10 mx-auto rounded-xl"></div>

        <section className="flex justify-between items-center px-40 w-full h-full">
          <div className="flex flex-col justify-center items-start w-1/2 text-zinc-900">
            <img src={image1} alt="first image"></img>
          </div>
          <div className="flex flex-col justify-center items-start w-1/2">
            <h1 className="font-italian font-bold text-6xl mb-10">
              all your company content in our hands
            </h1>
            <p className="font-poppins-light mb-10">
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
            <div className="flex gap-4 justify-center items-center mb-12">
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
            <div className="border-t border-zinc-300 border-dashed w-full mt-16"></div>
          </div>
        </section>
        <div className="h-px bg-zinc-900 w-3/4 opacity-10 rounded-xl flex self-center"></div>
      </section>

      <section className="bg-custom h-screen flex flex-col justify-between">
        <div className="h-px bg-zinc-900 w-3/4 opacity-10 mx-auto rounded-xl"></div>

        <section className="flex justify-between items-center px-40 w-full h-full bg-customLighter">
          <div className="flex flex-col justify-center items-start w-1/2">
            <h1 className="font-italian font-bold text-6xl mb-10">
              building digital products, brands & experiences
            </h1>
            <p className="font-poppins-light mb-10">
              Let's grow socially as fast as possible.
            </p>
            <div className="flex gap-4 mb-4 justify-center items-center">
              <div className="p-1 h-1 bg-zinc-300 rounded-full"></div>
              <div>
                <span className="font-poppins-bold">Powerful and simple:</span>
                <span className="font-poppins-light">
                  {" "}
                  providing the best ideas and adding the word success into your
                  project. As smooth as a smoothie.
                </span>
              </div>
            </div>
            <div className="flex gap-4 justify-center items-center mb-12">
              <p className="p-1 h-1 bg-zinc-300 rounded-full"></p>
              <div>
                <span className="font-poppins-bold">
                  Creating and re-creating:
                </span>
                <span className="font-poppins-light">
                  {" "}
                  with over 50k+ people trusting our services, imagination and
                  the creative side must be right in.
                </span>
              </div>
            </div>

            <button className="flex self-end bg-customBlue py-3 px-6 rounded-full text-white font-poppins-bold">
              Let's try
            </button>
            <div className="border-t border-zinc-300 border-dashed w-full mt-16"></div>
          </div>
          <div className="flex flex-col justify-center items-end w-1/2 text-zinc-900">
            <img src={image2} alt="first image" width="475"></img>
          </div>
        </section>
        <div className="h-px bg-zinc-900 w-3/4 opacity-10 rounded-xl flex self-center"></div>
      </section>

      <section className="h-screen w-full flex justify-center items-center pr-40 bg-custom">
        <div className="w-1/2 flex flex-col justify-center items-center bg-contact bg-center bg-cover bg-no-repeat h-full">
          <div className="px-6 py-4 rounded-lg w-2/4 bg-white">
            <h1 className="font-poppins-bold mb-8 text-lg text-center">
              here's our contact:
            </h1>
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-1 mb-4">
                <h1 className="font-poppins-light">e-mail:</h1>
                <p className="font-poppins-light text-sm">example@email.com</p>
              </div>
              <i class="fa-solid fa-arrow-right-long"></i>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-1 mb-4">
                <h1 className="font-poppins-light">instagram:</h1>
                <p className="font-poppins-light text-sm">@example</p>
              </div>
              <i class="fa-solid fa-arrow-right-long"></i>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-1 mb-8">
                <h1 className="font-poppins-light">linkedin:</h1>
                <p className="font-poppins-light text-sm">Example Com</p>
              </div>
              <i class="fa-solid fa-arrow-right-long"></i>
            </div>

            <p className="font-poppins-bold text-xs">
              * we are open to projects!
            </p>
          </div>
        </div>

        <div className="w-1/2 flex flex-col justify-center items-center gap-20">
          <h1 className="text-zinc-900 text-8xl font-italian">stay in touch</h1>
          <div className="px-6 py-4 border border-zinc-400 rounded-lg w-2/4">
            <h1 className="font-poppins-bold mb-8 text-lg text-center">
              all of this will be safe!
            </h1>
            <form className="flex flex-col gap-4 mb-8">
              <div className="flex flex-col gap-1">
                <label className="font-poppins-light">e-mail:</label>
                <input
                  type="text"
                  className="border border-zinc-200 focus:outline-none py-2 px-4 font-poppins-light"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-poppins-light">
                  receive promotinal e-mails?{" "}
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
                    name="promo"
                  />
                  <span>yes :)</span>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer"
                    name="promo"
                  />
                  <span>no :(</span>
                </div>
              </div>
            </form>
            <button className="w-full text-center bg-customBlue py-3 px-6 rounded-full text-white font-poppins-bold">
              Send
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}

export default App;

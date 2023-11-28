function Home() {
  return (
    <div className="my-4">
      <div className="flex items-center justify-center">
        <div className="left">
          <div>
            <h1 className="text-6xl text-blue-700 font-bold">
              Tired of listening <span className="text-black">Noob</span>
            </h1>
            <h2 className="text-5xl font-bold text-center">
              Achieve God level <span className="text-blue-700">Aim</span>
            </h2>
          </div>
          <div className="flex items-center justify-center my-6">
            <button className="py-2 px-4 rounded font-semibold bg-black text-white">
              Our Best Mouses
            </button>
          </div>
        </div>
        <div className="right">
          <img src="/mouse.jpg" alt="" className="w-96" />
        </div>
      </div>
    </div>
  );
}

export default Home;

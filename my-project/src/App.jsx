function App() {

  return (
    <>
      <div className="bg-zinc-900 flex content-center justify-center items-center absolute top-0 left-0 right-0 bottom-0">
        <div className="shadow-xl justify-center flex bg-zinc-800 h-96 w-80 rounded-2xl">
          <div className="block m-2">
            <div className="bg-lime-200 w-full h-28 rounded-xl">
              <input disabled placeholder="_" className="outline-none bg-lime-200 font-extrabold text-2xl placeholder-lime-600 w-full rounded-xl p-5 h-full text-lime-600"></input>
            </div>
            <div className=" justify-center flex w-full rounded-lg h-20 mt-3 items-center bg-zinc-700">
              <div className="bg-orange-500 rounded-md h-10 text-center p-1 ml-1 hover:bg-orange-600 cursor-pointer mr-1 w-10 text-xl font-extrabold">+</div>
              <div className="bg-orange-500 rounded-md h-10 text-center p-1 ml-1 hover:bg-orange-600 cursor-pointer mr-1 w-10 text-xl font-extrabold">-</div>
              <div className="bg-orange-500 rounded-md h-10 text-center p-1 ml-1 hover:bg-orange-600 cursor-pointer mr-1 w-10 text-xl font-extrabold">×</div>
              <div className="bg-orange-500 rounded-md h-10 text-center p-1 ml-1 hover:bg-orange-600 cursor-pointer mr-1 w-10 text-xl font-extrabold">÷</div>
              <div className="bg-orange-500 rounded-md h-10 text-center p-1 ml-1 hover:bg-orange-600 cursor-pointer mr-1 w-10 text-xl font-extrabold">(</div>
              <div className="bg-orange-500 rounded-md h-10 text-center p-1 ml-1 hover:bg-orange-600 cursor-pointer mr-1 w-10 text-xl font-extrabold">)</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

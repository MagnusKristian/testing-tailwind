const Home = () => {
  return (<>
    <div className=" h-screen flex justify-center bg-[#042039]">
    <div className="bg-gray-900 h-1/6 w-1/6 mt-4 ml-4 absolute left-20 font-serif text-2xl text-slate-600 text-center p-14"> logo xxxx xxxxxxxxx</div>

    <a href="/#" className=" h-12 w-40 mt-4 absolute right-28 tracking-wider text-xl font-medium text-slate-500 text-center"> kontakt oss</a>

      <div className=" flex flex-wrap content-center">
      <img alt="backgroundimg" src="https://uploads-ssl.webflow.com/5e6920f28fbf37406140b4fb/63a08b1f93403ca4d802d71a_ziot_graphic.png" className=" h-3/4 absolute top-1/3 left-[-15%] overflow-hidden" />
      <div className="font-sans font-bold text-8xl absolute right-32 text-right break-normal w-1/2 top-1/4 h-fit">
      <div className="text-white">Sikker data-kommunikasjon på</div>
      <span className="underline text-sky-500">IoT-enheter</span>
      <br/>
      <br/>
      <p className=" text-slate-400 text-2xl font-medium text-right break-normal leading-relaxed float-right w-5/6 ">XXXX XXXXXXXXX er en norskbasert leverandør av sikre overvåkningstjenester skreddersydd for <p className="text-white float-right mx-2">IoT applikasjoner</p></p>
      
      <br/>
      <div className=" mt-4 text-xl text-white font-semibold rounded-lg  border-solid border-2 text-center border-white float-right"><p className="px-6 py-3 ">Les mer</p></div>


      </div >
      </div>

      <h1 className=" border-2 border-slate-800 h-1/3 w-1/3 flex justify-center self-center" >Home</h1>
    </div>
    <div className="bg-gray-900 h-1/2"> contact</div>
    <div className="bg-gray-800 h-screen flex row-span-3 space-x-6 justify-center"> some stuff 
    <div className=" border-2 border-slate-100 h-1/4 w-1/4 flex justify-center self-center" >box 1</div>
    <div className=" border-2 border-slate-100 h-1/4 w-1/4 flex justify-center self-center" >box 2 </div>
    <div className=" border-2 border-slate-100 h-1/4 w-1/4 flex justify-center self-center" >box 3</div>
    
    </div>
    <div className="bg-gray-700 h-screen"> some stuff</div>
    <div className="bg-black h-1/6 text-white"> footer</div>
  </>)
};

export default Home;
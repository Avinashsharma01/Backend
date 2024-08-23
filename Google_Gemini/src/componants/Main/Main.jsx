import { useState } from "react";
import { assets } from "../../assets/assets";
import run from "../../config/Gemini"
function Main() {

    const [input, setInput]= useState("")
    const [finalOutput, setFinalOutput]=useState('')

    let  data= async ()=>{
        let finalData= await run(input)
        setFinalOutput(finalData)
    }

    let Handle=(e)=>{
        setInput(e.target.value)
    }

    let SendMessage=()=>{
        data()
        setInput("")
    }

    
    return (
        <div className="Main  w-full h-screen  ">
            <div className="nav bg-slate-700 flex justify-between px-5  py-2 items-center">
                <p className="text-4xl text-white ">Gemini</p>
                <h1 className="text-white text-2xl">Avinash Kumar Sharma</h1>
                <img
                    src={assets.user_icon}
                    alt=""
                    className="w-14 rounded-full"
                />
            </div>

            {!finalOutput?<>
                <div className="main-container  px-52  flex flex-col justify-between   w-full h-[750px] ">
                <div className="greet text-6xl mt-20">
                    <p>
                        <span className="gradient-text ">Hello, Sir</span>
                    </p>
                    <p>How can i help you today</p>
                    
                </div>
                <div className="card-container justify-around items-center  flex">
                    <div className="card  w-[220px] h-[220px] bg-slate-600 p-3 relative  rounded-lg cursor-pointer  hover:bg-slate-400 text-white hover:text-black">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Voluptates, labore.
                        </p>
                        <img
                            src={assets.compass_icon}
                            alt=""
                            className="w-8 absolute
                right-2 top-40  "
                        />
                    </div>
                    <div className="card  w-[220px] h-[220px] bg-slate-600 p-3 relative  rounded-lg cursor-pointer  hover:bg-slate-400 text-white hover:text-black">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Voluptates, labore.
                        </p>
                        <img
                            src={assets.bulb_icon}
                            alt=""
                            className="w-8 absolute
                right-2 top-40"
                        />
                    </div>
                    <div className="card  w-[220px] h-[220px] bg-slate-600 p-3 relative  rounded-lg cursor-pointer  hover:bg-slate-400 text-white hover:text-black">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Voluptates, labore.
                        </p>
                        <img
                            src={assets.message_icon}
                            alt=""
                            className="w-8 absolute
                right-2 top-40"
                        />
                    </div>
                    <div className="card  w-[220px] h-[220px] bg-slate-600 p-3 relative  rounded-lg cursor-pointer  hover:bg-slate-400 text-white hover:text-black">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Voluptates, labore.
                        </p>
                        <img
                            src={assets.code_icon}
                            alt=""
                            className="w-8 absolute
                right-2 top-40"
                        />
                    </div>
                </div>

                

                <div className="for-center w-full h-auto flex justify-center">
                    <div className="main-botton  w-4/5  ">
                        <div className="search-box flex justify-between items-center  bg-slate-500 px-2 py-1  rounded-full">
                            <input
                                type="text"
                                name=""
                                id="INPUT_VALUE"
                                className=" rounded-full   bg-slate-500 h-12 w-[700px] px-3 outline-none  text-white"
                                onChange={Handle}
                                value={input}
                            />  
                            <div className="flex justify-around gap-5 px-4">
                                <img
                                    src={assets.gallery_icon}
                                    alt=""
                                    className="w-8 h-8 "
                                />
                                <img
                                    src={assets.mic_icon}
                                    alt=""
                                    className="w-8 h-8 "
                                />
                                <img
                                    src={assets.send_icon}
                                    alt=""
                                    className="w-8 h-8 "

                                    onClick={SendMessage}
                                />
                            </div>
                        </div>
                        <p className="text-center"> 
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Fugit doloremque veritatis voluptatum 
                        </p>
                    </div>
                </div>
            </div>
            </>:<>
                <div className="px-52 py-10 flex-1 overflow-y-auto  w-full min-h-[750px] h-auto">
                    <p className="flex-1 overflow-y-auto ">{finalOutput}</p>
                </div>
            </>}
        </div>
    );
}

export default Main;

import { useState } from "react";
import { assets } from "../../assets/assets";
function Sidebar() {
    const [extended, setExtended]=useState(false)
    return (
        <>
            <div className="sidebaar  min-h-screen  bg-gray-400 px-4 py-5 inline-flex  flex-col justify-between" >
                <div className="top ">
                    <img src={assets.menu_icon} onClick={()=>setExtended(prev=>!prev)} alt="" className="w-10 mb-5" />
                    <div className="plus flex bg-gray-500  justify-center items-center rounded-3xl mb-10  ">
                        <img
                            src={assets.plus_icon}
                            alt=""
                            className=" w-5 py-2"
                        />
                       {extended ? <p className="text-sm">New Chat</p>:null} 
                    </div>
                    {extended?<div className="recent ">
                        <p className="mb-5">Recent</p>
                        <div className="recent-entry mb-3  flex items-center">
                            <img
                                src={assets.message_icon}
                                alt=""
                                className="w-8 h-8"
                            />
                            <p className="text-sm w-40">hello avinash sharma </p>
                        </div>
                    </div>:null}
                </div>

                <div className="botton">
                    <div className="botton_box help flex ">
                        <img
                            src={assets.question_icon}
                            alt=""
                            className="w-8 mb-4"
                        />
                        {extended?<p>Help</p>:null}
                    </div>
                    <div className="botton_box Activity flex">
                        <img
                            src={assets.history_icon}
                            alt=""
                            className="w-8 mb-4"
                        />
                    {extended? <p>Activities</p>:null}
                    </div>
                    <div className="botton_box Setting flex">
                        <img
                            src={assets.setting_icon}
                            alt=""
                            className="w-8 mb-4"
                        />
                        {extended?<p>Setting</p>:null}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Sidebar;

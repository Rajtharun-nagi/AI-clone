import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'
import './Main.css'

const Main = () => {

    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);

    return (
        <div className='main'>
            <div className="nav">
                <p>AI Clone.</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className="main-container">

                {!showResult ?
                    <>
                       <div className="greet">
                            <p><span>Hello,Raj.</span></p>
                            <p>How can I Assist You...?</p>
                        </div>
                        <div className="cards">
                            <div className="card">
                                <p> Suggest beautiful places to see on an upcomin road trip.</p>
                                <img src={assets.compass_icon} alt="" />
                            </div>
                            <div className="card">
                                <p> Briefly Summarize this concepts: urban plannnig.</p>
                                <img src={assets.bulb_icon} alt="" />
                            </div>
                            <div className="card">
                                <p> Brainstorm team bonding activities for our work retreats.</p>
                                <img src={assets.message_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>Improve the readability of the following code.</p>
                                <img src={assets.code_icon} alt="" />
                            </div>
                        </div>
                    </>
                    : <div className='result'>
                        <div className="result-title">
                            <img src={assets.user_icon} alt="" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={assets.gemini_icon} alt="" />
                            {loading 
                            ?<div className='loader'>
                                <hr />
                                <hr />
                                <hr /> 
                            </div>
                        :<p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                        }
                            
                        </div>
                    </div>}



                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter prompt here...' />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            <img onClick={onSent} src={assets.send_icon} alt="" />

                        </div>
                    </div>
                    <p className="bottom-info">
                        Gemini may display inaccurate info,including about people ,so double check its result.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Main

import { useEffect, useState } from "react";
import "./chat.css"
import EmojiPicker from "emoji-picker-react";
import {useRef} from "react"

const Chat = () => {
    const [open,setOpen] = useState(false)
    const [text,setText] = useState("")

    const endRef = useRef(null)
    
    useEffect(()=>{
        endRef.current?.scrollIntoView({behavior: "smooth"});
    },[])

    const handleEmoji = e => {
        setText((prev) => prev + e.emoji)
        setOpen(false)
    };

    return (
        <div className='chat'>
            <div className="top">
                <div className="user">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <span>Shahjahan</span>
                        <p>Online</p>
                    </div>
                </div>
                <div className="icons">
                    <img src="./phone.png" alt="" />
                    <img src="./video.png" alt="" />
                    <img src="./info.png" alt="" />
                </div>
            </div>
            <div className="center">
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>
                            I never dreamed about success. I worked for it.
                            This is called Power.
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <p>
                            I never dreamed about success. I worked for it.
                            This is called Power.
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>
                            I never dreamed about success. I worked for it.
                            This is called Power.
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <p>
                            I never dreamed about success. I worked for it.
                            This is called Power.
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>
                            I never dreamed about success. I worked for it.
                            This is called Power.
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message own">
                    <div className="texts">
                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.b_pJq1Wzg9FWZ_AhpVgLjAHaHa%3Fr%3D0%26pid%3DApi&f=1&ipt=b4a5da9a40077c8c6d671937565cd674e12f56acb766eb788dd9fc37a3f5a577&ipo=images" alt="" />
                        <p>
                            I never dreamed about success. I worked for it.
                            This is called Power.
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>
                            I never dreamed about success. I worked for it.
                            This is called Power.
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div ref={endRef}></div>
            </div>
            <div className="bottom">
                <div className="icons">
                    <img src="./img.png" alt="" />
                    <img src="./camera.png" alt="" />
                    <img src="./mic.png" alt="" />
                </div>
                <input type="text" placeholder="Type a message..."
                value={text}
                onChange={e=>setText(e.target.value)} />
                <div className="emoji">
                    <img src="./emoji.png" alt=""onClick={()=>setOpen(prev=> !prev)} 
                    />
                    <div className="picker">
                    <EmojiPicker open={open} onEmojiClick={handleEmoji}/>
                    </div>
                        
                </div>
                <button className="sendButton">Send</button>
            </div>
        </div>
    )
}

export default Chat
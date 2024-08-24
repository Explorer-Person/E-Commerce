import { RoutingUtil } from "@src/shared"
import style from "./style.module.css"
import {ButtonsCss} from "@src/shared"

const SupportPage = () => {
    const {linkTo} = RoutingUtil();
    return (
        <div className={`${style.supportBox}`}>
            <div className={`${style.boxTitle}`}>
                <h2> Do You Need Any Support? </h2>
                <div onClick={()=>linkTo("/")}>
                    <h4>HOMEPAGE</h4>
                </div>
            </div>
            <hr />
            <div className={`${style.boxContent}`}>
                <div className={`${style.askableQuestions}`}>
                    <div className={`${style.question}`}>Something?</div>
                    <div className={`${style.question}`}>Something?</div>
                    <div className={`${style.question}`}>Something?</div>
                    <div className={`${style.question}`}>Something?</div>
                </div>
                <div className={`${style.chatBox}`}>
                    <div className={`${style.chatMessage}`}>Hello, how can I help you?</div>
                    <div className={`${style.userMessage}`}>Hi, I have a question.</div>
                    <div className={`${style.chatMessage}`}>Sure, feel free to ask!</div>
                </div>
                <div className={`${style.messageInput}`}>
                    <input type="text" />
                    <button className={`${ButtonsCss.sendMessageButton}`}>Send</button>
                </div>
            </div>


        </div>
    )
}

export default SupportPage;
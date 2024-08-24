import style from "./style.module.css";
import { EventsContainer, OrderContainer, ProgressContainer } from "./components";


const TrackPage = () => {
    return (
        <div className={`${style.trackPage}`}>
            <div className={`${style.trackContainers}`}>
                <div className={`${style.progressContainer}`}>
                    <ProgressContainer />
                </div>
                <div className={`${style.orderContainer}`}>
                    <OrderContainer />
                </div>
                <div className={`${style.eventsContainer}`}>
                <h2 className="my-5">Events</h2>
                    <EventsContainer />
                </div>
            </div>
        </div>
    )
}

export default TrackPage;
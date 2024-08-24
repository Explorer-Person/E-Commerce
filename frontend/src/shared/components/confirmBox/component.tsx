
import style from "./style.module.css";
import { ButtonsCss, LoaderBox } from "@src/shared"
import { useAppSelector } from "@src/stores/hooks";
import { RootState } from "@src/stores/store";
import { ReactNode } from "react";

interface ConfirmBoxIF {
    confirmHeader: string;
    confirmBody: null | ReactNode[];
    process: () => void;
}
const ConfirmBox = ({ confirmBody, confirmHeader, process }: ConfirmBoxIF) => {
    const boxStatus = useAppSelector((state: RootState) => state.confirmBox.boxStatus);
    const isLoading = useAppSelector((state: RootState) => state.profileActions.isLoading);
    // const body = JSON.parse(confirmBody);
    console.log(isLoading);
    return (
        <div className={boxStatus === true ? `${style.confirmBox}` : `d-none`}>
            <div className={`${style.confirmHeader}`}>
                <h3 className="text-center mt-2">{confirmHeader}</h3>
            </div>
            <hr />
            <div className={`${style.confirmBody}`}>
                {isLoading === true ? <LoaderBox loaderStyle="threeDot" /> : 
                <p className="text-center">
                   {confirmBody === null ? <strong>Please Enter Your Passord <br />or <br />Make Change Your Data</strong> : <p>Please Confirm <br />{confirmBody} change these datas?</p>} 
                </p>}

                <button className={`${ButtonsCss.saveButton} w-25 ${style.confirmButton}`} onClick={process}>Save</button>
            </div>
        </div>
    )
}

export default ConfirmBox;
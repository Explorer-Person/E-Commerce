import { dropDownToggler, sizeAdjuster } from "@src/shared/utils/displayUtil";
import { useAppSelector } from "@src/stores/hooks";
import { RootState } from "@src/stores/store";
import { useState } from "react";

const ProfileBoxHook = () => {
  const [size, setSize] = useState({
    width: "0%",
    height: "0%",
    display: "d-none",
  });
  const [display, setDisplay] = useState("d-none");
  const handleClick = (event: React.MouseEvent<Element, MouseEvent>) => {
    const role = event.currentTarget.getAttribute("role");
    console.log(role);
    if (role === "profile") {
      const result = dropDownToggler(display);
      setDisplay(result);
    } else if (role === "story") {
      const returnedSize = sizeAdjuster(size.width);
      setSize(returnedSize);
    } else if (role === "closeStory") {
      const returnedSize = sizeAdjuster("25%");
      setSize(returnedSize);
    }
  };


  const userData = useAppSelector((state: RootState) => state.user.userData);
  const authStatus = useAppSelector((state:RootState)=>state.storeInput.authStatus);


  return {
    functions: {
      handleClick,
    },
    datas: {
      userData: userData,
      size: size,
      display: display,
      authStatus: authStatus,
    },
  };
};

export default ProfileBoxHook;

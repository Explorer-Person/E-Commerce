export const dropDownToggler = (display: string) => {
    if (display === "d-none") {
        return display = "d-block";
    } else {
        return display = "d-none";
    }
}

export const sizeAdjuster = (width: string) => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    console.log(windowWidth);
    if (width === "0%") {
        return {width: `${windowWidth}px`, height: `${windowHeight}px`, display: "d-block"};
    } else {
        return {width: "0%", height: "0%", display:"d-none"};
    }
}
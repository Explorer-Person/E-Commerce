
import { ErrorBoundary } from "react-error-boundary";
import { ErrorPage } from "@src/shared";



 function ReactErrorBoundary(props){
    return (
    <ErrorBoundary
    FallbackComponent={ErrorPage}
    onError={(error, errorInfo)=>{
        console.log("Error Caught");
        console.log(error);
        console.log(errorInfo);
    }}
    onReset={() => {
        // reloading the page to restore the initial state
        // of the current page
        console.log("reloading the page...");
        window.location.reload();

        // other reset logic...
    }}
    >
        {props.children}
    </ErrorBoundary>
    );
}
export default ReactErrorBoundary

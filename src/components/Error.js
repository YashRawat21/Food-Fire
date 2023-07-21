import { useRouteError } from "react-router-dom";

const Error = () => {
    const errInfo = useRouteError();
 
    return(
        <div className="err">
            <img src = "401-error.jpg" alt = "" className="errImg"/>
            <div className="errMsg">

        <h1>{errInfo.status} : {errInfo.statusText}</h1>
         <h2>{errInfo.data}</h2>
            </div>
        </div>
    )
}
export default Error;
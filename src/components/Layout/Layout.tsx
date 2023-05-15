import {FC} from 'react'
import {Outlet} from "react-router-dom";


interface IProps{

}

const Layout: FC<IProps> = () =>{
return(
       <div>
           <h1>Layout</h1>
           <Outlet/>
       </div>
    );
};
export {Layout}
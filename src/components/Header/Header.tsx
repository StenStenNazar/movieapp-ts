import React, {FC} from 'react'

import './Header.css'
import '../../main.css'
import Toggle from "../Toggle/Toggle";


interface IProps{

}
const Header: FC<IProps> = () =>{
return(
       <div className={'header'}>
           <div className={'user'}></div>
           <div>
               <div>header</div>
               <Toggle/>
           </div>
       </div>
    );
};
export default Header
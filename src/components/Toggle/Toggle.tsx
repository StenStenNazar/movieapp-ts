import {FC} from 'react'

import {useAppDispatch, useAppSelector} from "../../hooks/redux.hooks";
import {switchAction} from "../../redux/store/slices/switcherSlice";
import './Toggle.css'
import '../../main.css'

interface IProps{

}

const Toggle: FC<IProps> = () =>{
    const {isDark} = useAppSelector(state => state.switchReducer);
    const dispatch = useAppDispatch();

    const switcher = () => {
        dispatch(switchAction.setMode());
    };


return(
       <div  className={'mode_button_wrapper'}>
           <div
               className={`button_mode ${isDark ? 'dark' : 'light'}`}
               onClick={()=>switcher()} >{!isDark? 'dark mode':'light mode'}
           </div>
       </div>
    );
};
export default Toggle
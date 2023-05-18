import {FC} from 'react'
import {useAppDispatch, useAppSelector} from "../../hooks/redux.hooks";
import {switchAction} from "../../redux/store/slices/switcherSlice";

interface IProps{

}

const Toggle: FC<IProps> = () =>{
    const {isDark} = useAppSelector(state => state.switchReducer);
    const dispatch = useAppDispatch();

    const switcher = () => {
        dispatch(switchAction.setMode());
    };

return(
       <div>
           <button  onClick={()=>switcher()}>перемикач теми</button>
       </div>
    );
};
export default Toggle
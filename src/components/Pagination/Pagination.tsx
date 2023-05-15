import {FC} from 'react'
import {useAppDispatch, useAppSelector} from "../../hooks/redux.hooks";
import {movieActions} from "../../redux/store/slices/movieSlice";

interface IProps{

}

const Pagination: FC<IProps> = () =>{
   let {page} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();

    const next =()=>{
        dispatch(movieActions.getPages({numberOfPage:page = page+1}))
    }

    const prev=()=>{
        dispatch(movieActions.getPages({numberOfPage:page = page-1}))
    }


return(
       <div>
           {page !==1 && <button onClick={()=>prev()}>Prev</button>}
           <button onClick={()=>next()}>Next</button>
       </div>
    );
};
export {Pagination}
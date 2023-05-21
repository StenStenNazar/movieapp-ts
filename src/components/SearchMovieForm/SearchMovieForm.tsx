import {FC} from 'react'
import {SubmitHandler, useForm} from "react-hook-form";

import {ITitle} from "../../interfaces/title.interface";
import {useAppDispatch} from "../../hooks/redux.hooks";
import {movieActions} from "../../redux/store/slices/movieSlice";
import './SearchMovieForm.css'
import {useNavigate} from "react-router-dom";

const SearchMovieForm: FC = () => {
    const {register, handleSubmit, reset, watch} = useForm<ITitle>();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const search: SubmitHandler<ITitle> = ({title}) => {
        dispatch(movieActions.getSearchedMovie({title}))
        navigate('movies')
        reset()
    }

    return (
        <form onSubmit={handleSubmit(search)}>
            <input className={'search_form'} type="text" placeholder={'movie title...'} {...register('title')}/>
            <button disabled={!watch('title')} className={'search_button'}>search</button>
        </form>
    );
};
export default SearchMovieForm
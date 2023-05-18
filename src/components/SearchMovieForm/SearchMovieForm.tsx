import {FC} from 'react'
import {SubmitHandler, useForm} from "react-hook-form";
import {ITitle} from "../../interfaces/title.interface";
import {useAppDispatch, useAppSelector} from "../../hooks/redux.hooks";
import {movieActions} from "../../redux/store/slices/movieSlice";


interface IProps {

}

const SearchMovieForm: FC<IProps> = () => {
    const {register, handleSubmit, reset} = useForm<ITitle>();
    const dispatch = useAppDispatch();

    const search: SubmitHandler<ITitle> = ({title}) => {
        dispatch(movieActions.getSearchedMovie({title}))
        reset()
    }

    return (
        <form onSubmit={handleSubmit(search)}>
            <input type="text" placeholder={'search for a movie by title'} {...register('title')}/>
            <button>search</button>
        </form>
    );
};
export default SearchMovieForm
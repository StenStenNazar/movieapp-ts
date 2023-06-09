import {FC, useEffect} from 'react'

import {useAppDispatch, useAppSelector} from "../../hooks/redux.hooks";
import {genreActions} from "../../redux/store/slices/genreSlice";
import Genre from "../Genre/Genre";
import './AllGenre.css'


const AllGenres: FC = () => {
    const {genres} = useAppSelector(state => state.genreReducer);
    const dispatch = useAppDispatch();


    useEffect(() => {
        dispatch(genreActions.getGenres())
    }, [dispatch])

    return (
        <div className={'all_genre'}>
            {genres && genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};
export default AllGenres
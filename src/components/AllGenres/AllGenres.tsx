import {FC, useEffect, useState} from 'react'

import {useAppDispatch, useAppSelector} from "../../hooks/redux.hooks";
import {genreActions} from "../../redux/store/slices/genreSlice";
import Genre from "../Genre/Genre";
import './AllGenre.css'
import {movieActions} from "../../redux/store/slices/movieSlice";

interface IProps {

}

const AllGenres: FC<IProps> = () => {
    const [id, setId] = useState<number>(null);
    const {genres} = useAppSelector(state => state.genreReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(genreActions.getGenres())
    }, [dispatch])

    const curGenres = JSON.parse(JSON.stringify(genres))
    const genre = []
    for (const item of curGenres) {
        for (const obj of item) {
            genre.push(obj)
        }
    }

    const searchGenre = (id: number) => {
        dispatch(movieActions.getMovieGenres({idOfGenre: id}))
    }

    return (
        <div className={'all_genre'}>
            {genre.map(genre => <Genre key={genre.id} genre={genre} setId={setId}/>)}
            <button onClick={() => searchGenre(id)}>знайти</button>
        </div>
    );
};
export default AllGenres
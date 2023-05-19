import {FC, useEffect} from 'react'

import {useAppDispatch, useAppSelector} from "../../hooks/redux.hooks";
import {genreActions} from "../../redux/store/slices/genreSlice";
import Genre from "../Genre/Genre";
import './AllGenre.css'




interface IProps {

}

const AllGenres: FC<IProps> = () => {

    const {genres} = useAppSelector(state => state.genreReducer);
    const dispatch = useAppDispatch();

    console.log(genres)

    useEffect(() => {
        dispatch(genreActions.getGenres())
    }, [dispatch])

    // const curGenres = JSON.parse(JSON.stringify(genres))
    // const genre = []
    // for (const item of curGenres) {
    //     for (const obj of item) {
    //         genre.push(obj)
    //     }
    // }

    return (
        <div className={'all_genre'}>
            { genres && genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};
export default AllGenres
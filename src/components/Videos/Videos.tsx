import {FC, useEffect} from 'react'

import {useAppDispatch, useAppSelector} from "../../hooks/redux.hooks";
import {movieActions} from "../../redux/store/slices/movieSlice";
import './Video.css'


interface IProps {
    id: number
}

const Videos: FC<IProps> = ({id}) => {
    const {videos} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();

    const trailer = videos.filter(video => video.type === 'Trailer')

    useEffect(() => {
        dispatch(movieActions.getMovieVideo({movieId: id}))
    }, [dispatch, id])

    return (
        <div className={'video'}>
            {trailer[0] &&
                <iframe className={'youtube_video'}
                    src={`https://www.youtube.com/embed/${trailer[0].key}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            }
        </div>
    );
};
export default Videos
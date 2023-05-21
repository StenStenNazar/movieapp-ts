import {FC} from 'react'
import {useAppDispatch, useAppSelector} from "../../hooks/redux.hooks";
import {movieActions} from "../../redux/store/slices/movieSlice";
import './Pagination.css'
import '../../main.css'

const Pagination: FC = () => {
    const {isDark} = useAppSelector(state => state.switchReducer);
    let {page, IdOfGenre,total_pages} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();

    console.log(`${page} page`);
    console.log(`${IdOfGenre} IdOfGenre`);
    console.log(`${total_pages} total_pages`);

    const next = (): void => {
        dispatch(
            movieActions.getPages(
                {numberOfPage: page = page + 1, genreId: IdOfGenre ? IdOfGenre.toString() : ''}))
    }

    const prev = (): void => {
        dispatch(
            movieActions.getPages(
                {numberOfPage: page = page - 1, genreId: IdOfGenre ? IdOfGenre.toString() : ''}))
    }

    const curr = (page: number): void => {
        dispatch(
            movieActions.getPages(
                {numberOfPage: page, genreId: IdOfGenre ? IdOfGenre.toString() : ''}))
    }

    const pages = Array.from(Array(total_pages? Math.floor(total_pages/20):501).keys()).slice(1);

    return (
        <div className={'main_wrapper'}>
            <div className={'pagination_wrapper'}>

                <div className={'prev_button'}>{page !== 1 &&
                    <button className={'prev_next'} onClick={() => prev()}>Prev</button>}</div>

                <div className={`slider ${isDark ? 'dark' : 'light'}`}>{pages.map((page) => (
                    <div className={'page'} key={page} onClick={() => curr(page)}>{page}</div>))}</div>

                <div className={'next_button'}>{page < 500 &&
                    <button className={'prev_next'} onClick={() => next()}>Next</button>}</div>
            </div>
            {/*<div className={'page_of_pages'}>{page} ... 500</div>*/}
        </div>
    );
};
export {Pagination}
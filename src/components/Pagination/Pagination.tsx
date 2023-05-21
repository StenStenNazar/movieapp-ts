import {FC} from 'react'

import {useAppDispatch, useAppSelector} from "../../hooks/redux.hooks";
import {movieActions} from "../../redux/store/slices/movieSlice";
import './Pagination.css'
import '../../main.css'

const Pagination: FC = () => {
    const {isDark} = useAppSelector(state => state.switchReducer);
    let {page, IdOfGenre, total_pages} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();

    const next = () => {
        dispatch(
            movieActions.getPages(
                {numberOfPage: page = page + 1, genreId: IdOfGenre ? IdOfGenre.toString() : ''}))
        handleClickScroll(page.toString())
    }

    const prev = () => {
        dispatch(
            movieActions.getPages(
                {numberOfPage: page = page - 1, genreId: IdOfGenre ? IdOfGenre.toString() : ''}))
        handleClickScroll(page.toString())
    }

    const curr = (page: number) => {
        dispatch(
            movieActions.getPages(
                {numberOfPage: page, genreId: IdOfGenre ? IdOfGenre.toString() : ''}))
        handleClickScroll(page.toString())
    }


    const handleClickScroll = async (id: string) => {

        const element = document.getElementById('slider');
        await new Promise((resolve) => setTimeout(resolve, 0));
        const cur = element?.querySelector(`[id="${id}"]`);

        if (cur) {
            const activeElement = element?.querySelector('.active');
            if (activeElement) {
                activeElement.classList.remove('active');
            }
            cur.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
            cur.classList.add("active");
        }
    }

    const pages = Array.from(Array(total_pages ? Math.floor(total_pages / 20) : 501).keys()).slice(1);

    return (
        <div className={'main_wrapper'}>
            <div className={'pagination_wrapper'}>

                <div className={'prev_button'}>{page !== 1 &&
                    <button  className={'prev_next'} onClick={() => prev()}>Prev</button>}</div>

                <div className={`slider ${isDark ? 'dark' : 'light'}`} id={'slider'}>{pages.map((page) => (
                    <div className={'page'} id={`${page}`} key={page} onClick={() => curr(page)}>{page}</div>))}
                </div>

                <div className={'next_button'}>{page < 500 &&
                    <button className={'prev_next'} onClick={() => next()}>Next</button>}</div>
            </div>
        </div>
    );
};
export {Pagination}
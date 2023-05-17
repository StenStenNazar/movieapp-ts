import {FC} from 'react'
import {useAppDispatch, useAppSelector} from "../../hooks/redux.hooks";
import {movieActions} from "../../redux/store/slices/movieSlice";
import './Pagination.css'

const Pagination: FC = () => {
    let {page} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();

    const next = () => {
        dispatch(
            movieActions.getPages({numberOfPage: page = page + 1}))
    }

    const prev = () => {
        dispatch(
            movieActions.getPages({numberOfPage: page = page - 1}))
    }

    const curr = (page: number) => {
        dispatch(
            movieActions.getPages({numberOfPage: page}))
    }
    const pages = Array.from(Array(501).keys()).slice(1);

    return (
        <div className={'main_wrapper'}>
            <div className={'pagination_wrapper'}>
                <div className={'prev_button'}>{page !== 1 && <button className={'prev_next'} onClick={() => prev()}>Prev</button>}</div>

                <div className={'slider'}>{pages.map((page) => (
                    <div className={'page'} key={page} onClick={() => curr(page)}>{page}</div>))}</div>

                <div className={'next_button'}>{page < 500 && <button className={'prev_next'} onClick={() => next()}>Next</button>}</div>
            </div>
            <div className={'page_of_pages'}>{page} ... 500</div>
        </div>
    );
};
export {Pagination}
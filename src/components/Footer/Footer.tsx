import {FC} from 'react'
import './Footer.css'
import {useAppSelector} from "../../hooks/redux.hooks";


const Footer: FC = () => {
    const {isDark} = useAppSelector(state => state.switchReducer);
    return (
        <div className={`footer ${isDark ? 'dark' : 'light'}`}>
            <h2>©all rights reserved </h2>
        </div>
    );
};
export default Footer
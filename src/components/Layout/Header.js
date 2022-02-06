import { Fragment } from "react";
import classes from './Header.module.css';
import meals from "../../assests/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Foodie</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={classes['main-image']}>
                <img src={meals} alt="Delicious Food!" />
            </div>
        </Fragment>
    );
}

export default Header;

import './headerComponent.scss';
import React, {useState} from 'react';
import IRoute from '../../ts/route.interface';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

export type IHeaderProps = {
    title?: string;
    routes: IRoute[];
}
const HeaderComponent: React.FunctionComponent<IHeaderProps> = ({title, routes}) => {

    const [isActive, setIsActive] = useState(0);

    return <header className="gyg-header">
        <div className="app-header__top">
            <img className="app-header__logo" 
                src="https://media1.giphy.com/media/3o7ZeQBhbVGnELP4bK/giphy.gif?cid=dce653c9igqtyhssh9441s2osnslbpbvh6cgms5cvvqsaa8j&rid=giphy.gif&ct=g"
                alt="logo"
            />
            <div className="space-endGap-big">
                <h1 className="app-header__title">{title}</h1>
                <p className="app-header__caption">
                    Search Millions of Gifs!
                </p>
            </div>
            <div className="layout-fillEmpty" id="portal-element"></div>
        </div>

        <nav className="app-header__menu">
            {
                routes && routes.map((route, index) =>(
                    <Link 
                        className={
                            classnames('app-header__menuItem', {'is-active': index === isActive})
                        }
                        key={route.to}
                        to={route.to}
                        onClick={()=>{setIsActive(index)}}
                    >{route.title}</Link>
                ))
            }
        </nav>

    </header>
}

export default HeaderComponent;
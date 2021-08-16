import React from 'react';
import IRoute from '../../ts/route.interface';
import { Link } from 'react-router-dom';

export type IHeaderProps = {
    title?: string;
    routes: IRoute[];
}
const HeaderComponent: React.FunctionComponent<IHeaderProps> = ({title, routes}) => {
    return <header className="app-header">
        
        <h1>{title}</h1>

        <nav>
            {
                routes && routes.map(route =>(
                    <Link to={route.to}>{route.title}</Link>
                ))
            }
        </nav>

    </header>
}

export default HeaderComponent;
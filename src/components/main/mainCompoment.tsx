import React, {Suspense} from "react";
import IRoute from '../../ts/route.interface';
import {Route, Switch} from "react-router-dom";
import Loader from "../../ui/loader";

export type IHeaderProps = {
    routes: IRoute[];
}
const MainComponent: React.FunctionComponent<IHeaderProps> = ({routes}) => {
    return <main className="app-main">
        <Switch>
            {
            routes && routes.map(route => {
                const Component = route.component;
                return <Route exact path={route.to} key={route.to} render={()=><Suspense fallback={<><Loader/></>}><Component/></Suspense>} />
            })
            }
        </Switch>
    </main>
}

export default MainComponent;
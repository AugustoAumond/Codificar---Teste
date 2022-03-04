import {renderRoutes} from 'react-router-config';
import PageRoutes from './components/pageroutes/PageRoutes';
import Paths, {route} from "./Paths";
import HomePage from './components/homepage/HomePage';
import Start from './components/start/Start';
import Questions from './components/questions/Questions';

export const routes = [
    route (Paths.home, HomePage),
    route (Paths.start, Start),
    route (Paths.questions, Questions),
];

export default renderRoutes([
    {
        component: PageRoutes,
        routes,
    }
])
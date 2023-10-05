import { Outlet } from 'react-router-dom';
import NavBar from '../pages/NavBar/NavBar';

const Root = () => {
    return (
        <div className='md:container mx-auto'>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;
import { NavLink } from 'react-router-dom';

export function NavigationBar() {
    const IsManager = false;
    
    

    function parseJwt (token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    
        return JSON.parse(jsonPayload);
    }

    if (IsManager) {
        return (
            <div width='100%' >
                <nav>
                    <NavLink to="/AddExpense" >Add expense</NavLink>
                    <NavLink to="/AddModelToJob" >Add model to job</NavLink>
                    <NavLink to="/CreateModel" >Create model</NavLink>
                    <NavLink to="/CreateJob" >Create job</NavLink>
                    <NavLink to="/DeleteModelFromJob" >Delete model from job</NavLink>
                </nav>
            </div>
        )
    } else {
        return (
            <div width='100%' >
                <nav>
                    <NavLink to="/AddExpense" >Add expense</NavLink>
                    <NavLink to="/AddModelToJob" >Add model to job</NavLink>
                    <NavLink to="/CreateModel" >Create model</NavLink>
                    <NavLink to="/CreateJob" >Create jGDGRDSDFob</NavLink>
                    <NavLink to="/DeleteModelFromJob" >Delete model from job</NavLink>
                </nav>
            </div>
        )
    }

}
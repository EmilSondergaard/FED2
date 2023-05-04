import react from 'react';
import { NavLink } from 'react-router-dom';

export function SiteNavigation() {
    const IsManager = false;



    if (IsManager) {
        return (
            <>
                <nav>
                    <NavLink to="/" >Login</NavLink>

                </nav>


            </>
        )
    } else {
        return (
            <>
                {/* <Router>
                    <Routes>
                        <ul>
                            <li><Route path="/Jobs" element={<LoginForm></LoginForm>} >{<a href="ListOfJobs">Jobs</a>}</Route></li>
                            <li><Route path="/CreateExpense" element={<LoginForm></LoginForm>} >{<a href="ListOfJobs">Create Expense</a>}</Route></li>
                        </ul>
                    </Routes>
                </Router> */}
            </>
        )
    }

}
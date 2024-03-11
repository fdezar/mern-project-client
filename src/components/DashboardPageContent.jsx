import { Link } from 'react-router-dom';

function DashboardPageContent() {

    return (
        <div>
            <p>Are you ready?</p>
            <Link to="notes">Create a note</Link>
        </div>
    )
}

export default DashboardPageContent;
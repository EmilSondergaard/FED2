import react from 'react';

export function SiteNavigation() {
const isManager = false;



    if (isManager) {
        return (
            <>
                <div>Lars</div>
            </>
        )
    } else {
        return (
            <>
                <div>nobody</div>
            </>
        )
    }

}
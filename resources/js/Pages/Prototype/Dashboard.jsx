import React from 'react';
import Authenticated from '@/Layouts/Authenticated/index';
import { Head } from '@inertiajs/react';

function Dashboard() {
    return (
        <>
            <Head title='Dashboard' />
            <Authenticated>
                <div>Hi User</div>
            </Authenticated>
        </>
    )
}

export default Dashboard;
import React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

const Authenticated = ({ children }) => {
    return (
        <>
            <div className="hidden mx-auto max-w-screen lg:block">
                {/* <!-- START: Sidebar --> */}
                <Sidebar />
                {/* <!-- END: Sidebar --> */}
                {/* <!-- START: Content --> */}
                <div className="ml-[300px] px-[50px]">
                    <div className="py-10 flex flex-col gap-[50px]">
                        {/* <!-- Topbar --> */}
                        <Topbar />
                        {/* <!-- /Topbar --> */}
                        {/* MAIN CONTENT */}
                        <main className='space-y-[50px]'>
                            {children}
                        </main>
                        {/* END MAIN CONTENT */}
                    </div>
                </div>
                {/* <!-- END: Content --> */}
            </div>
            {/* //  <!-- Desktop Only --> */}
            <div className="flex w-full h-screen px-4 mx-auto bg-black lg:hidden">
                <div className="my-auto text-2xl font-medium leading-snug text-center text-white">
                    Sorry, this page only supported on 1024px screen or above
                </div>
            </div>

        </>
    )
}

export default Authenticated;

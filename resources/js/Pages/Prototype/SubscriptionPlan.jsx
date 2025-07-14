import React from 'react'
import { Head } from '@inertiajs/react';
import Authenticated from '@/Layouts/Authenticated/Index';
import SubscriptionCard from '@/Components/SubscriptionCard';


function SubscriptionPlan() {
    return (
        <>
            <Head title='Subscription Plan' />
            <Authenticated>
                <div className="flex flex-col items-center py-10">
                    <div className="text-black font-semibold text-[26px] mb-3">
                        Pricing for Everyone
                    </div>
                    <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                        Invest your little money to get a whole new experiences from movies.
                    </p>
                </div>
                {/* <!-- Pricing Card --> */}
                <div className="flex justify-center gap-10 mt-[70px]">
                    {/* <!-- Basic --> */}
                    <SubscriptionCard
                        isPremium={false}
                        id={'basic'}
                        name={'basic'}
                        durationInMonth={3}
                        features={[' Unlock 10 basic movies', ' Up to 3 users', 'Support 24/7 ready']}
                        price={299000}
                        onSelectSubscription={() => { }}
                    />

                    {/* <!-- For Greatest --> */}
                    <SubscriptionCard
                        isPremium={true}
                        id={'greatest'}
                        name={'greatest'}
                        durationInMonth={3}
                        features={['feature 1', 'feature 2', 'feature 3', 'feature 4', 'feature 5']}
                        price={800000}
                        onSelectSubscription={() => { }}
                    />
                </div>
                {/* <!-- /Pricing Card --> */}

            </Authenticated>
        </>
    )
}

export default SubscriptionPlan;
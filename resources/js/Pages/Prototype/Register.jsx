import React from 'react'
import InputLabel from '@/Components/InputLabel';
import Input from '@/Components/Input';
import Button from '@/Components/Button';
import { Link, Head } from '@inertiajs/react';


function Register() {
    return (
        <>
            <Head title='Sign Up' />
            <div className="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
                <div className="fixed top-[-50px] hidden lg:block">
                    <img src="/assets/images/signup-image.png"
                        className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]" alt="" />
                </div>
                <div className="py-24 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
                    <div>
                        <img src="/assets/images/moonton-white.svg" alt="" />
                        <div className="my-[70px]">
                            <div className="font-semibold text-[26px] mb-3">
                                Sign Up
                            </div>
                            <p className="text-base text-[#767676] leading-7">
                                Explore our new movies and get <br />
                                the better insight for your life
                            </p>
                        </div>
                        <form className="w-[370px]">
                            <div className="flex flex-col gap-6">
                                <div>
                                    {/* <label className="text-base block mb-2">Full Name</label> */}
                                    <InputLabel htmlFor="fullname" value="Full Name" />
                                    {/* <input type="text" name="fullname"
                                    className="rounded-2xl bg-form-bg py-[13px] px-7 w-full focus:outline-alerange focus:outline-none"
                                    placeholder="Your fullname..." value="Angga React" /> */}
                                    <Input
                                        id="fullname"
                                        type="text"
                                        name="fullname"
                                        placeholder="Your fullname..."
                                        isFocused={false}
                                        required={true}
                                    />
                                </div>
                                <div>
                                    {/* <label className="text-base block mb-2">Email Address</label> */}
                                    <InputLabel htmlFor="email" value="Email Address" />
                                    {/* <input type="email" name="email"
                                    className="rounded-2xl bg-form-bg py-[13px] px-7 w-full focus:outline-alerange focus:outline-none"
                                    placeholder="Your Email Address" value="anggaforreact@fb.com" /> */}
                                    <Input
                                        id="email"
                                        type="email"
                                        name="email"
                                        placeholder="Your Email Address"
                                        autoComplete="email"
                                        isFocused={false}
                                        required={true}
                                    />
                                </div>
                                <div>
                                    {/* <label className="text-base block mb-2">Password</label> */}
                                    <InputLabel htmlFor="password" value="Password" />
                                    {/* <input type="password" name="password"
                                    className="rounded-2xl bg-form-bg py-[13px] px-7 w-full focus:outline-alerange focus:outline-none"
                                    placeholder="Your Password" value="eeeeeeeeeeeeeee" /> */}
                                    <Input
                                        id="password"
                                        type="password"
                                        name="password"
                                        placeholder="Your Password"
                                        isFocused={false}
                                        required={true}
                                    />
                                </div>
                            </div>
                            <div className="grid space-y-[14px] mt-[30px]">
                                {/* <a href="/" className="rounded-2xl bg-alerange py-[13px] text-center">
                                <span className="text-base font-semibold">
                                    Sign Up
                                </span>
                            </a> */}
                                <Link href={route('prototype.dashboard')}>
                                    <Button variant='primary' type='button'>
                                        <span className="text-base font-semibold">
                                            Sign Up
                                        </span>
                                    </Button>
                                </Link>

                                {/* <a href="sign_in.html" className="rounded-2xl border border-white py-[13px] text-center">
                                <span className="text-base text-white">
                                    Sign In to My Account
                                </span>
                            </a> */}
                                <Link href={route("prototype.login")}>
                                    <Button variant='white-outline' type="button">
                                        <span className="text-base text-white">
                                            Sign In to My Account
                                        </span>
                                    </Button>
                                </Link>
                                {/* <!-- <button type="submit" className="rounded-2xl bg-alerange py-[13px] text-center">
                            <span className="text-base font-semibold">
                                Sign Up
                            </span>
                        </button> --> */}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;
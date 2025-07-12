import React from "react";
import InputLabel from "@/Components/InputLabel";
import Input from "@/Components/Input";
import Button from "@/Components/Button";
import { Link } from "@inertiajs/react";


function Login() {
    return (
        <div className="min-h-screen px-3 mx-auto text-white bg-black max-w-screen md:px-10">
            <div className="fixed top-[-50px] hidden lg:block">
                <img src="/assets/images/signup-image.png"
                    className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]" alt="" />
            </div>
            <div className="py-24 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
                <div>
                    <img src="/assets/images/moonton-white.svg" alt="" />
                    <div className="my-[70px]">
                        <div className="font-semibold text-[26px] mb-3">
                            Welcome Back
                        </div>
                        <p className="text-base text-[#767676] leading-7">
                            Explore our new movies and get <br />
                            the better insight for your life
                        </p>
                    </div>
                    <form className="w-[370px]">
                        <div className="flex flex-col gap-6">
                            <div>
                                {/* <label className="block mb-2 text-base">Email Address</label> */}
                                <InputLabel htmlFor="email">Email Address</InputLabel>
                                {/* <input type="email" name="email"
                                    className="rounded-2xl bg-form-bg py-[13px] px-7 w-full focus:outline-alerange focus:outline-none"
                                    placeholder="Email Address" /> */}
                                <Input
                                    id="email"
                                    type="email"
                                    name="email"
                                    autoComplete="username"
                                    placeholder="Email Address"
                                    isFocused={true}
                                    required={true}
                                />

                            </div>
                            <div>
                                {/* <label className="block mb-2 text-base">Password</label> */}
                                <InputLabel htmlFor="password">Password</InputLabel>
                                {/* <input type="password" name="password"
                                    className="rounded-2xl bg-form-bg py-[13px] px-7 w-full focus:outline-alerange focus:outline-none"
                                    placeholder="Password" /> */}
                                <Input
                                    id="password"
                                    type="password" name="password"
                                    className="rounded-2xl bg-form-bg py-[13px] px-7 w-full focus:outline-alerange focus:outline-none"
                                    placeholder="Password"
                                />
                            </div>
                        </div>
                        <div className="grid space-y-[14px] mt-[30px]">
                            {/* <a href="/" className="rounded-2xl bg-alerange py-[13px] text-center">
                                <span className="text-base font-semibold">
                                    Start Watching
                                </span>
                            </a> */}
                            <Button type="button" variant="primary" disabled={false}>
                                <span className="text-base font-semibold">
                                    Start Watching
                                </span>
                            </Button>
                            {/* <a href="sign_up.html" className="rounded-2xl border border-white py-[13px] text-center">
                                <span className="text-base text-white">
                                    Create New Account
                                </span>
                            </a> */}
                            <Link href={route("prototype.register")}>
                                <Button type="button" variant="light-outline" disabled={false}>
                                    <span className="text-base font-semibold">
                                        Create New Account
                                    </span>
                                </Button>
                            </Link>
                            {/* <!-- <button type="submit" className="rounded-2xl bg-alerange py-[13px] text-center">
                                    <span className="text-base font-semibold">
                                        Start Watching
                                    </span>
                                </button> --> */}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;
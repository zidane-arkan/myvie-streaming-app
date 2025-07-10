import React from "react";

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
                                <label className="block mb-2 text-base">Email Address</label>
                                <input type="email" name="email"
                                    className="rounded-2xl bg-form-bg py-[13px] px-7 w-full focus:outline-alerange focus:outline-none"
                                    placeholder="Email Address" />
                            </div>
                            <div>
                                <label className="block mb-2 text-base">Password</label>
                                <input type="password" name="password"
                                    className="rounded-2xl bg-form-bg py-[13px] px-7 w-full focus:outline-alerange focus:outline-none"
                                    placeholder="Password" />
                            </div>
                        </div>
                        <div className="grid space-y-[14px] mt-[30px]">
                            <a href="/" className="rounded-2xl bg-alerange py-[13px] text-center">
                                <span className="text-base font-semibold">
                                    Start Watching
                                </span>
                            </a>
                            <a href="sign_up.html" className="rounded-2xl border border-white py-[13px] text-center">
                                <span className="text-base text-white">
                                    Create New Account
                                </span>
                            </a>
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
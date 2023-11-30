import React from 'react';
import { NavLink, Outlet } from "react-router-dom";

const Fixed_Page = () => {
    return (
        <section className='max-w-screen-xl mx-auto'>
            {/* Header part that is fixed */}
            <div className='h-[15vh] flex justify-between items-center'>
                <div className='w-[100px] lg:w-[200px]'>
                    <img src="./Logo.png" className='' alt="" />

                </div>
                <div className='flex justify-around items-center gap-3'>
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-600 underline" : ""
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/donation"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-600 underline" : ""
                        }
                    >
                        Donation
                    </NavLink>
                    <NavLink
                        to="/statistics"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-600 underline" : ""
                        }
                    >
                        Statistics
                    </NavLink>

                </div>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </section>
    );
};

export default Fixed_Page;
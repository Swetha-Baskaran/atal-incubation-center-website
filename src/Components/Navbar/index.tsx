"use client";
import {useEffect, useState} from "react";
import Drawer from "./drawer";
import {navLinks} from "@/Constants/navLinks";

const Navigation = () => {
	const [toggleDrawer, setToggleDrawer] = useState(true);
	const handleDrawer = () => setToggleDrawer(!toggleDrawer);
	return (
		<>
			<nav className='bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900 fixed w-full top-0 left-0' style={{zIndex:"1112"}}>
				<div className='flex flex-wrap justify-between items-center px-6 py-4'>
					<a href='https://flowbite.com' className='flex items-center'>
						<img
							src='https://flowbite.com/docs/images/logo.svg'
							className='h-6 mr-3 sm:h-9'
							alt='Flowbite Logo'
						/>
						<span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
							Aicpecf
						</span>
					</a>
					<button
						data-collapse-toggle='mega-menu-full'
						type='button'
						className='inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
						data-drawer-target='drawer-body-scrolling'
						data-drawer-show='drawer-body-scrolling'
						data-drawer-body-scrolling='true'
						aria-controls='drawer-body-scrolling'
						onClick={handleDrawer}
					>
						<span className='sr-only'>Open main menu</span>
						<svg
							className='w-6 h-6'
							aria-hidden='true'
							fill='currentColor'
							viewBox='0 0 20 20'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								fill-rule='evenodd'
								d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
								clip-rule='evenodd'
							></path>
						</svg>
					</button>
					<div
						id='mega-menu-full'
						className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1'
					>
						<ul className='flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
							{navLinks.map((item, index) => {
								return (
									<li>
										<a
											href='#'
											className='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700'
											aria-current='page'
										>
											{item.name}
										</a>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
				{/* <div
					id='mega-menu-full-dropdown'
					className='mt-1 border-gray-200 shadow-sm border-y dark:border-gray-600'
				>
					<div className='grid max-w-screen-xl px-4 py-8 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:px-6'>
						<ul>
							<li>
								<a
									href='#'
									className='block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700'
								>
									<div className='font-semibold'>Online Stores</div>
									<span className='text-sm font-light text-gray-500 dark:text-gray-400'>
										Connect with third-party tools that you're already
										using.
									</span>
								</a>
							</li>
							<li>
								<a
									href='#'
									className='block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700'
								>
									<div className='font-semibold'>Segmentation</div>
									<span className='text-sm font-light text-gray-500 dark:text-gray-400'>
										Connect with third-party tools that you're already
										using.
									</span>
								</a>
							</li>
							<li>
								<a
									href='#'
									className='block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700'
								>
									<div className='font-semibold'>Marketing CRM</div>
									<span className='text-sm font-light text-gray-500 dark:text-gray-400'>
										Connect with third-party tools that you're already
										using.
									</span>
								</a>
							</li>
						</ul>
						<ul>
							<li>
								<a
									href='#'
									className='block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700'
								>
									<div className='font-semibold'>Online Stores</div>
									<span className='text-sm font-light text-gray-500 dark:text-gray-400'>
										Connect with third-party tools that you're already
										using.
									</span>
								</a>
							</li>
							<li>
								<a
									href='#'
									className='block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700'
								>
									<div className='font-semibold'>Segmentation</div>
									<span className='text-sm font-light text-gray-500 dark:text-gray-400'>
										Connect with third-party tools that you're already
										using.
									</span>
								</a>
							</li>
							<li>
								<a
									href='#'
									className='block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700'
								>
									<div className='font-semibold'>Marketing CRM</div>
									<span className='text-sm font-light text-gray-500 dark:text-gray-400'>
										Connect with third-party tools that you're already
										using.
									</span>
								</a>
							</li>
						</ul>
					</div>
				</div> */}
			</nav>

			{/* <nav className='bg-gray-50 dark:bg-gray-700'>
				<div className='max-w-screen-xl px-4 py-3 mx-auto md:px-6'>
					<div className='flex items-center'>
						<ul className='flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium'>
							<li>
								<a
									href='#'
									className='text-gray-900 dark:text-white hover:underline'
									aria-current='page'
								>
									Home
								</a>
							</li>
							<li>
								<a
									href='#'
									className='text-gray-900 dark:text-white hover:underline'
								>
									Company
								</a>
							</li>
							<li>
								<a
									href='#'
									className='text-gray-900 dark:text-white hover:underline'
								>
									Team
								</a>
							</li>
							<li>
								<a
									href='#'
									className='text-gray-900 dark:text-white hover:underline'
								>
									Features
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav> */}
		</>
	);
};

export default Navigation;

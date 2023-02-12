import React from "react";

const Footer = () => {
	return (
		<footer className='p-4 bg-white sm:p-6 dark:bg-gray-900'>
			<div className='sm:flex sm:items-center sm:justify-between'>
				<a
					href='https://flowbite.com/'
					className='flex items-center mb-4 sm:mb-0'
				>
					<img
						src='https://flowbite.com/docs/images/logo.svg'
						className='h-8 mr-3'
						alt='Flowbite Logo'
					/>
					<span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
						Aicpecf
					</span>
				</a>
				<ul className='flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400'>
					<li>
						<a href='#' className='mr-4 hover:underline md:mr-6 '>
							About
						</a>
					</li>
					<li>
						<a href='#' className='mr-4 hover:underline md:mr-6'>
							Privacy Policy
						</a>
					</li>
					<li>
						<a href='#' className='mr-4 hover:underline md:mr-6 '>
							Licensing
						</a>
					</li>
					<li>
						<a href='#' className='hover:underline'>
							Contact
						</a>
					</li>
				</ul>
			</div>
			<hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
			<div className='grid grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4'>
				<div>
					<h2 className='mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400'>
						Company
					</h2>
					<ul className='text-gray-500 dark:text-gray-400'>
						<li className='mb-4'>
							<a href='#' className=' hover:underline'>
								About
							</a>
						</li>
						<li className='mb-4'>
							<a href='#' className='hover:underline'>
								Careers
							</a>
						</li>
						<li className='mb-4'>
							<a href='#' className='hover:underline'>
								Brand Center
							</a>
						</li>
						<li className='mb-4'>
							<a href='#' className='hover:underline'>
								Blog
							</a>
						</li>
					</ul>
				</div>
				<div>
					<h2 className='mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400'>
						Help center
					</h2>
					<ul className='text-gray-500 dark:text-gray-400'>
						<li className='mb-4'>
							<a href='#' className='hover:underline'>
								Discord Server
							</a>
						</li>
						<li className='mb-4'>
							<a href='#' className='hover:underline'>
								Twitter
							</a>
						</li>
						<li className='mb-4'>
							<a href='#' className='hover:underline'>
								Facebook
							</a>
						</li>
						<li className='mb-4'>
							<a href='#' className='hover:underline'>
								Contact Us
							</a>
						</li>
					</ul>
				</div>
				<div>
					<h2 className='mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400'>
						Legal
					</h2>
					<ul className='text-gray-500 dark:text-gray-400'>
						<li className='mb-4'>
							<a href='#' className='hover:underline'>
								Privacy Policy
							</a>
						</li>
						<li className='mb-4'>
							<a href='#' className='hover:underline'>
								Licensing
							</a>
						</li>
						<li className='mb-4'>
							<a href='#' className='hover:underline'>
								Terms &amp; Conditions
							</a>
						</li>
					</ul>
				</div>
				<div>
					<h2 className='mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400'>
						Download
					</h2>
					<ul className='text-gray-500 dark:text-gray-400'>
						<li className='mb-4'>
							<a href='#' className='hover:underline'>
								iOS
							</a>
						</li>
						<li className='mb-4'>
							<a href='#' className='hover:underline'>
								Android
							</a>
						</li>
						<li className='mb-4'>
							<a href='#' className='hover:underline'>
								Windows
							</a>
						</li>
						<li className='mb-4'>
							<a href='#' className='hover:underline'>
								MacOS
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

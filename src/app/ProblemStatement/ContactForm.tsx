import React from "react";

const ContactForm = () => {
	return (
		<section className='bg-white dark:bg-gray-900'>
			<div className='mx-auto max-w-screen-md py-8 px-4 lg:py-16'>
				<h2 className='mb-4 text-center text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white'>
					Contact Us
				</h2>
				<p className='mb-8 text-center font-light text-gray-500 dark:text-gray-400 sm:text-xl lg:mb-16'>
					Got a technical issue? Want to send feedback about a beta
					feature? Need details about our Business plan? Let us know.
				</p>
				<form action='#' className='space-y-8'>
					<div>
						<label
							htmlFor='email'
							className='mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300'
						>
							Your email
						</label>
						<input
							type='email'
							id='email'
							className='focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400'
							placeholder='name@flowbite.com'
							required
						/>
					</div>
					<div>
						<label
							htmlFor='subject'
							className='mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300'
						>
							Subject
						</label>
						<input
							type='text'
							id='subject'
							className='focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400'
							placeholder='Let us know how we can help you'
							required
						/>
					</div>
					<div className='sm:col-span-2'>
						<label
							htmlFor='message'
							className='mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400'
						>
							Your message
						</label>
						<textarea
							id='message'
							rows={6}
							className='focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400'
							placeholder='Leave a comment...'
						></textarea>
					</div>
					<button
						type='submit'
						className='focus:shadow-outline rounded bg-purple-500 py-2 px-4 text-center font-bold text-white shadow hover:bg-purple-400 focus:outline-none'
					>
						Send message
					</button>
				</form>
			</div>
		</section>
	);
};

export default ContactForm;

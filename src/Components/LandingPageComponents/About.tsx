import React from "react";

const About = () => {
	return (
		<div className='md:flex justify-evenly m-auto m-12 p-9'>
			<div className='m-9 py-9'>
				<h1 className='font-medium leading-tight text-5xl mt-0 mb-2'>
					About Aicpecf
				</h1>
				<p className="my-6 font-3xl">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit.
					Cupiditate quos quis sapiente, eligendi, soluta fugiat delectus
					ab tenetur quam veritatis vitae accusamus laboriosam magni et, ut
					ea! Magnam, minus saepe!
				</p>
				<button className='mb-6 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>
					know more
				</button>
			</div>
			<iframe
				className='m-6 md:w-[80vw] aspect-video ...'
				src='https://www.youtube.com/...'
			></iframe>
		</div>
	);
};

export default About;

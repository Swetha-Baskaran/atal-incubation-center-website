"use client";
import {useState} from "react";
import "./style.scss";
import {contactInfo as contacts} from "@/Constants/ContactInfo";

const Form = ({setShowForm, setCurrentForm, currentForm} : any) => {
	// let [contactInfo, setContactInfo] = useState({
	// 	name: "",
	// 	email: "",
	// 	message: "",
	// });
	// let [validateEmail, setValidateEmail] = useState(false);
	// const options = {
	// 	method: "POST",
	// 	url: "https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send",
	// 	headers: {
	// 		"content-type": "application/json",
	// 		"X-RapidAPI-Key": "7e3622d2a1msh75f497f069a0051p1500b8jsn8fee94ad6cf6",
	// 		"X-RapidAPI-Host": "rapidprod-sendgrid-v1.p.rapidapi.com",
	// 	},
	// 	data: `{"personalizations":[{"to":[{"email":"swetha.b@pec.edu"}],"subject":"${contactInfo.name}: from Portfolio"}],"from":{"email":"${contactInfo.email}"},"content":[{"type":"text/plain","value":"${contactInfo.message}"}]}`,
	// };

	// const handelOnChange = (e, name) => {
	// 	const value = e.target.value;
	// 	if (name === "email") {
	// 		let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	// 		setValidateEmail(value.match(mailformat) === null ? false : true);
	// 		console.log(value.match(mailformat));
	// 	}
	// 	setContactInfo({
	// 		...contactInfo,
	// 		[name]: value,
	// 	});
	// };

	// const sendMail = async () => {
	// 	await axios(options)
	// 		.then(function (response) {
	// 			console.log(response.data);
	// 		})
	// 		.catch(function (error) {
	// 			console.error(error);
	// 		});
	// 	await setContactInfo({
	// 		name: "",
	// 		email: "",
	// 		message: "",
	// 	});
	// 	await notify();
	// };
	return (
		<>
			{/* nav */}
			<div className='topnav' id='myTopnav'>
				<a
					onClick={() => {
						setShowForm(false);
					}}
				>
					Home
				</a>
				{contacts.cards.map(item => {
					return (
						<a className="nav icons"
							onClick={() => {
								setCurrentForm(item);
							}}
						>
							{item}
						</a>
					);
				})}
			</div>

			<h1 className='my-9 py-5 text-center text-4xl'>
				Submit Your Problems for {currentForm}
			</h1>
			{/* form */}
			<div className='flex flex-col items-center justify-center p-9 mt-9 mb-20'>
				<form className='min-w-lg flex w-[50rem] flex-col justify-center'>
					<div className='-mx-3 mb-6 flex'>
						<div className='w-[20rem] px-3 md:w-1/2'>
							<label
								className='mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700'
								htmlFor='grid-last-name'
							>
								First Name
							</label>
							<input
								className='block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none'
								id='grid-last-name'
								type='text'
								required
								placeholder='Doe'
							/>
						</div>
						<div className='w-full px-3 md:w-1/2'>
							<label
								className='mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700'
								htmlFor='grid-last-name'
							>
								Last Name
							</label>
							<input
								className='block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none'
								id='grid-last-name'
								type='text'
								required
								placeholder='Doe'
							/>
						</div>
					</div>
					<div className='-mx-3 mb-6 flex flex-wrap'>
						<div className='w-full px-3'>
							<label
								className='mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700'
								htmlFor='grid-password'
							>
								Email
							</label>
							<input
								className='mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none'
								id='grid-password'
								type='email'
								required
								placeholder='abc@gmail.com'
							/>
						</div>
					</div>
					<div className='-mx-3 mb-6 flex'>
						<div className='w-full px-3 md:w-1/2'>
							<label
								className='mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700'
								htmlFor='grid-last-name'
							>
								Code
							</label>
							<input
								className='block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none'
								id='grid-last-name'
								type='text'
								required
								placeholder='Doe'
							/>
						</div>
						<div className='w-full px-3 md:w-1/2'>
							<label
								className='mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700'
								htmlFor='grid-last-name'
							>
								Phone
							</label>
							<input
								className='block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none'
								id='grid-last-name'
								type='text'
								required
								placeholder='Doe'
							/>
						</div>
					</div>
					<div className='-mx-3 mb-6 flex flex-wrap'>
						<div className='w-full px-3'>
							<label
								className='mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700'
								htmlFor='grid-password'
							>
								Name of your Industry/Organization/Firm
							</label>
							<input
								className='mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none'
								id='grid-password'
								type='email'
								required
								placeholder='abc@gmail.com'
							/>
						</div>
					</div>
					<div className='-mx-3 mb-6 flex flex-wrap'>
						<div className='w-full px-3'>
							<label
								className='mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700'
								htmlFor='grid-password'
							>
								Product / Services Offered
							</label>
							<input
								className='mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none'
								id='grid-password'
								type='email'
								required
								placeholder='abc@gmail.com'
							/>
						</div>
					</div>
					<div className='-mx-3 mb-6 flex flex-wrap'>
						<div className='w-full px-3'>
							<label
								className='mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700'
								htmlFor='grid-password'
							>
								Email
							</label>
							<input
								className='mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none'
								id='grid-password'
								type='email'
								required
								placeholder='abc@gmail.com'
							/>
						</div>
					</div>
					<div className='-mx-3 mb-6 flex flex-wrap'>
						<div className='w-full px-3'>
							<label
								className='mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700'
								htmlFor='grid-password'
							>
								Email
							</label>
							<input
								className='mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none'
								id='grid-password'
								type='email'
								required
								placeholder='abc@gmail.com'
							/>
						</div>
					</div>
					<div className='-mx-3 mb-6 flex flex-wrap'>
						<div className='w-full px-3'>
							<label
								className='mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700'
								htmlFor='grid-password'
							>
								Email
							</label>
							<input
								className='mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none'
								id='grid-password'
								type='email'
								placeholder='abc@gmail.com'
								required
							/>
						</div>
					</div>
					<div className='-mx-3 mb-6 flex flex-wrap'>
						<div className='w-full px-3'>
							<label
								htmlFor='message'
								className='mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700'
							>
								Your message
							</label>
							<textarea
								id='message'
								rows={6}
								className='mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none'
								placeholder='Write your thoughts here...'
							></textarea>
						</div>
					</div>
					<div className='focus:shadow-outline rounded bg-purple-500 p-4 text-center font-bold text-white shadow hover:bg-purple-400 focus:outline-none'>
						<button type='submit'>Submit</button>
					</div>
				</form>
			</div>
		</>
	);
};

export default Form;

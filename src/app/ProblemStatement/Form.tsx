"use client";
import {useState} from "react";
import axios from "axios";
import "./style.scss";
import {contactInfo as contacts} from "@/Constants/ContactInfo";

const Form = ({setShowForm, setCurrentForm, currentForm}: any) => {
	let [contactInfo, setContactInfo] = useState({
		firstName: "",
		lastName: "",
		email: "",
		nameOfOrg: "",
		pointOfContact: "",
		mobileNumber: "",
		serviceOffered: "",
		description: "",
		departmentWebsite: "",
		additionalInfo: "",
	});
	// let [validateEmail, setValidateEmail] = useState(false);
	const options = {
		method: "POST",
		url: "https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send",
		headers: {
			"content-type": "application/json",
			"X-RapidAPI-Key": "7e3622d2a1msh75f497f069a0051p1500b8jsn8fee94ad6cf6",
			"X-RapidAPI-Host": "rapidprod-sendgrid-v1.p.rapidapi.com",
		},
		data: `{"personalizations":[{"to":[{"email":"ceo@aicpecf.org"}],"subject":"${
			contactInfo.firstName + contactInfo.lastName
		}: from ProblemStatementRepo"}],"from":{"email":"${
			contactInfo.email
		}"},"content":[{"type":"text/plain","value":"${
			"First name"+contactInfo.firstName +"\n"+
			"Last Name"+contactInfo.lastName+"\n"+
			"Email"+contactInfo.email+"\n"+
		    "Name of Org"+contactInfo.nameOfOrg+"\n"+
		    "Point of Contact"+contactInfo.pointOfContact+"\n"+
		    "Mobile Number"+contactInfo.mobileNumber+"\n"+
		    "Product / Service Offered"+contactInfo.serviceOffered+"\n"+
		    "Description"+contactInfo.description+"\n"+
		    "Department Website"+contactInfo.departmentWebsite+"\n"+
		    "Additional Information"+contactInfo.additionalInfo+"\n"
		}"}]}`,
	};

	const handelOnChange = (e: any, name: string) => {
		const value = e.target.value;
		// if (name === "email") {
		// 	let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		// 	setValidateEmail(value.match(mailformat) === null ? false : true);
		// }
		setContactInfo({
			...contactInfo,
			[name]: value,
		});
	};

	const sendMail = async () => {
		console.log(contactInfo)
		await axios(options)
			.then(function (response) {
				console.log(response.data);
			})
			.catch(function (error) {
				console.error(error);
			});
		await setContactInfo({
			firstName: "",
			lastName: "",
			email: "",
			nameOfOrg: "",
			pointOfContact: "",
			mobileNumber: "",
			serviceOffered: "",
			description: "",
			departmentWebsite: "",
			additionalInfo: "",
		});
		await notify();
	};
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
						<a
							className='nav icons'
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
			<div className='mt-9 mb-20 flex flex-col items-center justify-center p-9'>
				<div className='min-w-lg flex w-[50rem] flex-col justify-center'>
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
								value={contactInfo.firstName}
								required
								placeholder='Doe'
								onChange={e => {
									handelOnChange(e, "firstName");
								}}
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
								value={contactInfo.lastName}
								onChange={e => {
									handelOnChange(e, "lastName");
								}}
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
								value={contactInfo.email}
								onChange={e => {
									handelOnChange(e, "email");
								}}
							/>
						</div>
					</div>
					<div className='-mx-3 mb-6 flex'>
						<div className='w-full px-3 md:w-1/2'>
							<label
								className='mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700'
								htmlFor='grid-last-name'
							>
								Contact Person Name / Point of Contact
							</label>
							<input
								className='block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none'
								id='grid-last-name'
								type='text'
								required
								placeholder='Doe'
								value={contactInfo.pointOfContact}
								onChange={e => {
									handelOnChange(e, "pointOfContact");
								}}
							/>
						</div>
						<div className='w-full px-3 md:w-1/2'>
							<label
								className='mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700'
								htmlFor='grid-last-name'
							>
								Mobile Number
							</label>
							<input
								className='block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none'
								id='grid-last-name'
								type='text'
								required
								placeholder='Doe'
								value={contactInfo.mobileNumber}
								onChange={e => {
									handelOnChange(e, "mobileNumber");
								}}
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
								value={contactInfo.nameOfOrg}
								onChange={e => {
									handelOnChange(e, "nameOfOrg");
								}}
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
								value={contactInfo.serviceOffered}
								onChange={e => {
									handelOnChange(e, "serviceOffered");
								}}
							/>
						</div>
					</div>
					<div className='-mx-3 mb-6 flex flex-wrap'>
						<div className='w-full px-3'>
							<label
								className='mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700'
								htmlFor='grid-password'
							>
								Department website
							</label>
							<input
								className='mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none'
								id='grid-password'
								type='email'
								required
								placeholder='abc@gmail.com'
								value={contactInfo.departmentWebsite}
								onChange={e => {
									handelOnChange(e, "departmentWebsite");
								}}
							/>
						</div>
					</div>
					<div className='-mx-3 mb-6 flex flex-wrap'>
						<div className='w-full px-3'>
							<label
								htmlFor='message'
								className='mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700'
							>
								Kindly provide the details of problem you face / see in
								the product/service/process that you are manufacturing
								/developing for your customers
							</label>
							<textarea
								id='message'
								rows={6}
								className='mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none'
								placeholder='Write your thoughts here...'
								value={contactInfo.description}
								onChange={e => {
									handelOnChange(e, "description");
								}}
							></textarea>
						</div>
					</div>
					<div className='-mx-3 mb-6 flex flex-wrap'>
						<div className='w-full px-3'>
							<label
								htmlFor='message'
								className='mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700'
							>
								Additional Information
							</label>
							<textarea
								id='message'
								rows={6}
								className='mb-3 block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none'
								placeholder='Write your thoughts here...'
								value={contactInfo.additionalInfo}
								onChange={e => {
									handelOnChange(e, "additionalInfo");
								}}
							></textarea>
						</div>
					</div>
					<div onClick={sendMail} className='focus:shadow-outline rounded bg-purple-500 p-4 text-center font-bold text-white shadow hover:bg-purple-400 focus:outline-none'>
						<button>Submit</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Form;
function notify() {
	throw new Error("Function not implemented.");
}

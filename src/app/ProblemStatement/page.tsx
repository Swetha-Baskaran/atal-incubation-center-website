"use client";
import {useState} from "react";
import Form from "./Form";
import LandingPage from "./LandingPage";
import {contactInfo} from "@/Constants/ContactInfo";
import ContactForm from "./ContactForm";

// problem statement form using tailwind
const page = () => {
	const [showForm, setShowForm] = useState(false);
	const [currentForm, setCurrentForm] = useState(contactInfo.cards[0]);
	return (
		<>
			{showForm === true ? (
				<Form setShowForm={setShowForm} setCurrentForm={setCurrentForm} currentForm={currentForm} />
			) : (
				<LandingPage setShowForm={setShowForm} setCurrentForm={setCurrentForm} />
			)}
			{}
		</>
	);
};

export default page;

import React from "react";
import {
	SlSocialInstagram,
	SlSocialLinkedin,
	SlSocialFacebook,
	SlSocialTwitter,
} from "react-icons/sl";

const ConnectWithUs = () => {
	return (
		<div className='sticky-icon'>
			<a href='https://www.instagram.com/?hl=en' className='Instagram'>
      Instagram{" "}<SlSocialInstagram className='fab fa-instagram' />
			</a>
			<a href='https://www.facebook.com/' className='Facebook'>
      Facebook{" "}<SlSocialFacebook className='fab fa-facebook-f' />
			</a>
			<a
				href='https://aboutme.google.com/u/0/?referer=gplus'
				className='Google'
			>
				 LinkedIn{" "}<SlSocialLinkedin className='fab fa-google-plus-g' />
			</a>
			<a href='https://twitter.com/login' className='Twitter'>
			Twitter{" "}	<SlSocialTwitter className='fab fa-twitter' /> 
			</a>
		</div>
	);
};

export default ConnectWithUs;

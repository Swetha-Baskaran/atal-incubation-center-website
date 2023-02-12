"use client";
import {useState} from "react";
import "./Chatbot.scss";
import {GrClose} from "react-icons/gr";
import {AiOutlineSend} from "react-icons/ai";

const Chatbot = () => {
	const [chatOpen, setChatOpen] = useState(false);
	const [messageCount, setMessageCount] = useState(0);
	const [isLoading, setIsLoading] = useState(false);
	const [inputValue, setInputValue] = useState("");

	const handleChatOpen = () => setChatOpen(!chatOpen);
	const handleMessageCount = () => setMessageCount(messageCount + 1);
	return (
		<>
			<div id='body'>
				{!chatOpen ? (
					<div
						id='chat-circle'
						className='btn btn-raised'
						onClick={handleChatOpen}
					>
						<div id='chat-overlay'></div>
						<img
							className='chat-circle_robot'
							src='https://cdn.iconscout.com/icon/free/png-256/robot-86-404724.png'
						/>
					</div>
				) : (
					<div className='chat-box'>
						<div className='chat-box-body'>
							{messageCount == 0 ? (
								<div className='chat-box-welcome__header'>
									<div className='chat-box__header-text'>
										<span
											className='chat-box-toggle'
											onClick={handleChatOpen}
										>
											<GrClose />
										</span>
									</div>

									<div id='chat-box-welcome__ava'>
										<img
											className='chat-box-welcome_robot'
											src='https://cdn.iconscout.com/icon/free/png-256/robot-86-404724.png'
										/>
									</div>
									<div className='chat-box-welcome__welcome-text'>
										<p>
											Hi! Chat with aicpecf, what can I assist you
											with?
										</p>
									</div>
								</div>
							) : (
								<div id='chat-box__wraper'>
									<div className='chat-box-header'>
										<span
											className='chat-box-toggle'
											onClick={handleChatOpen}
										>
											<GrClose />
										</span>
									</div>

									<div className='chat-box-overlay'></div>
									<div className='chat-logs'>
										<div id='cm-msg-0' className='chat-msg bot'>
											<span className='msg-avatar'>
												<img
													className='chat-box-overlay_robot'
													src='https://cdn.iconscout.com/icon/free/png-256/robot-86-404724.png'
												/>
											</span>
											<div className='cm-msg-text'>
												Hi! Chat with aicpecf, what can I assist you
												with?
											</div>
										</div>
										<div id='cm-msg-0' className='chat-msg bot'>
											<span className='msg-avatar'>
												<img
													className='chat-box-overlay_robot'
													src='https://cdn.iconscout.com/icon/free/png-256/robot-86-404724.png'
												/>
											</span>
											<div className='cm-msg-text'>
												{isLoading && (
													<div className='spin-container'>
														<div className='spiner'>
															<div aria-hidden='true'></div>
															<div aria-hidden='true'></div>
															<div aria-hidden='true'></div>
														</div>
													</div>
												)}
											</div>
										</div>
									</div>
								</div>
							)}
						</div>
						<div className='chat-input-box'>
							<input
								type='text'
								className='chat-input__text'
								id='chat-input__text'
								placeholder='Send a message...'
								onChange={e => {
									setInputValue(e.target.value);
								}}
							/>
							<button
								onClick={handleMessageCount}
								disabled={!inputValue}
								className='chat-submit'
								id='chat-submit'
							>
								<AiOutlineSend className='icon' />
							</button>
						</div>
					</div>
				)}
			</div>
		</>
	);
};

export default Chatbot;

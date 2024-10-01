const footerContent = {
	titleOne: "LHV",
	titleTwo: "Klienditugi",
	textContent:
		"Kui sul tekib pangateenuse kasutamisel probleeme, saad klienditoe infotelefonilt abi ööpäev ringi. ",
	phoneNumber: "6 800 400",
	emailAddress: "info@lhv.ee",
};

const Footer = () => {
	return (
		<div className='footerContainer'>
			<div className='support'>
				<img
					className='supportIcon'
					src='./supportIcon.png'
				/>
				<div className='supportText'>
					<p className='supportTitle'>
						{footerContent.titleOne}
						<span> {footerContent.titleTwo}</span>
					</p>
					<p className='supportTextContent'>
						{footerContent.textContent}
					</p>
				</div>
			</div>
			<div className='contact'>
				<div className='contactPhone'>
					<img
						className='callIcon'
						src='./callIcon.png'
					/>
					<p className='contactPhoneNumber'>
						{footerContent.phoneNumber}
					</p>
				</div>
				<div className='contactEmail'>
					<img
						className='draftsIcon'
						src='./draftsIcon.png'
					/>
					<p className='contactEmailAddress'>
						{footerContent.emailAddress}
					</p>
				</div>
			</div>
		</div>
	);
};

const bannerContent = {
	title: "Kas sinu diivan on oma aja ära elanud?",
	content:
		"Oled väsinud segadusest, kus asjadel pole oma kohta. Oled unistanud lausa täiesti uuest sisekujundusest, aga kõik tundub korraga liiga kallis? LHV sisustuslaenuga saad oma unistused ellu viia juba täna.",
	linkTitle: "Loe lisa",
};

const Banner = () => {
	return (
		<div className='bannerContainer'>
			<img
				className='bannerImage'
				src='./bannerImage.png'
			/>
			<h5 className='bannerTitle'>{bannerContent.title}</h5>
			<p className='bannerContent'>
				{bannerContent.content}
			</p>
			<p className='bannerLinkContainer'>
				<a
					className='bannerLink'
					href='#calculator'>
					{bannerContent.linkTitle}
					<img
						className='arrowIcon'
						src='./arrowIcon.png'
					/>
				</a>
			</p>
		</div>
	);
};

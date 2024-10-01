const { useState, useEffect } = React;

const bannerContent = {
	title: "Kas sinu diivan on oma aja ära elanud?",
	content:
		"Oled väsinud segadusest, kus asjadel pole oma kohta. Oled unistanud lausa täiesti uuest sisekujundusest, aga kõik tundub korraga liiga kallis? LHV sisustuslaenuga saad oma unistused ellu viia juba täna.",
	linkTitle: "Loe lisa",
};

const BannerContentContainer = () => {
	return (
		<div className='bannerContentContainer'>
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

const BannerTitle = () => {
	return (
		<h5 className='bannerTitle'>{bannerContent.title}</h5>
	);
};

const DesktopBanner = () => {
	return (
		<div className='desktopBanner'>
			<img
				className='bannerImage'
				src='./bannerImage.png'
			/>
			<BannerTitle />
			<BannerContentContainer />
		</div>
	);
};

const MobileBanner = ({ isHovered }) => {
	console.log(isHovered);
	return (
		<div className='mobileBanner'>
			{!isHovered ? (
				<div className='mobileBanner'>
					<img
						className='bannerImage'
						src='./bannerImage.png'
					/>
					<div className='bannerTitleContainerMobile'>
						<BannerTitle />
						<img
							className='cornerIcon'
							src='./cornerIcon.png'
						/>
					</div>
				</div>
			) : (
				<div className='mobileBanner'>
					<BannerContentContainer />
				</div>
			)}
		</div>
	);
};

const Banner = () => {
	const [isHovered, setIsHovered] = useState(false);

	useEffect(() => {
		console.log(isHovered);
	}, [isHovered]);
	useEffect(() => {
		console.log(isHovered);
	}, []);

	return (
		<div
			className='bannerContainer'
			onMouseEnter={() => {
				setIsHovered(true);
			}}
			onMouseLeave={() => {
				setIsHovered(false);
			}}
			onClick={() => {
				setIsHovered(!isHovered);
			}}>
			<DesktopBanner />
			<MobileBanner isHovered={isHovered} />
		</div>
	);
};

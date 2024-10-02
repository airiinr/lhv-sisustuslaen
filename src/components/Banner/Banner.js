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
			<Link
				content={bannerContent.linkTitle}
				variant='arrow'
				href='#calculator'
			/>
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
				src='./img/bannerImage.png'
			/>
			<BannerTitle />
			<BannerContentContainer />
		</div>
	);
};

const MobileBanner = ({ isHovered }) => {
	return (
		<div className='mobileBanner'>
			{!isHovered ? (
				<div>
					<img
						className='bannerImage'
						src='./img/bannerImage.png'
					/>
					<div className='bannerTitleContainerMobile'>
						<BannerTitle />
						<img
							className='cornerIcon'
							src='./img/cornerIcon.png'
						/>
					</div>
				</div>
			) : (
				<div>
					<BannerContentContainer />
				</div>
			)}
		</div>
	);
};

const Banner = () => {
	const [isHovered, setIsHovered] = useState(false);
	const isMobile = useCheckMobileScreen();

	return (
		<div
			className='bannerContainer'
			onMouseEnter={() => {
				setIsHovered(true);
			}}
			onMouseLeave={() => {
				setIsHovered(false);
			}}
			onTouchStart={() => {
				setIsHovered(true);
			}}>
			{isMobile ? (
				<MobileBanner isHovered={isHovered} />
			) : (
				<DesktopBanner />
			)}
		</div>
	);
};

const Link = ({ content, variant, href, onClick }) => {
	const handleClick = () => {
		onClick;
		console.log("test");
	};
	console.log(variant);
	return (
		<div className={`linkContainer`}>
			<a
				className={`linkWithIcon ${variant}`}
				href={href}
				onClick={() => handleClick()}>
				{variant === "arrow" ? (
					<p className='linkContent'>{content}</p>
				) : null}
				{
					<img
						className={`${variant}Icon`}
						src={`./img/${variant}Icon.png`}
					/>
				}
				{variant !== "arrow" ? (
					<p className={`linkContent ${variant}`}>
						{content}
					</p>
				) : null}
			</a>
		</div>
	);
};

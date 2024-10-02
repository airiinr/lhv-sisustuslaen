const Link = ({ content, variant, href, onClick }) => {
	return (
		<div className={`linkContainer ${variant}`}>
			<a
				href={href}
				onClick={onClick ? () => onClick() : null}>
				<div className={`linkWithIcon ${variant}`}>
					<p className='linkContent'>{content}</p>
					<img
						className={`${variant}Icon`}
						src={`./img/${variant}Icon.png`}
					/>
				</div>
			</a>
		</div>
	);
};

const Banner = () => {
	const banner = {
		title: "Kas sinu diivan on oma aja ära elanud?",
		content:
			"Oled väsinud segadusest, kus asjadel pole oma kohta. Oled unistanud lausa täiesti uuest sisekujundusest, aga kõik tundub korraga liiga kallis? LHV sisustuslaenuga saad oma unistused ellu viia juba täna",
	};
	return (
		<div>
			<p>{banner.title}</p>
			<p>{banner.content}</p>
		</div>
	);
};

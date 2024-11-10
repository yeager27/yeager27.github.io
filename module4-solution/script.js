window.onload = function () {
	(function () {
		const names = [
			"Yaakov",
			"John",
			"Jen",
			"Jason",
			"Paul",
			"Frank",
			"Larry",
			"Paula",
			"Laura",
			"Jim",
		];

		for (let i = 0; i < names.length; i++) {
			const firstLetter = names[i].charAt(0).toLowerCase();

			if (firstLetter === "j") {
				window.byeSpeaker.speak(names[i]);
			} else {
				window.helloSpeaker.speak(names[i]);
			}
		}
	})();
};

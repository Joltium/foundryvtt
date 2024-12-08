Hooks.on("ready", function() {
	

	Hooks.on('dnd5e.preRollSkillV2', (config, dialog, message) => {

		if (game.settings.get("blind-skills", config.skill)) {
			Hooks.once('renderApplicationV2', (options, dialog) => {
                dialog.innerHTML = dialog.innerHTML.replace('<option value="publicroll" selected="">','<option value="publicroll">');
                dialog.innerHTML = dialog.innerHTML.replace('<option value="blindroll">', '<option value="blindroll" selected="">');
				return true;
			});
		}

	});

});
Hooks.on('init', ()=>{
    
    console.log("Joltium | Blind Skills | Initializing.");
	
    let defaultBlindSkills = [
        "arc",
        "dec",
        "his",
        "ins",
        "inv",
        "med",
        "nat",
        "prc",
        "per",
        "rel",
        "slt",
        "ste",
        "sur"
    ];

    

    for (const [k,v] of Object.entries(CONFIG.DND5E.skills)){
        game.settings.register('blind-skills', k, {
            name: v.label,
            config: true,       // false if you dont want it to show in module config
            type: new foundry.data.fields.BooleanField(), 
            default: defaultBlindSkills.includes(k),
        });
    }






});
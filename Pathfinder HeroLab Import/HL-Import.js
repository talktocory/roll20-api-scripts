var HLImport = HLImport || (function() {
    'use strict';
    var version = '0.63.00',
	lastUpdate = 1457920161,
	skillsAttr = ["acrobatics-ability", "acrobatics-cs", "acrobatics-ranks", "acrobatics-class", "acrobatics-ability-mod", "acrobatics-racial", "acrobatics-feat", "acrobatics-item", "acrobatics-size", "acrobatics-acp", "acrobatics-misc", "acrobatics-reqtrain", "artistry-ability", "artistry-cs", "artistry-ranks", "artistry-class", "artistry-ability-mod", "artistry-racial", "artistry-feat", "artistry-item", "artistry-size", "artistry-acp", "artistry-misc", "artistry-reqtrain", "artistry2-ability", "artistry2-cs", "artistry2-ranks", "artistry2-class", "artistry2-ability-mod", "artistry2-racial", "artistry2-feat", "artistry2-item", "artistry2-size", "artistry2-acp", "artistry2-misc", "artistry2-reqtrain", "artistry3-ability", "artistry3-cs", "artistry3-ranks", "artistry3-class", "artistry3-ability-mod", "artistry3-racial", "artistry3-feat", "artistry3-item", "artistry3-size", "artistry3-acp", "artistry3-misc", "artistry3-reqtrain", "appraise-ability", "appraise-cs", "appraise-ranks", "appraise-class", "appraise-ability-mod", "appraise-racial", "appraise-feat", "appraise-item", "appraise-size", "appraise-acp", "appraise-misc", "appraise-reqtrain", "bluff-ability", "bluff-cs", "bluff-ranks", "bluff-class", "bluff-ability-mod", "bluff-racial", "bluff-feat", "bluff-item", "bluff-size", "bluff-acp", "bluff-misc", "bluff-reqtrain", "climb-ability", "climb-cs", "climb-ranks", "climb-class", "climb-ability-mod", "climb-racial", "climb-feat", "climb-item", "climb-size", "climb-acp", "climb-misc", "climb-reqtrain", "craft-ability", "craft-cs", "craft-ranks", "craft-class", "craft-ability-mod", "craft-racial", "craft-feat", "craft-item", "craft-size", "craft-acp", "craft-misc", "craft-reqtrain", "craft2-ability", "craft2-cs", "craft2-ranks", "craft2-class", "craft2-ability-mod", "craft2-racial", "craft2-feat", "craft2-item", "craft2-size", "craft2-acp", "craft2-misc", "craft2-reqtrain", "craft3-ability", "craft3-cs", "craft3-ranks", "craft3-class", "craft3-ability-mod", "craft3-racial", "craft3-feat", "craft3-item", "craft3-size", "craft3-acp", "craft3-misc", "craft3-reqtrain", "diplomacy-ability", "diplomacy-cs", "diplomacy-ranks", "diplomacy-class", "diplomacy-ability-mod", "diplomacy-racial", "diplomacy-feat", "diplomacy-item", "diplomacy-size", "diplomacy-acp", "diplomacy-misc", "diplomacy-reqtrain", "disable-device-ability", "disable-device-cs", "disable-device-ranks", "disable-device-class", "disable-device-ability-mod", "disable-device-racial", "disable-device-feat", "disable-device-item", "disable-device-size", "disable-device-acp", "disable-device-misc", "disable-device-reqtrain", "disguise-ability", "disguise-cs", "disguise-ranks", "disguise-class", "disguise-ability-mod", "disguise-racial", "disguise-feat", "disguise-item", "disguise-size", "disguise-acp", "disguise-misc", "disguise-reqtrain", "escape-artist-ability", "escape-artist-cs", "escape-artist-ranks", "escape-artist-class", "escape-artist-ability-mod", "escape-artist-racial", "escape-artist-feat", "escape-artist-item", "escape-artist-size", "escape-artist-acp", "escape-artist-misc", "escape-artist-reqtrain", "fly-ability", "fly-cs", "fly-ranks", "fly-class", "fly-ability-mod", "fly-racial", "fly-feat", "fly-item", "fly-size", "fly-acp", "fly-misc", "fly-reqtrain", "handle-animal-ability", "handle-animal-cs", "handle-animal-ranks", "handle-animal-class", "handle-animal-ability-mod", "handle-animal-racial", "handle-animal-feat", "handle-animal-item", "handle-animal-size", "handle-animal-acp", "handle-animal-misc", "handle-animal-reqtrain", "heal-ability", "heal-cs", "heal-ranks", "heal-class", "heal-ability-mod", "heal-racial", "heal-feat", "heal-item", "heal-size", "heal-acp", "heal-misc", "heal-reqtrain", "intimidate-ability", "intimidate-cs", "intimidate-ranks", "intimidate-class", "intimidate-ability-mod", "intimidate-racial", "intimidate-feat", "intimidate-item", "intimidate-size", "intimidate-acp", "intimidate-misc", "intimidate-reqtrain", "linguistics-ability", "linguistics-cs", "linguistics-ranks", "linguistics-class", "linguistics-ability-mod", "linguistics-racial", "linguistics-feat", "linguistics-item", "linguistics-size", "linguistics-acp", "linguistics-misc", "linguistics-reqtrain", "lore-ability", "lore-cs", "lore-ranks", "lore-class", "lore-ability-mod", "lore-racial", "lore-feat", "lore-item", "lore-size", "lore-acp", "lore-misc", "lore-reqtrain", "lore2-ability", "lore2-cs", "lore2-ranks", "lore2-class", "lore2-ability-mod", "lore2-racial", "lore2-feat", "lore2-item", "lore2-size", "lore2-acp", "lore2-misc", "lore2-reqtrain", "lore3-ability", "lore3-cs", "lore3-ranks", "lore3-class", "lore3-ability-mod", "lore3-racial", "lore3-feat", "lore3-item", "lore3-size", "lore3-acp", "lore3-misc", "lore3-reqtrain", "knowledge-arcana-ability", "knowledge-arcana-cs", "knowledge-arcana-ranks", "knowledge-arcana-class", "knowledge-arcana-ability-mod", "knowledge-arcana-racial", "knowledge-arcana-feat", "knowledge-arcana-item", "knowledge-arcana-size", "knowledge-arcana-acp", "knowledge-arcana-misc", "knowledge-arcana-reqtrain", "knowledge-dungeoneering-ability", "knowledge-dungeoneering-cs", "knowledge-dungeoneering-ranks", "knowledge-dungeoneering-class", "knowledge-dungeoneering-ability-mod", "knowledge-dungeoneering-racial", "knowledge-dungeoneering-feat", "knowledge-dungeoneering-item", "knowledge-dungeoneering-size", "knowledge-dungeoneering-acp", "knowledge-dungeoneering-misc", "knowledge-dungeoneering-reqtrain", "knowledge-engineering-ability", "knowledge-engineering-cs", "knowledge-engineering-ranks", "knowledge-engineering-class", "knowledge-engineering-ability-mod", "knowledge-engineering-racial", "knowledge-engineering-feat", "knowledge-engineering-item", "knowledge-engineering-size", "knowledge-engineering-acp", "knowledge-engineering-misc", "knowledge-engineering-reqtrain", "knowledge-geography-ability", "knowledge-geography-cs", "knowledge-geography-ranks", "knowledge-geography-class", "knowledge-geography-ability-mod", "knowledge-geography-racial", "knowledge-geography-feat", "knowledge-geography-item", "knowledge-geography-size", "knowledge-geography-acp", "knowledge-geography-misc", "knowledge-geography-reqtrain", "knowledge-history-ability", "knowledge-history-cs", "knowledge-history-ranks", "knowledge-history-class", "knowledge-history-ability-mod", "knowledge-history-racial", "knowledge-history-feat", "knowledge-history-item", "knowledge-history-size", "knowledge-history-acp", "knowledge-history-misc", "knowledge-history-reqtrain", "knowledge-local-ability", "knowledge-local-cs", "knowledge-local-ranks", "knowledge-local-class", "knowledge-local-ability-mod", "knowledge-local-racial", "knowledge-local-feat", "knowledge-local-item", "knowledge-local-size", "knowledge-local-acp", "knowledge-local-misc", "knowledge-local-reqtrain", "knowledge-nature-ability", "knowledge-nature-cs", "knowledge-nature-ranks", "knowledge-nature-class", "knowledge-nature-ability-mod", "knowledge-nature-racial", "knowledge-nature-feat", "knowledge-nature-item", "knowledge-nature-size", "knowledge-nature-acp", "knowledge-nature-misc", "knowledge-nature-reqtrain", "knowledge-nobility-ability", "knowledge-nobility-cs", "knowledge-nobility-ranks", "knowledge-nobility-class", "knowledge-nobility-ability-mod", "knowledge-nobility-racial", "knowledge-nobility-feat", "knowledge-nobility-item", "knowledge-nobility-size", "knowledge-nobility-acp", "knowledge-nobility-misc", "knowledge-nobility-reqtrain", "knowledge-planes-ability", "knowledge-planes-cs", "knowledge-planes-ranks", "knowledge-planes-class", "knowledge-planes-ability-mod", "knowledge-planes-racial", "knowledge-planes-feat", "knowledge-planes-item", "knowledge-planes-size", "knowledge-planes-acp", "knowledge-planes-misc", "knowledge-planes-reqtrain", "knowledge-religion-ability", "knowledge-religion-cs", "knowledge-religion-ranks", "knowledge-religion-class", "knowledge-religion-ability-mod", "knowledge-religion-racial", "knowledge-religion-feat", "knowledge-religion-item", "knowledge-religion-size", "knowledge-religion-acp", "knowledge-religion-misc", "knowledge-religion-reqtrain", "perception-ability", "perception-cs", "perception-ranks", "perception-class", "perception-ability-mod", "perception-racial", "perception-feat", "perception-item", "perception-size", "perception-acp", "perception-misc", "perception-reqtrain", "perform-ability", "perform-cs", "perform-ranks", "perform-class", "perform-ability-mod", "perform-racial", "perform-feat", "perform-item", "perform-size", "perform-acp", "perform-misc", "perform-reqtrain", "perform2-ability", "perform2-cs", "perform2-ranks", "perform2-class", "perform2-ability-mod", "perform2-racial", "perform2-feat", "perform2-item", "perform2-size", "perform2-acp", "perform2-misc", "perform2-reqtrain", "perform3-ability", "perform3-cs", "perform3-ranks", "perform3-class", "perform3-ability-mod", "perform3-racial", "perform3-feat", "perform3-item", "perform3-size", "perform3-acp", "perform3-misc", "perform3-reqtrain", "profession-ability", "profession-cs", "profession-ranks", "profession-class", "profession-ability-mod", "profession-racial", "profession-feat", "profession-item", "profession-size", "profession-acp", "profession-misc", "profession-reqtrain", "profession2-ability", "profession2-cs", "profession2-ranks", "profession2-class", "profession2-ability-mod", "profession2-racial", "profession2-feat", "profession2-item", "profession2-size", "profession2-acp", "profession2-misc", "profession2-reqtrain", "profession3-ability", "profession3-cs", "profession3-ranks", "profession3-class", "profession3-ability-mod", "profession3-racial", "profession3-feat", "profession3-item", "profession3-size", "profession3-acp", "profession3-misc", "profession3-reqtrain", "ride-ability", "ride-cs", "ride-ranks", "ride-class", "ride-ability-mod", "ride-racial", "ride-feat", "ride-item", "ride-size", "ride-acp", "ride-misc", "ride-reqtrain", "sense-motive-ability", "sense-motive-cs", "sense-motive-ranks", "sense-motive-class", "sense-motive-ability-mod", "sense-motive-racial", "sense-motive-feat", "sense-motive-item", "sense-motive-size", "sense-motive-acp", "sense-motive-misc", "sense-motive-reqtrain", "sleight-of-hand-ability", "sleight-of-hand-cs", "sleight-of-hand-ranks", "sleight-of-hand-class", "sleight-of-hand-ability-mod", "sleight-of-hand-racial", "sleight-of-hand-feat", "sleight-of-hand-item", "sleight-of-hand-size", "sleight-of-hand-acp", "sleight-of-hand-misc", "sleight-of-hand-reqtrain", "spellcraft-ability", "spellcraft-cs", "spellcraft-ranks", "spellcraft-class", "spellcraft-ability-mod", "spellcraft-racial", "spellcraft-feat", "spellcraft-item", "spellcraft-size", "spellcraft-acp", "spellcraft-misc", "spellcraft-reqtrain", "stealth-ability",  "stealth-cs", "stealth-ranks", "stealth-class", "stealth-ability-mod", "stealth-racial", "stealth-feat", "stealth-item", "stealth-size", "stealth-acp", "stealth-misc", "stealth-reqtrain", "survival-ability", "survival-cs", "survival-ranks", "survival-class", "survival-ability-mod", "survival-racial", "survival-feat", "survival-item", "survival-size", "survival-acp", "survival-misc", "survival-reqtrain", "swim-ability", "swim-cs", "swim-ranks", "swim-class", "swim-ability-mod", "swim-racial", "swim-feat", "swim-item", "swim-size", "swim-acp", "swim-misc", "swim-reqtrain", "use-magic-device-ability", "use-magic-device-cs", "use-magic-device-ranks", "use-magic-device-class", "use-magic-device-ability-mod", "use-magic-device-racial", "use-magic-device-feat", "use-magic-device-item", "use-magic-device-size", "use-magic-device-acp", "use-magic-device-misc", "use-magic-device-reqtrain", "misc-skill-0-ability", "misc-skill-0-cs", "misc-skill-0-ranks", "misc-skill-0-class", "misc-skill-0-ability-mod", "misc-skill-0-racial", "misc-skill-0-feat", "misc-skill-0-item", "misc-skill-0-size", "misc-skill-0-acp", "misc-skill-0-misc", "misc-skill-0-reqtrain", "misc-skill-1-ability", "misc-skill-1-cs", "misc-skill-1-ranks", "misc-skill-1-class", "misc-skill-1-ability-mod", "misc-skill-1-racial", "misc-skill-1-feat", "misc-skill-1-item", "misc-skill-1-size", "misc-skill-1-acp", "misc-skill-1-misc", "misc-skill-1-reqtrain", "misc-skill-2-ability", "misc-skill-2-cs", "misc-skill-2-ranks", "misc-skill-2-class", "misc-skill-2-ability-mod", "misc-skill-2-racial", "misc-skill-2-feat", "misc-skill-2-item", "misc-skill-2-size", "misc-skill-2-acp", "misc-skill-2-misc", "misc-skill-2-reqtrain", "misc-skill-3-ability", "misc-skill-3-cs", "misc-skill-3-ranks", "misc-skill-3-class", "misc-skill-3-ability-mod", "misc-skill-3-racial", "misc-skill-3-feat", "misc-skill-3-item", "misc-skill-3-size", "misc-skill-3-acp", "misc-skill-3-misc", "misc-skill-3-reqtrain", "misc-skill-4-ability", "misc-skill-4-cs", "misc-skill-4-ranks", "misc-skill-4-class", "misc-skill-4-ability-mod", "misc-skill-4-racial", "misc-skill-4-feat", "misc-skill-4-item", "misc-skill-4-size", "misc-skill-4-acp", "misc-skill-4-misc", "misc-skill-4-reqtrain", "misc-skill-5-ability", "misc-skill-5-cs", "misc-skill-5-ranks", "misc-skill-5-class", "misc-skill-5-ability-mod", "misc-skill-5-racial", "misc-skill-5-feat", "misc-skill-5-item", "misc-skill-5-size", "misc-skill-5-acp", "misc-skill-5-misc", "misc-skill-5-reqtrain", "craft-name", "craft2-name", "craft3-name", "lore-name", "perform-name", "perform2-name", "perform3-name", "profession-name", "profession2-name", "profession3-name", "misc-skill-0-name", "misc-skill-1-name", "misc-skill-2-name", "misc-skill-3-name", "misc-skill-4-name", "misc-skill-5-name", "acrobatics-macro", "artistry-macro", "appraise-macro", "bluff-macro", "climb-macro", "craft-macro", "craft2-macro", "craft3-macro", "diplomacy-macro", "disable-Device-macro", "disguise-macro", "escape-Artist-macro", "fly-macro", "handle-Animal-macro", "heal-macro", "intimidate-macro", "linguistics-macro", "lore-macro", "knowledge-arcana-macro", "knowledge-dungeoneering-macro", "knowledge-engineering-macro", "knowledge-geography-macro", "knowledge-history-macro", "knowledge-local-macro", "knowledge-nature-macro", "knowledge-nobility-macro", "knowledge-planes-macro", "knowledge-religion-macro", "perception-macro", "perform-macro", "perform2-macro", "perform3-macro", "profession-macro", "profession2-macro", "profession3-macro", "ride-macro", "sense-Motive-macro", "sleight-of-Hand-macro", "spellcraft-macro", "stealth-macro", "survival-macro", "swim-macro", "use-magic-device-macro", "misc-skill-0-macro", "misc-skill-1-macro", "misc-skill-2-macro", "misc-skill-3-macro", "misc-skill-4-macro", "misc-skill-5-macro"],

	/**************************************************************
	 *            Parsing/Manipulation Utility Functions
	 **************************************************************/
	/**
	 * Formats JSON objects into an array. Returns an empty
	 * array if jsonObjects is undefined.  If jsonObjects is 
	 * already an Array no change is made.
	 * 
	 * @param  {} jsonObjects JSON objects 
	 */
	arrayify = function (jsonObjects) {
		if (_.isUndefined(jsonObjects))
			return new Array();
		if (Array.isArray(jsonObjects))
			return jsonObjects;
		return new Array(jsonObjects);
	},

	/**
	 * Searches the provided string using the regular expression.
	 * Return the index of the first match or -1 if no match found.
	 * 
	 * see: http://www.w3schools.com/jsref/jsref_search.asp for more
	 * info on JavaScript.search()
	 * 
	 * @param  {} str String to search.
	 * @param  {} regex Regular expression to use.
	 * @param  {} startpos Offset position to use when searching in the string.
	 */
	regexIndexOf = function(str, regex, startpos) {
		var indexOf = str.substring(startpos || 0).search(regex);
		return (indexOf >= 0) ? (indexOf + (startpos || 0)) : indexOf;
	},

	/**
	 * Generates a universally unique identifier.
	 */
	generateUUID = (function() {
		var a = 0, b = [];
		return function() {
			var c = (new Date()).getTime() + 0, d = c === a;
			a = c;
			for (var e = new Array(8), f = 7; 0 <= f; f--) {
				e[f] = "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(c % 64);
				c = Math.floor(c / 64);
			}
			c = e.join("");
			if (d) {
				for (f = 11; 0 <= f && 63 === b[f]; f--) {
					b[f] = 0;
				}
				b[f]++;
			} else {
				for (f = 0; 12 > f; f++) {
					b[f] = Math.floor(64 * Math.random());
				}
			}
			for (f = 0; 12 > f; f++){
				c += "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz".charAt(b[f]);
			}
			return c;
		};
	}()),

	/**
	 * Generate a unique row ID replacing underlines with "Z"
	 */
	generateRowID = function () {
		"use strict";
		return generateUUID().replace(/_/g, "Z");
	},

	/**
	 * Takes an array of objects and concatenates their "Name"
	 * properties into a comma separated list.
	 * 
	 * @param  {} objArray  Array of objects with _name properties.
	 */
	buildNameList = function (objArray)
	{
		var list = "";
		var i = 1;
		if (objArray.length > 0)
			list = objArray[0]._name;
		else
			return "";
		while (i < objArray.length)
		{
			list += ", " + objArray[i]._name;
			i++;
		}
		return list;
	},

	/**
	 * Takes an array of Roll20 objects and concatenates their "ShortName"
	 * properties into a comma separated list
	 * 
	 * @param  {} objArray  Array of roll20 objects
	 */
	buildShortNameList = function (objArray)
	{
		var list = "";
		var i = 1;
		if (objArray.length > 0)
			list = objArray[0]._shortname;
		else
			return "";
		while (i < objArray.length)
		{
			list += ", " + objArray[i]._shortname;
			i++;
		}
		return list;
	},

	/**
	 * Takes an array of objects and makes notes out of the
	 * "Name" and "Description" properties of each object.
	 * 
	 * @param  {} objArray  Array of objects with _name and _description properties.
	 */
	buildNameAndDescriptionNotes = function (objArray)
	{
		var notes = "";
		var i = 1;
		if (objArray.length > 0)
			notes = objArray[0]._name + ": " + objArray[0].description;
		else
			return "";
		while (i < objArray.length)
		{
			notes += "\n" + objArray[i]._name + ": " + objArray[i].description;
			i++;
		}
		return notes;
	},

	/**
	 * Returns JavaScript.parseInt value if 
	 * provided num parameter is defined.  Returns
	 * "" if num is undefined.
	 * 
	 * Note: +/- are ignored when parsing.
	 * 
	 * @param  {} num Number to parse.
	 */
	parseNum = function (num)
	{
		if (_.isUndefined(num) || num === "")
			return 0;
		return parseInt(num);
	},

	/**
	 * Convert textual size description to numeric value
	 * for the character sheet.
	 * 
	 * @param  {} size Textual description of character size.
	 */
	getSizeMod = function (size)
	{
		switch(size.toLowerCase())
		{
			case "colossal":
				return -8;
			case "gargantuan":
				return -4;
			case "huge":
				return -2;
			case "large":
				return -1;
			case "small":
				return 1;
			case "tiny":
				return 2;
			case "diminutive":
				return 4;
			case "fine":
				return 8;
			default:
				return 0;
		}
	},

	/**************************************************************
	 *            Character Modification Functions
	 **************************************************************/
	/**
	 * Sets an attribute on the character.
	 * 
	 * @param  {} character Roll20 Character Object
	 * @param  {} attribute Attribute Name
	 * @param  {} value Attribute Value
	 */
	setAttr = function (character,attribute,value)
	{
		var attrObjs = findObjs({ _type: "attribute", _characterid: character.get("_id"), name: attribute });

		if (attrObjs.length > 0)
			attrObjs[0].set("current",value);
		else
			createObj("attribute", { name: attribute, _characterid: character.get("_id"), current: value });
	},

	/**
	 * Gets an attribute on the character.
	 * 
	 * @param  {} character Roll20 Character Object
	 * @param  {} attribute Attribute Name
	 */
	getAttr = function (character,attribute)
	{
		var attrObjs = findObjs({ _type: "attribute", _characterid: character.get("_id"), name: attribute });

		if (attrObjs.length > 0){
			return attrObjs[0].get("current");
		} else {
			return "";
		}
	},

	/**
	 * Adds a macro and button to the character.
	 * 
	 * @param  {} character Roll20 Character Object
	 * @param  {} name Name of macro.
	 * @param  {} desc Description of Macro.
	 * @param  {} action Macro text.
	 * @param  {} isTokenAct True if should appear in macro toolbar.
	 */
	addAbility = function(character, name, desc, action, isTokenAct) {
		createObj("ability", {
			name: name,
			description: desc,
			action: action,
			istokenaction: isTokenAct,
			characterid: character.get("_id")
			});
	},

	/**************************************************************
	 *              Character Import Functions
	 **************************************************************/
	/**
	 * Imports Saves into Roll20 character.
	 * 
	 * @param  {} character Roll20 Character.
	 * @param  {} saves Array of save objects. 
	 */
	importSaves = function (character,saves)
	{
		// Since the XML doesn't break this down by class, add it all to class 0
		var i = 0;
		var saveNotes = saves.allsaves.situationalmodifiers._text;
		for (i = 0; i < saves.save.length; i++)
		{
			var save = saves.save[i];
			var abbr = save._abbr;
			
			setAttr(character,"class-0-"+abbr,parseNum(save._base));
			setAttr(character,abbr+"-resist",parseNum(save._fromresist));
			setAttr(character,abbr+"-misc",(parseNum(save._save)-parseNum(save._base)-parseNum(save._fromresist)-parseNum(save._fromattr)));
			
			if (save.situationalmodifiers._text !== "" && saveNotes.indexOf(save.situationalmodifiers._text) === -1)
				saveNotes = saveNotes + "\n**"+abbr+":** " + save.situationalmodifiers._text;
				
		}
		setAttr(character,"Save-notes",saveNotes.trim());
	},

	/**
	 * Imports Attributes into Roll20 character.
	 * 
	 * @param  {} character Roll20 Character.
	 * @param  {} attributes Array of attribute objects. 
	 */
	importAttributes = function (character,attributes)
	{
		attributes.forEach(function(abScore) {
			var abName = abScore._name.substr(0,3).toUpperCase();
			var base = parseNum(abScore.attrvalue._base);
			var modifier = parseNum(abScore.attrvalue._modified) - base;  // Modifier is the total difference between what HL is reporting as the character's base ability score and the final modified ability score
			setAttr(character, abName+"-base", base);
			// If the modifier is positive, assume it's an enhancement bonus; otherwise, assume it's a penalty
			if (modifier > 0)
				setAttr(character, abName+"-enhance", modifier);
			else
				setAttr(character, abName+"-penalty", modifier);
		});
	},

	/**
	 * Imports Classes into Roll20 character.
	 * 
	 * @param  {} character Roll20 Character.
	 * @param  {} classes Array of class objects. 
	 */
	importClasses = function (character, classes)
	{
		var classList = new Object();
		
		var i = 0;
		var classObj;
		while (i < classes.length)
		{
			classObj = classes[i];

			// We can only handle 5 classes
			if (i >= 5)
				return;
			classList[classObj._name.replace(/\(([^\)]+)\)/g,"").replace("(","").replace(")","").trim()] = classObj;
			setAttr(character,"class-"+i+"-name",classObj._name);
			setAttr(character,"class-"+i+"-level",classObj._level);
			
			i++;
		}

		return classList;
	},

	/**
	 * Imports initiative settings into Roll20 character.
	 * 
	 * @param  {} character Roll20 Character.
	 * @param  {} classes Init object. 
	 */
	importInit = function(character,initObj)
	{
		setAttr(character,"init-misc",parseNum(initObj._total)-parseNum(initObj._attrtext));
		setAttr(character,"init-ability","@{"+initObj._attrname.substr(0,3).toUpperCase()+"-mod}");
		setAttr(character,"init_notes",initObj.situationalmodifiers._text);
	},

	// Calculate number of bonus slots from spell level and ability modifier
	bonusSpellSlots = function(abilMod,spellLevel) { return Math.floor((abilMod + 4 - spellLevel) / 4); },

	// Find an existing repeatable item with the same name, or generate new row ID
	getOrMakeRowID = function(character,repeatPrefix,name)
	{
		// Get list of all of the character's attributes
		var attrObjs = findObjs({ _type: "attribute", _characterid: character.get("_id") });
		
		var i = 0;
		while (i < attrObjs.length)
		{
			// If this is a feat taken multiple times, strip the number of times it was taken from the name
			var attrName = attrObjs[i].get("current").toString();
			if (regexIndexOf(attrName, / x[0-9]+$/) !== -1)
				attrName = attrName.replace(/ x[0-9]+/,"");

			if (attrObjs[i].get("name").indexOf(repeatPrefix) !== -1 && attrObjs[i].get("name").indexOf("_name") !== -1 && attrName === name)
				return attrObjs[i].get("name").substring(repeatPrefix.length,(attrObjs[i].get("name").indexOf("_name")));
			i++;
		}
		return generateRowID();
	},
	
	// Find an existing repeatable item with the same name and spellclass, or generate new row ID
	getOrMakeSpellRowID = function(character,repeatPrefix,name,spellclass)
	{
		// Get list of all of the character's attributes
		var attrObjs = findObjs({ _type: "attribute", _characterid: character.get("_id") });
		var ID;
		
		var i = 0;
		while (i < attrObjs.length)
		{
			// If this is a feat taken multiple times, strip the number of times it was taken from the name
			var attrName = attrObjs[i].get("current").toString();
			if (regexIndexOf(attrName, / x[0-9]+$/) !== -1)
				attrName = attrName.replace(/ x[0-9]+/,"");

			if (attrObjs[i].get("name").indexOf(repeatPrefix) !== -1 && attrObjs[i].get("name").indexOf("_name") !== -1 && attrName === name)
			{
				ID = attrObjs[i].get("name").substring(repeatPrefix.length,(attrObjs[i].get("name").indexOf("_name")));
				if (getAttrByName(character.get("_id"),repeatPrefix+ID+"_spellclass") === spellclass)
					return ID;
			}
			i++;
		}
		return generateRowID();
	},

	importFeats = function(character,feats)
	{
		feats.forEach(function(feat)
		{
			// Count the number of times the feat is listed, so we can indicate that in the feat name
			var i = 0;
			var taken = 0;
			while (i < feats.length)
			{
				if (feats[i]._name === feat._name)
					taken++;
				i++;
			}
			var row = getOrMakeRowID(character,"repeating_feat_",feat._name);
			if (taken > 1)
				setAttr(character,"repeating_feat_"+row+"_name",feat._name + " x" + taken);
			else
				setAttr(character,"repeating_feat_"+row+"_name",feat._name);
			setAttr(character,"repeating_feat_"+row+"_description",feat.description);
		});
	},

	importTraits = function(character,traits)
	{
		traits.forEach(function(trait)
		{
			var row = getOrMakeRowID(character,"repeating_trait_",trait._name);
			setAttr(character,"repeating_trait_"+row+"_name",trait._name);
			setAttr(character,"repeating_trait_"+row+"_description",trait.description);
		});
	},

	importClassAbilities = function(character,otherspecials)
	{
		otherspecials.forEach(function(special)
		{
			var row = getOrMakeRowID(character,"repeating_class-ability_",special._name);
			setAttr(character,"repeating_class-ability_"+row+"_name",special._name);
			setAttr(character,"repeating_class-ability_"+row+"_description",special.description);
		});
	},

	importMelee = function(character,melee)
	{
		melee.forEach(function(weapon)
		{
			var row = getOrMakeRowID(character,"repeating_weapon_",weapon._name);
			log("Weapon: " + weapon._name);

			setAttr(character,"repeating_weapon_"+row+"_name",weapon._name);
			setAttr(character,"repeating_weapon_"+row+"_attack-type","@{attk-melee}");
			setAttr(character,"repeating_weapon_"+row+"_type",weapon._typetext);
			setAttr(character,"repeating_weapon_"+row+"_attack",weapon._attack);

			setAttr(character,"repeating_weapon_"+row+"_damage-dice-num",calculateRollDieNum(weapon._damage));
			setAttr(character,"repeating_weapon_"+row+"_damage-die",calculateRollDieType(weapon._damage));
			setAttr(character,"repeating_weapon_"+row+"_damage",calculateRollMod(weapon._damage));

			setAttr(character,"repeating_weapon_"+row+"_crit-target",calculateCriticalHit(weapon._crit));
			setAttr(character,"repeating_weapon_"+row+"_crit-multiplier",calculateCriticalMult(weapon._crit));

			// Child entities
			setAttr(character,"repeating_weapon_"+row+"_notes",weapon.description);
		});
	},

	importRanged = function(character,ranged)
	{
		ranged.forEach(function(weapon)
		{
			var row = getOrMakeRowID(character,"repeating_weapon_",weapon._name);
			log("Weapon: " + weapon._name);

			setAttr(character,"repeating_weapon_"+row+"_name",weapon._name);
			setAttr(character,"repeating_weapon_"+row+"_attack-type","@{attk-ranged}");
			setAttr(character,"repeating_weapon_"+row+"_type",weapon._typetext);
			setAttr(character,"repeating_weapon_"+row+"_attack",weapon._attack);

			setAttr(character,"repeating_weapon_"+row+"_damage-dice-num",calculateRollDieNum(weapon._damage));
			setAttr(character,"repeating_weapon_"+row+"_damage-die",calculateRollDieType(weapon._damage));
			setAttr(character,"repeating_weapon_"+row+"_damage",calculateRollMod(weapon._damage));

			setAttr(character,"repeating_weapon_"+row+"_crit-target",calculateCriticalHit(weapon._crit));
			setAttr(character,"repeating_weapon_"+row+"_crit-multiplier",calculateCriticalMult(weapon._crit));

			// Child entities
			setAttr(character,"repeating_weapon_"+row+"_notes",weapon.description);			
			setAttr(character,"repeating_weapon_"+row+"_range",weapon.rangedattack._rangeinctext.trim().replace("'",""));
		});
	},

	importRacialTraits = function(character,traits)
	{
		traits.forEach(function(trait)
		{
			var row = getOrMakeRowID(character,"repeating_racial-trait_",trait._name);
			setAttr(character,"repeating_racial-trait_"+row+"_name",trait._name);
			setAttr(character,"repeating_racial-trait_"+row+"_description",trait.description);
		});
	},

	importSkillAbilities = function(character,skillabilities)
	{
		var notes = "";
		skillabilities.forEach(function(special)
		{
			notes = notes + special._name + ": " + special.description;
		});
		setAttr(character,"Skill-notes",notes);
	},
	
	importArmor = function(character,armor)
	{

		// Only import the first equipped armor
		// or shield that has an ac bonus > 0
		var armorSlotFilled = false;
		var shieldSlotFilled = false;

		armor.forEach(function(item)
		{
			// Use the item's slot to determine what type
			// of item it is.  Unequipped items will be 
			// ignored here but will show up in the gear
			// list.  Also, equipped items with +0 AC 
			// will be ignored.
			var itemSlot = "";
			if (!_.isUndefined(item.itemslot))
			{
				itemSlot = item.itemslot.trim().toLowerCase();
			} 

			if ((itemSlot === "armor") && !armorSlotFilled && (item._ac.trim().substring(1) !== "0")){ 
				log("Armor ac bonus: " + item._ac);
				setAttr(character, "armor3", item._name);
				setAttr(character, "armor3-acbonus", item._ac.trim().substring(1));
			}

			if ((itemSlot === "shield") && !shieldSlotFilled && (item._ac.trim().substring(1) !== "0")){ 
				log("Shield ac bonus: " + item._ac);
				setAttr(character, "shield3", item._name);
				setAttr(character, "shield3-acbonus", item._ac.trim().substring(1));
			}

		});
	},

	importGear = function(character,gear)
	{
		gear.forEach(function(item)
		{
			var row = getOrMakeRowID(character,"repeating_item_",item._name);
			setAttr(character,"repeating_item_"+row+"_name",item._name);
			setAttr(character,"repeating_item_"+row+"_qty",item._quantity);
			setAttr(character,"repeating_item_"+row+"_weight",item.weight._value);
			setAttr(character,"repeating_item_"+row+"_description",item.description);
		});
	},

	clearSkills = function(character)
	{
		// Get list of all of the character's attributes
		var attrObjs = findObjs({ _type: "attribute", _characterid: character.get("_id") });
		
		attrObjs.forEach(function(attr) {
			if (_.contains(skillsAttr,attr.get("name").toLowerCase()))
				attr.remove();
		});
	},
	
	safeAttrValue = function(attr)
	{
		if (attr == "undefined")
			return "";
		else
			return attr;
	},
	
	importSkills = function(character,skills,size,ACP)
	{
		// Ripped from the PF character sheet JS
		var skillSize;
		switch (Math.abs(size)){
			case 0: skillSize=0;break;
			case 1: skillSize=2;break;
			case 2: skillSize=4;break;
			case 4: skillSize=6;break;
			case 8: skillSize=8;break;
			case 16: skillSize=10;break;
			default: skillSize=0;
		}
		if(size<0) {skillSize=skillSize*-1;}

		// Clear out all existing skills data
		clearSkills(character);
		
		// Keep track of which of these skills we're on
		var craft = 1;
		var perform = 1;
		var profession = 1;
		var artistry = 1;
		var lore = 1;
		var misc = 0;
		
		var i = 0;
		var skill;
		var skillMisc;
		var skillAttrPrefix;
		for (i = 0; i < skills.length; i++)
		{
			skill = skills[i];
			
			// Figure out where we're putting this skill on the character sheet
			if (skill._name.indexOf("Craft") !== -1)
			{
				if (craft === 1)
				{
					skillAttrPrefix = "craft";
					setAttr(character,"craft-name",skill._name.match(/\(([^\)]+)\)/)[0].replace("(","").replace(")",""));
					craft++;
				}
				else if (craft <= 3)
				{
					skillAttrPrefix = "craft" + craft;
					setAttr(character,"craft"+craft+"-name",skill._name.match(/\(([^\)]+)\)/)[0].replace("(","").replace(")",""));
					craft++;
				}
				else
				{
					if (misc <= 5)
					{
						skillAttrPrefix = "misc-skill-" + misc;
						setAttr(character,skillAttrPrefix+"-name",skill._name);
						misc++;
					}
					else
						log("Ran out of misc skills for " + skill._name + "!");
				}
			}
			else if (skill._name.indexOf("Perform") !== -1)
			{
				if (perform === 1)
				{
					skillAttrPrefix = "perform";
					setAttr(character,"perform-name",skill._name.match(/\(([^\)]+)\)/)[0].replace("(","").replace(")",""));
					perform++;
				}
				else if (perform <= 3)
				{
					skillAttrPrefix = "perform" + perform;
					setAttr(character,"perform"+perform+"-name",skill._name.match(/\(([^\)]+)\)/)[0].replace("(","").replace(")",""));
					perform++;
				}
				else
				{
					if (misc <= 5)
					{
						skillAttrPrefix = "misc-skill-" + misc;
						setAttr(character,skillAttrPrefix+"-name",skill._name);
						misc++;
					}
					else
						log("Ran out of misc skills for " + skill._name + "!");
				}
			}
			else if (skill._name.indexOf("Profession") !== -1)
			{
				if (profession === 1)
				{
					skillAttrPrefix = "profession";
					setAttr(character,"profession-name",skill._name.match(/\(([^\)]+)\)/)[0].replace("(","").replace(")",""));
					profession++;
				}
				else if (profession <= 3)
				{
					skillAttrPrefix = "profession" + profession;
					setAttr(character,"profession"+profession+"-name",skill._name.match(/\(([^\)]+)\)/)[0].replace("(","").replace(")",""));
					profession++;
				}
				else
				{
					if (misc <= 5)
					{
						skillAttrPrefix = "misc-skill-" + misc;
						setAttr(character,skillAttrPrefix+"-name",skill._name);
						misc++;
					}
					else
						log("Ran out of misc skills for " + skill._name + "!");
				}
			}
			else if (skill._name.indexOf("Knowledge") !== -1)
			{
				switch(skill._name.match(/\(([^\)]+)\)/g)[0])
				{
					case "(arcana)":
					case "(dungeoneering)":
					case "(engineering)":
					case "(geography)":
					case "(history)":
					case "(local)":
					case "(nature)":
					case "(nobility)":
					case "(planes)":
					case "(religion)":
						skillAttrPrefix = skill._name.toLowerCase().replace(/\s/g,"-").replace("(","").replace(")","");
						break;
					default:
						skillAttrPrefix = "misc-skill-" + misc;
						setAttr(character,skillAttrPrefix+"-name",skill._name);
						misc++;
				}
			}
			else if (skill._name.indexOf("Artistry") !== -1)
			{
				if (artistry === 1)
				{
					skillAttrPrefix = "artistry";
					setAttr(character,"artistry-name",skill._name.match(/\(([^\)]+)\)/)[0].replace("(","").replace(")",""));
					artistry++;
				}
				else if (artistry <= 3)
				{
					skillAttrPrefix = "artistry" + artistry;
					setAttr(character,"artistry"+artistry+"-name",skill._name.match(/\(([^\)]+)\)/)[0].replace("(","").replace(")",""));
					artistry++;
				}
				else
				{
					if (misc <= 5)
					{
						skillAttrPrefix = "misc-skill-" + misc;
						setAttr(character,skillAttrPrefix+"-name",skill._name);
						misc++;
					}
					else
						log("Ran out of misc skills for " + skill._name + "!");
				}
			}
			else if (skill._name.indexOf("Lore") !== -1)
			{
				if (lore === 1)
				{
					skillAttrPrefix = "lore";
					setAttr(character,"lore-name",skill._name.match(/\(([^\)]+)\)/)[0].replace("(","").replace(")",""));
					lore++;
				}
				else if (lore <= 3)
				{
					skillAttrPrefix = "lore" + lore;
					setAttr(character,"lore"+lore+"-name",skill._name.match(/\(([^\)]+)\)/)[0].replace("(","").replace(")",""));
					lore++;
				}
				else
				{
					if (misc <= 5)
					{
						skillAttrPrefix = "misc-skill-" + misc;
						setAttr(character,skillAttrPrefix+"-name",skill._name);
						misc++;
					}
					else
						log("Ran out of misc skills for " + skill._name + "!");
				}
			}
			else
				skillAttrPrefix = skill._name.toLowerCase().replace(/\s/g,"-").replace("(","").replace(")","").replace("-hand","-Hand").replace("e-device","e-Device").replace("-artist","-Artist").replace("-animal","-Animal");
			
			setAttr(character,skillAttrPrefix+"-ranks",parseNum(skill._ranks));
			setAttr(character,skillAttrPrefix+"-ability","@{"+skill._attrname+"-mod}");
			
			if (skill._classskill === "yes") setAttr(character,skillAttrPrefix+"-cs",3);
			
			skillMisc = parseNum(skill._value) - parseNum(skill._ranks)- parseNum(skill._attrbonus);
			if (parseNum(skill._ranks) != 0 && skill._classskill === "yes")
				skillMisc -= 3;
			if (skill._armorcheck === "yes")
				skillMisc -= ACP;
			if (skill._name === "Fly")
				skillMisc -= skillSize;
			if (skill._name === "Stealth")
				skillMisc -= (2 * skillSize);
			setAttr(character,skillAttrPrefix+"-misc",skillMisc);
			
			if (skill._trainedonly === "yes") setAttr(character,skillAttrPrefix+"-ReqTrain",1);
		
			// Add situation modifiers to the macro
			if (!_.isUndefined(skill.situationalmodifiers.situationalmodifier))
			{
				var macro = "@{PC-whisper} &{template:pf_generic} {{header_image=@{header_image-pf_generic}}} {{character_name=@{character_name}}} {{character_id=@{character_id}}} {{subtitle}} {{name="+skill._name+"}} {{Check=[[ 1d20 + [[ @{"+skillAttrPrefix+"} ]] ]]}}";
				skill.situationalmodifiers.situationalmodifier = arrayify(skill.situationalmodifiers.situationalmodifier);
				var j = 0;
				while (j < skill.situationalmodifiers.situationalmodifier.length)
				{
					macro = macro + " {{" + skill.situationalmodifiers.situationalmodifier[j]._source + "=" + skill.situationalmodifiers.situationalmodifier[j]._text+"}}"
					j++;
				}
				setAttr(character,skillAttrPrefix+"-macro",macro);
			}
		}
	},
	
	// Import ACP and Max Dex; these aren't included under items, but the final values are listed in penalties
	importPenalties = function (character,penalties)
	{
		var ACP = 0;
		var i = 0;
		while (i < penalties.length)
		{
			if (penalties[i]._name === "Armor Check Penalty")
			{
				ACP = parseNum(penalties[i]._value);
				setAttr(character,"armor3-acp",ACP);
			}
			else if (penalties[i]._name === "Max Dex Bonus")
				setAttr(character,"armor3-max-dex",Math.min(99, parseNum(penalties[i]._value)));	// Hero Lab uses 1000 for Max Dex when player doesn't have one; cap it at 99 to match sheet default
			i++;
		}
		return ACP;
	},
	
	// Import spellclasses; presence in spellclasses node means it's a spellcaster, but some of the data is in the classes node
	importSpellClasses = function (character,spellclasses,classes,abScores)
	{
		var spellClassesList = new Object();

		var i, j, abMod = 0, currentAbMod, spellslots, spelllevel, casterlevel, concmod, spellpenmod;
		var spellClassIndex = 0;
		for (i = 0; i < spellclasses.length; i++)
		{
			var spellClass = spellclasses[i];

			// Only 3 spellclasses on character sheet, so if they somehow have more...
			if (spellClassIndex >= 3)
				return spellClassesList;

			var spellClassName = spellClass._name.replace(/\(([^\)]+)\)/g,"").replace("(","").replace(")","").trim();
			var classIndex = _.indexOf(Object.keys(classes),spellClassName);
			if (classIndex !== -1)
			{
				casterlevel = parseNum(classes[spellClassName]._casterlevel);
				setAttr(character,"spellclass-"+spellClassIndex,classIndex);
				setAttr(character,"spellclass-"+spellClassIndex + "-name",spellClassName);
				setAttr(character,"spellclass-"+spellClassIndex + "-level",casterlevel);

				setAttr(character,"spellclass-"+spellClassIndex+"-level-misc", casterlevel - parseNum(classes[spellClassName]._level));
				
				if (!_.isUndefined(classes[spellClassName].arcanespellfailure))
					setAttr(character,"armor3-spell-fail",parseNum(classes[spellClassName].arcanespellfailure._value));
					
				// Make a guess at which ability modifier is used for this class... unless it's already been set
				currentAbMod = getAttrByName(character.get("_id"),"Concentration-"+spellClassIndex+"-ability");
				if (!_.isUndefined(classes[spellClassName]._basespelldc))
					abMod = parseNum(classes[spellClassName]._basespelldc) - 10;
				if ((currentAbMod === "" || currentAbMod === "0") && !_.isUndefined(classes[spellClassName]._basespelldc))
				{
					// Start at the fourth ability score (Intelligence), so we skill the physical abilities
					log(abScores.length);
					for (j = 3; j < abScores.length; j++)
					{
						log (abMod+" vs "+parseNum(abScores[j].attrbonus._modified));
						if (parseNum(abScores[j].attrbonus._modified) === abMod)
						{
							log("Guess found, setting to " + abScores[j]._name);
							setAttr(character,"Concentration-"+spellClassIndex+"-ability","(@{"+abScores[j]._name.substr(0,3).toUpperCase()+"-mod})");
							break;
						}
					}
				}
				if (abMod !== 0)
				{
					// Calculate misc mods to concentration
					if (!_.isUndefined(classes[spellClassName]._concentrationcheck))
					{
						concmod = parseNum(classes[spellClassName]._concentrationcheck) - casterlevel - abMod;
						setAttr(character,"Concentration-"+spellClassIndex+"-misc",concmod);
					}

					// Calculate misc mods to spell penetration
					if (!_.isUndefined(classes[spellClassName].overcomespellresistance))
					{
						spellpenmod = parseNum(classes[spellClassName].overcomespellresistance) - casterlevel;
						setAttr(character,"spellclass-"+spellClassIndex+"-SP_misc",spellpenmod);
					}

					// Populate spells / day; Hero Lab includes bonus slots, so remove those
					if (!_.isUndefined(spellclasses[i].spelllevel))
					{
						spellclasses[i].spelllevel = arrayify(spellclasses[i].spelllevel);
						for (j = 0; j < spellclasses[i].spelllevel.length; j++)
						{
							spellslots = parseNum(spellclasses[i].spelllevel[j]._maxcasts);
							spelllevel = parseNum(spellclasses[i].spelllevel[j]._level);
							if (spelllevel > 0)
								spellslots = spellslots - bonusSpellSlots(abMod,spelllevel);
							setAttr(character,"spellclass-"+spellClassIndex+"-level-"+spelllevel+"-class",spellslots);
						}
					}
				}
				spellClassesList[spellClassName] = classes[spellClassName];
				spellClassIndex++;
			}
		}
		
		return spellClassesList;
	},
	
	importSpells = function(character,spells,spellclasses)
	{
		var i, rowID, repeatPrefix, spellClass, spellName, school, level;
		var spellClassesKeys = Object.keys(spellclasses);
		for (i = 0; i < spells.length; i++)
		{
			// Search for a repeating spell with the same level, name, and spellclass; if not found, make new row
			level = parseNum(spells[i]._level);
			repeatPrefix = "repeating_lvl-"+level+"-spells_";
			var spellClassIndex = _.indexOf(spellClassesKeys,spells[i]._class);
			if (spellClassIndex < 0){
				spellClassIndex = 0;  
			}
			spellName = spells[i]._name.replace(/\(x\d+\)/,"").trim();
			rowID = getOrMakeSpellRowID(character,repeatPrefix,spellName,spellClass);
			// Update prefix with ID
			repeatPrefix = repeatPrefix + rowID;
			
			setAttr(character,repeatPrefix+"_name",spellName);
			setAttr(character,repeatPrefix+"_spellclass_number",spellClassIndex);
			setAttr(character,repeatPrefix+"_components",spells[i]._componenttext.replace("Divine Focus", "DF").replace("Focus","F").replace("Material","M").replace("Verbal","V").replace("Somatic","S").replace(" or ","/"));
			setAttr(character,repeatPrefix+"_range",spells[i]._range);
			setAttr(character,repeatPrefix+"_duration",spells[i]._duration);
			setAttr(character,repeatPrefix+"_save",spells[i]._save.replace(/DC \d+/,"").trim());
			setAttr(character,repeatPrefix+"_cast-time",spells[i]._casttime);
			setAttr(character,repeatPrefix+"_sr",spells[i]._resist.replace("harmless","Harmless"));
			// Added check to make sure _class exists (same check done in importSpellClasses)
			if (!_.isUndefined(spellclasses[spells[i]._class])){
				setAttr(character,repeatPrefix+"_DC_misc",parseNum(spells[i]._dc) - parseNum(spellclasses[spells[i]._class]._basespelldc) - level);
			}


			if (spells[i]._area !== "")
				setAttr(character,repeatPrefix+"_targets",spells[i]._area);
			else if (spells[i]._effect !== "")
				setAttr(character,repeatPrefix+"_targets",spells[i]._effect);
			else
				setAttr(character,repeatPrefix+"_targets",spells[i]._target);
			
			school = spells[i]._schooltext;
			if (spells[i]._subschooltext !== "")
				school = school + " (" + spells[i]._subschooltext + ")";
			if (spells[i]._descriptortext !== "")
				school = school + " [" + spells[i]._descriptortext + "]";
			setAttr(character,repeatPrefix+"_school",school);
			
			setAttr(character,repeatPrefix+"_description",spells[i].description);
		}
	},

	calculateCriticalHit = function(critFormula){
		var val = "";
		var parts = critFormula.trim().toLowerCase().split("-");
		if (parts.length === 1){
			parts = critFormula.trim().toLowerCase().split("/");
		}
		if (parts.length === 1){
			parts = critFormula.trim().toLowerCase().split("x");
		}
		if (parts.length > 1){
			val = parts[0];
		}
		return val;
	},

	calculateCriticalMult = function(critFormula){
		var val = "1";
		var parts = critFormula.trim().toLowerCase().split("x");
		if (parts.length > 1){
			val = parts[1];
		}
		return val;
	},

	calculateRollDieNum = function(rollFormula){
		var val = "";
		var parts = rollFormula.trim().toLowerCase().split("d");
		if (parts.length > 1){
			val = parts[0];
		}
		return val;
	},
	
	calculateRollDieType = function(rollFormula){
		var val = "";
		var parts = rollFormula.trim().toLowerCase().split("d");
		if (parts.length > 1){
			var modIndex = parts[1].indexOf("+");
			if (modIndex < 0){
				modIndex = parts[1].indexOf("-");
			} 
			if (modIndex > 0){
				val = parts[1].substring(0, modIndex);
			} else {
				val = parts[1];
			}
		}
		return val;
	},

	calculateRollMod = function(rollFormula){
		var val = "";
		var parts = rollFormula.trim().toLowerCase().split("d");
		if (parts.length > 1){
			var modIndex = parts[1].indexOf("+");
			if (modIndex < 0){
				modIndex = parts[1].indexOf("-");
			} 
			if (modIndex > 0){
				val = parts[1].substring(modIndex);
			}
		}
		return val;
	},

	calcHitDice = function (hitdice)
	{
		var dice = hitdice.match(/\d+d\d/g);
		var numDice = 0;
		var i = 0;
		while (i < dice.length)
		{
			numDice += parseInt(dice[i].split("d")[0]);
			i++;
		}
		return numDice;
	},

	importCharacter = function (characterObj,token)
	{

		// Character Attributes
		var R20character = findObjs({ _type: "character", name: characterObj._name });
		if (R20character.length === 0){
			R20character = createObj("character", { name: characterObj._name });
		} else {
			R20character = R20character[0];
		}	
		if (characterObj._role === "npc")
		{
			setAttr(R20character,"is_npc", "1");			
		} else {
			setAttr(R20character,"is_npc", "0");
		}
		setAttr(R20character,"player-name",characterObj._playername);

		// Import Book info - (TODO If Required)

		// Import Race Attributes
		setAttr(R20character,"race",characterObj.race._racetext.substr(0,1).toUpperCase()+characterObj.race._racetext.substr(1,1000));

		// Import Alignment Attributes
		setAttr(R20character,"alignment",characterObj.alignment._name);

		// Import Templates - (TODO If Required)

		// Import size
		var size = getSizeMod(characterObj.size._name);
		setAttr(R20character,"size",size);

		// Import Deity
		setAttr(R20character,"deity",characterObj.deity._name);

		// Import Challenge Rating
		if (characterObj._role === "npc")
		{
			setAttr(R20character,"npc-cr",characterObj.challengerating._text.replace("CR ",""));
		}

		// Import XP Awared
		if (characterObj._role === "npc")
		{
			setAttr(R20character,"npc-xp",characterObj.xpaward._value);
		}

		// Import Classes
		var classes;
		if (!_.isUndefined(characterObj.classes.class))
		{
			// Class will be an array if multiclassed, but a single object if single-classed; make it an array, just to be safe
			characterObj.classes.class = arrayify(characterObj.classes.class);
			classes = importClasses(R20character,characterObj.classes.class);
		}
		
		// Import Factions - (TODO If Required)

		// Import Types
		var types = "";
		if (characterObj._role === "npc") {
			types = buildNameList(arrayify(characterObj.types.type));
			if (!_.isUndefined(characterObj.subtypes.subtype)){
				types = types + " (" + buildNameList(arrayify(characterObj.subtypes.subtype)) + ")"; 
			}			 
			setAttr(R20character,"npc-type", types);
		}

		// Import Hero Points - (TODO If Required)

		// Import senses
		if (!_.isUndefined(characterObj.senses.special))
		{
			characterObj.senses.special = arrayify(characterObj.senses.special);
			setAttr(R20character,"vision", buildShortNameList(characterObj.senses.special));
		}
		
		// Import Auras - (TODO If Required)

		// Import Favoured Classes
		if (!_.isUndefined(characterObj.favoredclasses.favoredclass))
		{
			characterObj.favoredclasses.favoredclass = arrayify(characterObj.favoredclasses.favoredclass);
			setAttr(R20character,"class-favored", buildNameList(characterObj.favoredclasses.favoredclass));
		}

		// Import Health
		// Set max hp; remove hp from Con mod first, since the sheet will add that in
		// Since the XML doesn't break this down by class, add it all to class 0
		var level = calcHitDice(characterObj.health._hitdice);
		setAttr(R20character,"class-0-hp",(parseNum(characterObj.health._hitpoints) - (level * parseNum(characterObj.attributes.attribute[2].attrbonus._modified))));
		var racialHD = level - parseNum(characterObj.classes._level);
		if (racialHD > 0)
			setAttr(R20character,"class-5-level",racialHD);

		// Import XP
		setAttr(R20character,"experience",parseFloat(characterObj.xp._total));

		// Import Money
		setAttr(R20character,"CP",characterObj.money._cp);
		setAttr(R20character,"SP",characterObj.money._sp);
		setAttr(R20character,"GP",characterObj.money._gp);
		setAttr(R20character,"PP",characterObj.money._pp);

		// Import Personal
		setAttr(R20character,"gender",characterObj.personal._gender);
		setAttr(R20character,"age",characterObj.personal._age);
		setAttr(R20character,"height",characterObj.personal.charheight._text);
		setAttr(R20character,"weight",characterObj.personal.charweight._text);
		setAttr(R20character,"hair",characterObj.personal._hair);
		setAttr(R20character,"eyes",characterObj.personal._eyes);
		setAttr(R20character,"skin",characterObj.personal._skin);

		// Import languages
		if (!_.isUndefined(characterObj.languages.language))
		{
			characterObj.languages.language = arrayify(characterObj.languages.language);
			setAttr(R20character,"languages", buildNameList(characterObj.languages.language));
		}

		// Import Attributes
		importAttributes(R20character,characterObj.attributes.attribute);

		// Import Saves
		importSaves(R20character,characterObj.saves);

		// Import Special Defenses 
		if (!_.isUndefined(characterObj.defensive.special))
		{
			characterObj.defensive.special = arrayify(characterObj.defensive.special);
			setAttr(R20character,"cmd-notes", buildNameAndDescriptionNotes(characterObj.defensive.special));
		}

		// Import Damage Reduction
		if (!_.isUndefined(characterObj.damagereduction.special))
		{
			characterObj.damagereduction.special = arrayify(characterObj.damagereduction.special);
			setAttr(R20character,"DR", buildShortNameList(characterObj.damagereduction.special));
		}

		// Import immunities
		if (!_.isUndefined(characterObj.immunities.special))
		{
			characterObj.immunities.special = arrayify(characterObj.immunities.special);
			setAttr(R20character,"immunities", buildShortNameList(characterObj.immunities.special));
		}

		// Import resistances
		if (!_.isUndefined(characterObj.resistances.special))
		{
			characterObj.resistances.special = arrayify(characterObj.resistances.special);
			setAttr(R20character,"resistances", buildShortNameList(characterObj.resistances.special));
		}

		// Import Weaknesses
		if (!_.isUndefined(characterObj.weaknesses.special))
		{
			characterObj.weaknesses.special = arrayify(characterObj.weaknesses.special);
			setAttr(R20character,"weaknesses", buildShortNameList(characterObj.weaknesses.special));
		}

		// Import Armor Class (Not required.  Calculated by character sheet.)
		
		
		// Import Armor
		if (!_.isUndefined(characterObj.defenses.armor))
		{
			characterObj.defenses.armor = arrayify(characterObj.defenses.armor);
			importArmor(R20character,characterObj.defenses.armor);
		}

		// Import penalties
		characterObj.penalties.penalty = arrayify(characterObj.penalties.penalty);
		var ACP = importPenalties(R20character,characterObj.penalties.penalty);

		// Import Combat Maneuvers (Not required.  Calculated by character sheet.)

		// Import Initiative
		importInit(R20character,characterObj.initiative);

		// Import movement
		setAttr(R20character,"speed-base",characterObj.movement.basespeed._text);

		// Import Encumberance (Not required.  Calculated by character sheet.)

		// Import skills
		characterObj.skills.skill = arrayify(characterObj.skills.skill);
		importSkills(R20character,characterObj.skills.skill,size,ACP);

		// Import Skill abilities
		if (!_.isUndefined(characterObj.skillabilities.special))
		{
			characterObj.skillabilities.special = arrayify(characterObj.skillabilities.special);
			importSkillAbilities(R20character,characterObj.skillabilities.special);
		}

		// Import feats
		if (!_.isUndefined(characterObj.feats.feat))
		{
			characterObj.feats.feat = arrayify(characterObj.feats.feat);
			importFeats(R20character,characterObj.feats.feat);
		}

		// Import traits
		if (!_.isUndefined(characterObj.traits.trait))
		{
			characterObj.traits.trait = arrayify(characterObj.traits.trait);
			importTraits(R20character,characterObj.traits.trait);
		}

		// Import Flaws - (TODO If Required)

		// Import Skill Tricks - (TODO If Required)

		// Import Animal Tricks - (TODO If Required)

		// Import attacks
		setAttr(R20character,"class-0-bab",parseNum(characterObj.attack._baseattack));
		if (!_.isUndefined(characterObj.attack.special))
		{
			characterObj.attack.special = arrayify(characterObj.attack.special);
			importRacialTraits(R20character,characterObj.attack.special);
		}

		// Import Melee Weapons
		if (!_.isUndefined(characterObj.melee.weapon))
		{
			characterObj.melee.weapon = arrayify(characterObj.melee.weapon);
			importMelee(R20character,characterObj.melee.weapon);
		}

		// Import Ranged Weapons
		if (!_.isUndefined(characterObj.ranged.weapon))
		{
			characterObj.ranged.weapon = arrayify(characterObj.ranged.weapon);
			importRanged(R20character,characterObj.ranged.weapon);
		}

		// Import Magic Items - (TODO If Required)

		// Import gear
		if (!_.isUndefined(characterObj.gear.item))
		{
			characterObj.gear.item = arrayify(characterObj.gear.item);
			importGear(R20character,characterObj.gear.item);
		}

		// Import Spelllike abilities - (TODO If Required)

		// Import Tracked Resources - (TODO If Required)

		// Import Other Specials

		if (!_.isUndefined(characterObj.otherspecials.special))
		{
			characterObj.otherspecials.special = arrayify(characterObj.otherspecials.special);
			importClassAbilities(R20character, characterObj.otherspecials.special);
		}

		// Import Spells
		var spellClasses;
		if (!_.isUndefined(characterObj.classes.class))
		{
			if (!_.isUndefined(characterObj.spellclasses.spellclass))
			{
				characterObj.spellclasses.spellclass = arrayify(characterObj.spellclasses.spellclass);
				spellClasses = importSpellClasses(R20character,characterObj.spellclasses.spellclass,classes,characterObj.attributes.attribute);
				if (!_.isUndefined(characterObj.spellsknown.spell))
				{
					characterObj.spellsknown.spell = arrayify(characterObj.spellsknown.spell);
					importSpells(R20character,characterObj.spellsknown.spell,spellClasses);
				}
				if (!_.isUndefined(characterObj.spellsmemorized.spell))
				{
					characterObj.spellsmemorized.spell = arrayify(characterObj.spellsmemorized.spell);
					importSpells(R20character,characterObj.spellsmemorized.spell,spellClasses);
				}
				if (!_.isUndefined(characterObj.spellbook.spell))
				{
					characterObj.spellbook.spell = arrayify(characterObj.spellbook.spell);
					importSpells(R20character,characterObj.spellbook.spell,spellClasses);
				}
			}	
		}
		
		// Import Journals - (TODO If Required)

		// Import Images - (TODO If Required)

		// Import Validation - (TODO If Required)

		// Import Minions
		if (!_.isUndefined(characterObj.minions.character))
		{
			characterObj.minions.character = arrayify(characterObj.minions.character);
			characterObj.minions.character.forEach(function(charObj) { importCharacter(charObj,null); });
		}

		// Add Macro Buttons
		addAbility(R20character, "Initiative", "Roll for Initiative", "%{selected|Roll-for-initiative}", true);
		addAbility(R20character, "Perception", "Perception Check", "%{selected|Perception-Check}", true);
		addAbility(R20character, "Saves", "Save Checks", "&{template:pf_generic} {{character_name=@{selected|character_name}}} {{name=Saves}} {{?{Saves| Fort, Fort= [[ 1d20+ [[ @{selected|fort} ]] ]] | Ref, Ref= [[ 1d20+ [[ @{selected|ref} ]] ]] | Will, Will= [[ 1d20+ [[ @{selected|will} ]] ]]}}} ", true);
		addAbility(R20character, "Skills", "Skill Check", "&{template:pf_generic} {{character_name=@{selected|character_name}}} {{name=Skill Check}} {{?{Choose a Skill(* training not required)| *Acrobatics (+@{selected|Acrobatics}), [Acrobatics](http://www.d20pfsrd.com/skills/acrobatics) =[[ 1d20+ [[ @{selected|Acrobatics} ]] ]] | *Appraise (+@{selected|Appraise}),[Appraise](http://www.d20pfsrd.com/skills/appraise)=[[ 1d20+ [[ @{selected|Appraise} ]] ]] | *Artistry (+@{selected|Artistry}), [Artistry](http://www.d20pfsrd.com/skills/background-skills#TOC-Artistry-Int-) @{selected|Artistry-name}=[[ 1d20+ [[ @{selected|Artistry} ]] ]] | *Bluff (+@{selected|Bluff}), [Bluff](http://www.d20pfsrd.com/skills/bluff)=[[ 1d20+ [[ @{selected|Bluff} ]] ]] | *Climb (+@{selected|Climb}), [Climb](http://www.d20pfsrd.com/skills/climb)=[[ 1d20+ [[ @{selected|Climb} ]] ]] | *Craft  @{selected|Craft-name} (+@{selected|Craft}), [Craft](http://www.d20pfsrd.com/skills/craft) @{selected|Craft-name}=[[ 1d20+ [[ @{selected|Craft} ]] ]] | *Diplomacy (+@{selected|Diplomacy}), [Diplomacy](http://www.d20pfsrd.com/skills/diplomacy)=[[ 1d20+ [[ @{selected|Diplomacy} ]] ]] | Disable Device (+@{selected|Disable-Device}), [Disable Device](http://www.d20pfsrd.com/skills/disable-device)=[[ 1d20+ [[ @{selected|Disable-Device} ]] ]] | *Disguise (+@{selected|Disguise}), [Disguise](http://www.d20pfsrd.com/skills/disguise)=[[ 1d20+ [[ @{selected|Disguise} ]] ]] | *Escape Artist (+@{selected|Escape-Artist}), [Escape Artist](http://www.d20pfsrd.com/skills/escape-artist)=[[ 1d20+ [[ @{selected|Escape-Artist} ]] ]] | *Fly (+@{selected|Fly}), [Fly](http://www.d20pfsrd.com/skills/fly)=[[ 1d20+ [[ @{selected|Fly} ]] ]] |  Handle Animal (+@{selected|Handle-Animal}), [Handle Animal](http://www.d20pfsrd.com/skills/handle-animal)=[[ 1d20+ [[ @{selected|Handle-Animal} ]] ]] | *Heal (+@{selected|Heal}), [Heal](http://www.d20pfsrd.com/skills/acrobatics)=[[ 1d20+ [[ @{selected|Heal} ]] ]] | *Intimidate (+@{selected|Intimidate}), [Intimidate](http://www.d20pfsrd.com/skills/intimidate)=[[ 1d20+ [[ @{selected|Intimidate} ]] ]] |  Knowledge Arcana (+@{selected|Knowledge-Arcana}), [Knowledge Arcana](http://www.d20pfsrd.com/skills/knowledge)=[[ 1d20+ [[ @{selected|Knowledge-Arcana} ]] ]] |  Knowledge Dungeoneering (+@{selected|Knowledge-Dungeoneering}), [Knowledge Dungeoneering](http://www.d20pfsrd.com/skills/knowledge)=[[ 1d20+ [[ @{selected|Knowledge-Dungeoneering} ]] ]] |  Knowledge Engineering (+@{selected|Knowledge-Engineering}), [Knowledge Engineering](http://www.d20pfsrd.com/skills/knowledge)=[[ 1d20+ [[ @{selected|Knowledge-Engineering} ]] ]] |  Knowledge Geography (+@{selected|Knowledge-Geography}), [Knowledge Geography](http://www.d20pfsrd.com/skills/knowledge)=[[ 1d20+ [[ @{selected|Knowledge-Geography} ]] ]] |  Knowledge History (+@{selected|Knowledge-History}), [Knowledge History](http://www.d20pfsrd.com/skills/knowledge)=[[ 1d20+ [[ @{selected|Knowledge-History} ]] ]] | Knowledge Local (+@{selected|Knowledge-Local}), [Knowledge Local](http://www.d20pfsrd.com/skills/knowledge)=[[ 1d20+ [[ @{selected|Knowledge-Local} ]] ]] |  Knowledge Nature (+@{selected|Knowledge-Nature}), [Knowledge Nature](http://www.d20pfsrd.com/skills/knowledge)=[[ 1d20+ [[ @{selected|Knowledge-Nature} ]] ]] |  Knowledge Nobility (+@{selected|Knowledge-Nobility}), [Knowledge Nobility](http://www.d20pfsrd.com/skills/knowledge)=[[ 1d20+ [[ @{selected|Knowledge-Nobility} ]] ]] |  Knowledge Planes (+@{selected|Knowledge-Planes}), [Knowledge Planes](http://www.d20pfsrd.com/skills/knowledge)=[[ 1d20+ [[ @{selected|Knowledge-Planes} ]] ]] |  Knowledge Religion (+@{selected|Knowledge-Religion}), [Knowledge Religion](http://www.d20pfsrd.com/skills/knowledge)=[[ 1d20+ [[ @{selected|Knowledge-Religion} ]] ]] |  Linguistics (+@{selected|Linguistics}),[Linguistics](http://www.d20pfsrd.com/skills/linguistics)=[[ 1d20+ [[ @{selected|Linguistics} ]] ]] |  Lore @{selected|Lore-name} (+@{selected|Lore}), [Lore](http://www.d20pfsrd.com/skills/acrobatics)(@{selected|Lore-name})=[[ 1d20+ [[ @{selected|Lore} ]] ]] | *Perception (+@{selected|Perception}),[Perception](http://www.d20pfsrd.com/skills/perception)=[[ 1d20+ [[ @{selected|Perception} ]] ]] | *Perform @{selected|Perform-name} (+@{selected|Perform}), [Perform](http://www.d20pfsrd.com/skills/perform) (@{selected|Perform-name})=[[ 1d20+ [[ @{selected|Perform} ]] ]] |  Profession @{selected|Profession-name} (+@{selected|Profession}), [Profession](http://www.d20pfsrd.com/skills/profession) (@{selected|Profession-name})=[[ 1d20+ [[ @{selected|Profession} ]] ]] | *Ride (+@{selected|Ride}),[Ride](http://www.d20pfsrd.com/skills/ride)=[[ 1d20+ [[ @{selected|Ride} ]] ]] | *Sense Motive (+@{selected|Sense-Motive}),[Sense Motive](http://www.d20pfsrd.com/skills/sense-motive)=[[ 1d20+ [[ @{selected|Sense-Motive} ]] ]] |  Sleight of Hand (+@{selected|Sleight-of-Hand}), [Sleight of Hand](http://www.d20pfsrd.com/skills/sleight-of-hand)=[[ 1d20+ [[ @{selected|Sleight-of-Hand} ]] ]] |  Spellcraft (+@{selected|Spellcraft}), [Spellcraft](http://www.d20pfsrd.com/skills/spellcraft)=[[ 1d20+ [[ @{selected|Spellcraft} ]] ]] | *Stealth (+@{selected|Stealth}),[Stealth](http://www.d20pfsrd.com/skills/stealth)=[[ 1d20+ [[ @{selected|Stealth} ]] ]] | *Survival (+@{selected|Survival}), [Survival](http://www.d20pfsrd.com/skills/survival)=[[ 1d20+ [[ @{selected|Survival} ]] ]] | *Swim (+@{selected|Swim}),[Swim](http://www.d20pfsrd.com/skills/swim)=[[ 1d20+ [[ @{selected|Swim} ]] ]] |  Use Magic Device (+@{selected|Use-Magic-Device}), [Use Magic Device](http://www.d20pfsrd.com/skills/use-magic-device)=[[ 1d20+ [[ @{selected|Use-Magic-Device} ]] ]] }}}", true);
		if (!_.isUndefined(characterObj.spellclasses.spellclass)){
			if (characterObj._role === "npc") {
				addAbility(R20character, "Spells", "Spells", "@{spellclass-0-book-npc}", true);			
			} else {
				addAbility(R20character, "Spells", "Spells", "@{spellclass-0-book}", true);
			}
		}
		if (characterObj._role === "npc") {
			addAbility(R20character, "Attacks", "Attacks","@{attacks-macro-npc}", true);
		} else {
			addAbility(R20character, "Attacks", "Attacks","@{attacks-macro}", true);
		}

		// Complete token setup
		if (token !== null){
			token.set("represents",R20character.get("_id"));
		}
						
		sendChat("HL-Import", "**"+characterObj._name + "** import complete!");
	},

    checkInstall = function() {    
        log('-=> HL-Import v'+version+' <=-  ['+(new Date(lastUpdate*1000))+']');
	},

	HandleInput = function(msg) {
		"use strict";

		var msg,
			selected,
			tok,
			characters;

		if (msg.type === "api" && msg.content.indexOf("!hl-import") !== -1 )
		{
			selected = msg.selected;
			_.each(selected, function(obj) {
				tok = getObj("graphic", obj._id);
				var JSONstring = unescape(tok.get("gmnotes")).replace(/<br>/g,"\n");
				characters = new Array(JSON.parse(JSONstring).document.public.character);
				characters.forEach(function(charObj,index) {
					if (index === 0)
						importCharacter(charObj,tok);
					else
						importCharacter(charObj,null);
				});
			});
		}
	},

	RegisterEventHandlers = function() {
		on('chat:message', HandleInput);
	};

	return {
        CheckInstall: checkInstall,
		RegisterEventHandlers: RegisterEventHandlers
	};
}());

on("ready",function(){
	'use strict';

	HLImport.CheckInstall();
	HLImport.RegisterEventHandlers();
});
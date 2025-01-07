// priority: 0

// Visit the wiki for more info - https://kubejs.com/
// ServerEvents.recipes((event) => {
// 	event.remove({ mod: "tacz" });
// });

/**
 * let Item.of(id).properties = [
			handler$zmc000$glitchcore$onUse,
			getItem,
			inventoryTick,
			addAttributeModifier,
			sweepHitBox,
			enchantable,
			invalidateCaps,
			framed,
			getXpRepairRatio,
			removeTag,
			setEntityRepresentation,
			foodProperties,
			piglinCurrency,
			handler$zmc000$glitchcore$onFinishUsingItemBegin,
			grow,
			getBarWidth,
			shrink,
			enchantStack,
			tags,
			toJson,
			asIngredient,
			onUseTick,
			copyWithCount,
			getCraftingRemainingItem,
			hurt,
			isNotReplaceableByPickAction,
			getAllEnchantments,
			orCreateTagElement,
			getMod,
			onStopUsing,
			displayName,
			eatingSound,
			setPopTime,
			onBlockStartBreak,
			weakNBT,
			capability,
			overrideStackedOnOther,
			getEntityLifespan,
			toNBT,
			getDamageValue,
			attributeModifiers,
			canGrindstoneRepair,
			withNBT,
			mineBlock,
			onArmorTick,
			connector_useOn,
			enchantmentLevel,
			toItemString,
			onDestroyed,
			isCorrectToolForDrops,
			getTooltipLines,
			enchant,
			makesPiglinsNeutral,
			ignoreNBT,
			toString,
			quark$getCapturedAttributes,
			getUseDuration,
			getCapability,
			canary$subscribe,
			canary$subscribeWithIndex,
			empty,
			getTooltipImage,
			shareTag,
			shouldCauseBlockBreakReset,
			itemEnabled,
			onCraftedBy,
			destroySpeed,
			finishUsingItem,
			weaponAttributes,
			hurtEnemy,
			isStackable,
			isEnchantable,
			entityLifespan,
			useOnRelease,
			orCreateTag,
			isBookEnchantable,
			setInvalidAttributes,
			isEnchanted,
			areCapsCompatible,
			count,
			hasInvalidAttributes,
			getEntityRepresentation,
			setHoverName,
			hoverName,
			itemHolder,
			getBurnTime,
			getEnchantmentValue,
			NBTEqual,
			frame,
			getEnchantmentLevel,
			getUseAnimation,
			notifyAll,
			getId,
			getPopTime,
			popTime,
			canary$unsubscribe,
			barColor,
			setWeaponAttributes,
			isFramed,
			resetHoverName,
			getTagElement,
			getHarvestSpeed,
			equalsIgnoringCount,
			hashCode,
			getHighlightTip,
			canWalkOnPowderedSnow,
			"class",
			canary$unsubscribeWithIndex,
			stackable,
			hasFoil,
			isEmpty,
			tagElement,
			deserializeNBT,
			tooltipLines,
			enchantments,
			releaseUsing,
			getItemHolder,
			getEnchantmentTags,
			getTypeData,
			isDamageableItem,
			hasCustomHoverName,
			getMaxStackSize,
			isEdible,
			isBlock,
			mod,
			overrideOtherStackedOnMe,
			maxDamage,
			getDestroySpeed,
			enchantmentValue,
			equipmentSlot,
			getTags,
			hasEnchantment,
			enchantmentTags,
			serializeNBT,
			isItemEnabled,
			burnTime,
			hasAdventureModeBreakTagForBlock,
			block,
			id,
			getCount,
			setCount,
			onEntityItemUpdate,
			item,
			quark$capturePotionAttributes,
			handler$did000$deeperdarker$getTooltipLines,
			canDisableShield,
			recipeRemainder,
			is,
			isPiglinCurrency,
			getSweepHitBox,
			getNbtString,
			reviveCaps,
			xpRepairRatio,
			getBarColor,
			isNBTEqual,
			withCount,
			getShareTag,
			tooltipImage,
			getDisplayName,
			highlightTip,
			onDroppedByPlayer,
			withLore,
			onEntitySwing,
			handler$zmc000$glitchcore$onFinishUsingItem,
			areShareTagsEqual,
			setDamageValue,
			specialEquals,
			getAttributeModifiers,
			nbt,
			hasNBT,
			wait,
			canEquip,
			save,
			hideTooltipPart,
			notify,
			invalidAttributes,
			localvar$bgh000$canary$updateInventory,
			harvestSpeed,
			bookEnchantable,
			onInventoryTick,
			nbtString,
			copy,
			getMaxDamage,
			getDrinkingSound,
			isDamaged,
			useOn,
			onItemUseFirst,
			hurtAndBreak,
			damageableItem,
			isBarVisible,
			getEnchantments,
			repairable,
			getRecipeRemainder,
			enchanted,
			equals,
			damaged,
			notReplaceableByPickAction,
			self,
			edible,
			entityRepresentation,
			isEnderMask,
			setNbt,
			canApplyAtEnchantingTable,
			barWidth,
			getClass,
			getNbt,
			maxStackSize,
			canElytraFly,
			barVisible,
			use,
			getRarity,
			canPerformAction,
			interactLivingEntity,
			setRepairCost,
			split,
			addTagElement,
			useDuration,
			readShareTag,
			withName,
			withChance,
			enderMask,
			getIdLocation,
			getBaseRepairCost,
			hasTag,
			typeData,
			hasCraftingRemainingItem,
			isRepairable,
			elytraFlightTick,
			craftingRemainingItem,
			copyAndClear,
			useAnimation,
			rarity,
			damageValue,
			areItemsEqual,
			getDescriptionId,
			baseRepairCost,
			getFrame,
			removeTagKey,
			onHorseArmorTick,
			descriptionId,
			getWeaponAttributes,
			getEatingSound,
			getOrCreateTagElement,
			strongNBT,
			correctToolForDrops,
			getFoodProperties,
			doesSneakBypassUse,
			hasAdventureModePlaceTagForBlock,
			allEnchantments,
			getHoverName,
			getEquipmentSlot,
			idLocation,
			getOrCreateTag,
			drinkingSound,
			repairCost,
		];

let r = [
	getClass,
	ingredientAction,
	mod,
	noShrink,
	type,
	getSerializationTypeFunction,
	readOutputItem,
	writeInputFluid,
	path,
	replaceOutput,
	getAllValueMap,
	getOriginalRecipe,
	hasChanged,
	noMirror,
	merge,
	orCreateId,
	getPath,
	id,
	group,
	newRecipe,
	allValueMap,
	getOriginalRecipeResult,
	getOriginalRecipeIngredients,
	initValues,
	inputFluidHasPriority,
	serialize,
	setGroup,
	outputItemHasPriority,
	originalJson,
	getType,
	replaceInput,
	originalRecipe,
	getGroup,
	writeOutputFluid,
	hasOutput,
	keepIngredient,
	customIngredientAction,
	modifyResult,
	fromToString,
	serializationTypeFunction,
	changed,
	schema,
	wait,
	getMod,
	afterLoaded,
	notifyAll,
	save,
	outputValues,
	getId,
	writeInputItem,
	damageIngredient,
	remove,
	notify,
	createRecipe,
	getFromToString,
	hashCode,
	get,
	json,
	getOrCreateId,
	"class",
	value,
	deserialize,
	inputValues,
	set,
	originalRecipeIngredients,
	convertJavaToJs,
	writeOutputItem,
	getSchema,
	inputItemHasPriority,
	consumeIngredient,
	getValue,
	readOutputFluid,
	stage,
	removed,
	readInputItem,
	originalRecipeResult,
	setValue,
	outputFluidHasPriority,
	equals,
	readInputFluid,
	toString,
	hasInput,
	replaceIngredient,
];
 */




ServerEvents.recipes((event) => {
	let craftingFilter = (tag) => {
		return { type: "minecraft:crafting_shaped", output: `#${tag}` };
	};

	function changeRecipeYield(tag, amount) {
		event.forEachRecipe(craftingFilter(tag), (r) => {
			let json = JSON.parse(r.json);
			json.result.count = amount;
			event.custom(json).id(r.getId());
		});
	}

	// console.info(`event properties:\n ${Object.keys(event)}\n\n`);
	// console.info(`recipe properties:\n ${Object.keys(event.recipes)}\n\n`);
	// event.forEachRecipe({}, (r) => {
	// 	console.info("Recipe properties:");
	// 	console.info(Object.keys(r));
	// 	console.info('   ');
	// });

	//Introduce slabs to full block conversion
	console.info(`updating slab recipes`);
	event.forEachRecipe(craftingFilter("minecraft:slabs"), (r) => {
		let ingredients = r.originalRecipeIngredients; //The blocks used to create the slabs as List<Ingredient>
		let output = r.originalRecipeResult; //The slabs returned from the recipe

		event.shapeless(ingredients[0], Item.of(output.id, 2)); //Create the new recipe
	});

	//Introduce stairs to full block conversion
	console.info(`updating stair recipes`);
	event.forEachRecipe(craftingFilter("minecraft:stairs"), (r) => {
		let ingredients = r.originalRecipeIngredients; //The blocks used to create the stairs as List<Ingredient>
		let output = r.originalRecipeResult; //The stairs returned from the recipe

		event.shapeless(
			Item.of(ingredients[0].itemIds[0], 3),
			Item.of(output.id, 4)
		); //Create the new recipe
	});

	//Unpack wool into string
	console.info(`Creating unpacking recipes`);
	event.shapeless("4x minecraft:string", ["minecraft:wool"]);

	//Unpack the various ice blocks
	event.shapeless("9x minecraft:ice", ["minecraft:packed_ice"]);
	event.shapeless("9x minecraft:packed_ice", ["minecraft:blue_ice"]);

	//Unpack nether wart block into nether wart
	event.shapeless("4x minecraft:nether_wart", ["minecraft:nether_wart_block"]);

	// //Update all stair recipes to have double the yield on crafting recipes.
	// event.forEachRecipe(craftingFilter("minecraft:stairs"), (r) => {
	// 	let ingredients = r.originalRecipeIngredients; //The blocks used to create the stairs as List<Ingredient>
	// 	let output = r.originalRecipeResult; //The stairs returned from the recipe

	// 	event.shaped(Item.of(output.id, 8), ingredients[0]).id(r.getOrCreateId()); //Update any pre-existing recipes.
	// });

	// //Update all trapdoor recipes to have double the yield on crafting recipes.
	// event.forEachRecipe(craftingFilter("minecraft:trapdoors"), (r) => {
	// 	let ingredients = r.originalRecipeIngredients; //The blocks used to create the stairs as List<Ingredient>
	// 	let output = r.originalRecipeResult; //The stairs returned from the recipe

	// 	event.shaped(Item.of(output.id, 12), ingredients[0]).id(r.getOrCreateId()); //Update any pre-existing recipes.
	// });
	console.info(`Updating recipe yields`);
	changeRecipeYield("minecraft:stairs", 8);
	changeRecipeYield("minecraft:trapdoors", 12);
});

console.info(`Additional crafting tweaks loaded!`);

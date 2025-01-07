const blockMassData = {
	// Ars Nouveau Blocks
	"ars_nouveau:arcane_stone": 2200, // Dense magical stone
	"ars_nouveau:mana_condenser": 2500, // Machinery block
	"ars_nouveau:glyph_press": 3000, // Heavy crafting block
	"ars_nouveau:enchanting_apparatus": 3200,
	"ars_nouveau:mythical_brazier": 1800,

	// Create Mod Blocks
	"create:cogwheel": 1500, // Wooden gear
	"create:large_cogwheel": 2000, // Larger wooden gear
	"create:mechanical_press": 4500, // Metal machinery
	"create:crushing_wheel": 3000, // Large stone wheel
	"create:brass_block": 8500, // Brass block
	"create:encased_fan": 3700,
	"create:andesite_alloy_block": 2700, // Lightweight stone-metal composite
	"create:depot": 4000, // Sturdy transport block
	"create:mechanical_arm": 4500, // Precision assembly component
	"create:fluid_tank": 3200, // Heavy fluid storage
	"create:steam_engine": 5000, // Machinery component for steam power
	"create:railway_casing": 3000, // Railways casing material
	"create:andesite_encased_cogwheel": 2500, // Andesite-encased cogwheel
	"create:andesite_casing": 2700, // Andesite casing
	"create:andesite_funnel": 2700, // Andesite funnel
	"create:water_wheel_structure": 3000, // Water wheel structure
	"create:andesite_tunnel": 2700, // Andesite tunnel
	"create:andesite_belt_tunnel": 2700, // Andesite belt tunnel
	"create:andesite_chassis": 2700, // Andesite chassis
	"create:mechanical_piston": 4500, // Mechanical piston
	"create:piston_extension_pole": 1500, // Piston extension pole
	"create:millstone": 3000, // Millstone block
	"create:scoria": 2700, // Scoria block
	"create:crimsite": 2700, // Crimsite block
	"create:veridium": 2700, // Veridium block

	// Farmer's Delight Blocks
	"farmersdelight:rice_bale": 1500, // Rice bale block
	"farmersdelight:straw_bale": 1500, // Straw bale block
	"farmersdelight:rice_bag": 500, // Rice bag block
	"farmersdelight:cabbage_crate": 1500, // Cabbage crate block
	"farmersdelight:tomato_crate": 1500, // Tomato crate block
	"farmersdelight:lettuce_crate": 1500, // Lettuce crate block
	"farmersdelight:carrot_crate": 1500, // Carrot crate block
	"farmersdelight:potato_crate": 1500, // Potato crate block
	"farmersdelight:beetroot_crate": 1500, // Beetroot crate block
	"farmersdelight:onion_crate": 1500, // Onion crate block
	"farmersdelight:golden_apple_crate": 1500, // Golden Apple crate block
	"farmersdelight:apple_crate": 1500, // Apple crate block
	"farmersdelight:golden_carrot_crate": 1500, // Golden Carrot crate block
	"farmersdelight:cabbages": 250, // Cabbage block

	// Reactive Blocks
	"reactive:glowing_air": 0, // Glowing air block

	// Create Enchantment Industry Blocks
	"create_enchantment_industry:disenchanter": 2800, // Machinery for enchantment
	"create_enchantment_industry:blaze_enchanter": 3200, // Blaze-based enchanter
	"create_enchantment_industry:experience_jar": 500,

	// Macaw's Windows Blocks
	"mcwwindows:deepslate_window": 2500, // Glass window block

	// Macaw's Bridges Blocks
	"mcwbridges:rope_bridge": 1200, // Wooden bridge
	"mcwbridges:iron_bridge": 5000, // Metal bridge
	"mcwbridges:stone_bridge": 4000, // Stone bridge
	"mcwbridges:wooden_planks_bridge": 3500, // Wooden plank bridge
	"mcwbridges:oak_wooden_bridge": 3700, // Oak wood bridge
	"mcwbridges:spruce_wooden_bridge": 3700, // Spruce wood bridge
	"mcwbridges:dark_oak_wooden_bridge": 3700, // Dark oak wood bridge
	"mcwbridges:birch_wooden_bridge": 3700, // Birch wood bridge
	"mcwbridges:jungle_wooden_bridge": 3700, // Jungle wood bridge
	"mcwbridges:acacia_wooden_bridge": 3700, // Acacia wood bridge

	// Macaw's Doors Blocks
	"mcwdoors:modern_door": 800, // Lightweight modern door
	"mcwdoors:steel_door": 3000, // Heavy steel door
	"mcwdoors:glass_door": 1200, // Glass door
	"mcwdoors:oak_door": 900, // Oak wood door
	"mcwdoors:spruce_door": 900, // Spruce wood door
	"mcwdoors:birch_door": 900, // Birch wood door
	"mcwdoors:jungle_door": 900, // Jungle wood door
	"mcwdoors:acacia_door": 900, // Acacia wood door
	"mcwdoors:dark_oak_door": 900, // Dark oak wood door
	"mcwdoors:mangrove_door": 900, // Mangrove wood door
	"mcwdoors:iron_door": 3500, // Iron door
	"mcwdoors:modern_glass_door": 1300, // Modern style glass door
	"mcwdoors:classic_door": 1000, // Traditional wooden door

	// Macaw's Furniture Blocks
	"mcwfurniture:wooden_table": 700, // Light wooden furniture
	"mcwfurniture:steel_chair": 1500, // Steel chair
	"mcwfurniture:wooden_chair": 800, // Wooden chair
	"mcwfurniture:sofa": 1200, // Sofa made of wood and cushions
	"mcwfurniture:couch": 1100, // Comfortable couch
	"mcwfurniture:coffee_table": 750, // Small wooden coffee table
	"mcwfurniture:bookshelf": 1500, // Wooden bookshelf
	"mcwfurniture:dining_table": 1000, // Dining table made of wood
	"mcwfurniture:dining_chair": 900, // Dining chair made of wood
	"mcwfurniture:wooden_dresser": 1400, // Dresser made of wood
	"mcwfurniture:steel_dresser": 1600, // Steel dresser
	"mcwfurniture:wooden_bed": 1200, // Wooden bed
	"mcwfurniture:steel_bed": 2000, // Steel bed

	// Quark Blocks
	"quark:basalt": 3000, // Volcanic rock
	"quark:marble": 2700, // Decorative stone
	"quark:brimstone": 2800, // Sulfurous stone block
	"quark:slate": 2900, // A dark, decorative rock
	"quark:chiseled_marble": 2750, // Carved marble for detailed structures
	"quark:chiseled_basalt": 3050, // Basalt with intricate carvings
	"quark:chiseled_slate": 2950, // Slate with intricate carvings
	"quark:chiseled_brimstone": 2850, // Decorative brimstone block
	"quark:stone_bricks": 2700, // Standard stone brick
	"quark:chiseled_stone_bricks": 2750, // Decorative stone bricks
	"quark:limestone": 2900, // Limestone, a light-colored stone
	"quark:limestone_bricks": 2950, // Bricks made from limestone
	"quark:chiseled_limestone": 3000, // Carved limestone
	"quark:compressed_obsidian": 4500, // Solidified, compressed obsidian
	"quark:soul_sandstone": 2700, // Sandstone with a dark twist
	"quark:soul_sandstone_bricks": 2750, // Brick variant of soul sandstone
	"quark:ender_pearl_block": 800, // Ender pearl block with unique properties
	"quark:purple_glazed_terracotta": 2400, // Glazed terracotta with purple tint
	"quark:green_glazed_terracotta": 2400, // Glazed terracotta with green tint
	"quark:blue_glazed_terracotta": 2400, // Glazed terracotta with blue tint
	"quark:gray_glazed_terracotta": 2400, // Glazed terracotta with gray tint
	"quark:white_glazed_terracotta": 2400, // Glazed terracotta with white tint
	"quark:pink_glazed_terracotta": 2400, // Glazed terracotta with pink tint
	"quark:light_blue_glazed_terracotta": 2400, // Glazed terracotta with light blue tint
	"quark:magenta_glazed_terracotta": 2400, // Glazed terracotta with magenta tint
	"quark:yellow_glazed_terracotta": 2400, // Glazed terracotta with yellow tint
	"quark:brown_glazed_terracotta": 2400, // Glazed terracotta with brown tint
	"quark:cyan_glazed_terracotta": 2400, // Glazed terracotta with cyan tint
	"quark:light_gray_glazed_terracotta": 2400, // Glazed terracotta with light gray tint
	"quark:black_glazed_terracotta": 2400, // Glazed terracotta with black tint
	"quark:sandstone_bricks": 2700, // Sandstone bricks
	"quark:red_sandstone": 2600, // Red variant of sandstone
	"quark:red_sandstone_bricks": 2650, // Bricks made from red sandstone
	"quark:chiseled_red_sandstone": 2700, // Carved red sandstone
	"quark:glow_lichen_growth": 0, // Glowing lichen growth
	"quark:jasper": 2900, // Jasper block

	// Deeper and Darker Blocks
	"deeperdarker:sculk_stone": 2700, // Thematic stone block
	"deeperdarker:polished_sculk_stone": 2750, // Polished variant of sculk stone
	"deeperdarker:echo_planks": 600, // Lightweight magical wood
	"deeperdarker:sculk_stone_iron_ore": 3500, // A sculk stone with iron ore
	"deeperdarker:sculk_ore": 3400, // Sculk-infused ore block
	"deeperdarker:sculk_brick": 2800, // Sculk brick with decorative patterns
	"deeperdarker:sculk_pillar": 2900, // Pillar variant of sculk stone
	"deeperdarker:echo_wood": 550, // Lightweight magical wood (raw variant)
	"deeperdarker:sculk_planks": 600, // Sculk-themed wooden planks
	"deeperdarker:sculk_torch": 200, // A torch made from sculk
	"deeperdarker:echo_brazier": 2000, // A brazier for magical fires
	"deeperdarker:sculk_brazier": 2200, // Sculk-powered brazier for special lighting
	"deeperdarker:dark_cobblestone": 2700, // Cobblestone found in the Deeper and Darker
	"deeperdarker:ancient_sculk_brick": 2850, // Ancient and worn sculk bricks
	"deeperdarker:gloomslate": 2900, // Slate block with a dark twist
	"deeperdarker:gloomslate_stairs": 2900, // Stairs made from gloomslate
	"deeperdarker:gloomslate_slab": 1450, // Slab made from gloomslate

	// Placeholder for missing mods and their blocks
	// Add block entries for: Create Railways Navigator, Slice & Dice, etc.

	// Additional entries based on user requests or updates
};

/*
*stateProperties = [
	getStateAtViewpoint,
	explosionResistance,
	emissiveRendering,
	flammability,
	collisionShape,
	beaconColorMultiplier,
	isLadder,
	shouldDisplayFluidOverlay,
	signalSource,
	onNeighborChange,
	canEntityDestroy,
	blockPathType,
	cache,
	toolModifiedState,
	cloneItemStack,
	scaffolding,
	solid,
	getMapColor,
	getProperties,
	canDropFromExplosion,
	tags,
	isStickyBlock,
	isFertile,
	getDestroyProgress,
	hasLargeCollisionShape,
	visualShape,
	getFireSpreadSpeed,
	getToolModifiedState,
	isAir,
	shadeBrightness,
	ignitedByLava,
	mirror,
	seed,
	isConduitFrame,
	onPlace,
	getPistonPushReaction,
	solidRender,
	collisionExtendsVertically,
	supportsExternalFaceHiding,
	fertile,
	getRenderShape,
	attack,
	neighborChanged,
	getCloneItemStack,
	onTreeGrow,
	bedOccupied,
	faceOcclusionShape,
	isConditionallyFullOpaque,
	fireSpreadSpeed,
	populateNeighbours,
	hasAnalogOutputSignal,
	mapColor,
	toString,
	getFlammability,
	analogOutputSignal,
	onRemove,
	validSpawn,
	bed,
	isSuffocating,
	onBlockExploded,
	getOpacityIfCached,
	onProjectileHit,
	destroySpeed,
	stickyBlock,
	canStickTo,
	getCollisionShape,
	isFaceSturdy,
	isBurning,
	signal,
	getFriction,
	pistonPushReaction,
	stateAtViewpoint,
	getNeighborPathNodeType,
	getExplosionResistance,
	isRandomlyTicking,
	canSustainPlant,
	isScaffolding,
	hasProperty,
	interactionShape,
	shouldSpawnParticlesOnBreak,
	flammable,
	isSignalSource,
	getOptionalValue,
	getBeaconColorMultiplier,
	menuProvider,
	handler$cga000$ars_nouveau$getArsSignal,
	faceSturdy,
	notifyAll,
	getShape,
	instrument,
	requiresCorrectToolForDrops,
	isSolid,
	addLandingEffects,
	getSignal,
	drops,
	getFaceOcclusionShape,
	getAdjacentBlockPathType,
	hashCode,
	optionalValue,
	addRunningEffects,
	hidesNeighborFace,
	adjacentBlockPathType,
	"class",
	setLightEmission,
	propagatesSkylightDown,
	owner,
	isFlammable,
	canBeReplaced,
	getBlock,
	canSurvive,
	hasOffsetFunction,
	lightBlock,
	ticker,
	getBlockPathType,
	handler$zmk000$sereneseasons$onRandomTick,
	getBlockHolder,
	setBedOccupied,
	handler$zmp000$starlight$initLightAccessState,
	getShadeBrightness,
	skipRendering,
	getValue,
	isSolidRender,
	getFluidState,
	randomlyTicking,
	getTicker,
	suffocating,
	bedDirection,
	fluidState,
	getAppearance,
	getDestroySpeed,
	getTags,
	isBed,
	neighborPathNodeType,
	isRedstoneConductor,
	isViewBlocking,
	setRequiresTool,
	useShapeForLightOcclusion,
	directSignal,
	entityCanStandOn,
	block,
	respawnPosition,
	soundType,
	isPortalFrame,
	shape,
	getPathNodeType,
	onBlockStateChange,
	canBeHydrated,
	is,
	updateNeighbourShapes,
	propertiesCodec,
	blockHolder,
	triggerEvent,
	getLightBlock,
	asState,
	getMenuProvider,
	wait,
	initCache,
	pathfindable,
	expDrop,
	air,
	viewBlocking,
	cycle,
	notify,
	getSoundType,
	getVisualShape,
	spawnAfterBreak,
	getSeed,
	getEnchantPowerBonus,
	trySetValue,
	isFireSource,
	appearance,
	liquid,
	blockSupportShape,
	opacityIfCached,
	equals,
	updateShape,
	rotate,
	getClass,
	getBedDirection,
	use,
	canHarvestBlock,
	destroyProgress,
	conduitFrame,
	entityCanStandOnFace,
	updateIndirectNeighbourShapes,
	enchantPowerBonus,
	fireSource,
	getWeakChanges,
	getOcclusionShape,
	portalFrame,
	pathNodeType,
	collisionShapeFullBlock,
	isPathfindable,
	isValidSpawn,
	offset,
	isCollisionShapeFullBlock,
	hasBlockEntity,
	tick,
	canRedstoneConnectTo,
	getAnalogOutputSignal,
	weakChanges,
	isSlimeBlock,
	getDirectSignal,
	conditionallyFullOpaque,
	getExpDrop,
	getOffset,
	values,
	getLightEmission,
	slimeBlock,
	onDestroyedByPlayer,
	shouldCheckWeakPower,
	canOcclude,
	blocksMotion,
	getInteractionShape,
	lightEmission,
	requiresTool,
	setDestroySpeed,
	entityInside,
	hasPostProcess,
	value,
	randomTick,
	getValues,
	renderShape,
	onCaughtFire,
	occlusionShape,
	friction,
	getRespawnPosition,
	burning,
	ladder,
	getBlockSupportShape,
	setValue,
	getDrops,
	redstoneConductor,
	properties,
];
*/

// priority: 0

// Visit the wiki for more info - https://kubejs.com/

// JEIEvents.hideItems((event) => {
// 	event.hide("tacz:gun_smith_table");

// });
// console.info("Hello, World! (Loaded client scripts)");

// JEIEvents.removeRecipes(event => {
// 	event.remove('','')
// });
let consoleMessage = "";
let calculateMassOfBlock = function (block) {
	const invalidMass = 10000000000000000;
	consoleMessage += `block: ${block}\n`;
	console.info(`block: ${block}`);
	return invalidMass;
};

ShipEvents.blockStateInfo((event) => {
	consoleMessage = "found blocks:";
	event.mass((state) => {
		return calculateMassOfBlock(state.block);
	});
	console.info(consoleMessage);
});

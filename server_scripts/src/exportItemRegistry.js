const ArrayList = Java.loadClass("java.util.ArrayList");
const Comparator = Java.loadClass("java.util.Comparator");
const HashSet = Java.loadClass("java.util.HashSet");

ServerEvents.commandRegistry((event) => {
	const { commands: Commands, arguments: Arguments } = event;

	event.register(
		Commands.literal("test") // The name of the command
			.requires((s) => s.hasPermission(2)) // Check if the player has operator privileges
			.executes((c) => serializeBlocksByModFromItemRegistry(c.source.player))
	);

	// let serializeBlocksFromItemRegistry = (player) => {
	// 	let serializedFile = "kubejs/exported/item_registry.json";
	// 	let blocksToSerialize = Item.list
	// 		.filter((item) => item.isBlock())
	// 		.map((item) => item.id);

	// 	blocksToSerialize.sort(Comparator.naturalOrder());

	// 	JsonIO.write(serializedFile, {
	// 		items: blocksToSerialize,
	// 	});

	// 	player.tell(`Item Registry serialized to ${serializedFile}`);
	// 	return 1;
	// };

	let serializeBlocksByModFromItemRegistry = (player) => {
		let blockRegistry = Item.list.filter((item) => item.isBlock());
		let modList = blockRegistry.map((item) => item.getMod());

		let filteredList = new HashSet(modList);
		modList.clear();
		modList.addAll(filteredList);
		player.tell(`Started to fetch all the available blocks!`);
		console.info(`Started to fetch all the available blocks!`);
		for (var mod of modList) {
			let blocksToSerialize = blockRegistry
				.filter((item) => item.id.contains(mod))
				.map((item) => item.id);

			blocksToSerialize.sort(Comparator.naturalOrder());
			let path = `kubejs/exported/${mod}_item_registry.json`;
			JsonIO.write(path, {
				items: blocksToSerialize,
			});
			player.tell(`Item Registry serialized to ${path}`);
			console.info(`Item Registry serialized to ${path}`);
		}
		player.tell(`Process completed!`);
		console.info(`Process completed! ${modList.size()} mods found!`);
		return 1;
	};
});

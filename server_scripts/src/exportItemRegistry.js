const ArrayList = Java.loadClass("java.util.ArrayList");
const Comparator = Java.loadClass("java.util.Comparator");

ServerEvents.commandRegistry((event) => {
	const { commands: Commands, arguments: Arguments } = event;

	event.register(
		Commands.literal("get_all_blocks_from_registry") // The name of the command
			.requires((s) => s.hasPermission(2)) // Check if the player has operator privileges
			.executes((c) => serializeBlocksFromItemRegistry(c.source.player))
	);

	let serializeBlocksFromItemRegistry = (player) => {
		let serializedFile = "kubejs/exported/item_registry.json";
		let blocksToSerialize = Item.list
			.filter((item) => item.isBlock())
			.map((item) => item.id);

		blocksToSerialize.sort(Comparator.naturalOrder());
		JsonIO.write(serializedFile, {
			items: blocksToSerialize,
		});

		player.tell(`Item Registry serialized to ${serializedFile}`);
		return 1;
	};
});

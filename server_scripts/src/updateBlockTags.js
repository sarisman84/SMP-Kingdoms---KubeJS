//priority: 100000000
ServerEvents.tags("item", (event) => {
	console.log(Object.keys(Blocks));
	for (var item of Item.list) {
		if (!item.isBlock()) continue;
		if (item.id.includes("slab")) {
			event.add("minecraft:slabs", item.id);
		}
		if (item.id.includes("stairs")) {
			event.add("minecraft:stairs", item.id);
		}
		if (item.id.includes("wall")) {
			event.add("minecraft:walls", item.id);
		}
		if (item.id.includes("fence") && !item.id.includes("fence_gate")) {
			event.add("minecraft:fences", item.id);
		}
		if (item.id.includes("door")) {
			event.add("minecraft:doors", item.id);
		}
		if (item.id.includes("trapdoor")) {
			event.add("minecraft:trapdoors", item.id);
		}
		if (item.id.includes("pressure_plate")) {
			event.add("minecraft:pressure_plates", item.id);
		}
		if (item.id.includes("button")) {
			event.add("minecraft:buttons", item.id);
		}
		if (item.id.includes("sign")) {
			event.add("minecraft:signs", item.id);
		}
		if (item.id.includes("fence_gate")) {
			event.add("minecraft:fence_gates", item.id);
		}
	}
});

ServerEvents.tags("block", (event) => {
	console.log(Object.keys(Blocks));
	for (var item of Item.list) {
		if (!item.isBlock()) continue;
		if (item.id.includes("slab")) {
			event.add("minecraft:slabs", item.id);
		}
		if (item.id.includes("stairs")) {
			event.add("minecraft:stairs", item.id);
		}
		if (item.id.includes("wall")) {
			event.add("minecraft:walls", item.id);
		}
		if (item.id.includes("fence") && !item.id.includes("fence_gate")) {
			event.add("minecraft:fences", item.id);
		}
		if (item.id.includes("door")) {
			event.add("minecraft:doors", item.id);
		}
		if (item.id.includes("trapdoor")) {
			event.add("minecraft:trapdoors", item.id);
		}
		if (item.id.includes("pressure_plate")) {
			event.add("minecraft:pressure_plates", item.id);
		}
		if (item.id.includes("button")) {
			event.add("minecraft:buttons", item.id);
		}
		if (item.id.includes("sign")) {
			event.add("minecraft:signs", item.id);
		}
		if (item.id.includes("fence_gate")) {
			event.add("minecraft:fence_gates", item.id);
		}
	}
});

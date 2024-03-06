function translateProteins(message) {
	let protTab = [
		['Methionine', ['AUG']],
		['Phenylalanine', ['UUU', 'UUC']],
		['Leucine', ['UUA', 'UUG']],
		['Serine', ['UCU', 'UCC', 'UCA', 'UCG']],
		['Tyrosine', ['UAU', 'UAC']],
		['Cysteine', ['UGU', 'UGC']],
		['Tryptophan', ['UGG']],
	];

	let proteins = message.match(/.{1,3}/g) || [];
	let proteinsName = []

	proteins.forEach(item => {
		protTab.forEach(proteine => {
			proteine[1].forEach(prot => {
				if (prot === item)
					proteinsName.push(proteine[0])
			})
		})
	})

	console.log(proteinsName)
}

let msg = 'UGGUGUUAUUAAUGGUUU'

translateProteins(msg)

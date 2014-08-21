(function () {
	var colors = [
		'#900090',
		'#000090',
		'#0F0FFF',
		'#008000',
		'#000000',
		'#FF6600',
		'#FF0000'
	];

	var index = 0;

	var colorize = function (word) {
		return '<span style="color:' + colors[index++ % colors.length] + ';">' + word + '</span>';
	};

	var nodeType = function (node) {
		if (node.outerHTML === node.innerHTML) {
			return 'text';
		} else {
			return 'markup';
		}
	};

	var colorNodes = function (node) {
		if (nodeType(node) === 'text') {
			return node.innerText.split(' ').map(colorize);
		} else {
			for (var i = 0; i < node.childNodes.length; i++){
				node.innerHTML = colorNodes(node);
			}
			// return node.childNodes.map(function (node) {
			// 	node.innerHTML = colorNodes(node);
			// }).join('');
		}
	};

	colorNodes(document.body);
})();

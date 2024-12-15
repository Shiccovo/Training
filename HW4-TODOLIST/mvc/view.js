export const View = (() => {
	const domstr = {
		inputBox: "todolist-input",
		listContainer: "todolist-container",
		deleteBtn: "delete-btn",
	};

	const createTmp = (todolist) => {
		let tmp = "";
		todolist.forEach((todo) => {
			tmp += `
        	<li>
						<span class='${ todo.completed ? "completed" : "" }'>${todo.id}-${todo.title}</span>
						<button class='delete-btn' id='${todo.id}'>X</button>
					</li>
      `;
		});
		return tmp;
	};

	const render = (ele, tmp) => {
		ele.innerHTML = tmp;
	};

	return { domstr, render, createTmp };
})();
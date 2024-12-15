export const API = (() => {
	const baseUrl = "https://jsonplaceholder.typicode.com";
	console.log(baseUrl);
	const todoUrl = "todos";

	const getTodos = () =>
		fetch([baseUrl, todoUrl].join("/")).then((response) => {
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			return response.json();
		}).catch((error) => {
				console.log(error)
		});

const addTodo = (newtodo) =>
	fetch([baseUrl, todoUrl].join("/"), {
		method: "POST",
		body: JSON.stringify(newtodo),
		headers: {
			"Content-type": "application/json; charset=UTF-8",
		},
	}).then((response) => response.json());

const deleteTodo = (id) =>
	fetch([baseUrl, todoUrl, id].join("/"), {
		method: 'DELETE',
	});

return {
	getTodos,
	deleteTodo,
	addTodo,
};
}) ();

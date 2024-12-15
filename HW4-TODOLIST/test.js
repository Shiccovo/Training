export const API = (() => {
	// const baseUrl = "https://jsonplaceholder.typicode.com";
	const baseUrl = "http://localhost:4232";
	const todoUrl = "todos";

	const getTodos = () =>
		fetch([baseUrl, todoUrl].join("/")).then((response) =>
			response.json()
		);

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
})();


import {Model} from './model.js';
import {View} from './view.js';

export const Controller = ((model, view) => {
    const state = new model.State();
    const todoContainer = document.querySelector(
        `.${view.domstr.listContainer}`
    );
    const inputbox = document.querySelector(`.${view.domstr.inputBox}`);

    const deleteTodo = () => {
        todoContainer.addEventListener("click", (e) => {
            if (e.target.className === view.domstr.deleteBtn) {
                state.todolist = state.todolist.filter(
                    (todo) => +todo.id !== +e.target.id
                );
                model.deleteTodo(e.target.id);
            }
        });
    };

    const addTodo = () => {
        inputbox.addEventListener("keyup", (e) => {
            if (e.key === "Enter" && e.target.value.trim() !== '') {
                const newtodo = new model.Todo(e.target.value);

                model.addTodo(newtodo).then((todo) => {
          state.todolist = [todo, ...state.todolist];
                });

        e.target.value = '';
            }
        });
    };

    const init = () => {
        model.getTodos().then((todolist) => {
            state.todolist = todolist.reverse();
        });
    };

    const bootstrap = () => {
        init();
        deleteTodo();
        addTodo();
    };

    return { bootstrap };
})(Model, View);

import {API} from './api.js';
import {View} from './view.js';

export const Model = ((api, view) => {
    class State {
        #todolist = [];
        #todoContainer = document.querySelector(
            `.${view.domstr.listContainer}`
        );
        // querySelector: Nodelist vs. getElementById: HTMLCollection
        // const todoContainer = document.getElementsByClassName(view.domstr.listContainer)[0];

        get todolist() {
            return this.#todolist;
        }

        set todolist(newtodolist) {
            this.#todolist = [...newtodolist];

            const tmp = view.createTmp(this.#todolist);
            view.render(this.#todoContainer, tmp);
        }
    }

    class Todo {
        constructor(title) {
            this.userId = 22;
            this.title = title;
            this.completed = false;
        }
    }

    return {
        ...api,
        State,
        Todo,
    };
})(API, View);

export const View = (() => {
	const domstr = {
		inputBox: "todolist-input",
		listContainer: "todolist-container",
		deleteBtn: "delete-btn",
	};

	const createTmp = (todoArr) => {
		let tmp = "";
		todoArr.forEach((todo) => {
			tmp += `
        	<li>
						<span>${todo.id}-${todo.title}</span>
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




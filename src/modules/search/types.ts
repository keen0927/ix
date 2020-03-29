/**
 * Todo Types
 */

export type TodoProps = {
	id: number;
	text: string;
	createDate: string;
	editDate: string;
	done: boolean;
	reference: number[];
};

export type TodoItemProps = {
	viewList: TodoProps;
	onToggle: (id: number) => void;
	onRemove: (id: number) => void;
};

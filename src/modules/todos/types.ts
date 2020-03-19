export type Todo = {
	id?: number;
	text: string;
	createDate?: string;
	editDate?: string;
	done?: boolean;
	reference?: number[];
	onClick?: () => void;
	onChange?: () => void;
};

import "./BaseInput.scss";
import BaseInput from "./BaseInput.hbs?raw";

export interface IBaseInputProps {
	label: string;
	placeholder: string;
	name: string;
	id: string;
	type?: string;
	defaultValue?: string;
	readonly?: boolean;
	error?: string;
}

export default BaseInput;
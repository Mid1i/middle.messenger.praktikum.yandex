import "./BaseInput.scss";
import BaseInput from "./BaseInput.hbs?raw";

export interface IBaseInputProps {
	label: string;
	placeholder: string;
	type: string;
	name: string;
	id: string;
	error?: string;
}

export default BaseInput;
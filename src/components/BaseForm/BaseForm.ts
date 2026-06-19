import type { IBaseBlockOwnProps } from "@/components/BaseBlock";
import type { ValidationRule } from "@/types";

import BaseBlock from "@/components/BaseBlock";

import template from "./BaseForm.hbs?raw";
import validateValue from "@/utils/validation";

export interface IBaseFormProps extends IBaseBlockOwnProps {
	className?: string;
}

export default class BaseForm extends BaseBlock<IBaseFormProps> {
	public static componentName = "BaseForm";

	protected template = template;

	constructor(props: IBaseFormProps) {
		super(props);

		this.events = {
			submit: this.handleSubmit,
		};
	}

	protected componentDidMount() {
		this.element().addEventListener("blur", this.handleBlur, true);
	}

	protected componentWillUnmount() {
		this.element().removeEventListener("blur", this.handleBlur, true);
	}

	private handleBlur = (event: Event) => {
		const field = event.target;

		if (field instanceof HTMLInputElement || field instanceof HTMLTextAreaElement) {
			this.validateField(field);
		}
	}

	private handleSubmit = (event: Event) => {
		event.preventDefault();

		const form = event.target as HTMLFormElement;
		const fields = form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>(
			"input[data-validation-rule], textarea[data-validation-rule]",
		);

		const result = Array.from(fields).map((field) => this.validateField(field));

		if (result.some((result) => !result)) {
			return;
		}

		console.log(this.collectFormData(form));
	}

	private validateField(field: HTMLInputElement | HTMLTextAreaElement): boolean {
		const rule = field.dataset.validationRule as ValidationRule | undefined;

		if (!rule) {
			return true;
		}

		const error = validateValue(field.value, rule);
		const errorElement = this.element().querySelector(`[data-error-for="${field.id}"]`);

		field.classList.toggle("base-input__input_invalid", !!error);
		field.setAttribute("aria-invalid", String(!!error));

		if (errorElement) {
			errorElement.textContent = error ?? "";
		}

		return error === null;
	}

	private collectFormData(form: HTMLFormElement): Record<string, unknown> {
		const result: Record<string, unknown> = {};

		for (const [name, value] of new FormData(form)) {
			const previousValue = result[name];

			if (previousValue === undefined) {
				result[name] = value;
				continue;
			}

			if (Array.isArray(previousValue)) {
				previousValue.push(value);
				continue;
			}

			result[name] = [previousValue, value];
		}

		return result;
	}
}

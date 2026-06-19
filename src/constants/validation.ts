import type { ValidationRule } from "@/types";

export interface IValidationConfig {
	regexp: RegExp;
	message: string;
}

export const VALIDATION_RULES: Record<ValidationRule, IValidationConfig> = {
	name: {
		regexp: /^[A-ZА-ЯЁ][a-zа-яё-]*$/,
		message: "Первая буква должна быть заглавной, допустимы только буквы и дефис",
	},
	login: {
		regexp: /^(?!\d+$)[A-Za-z0-9_-]{3,20}$/,
		message: "От 3 до 20 символов: латиница, цифры, дефис и подчёркивание",
	},
	email: {
		regexp: /^[A-Za-z0-9._%+-]+@[A-Za-z]+\.[A-Za-z]+$/,
		message: "Введите корректный email",
	},
	password: {
		regexp: /^(?=.*[A-Z])(?=.*\d).{8,40}$/,
		message: "От 8 до 40 символов, минимум одна заглавная буква и цифра",
	},
	phone: {
		regexp: /^\+?\d{10,15}$/,
		message: "Телефон должен содержать от 10 до 15 цифр",
	},
	message: {
		regexp: /\S/,
		message: "Сообщение не должно быть пустым",
	},
}
import type { ValidationRule } from "@/types";

import { VALIDATION_RULES } from "@/constants/validation";

export default function validateValue(value: string, rule: ValidationRule): string | null {
	const config = VALIDATION_RULES[rule];

	return config.regexp.test(value.trim()) ? null : config.message;
}

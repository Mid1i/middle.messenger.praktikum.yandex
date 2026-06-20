import {
	DATE_MONTH_FORMATTER,
	FULL_DATE_FORMATTER,
	TIME_FORMATTER,
	WEEKDAY_FORMATTER,
} from "@/constants/formatters";
import capitalize from "./capitalize";

export default function formatDate(dateString: string): string {
	const date = new Date(dateString);
	const now = new Date();

	const time = TIME_FORMATTER.format(date);

	const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

	const targetDay = new Date(date.getFullYear(), date.getMonth(), date.getDate());

	const diffDays = Math.floor((today.getTime() - targetDay.getTime()) / (1000 * 60 * 60 * 24));

	if (diffDays === 0) {
		return time;
	}

	if (diffDays === 1) {
		return `Вчера, ${time}`;
	}

	if (diffDays < 7) {
		const weekday = WEEKDAY_FORMATTER.format(date);

		return `${capitalize(weekday)}, ${time}`;
	}

	if (date.getFullYear() === now.getFullYear()) {
		return `${DATE_MONTH_FORMATTER.format(date)}, ${time}`;
	}

	return `${FULL_DATE_FORMATTER.format(date)}, ${time}`;
}

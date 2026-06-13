export const TIME_FORMATTER = new Intl.DateTimeFormat("ru-RU", {
	hour: "2-digit",
	minute: "2-digit",
});

export const WEEKDAY_FORMATTER = new Intl.DateTimeFormat("ru-RU", {
	weekday: "long",
});

export const DATE_MONTH_FORMATTER = new Intl.DateTimeFormat("ru-RU", {
	day: "2-digit",
	month: "2-digit",
});

export const FULL_DATE_FORMATTER = new Intl.DateTimeFormat("ru-RU", {
	day: "2-digit",
	month: "2-digit",
	year: "numeric",
});

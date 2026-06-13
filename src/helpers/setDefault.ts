export default function setDefault<T>(val: T, defaultValue: T) {
	return val ?? defaultValue;
};
export default function notEqual<T>(val: T, val2: T): boolean {
	return val && val2 && val !== val2;
};

export function normalize(time: number): number;

export function isBetween(
	value: number,
	timeLeft: number,
	timeRight: number
): boolean;

export function addMinutes(time: number, minute: number): number;
export function addHours(time: number, hour: number): number;

export function decode(time: number): [number, number];
export function encode(hour?: number, minute?: number): number;

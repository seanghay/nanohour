import { expectType } from "tsd";
import { decode, encode, addHours, addMinutes, normalize, isBetween } from ".";

expectType<[number, number]>(decode(0));
expectType<number>(encode(0, 0));
expectType<number>(addHours(0, 1));
expectType<number>(addMinutes(0, 1));
expectType<number>(normalize(0));
expectType<boolean>(isBetween(2, 1, 3));

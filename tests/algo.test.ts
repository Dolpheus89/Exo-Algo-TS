import * as algos from "../index";
import { Algos } from "../types/algos";

describe("Algos Tests", () => {
	const testCases: Array<{
		funcName: keyof Algos;
		args: Parameters<Algos[keyof Algos]>;
		expected: any;
	}> = [
		{ funcName: "multiply", args: [4, 4], expected: 16 },
		{ funcName: "getFirstElement", args: [[5, 6, 7]], expected: 5 },
		{ funcName: "removeLastElement", args: [[5, 6, 7]], expected: [5, 6] },
		{ funcName: "sumArray", args: [[5, 6, 7]], expected: 18 },
		{ funcName: "reverseString", args: ["Dracula"], expected: "alucarD" },
		{ funcName: "getMax", args: [[5, 6, 7]], expected: 7 },
		{ funcName: "getMin", args: [[5, 6, 7]], expected: 5 },
		{ funcName: "removeVowels", args: ["Cerise"], expected: "Crs" },
		{ funcName: "sortArray", args: [[6, 5, 7]], expected: [5, 6, 7] },
		{
			funcName: "getStringRotations",
			args: ["12345"],
			expected: ["23451", "34512", "45123", "51234", "12345"],
		},
		{ funcName: "incrementArray", args: [[5, 6, 7]], expected: [6, 7, 8] },
		{
			funcName: "getLengths",
			args: [["Vive", "le", "poulet"]],
			expected: [4, 2, 6],
		},
		{
			funcName: "getFirstLetters",
			args: [["Vive", "le", "poulet"]],
			expected: ["V", "l", "p"],
		},
		{
			funcName: "getLastLetters",
			args: [["Vive", "le", "poulet"]],
			expected: ["e", "e", "t"],
		},
		{
			funcName: "filterLongStrings",
			args: [["Vive", "le", "poulet", "et", "les", "sardines"]],
			expected: ["poulet", "sardines"],
		},
		{
			funcName: "snake_case",
			args: ["Je_serai_tenté_de_te_donner_un_dé_à_coudre"],
			expected: "Je serai tenté de te donner un dé à coudre",
		},
		{
			funcName: "mergeArrays",
			args: [
				["Vive", "le", "poulet"],
				["et", "les", "sardines"],
			],
			expected: ["Vive", "le", "poulet", "et", "les", "sardines"],
		},
		{
			funcName: "filterStringsWithE",
			args: [["Veau", "Poussin", "Ornithorynque", "Loutre"]],
			expected: ["Veau", "Ornithorynque", "Loutre"],
		},
		{
			funcName: "filterAndSortEvenNumbers",
			args: [[2, 7, 8, 9, 4, 1, 3, 7, 5, 12]],
			expected: [2, 4, 8, 12],
		},
		{
			funcName: "findShort",
			args: ["Ce n'est rien de mourir, c'est affreux de ne pas vivre"],
			expected: 2,
		},
		{ funcName: "anagram", args: ["manoir", "romain"], expected: true },
		{
			funcName: "removeDoubleLetters",
			args: ["saluuuuuuuuut!!!!"],
			expected: "salut!",
		},
		{
			funcName: "createPhoneNumber",
			args: [[4, 1, 8, 6, 5, 7, 2, 2, 0, 2]],
			expected: "(418) 657-2202",
		},
		{
			funcName: "findMissingLetter",
			args: [["g", "h", "i", "k", "l"]],
			expected: "j",
		},
		{
			funcName: "sortString",
			args: [["zebra", "apple", "Mango", "banana", "Orange", "grape"]],
			expected: ["apple", "banana", "grape", "Mango", "Orange", "zebra"],
		},
		{ funcName: "otherAngle", args: [90, 20], expected: 70 },
		{ funcName: "isLeapYear", args: [2022], expected: false },
		{
			funcName: "sortAnimals",
			args: [["Caribou", "Platypus", "Dog", "Cat"]],
			expected: [
				["Dog", "Cat"],
				["Caribou", "Platypus"],
			],
		},
		{ funcName: "decodeMessage", args: ["FYPPQ"], expected: "PIZZA" },
		{
			funcName: "calculateScore",
			args: [["1:0", "2:2", "3:1", "0:0", "1:3"]],
			expected: 8,
		},
	];

	for (const { funcName, args, expected } of testCases) {
		const func = (algos as any)[funcName];

		if (func && typeof func === "function") {
			test(`${funcName} fonction`, () => {
				const result = func(...args);
				try {
					if (funcName === "getStringRotations") {
						expect(result.sort()).toEqual(expected.sort());
					} else if (funcName === "sortAnimals") {
						const sortedResult = result.map((subArray: string[]) =>
							[...subArray].sort(),
						);
						expect(sortedResult).toEqual(expected);
					} else {
						expect(result).toEqual(expected);
					}
				} catch (error) {
					throw new Error(
						`Erreur dans le test de la fonction ${funcName} avec les arguments : ${JSON.stringify(args)}; attendu : ${JSON.stringify(expected)}, mais reçu : ${JSON.stringify(result)}.`,
					);
				}
			});
		} else {
			test.skip(`${funcName} est non implémentée ou importée, test ignoré`, () => {});
		}
	}
});

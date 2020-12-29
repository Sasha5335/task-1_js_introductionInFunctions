
/**
 * Проверять пользователя на совершенолетие
 * @param {number} age возраст пользователя
 * @returns {boolean || null} true если пользователю 18 и больше, false если меньше 
 */
//описание себе для примера

const isAdult = function (age) {

	if (isNaN(age)) return null;
	return age >= 18;

};

console.log(isAdult(18));

// ---------------------------------------------------------------------------------------------

const checkMultiplicity = function (num1, num2) {

	if (num1 % num2 === 0) return true;
	return false;
};

console.log(checkMultiplicity(25, 5)); // true
console.log(checkMultiplicity(15, 3)); // true
console.log(checkMultiplicity(15, 5)); // true
console.log(checkMultiplicity(15, 4)); // false

// ---------------------------------------------------------------------------------------------

const triangleTest = function (sideA, sideB, sideC) {

	if (sideA + sideB > sideC && sideA + sideC > sideB && sideB + sideC > sideA) return true;
	return false;

};

console.log(triangleTest(3, 5, 10));

// ---------------------------------------------------------------------------------------------

// Расчет площади ромба
const calcAreaRhombus = function (a, h) {
	return a * h;
};

// Расчет площади цилиндра
const calcAreaCylinder = function (r, h) {
	return 2 * Math.PI * r * (h + r);
};

// Расчет площади треугольника
const calcAreaRectangle = function (a, h) {
	return 0.5 * a * h;
};

// Расчет площади прямоугольника
const calcAreaTriangle = function (a, b) {
	return a * b;
};

const areaCalculation = function (a, b) {
	const rhombus = calcAreaRhombus(a, b);
	const cylinder = calcAreaCylinder(a, b);
	const rectangle = calcAreaRectangle(a, b);
	const triangle = calcAreaTriangle(a, b);
	return [parseFloat(rhombus.toFixed(3)), parseFloat(cylinder.toFixed(3)), parseFloat(rectangle.toFixed(3)), parseFloat(triangle.toFixed(3))];
};

console.log(areaCalculation(2, 5));
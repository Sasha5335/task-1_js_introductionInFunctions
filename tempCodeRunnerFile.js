
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
	// return parseFloat(square.toFixed(3));
};

// Расчет площади треугольника
const calcAreaRectangle = function (a, h) {
	return 0.5 * a * h;
	// return parseFloat(square.toFixed(3));
};

// Расчет площади прямоугольника
const calcAreaTriangle = function (a, b) {
	return a * b;
	// return parseFloat(square.toFixed(3));
};

const areaCalculation = function (a, b) {
	const rhombus = calcAreaRhombus(a, b);
	const cylinder = calcAreaCylinder(a, b);
	const rectangle = calcAreaRectangle(a, b);
	const triangle = calcAreaTriangle(a, b);
	return [parseFloat(rhombus.toFixed(3)), parseFloat(cylinder.toFixed(3)), parseFloat(rectangle.toFixed(3)), parseFloat(triangle.toFixed(3))];
};

areaCalculation(2, 5);
const isAdult = function (num) {

	if (!isNaN(num)) {
		if (num >= 18) {
			return true;
		} else {
			return false;
		}
	} else {
		return null;
	}
};

isAdult(8);

// ---------------------------------------------------------------------------------------------

const checkMultiplicity = function (num1, num2) {
	if (num1 % num2 === 0) {
		return true;
	} else {
		return false;
	}
};

checkMultiplicity(25, 5); // true
checkMultiplicity(15, 3); // true
checkMultiplicity(15, 5); // true
checkMultiplicity(15, 4); // false

// ---------------------------------------------------------------------------------------------

const triangleTest = function (side_A, side_B, side_C) {

	if (side_A + side_B > side_C && side_A + side_C > side_B && side_B + side_C > side_A) {
		return true;
	}
	else {
		return false;
	}

};

triangleTest(3, 5, 10);

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



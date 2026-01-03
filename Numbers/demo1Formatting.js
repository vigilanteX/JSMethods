let x = 12;
console.log(x.toFixed(2));
x = 12.4777777778;
//Rounding Logic: Since the decimal part is .47..., it rounds down to 12. If the value had been 12.5, the result would have been "13".
console.log(x.toFixed());
/*
The Rule for any nWhatever number you put inside the parentheses toFixed(n), you always look at the digit at position $n + 1$:If you use toFixed(1), look at the 2nd digit.If you use toFixed(2), look at the 3rd digit.If you use toFixed(3), look at the 4th digit.If you use toFixed(10), look at the 11th digit.

*/
x = 12.4455555555;
console.log(x.toFixed(3));

/*
Not exactly. While both methods involve rounding, they focus on different parts of the number.The main difference is: toFixed() counts digits after the decimal point, while toPrecision() counts the total number of significant digits (including digits before the decimal).1. toFixed(n)Focus: Fixed number of digits after the decimal.Rounding Digit: Always the digit at position $n + 1$ after the decimal.Best for: Formatting currency or consistent decimal layouts.2. toPrecision(n)Focus: Total "significant digits" (the total number of non-zero digits, starting from the first one).Rounding Digit: The digit immediately following the total count of $n$ digits.Best for: Scientific calculations where the overall accuracy matters more than the decimal position.





*/
x = 13.555333333;
console.log(x.toPrecision(3));

x = 123.44445;
console.log(x.toString());

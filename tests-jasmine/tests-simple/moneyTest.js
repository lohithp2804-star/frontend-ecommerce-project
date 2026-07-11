import {formatCurrency} from "../../scripts/utils/money.js";

console.log('basic test: 2095, 20.95');
if (formatCurrency(2095) === '20.95') {
  console.log('Test passed!');
} else {
  console.log('Test failed!');
}


if (formatCurrency(0) === '0.00') {
  console.log('Test passed!');                       
} else {
  console.log('Test failed!');
}

console.log('Edge case test: 2000.4');
if (formatCurrency(2000.4) === '20.00') {             //rounds upto the nearest cent
  console.log('Test passed!');
} else {
  console.log('Test failed!');
}
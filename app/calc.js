var Calculator = function(){};
 
Calculator.prototype.input = function(operand1, operator, operand2){
	if(operator === '+'){
		return this.add(operand1, operand2);
	} else if(operator === '-'){
		return this.subtract(operand1, operand2);
	} else if(operator === '*'){
		return this.multiply(operand1, operand2);
	} else (operator === '/'){
		return this.divide(operand1, operand2);
	}
}
 
Calculator.prototype.add = function(operand1, operand2){
	return operand1 + operand2;
};

Calculator.prototype.subtract = function(operand1, operand2){
	return operand1 - operand2;
};
 
Calculator.prototype.multiply = function(operand1, operand2){
	return operand1 * operand2;
};

Calculator.prototype.divide = function(operand1, operand2){
	return operand1 / operand2;
};
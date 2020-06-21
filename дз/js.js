class Car {
	constructor(brandName, model, productionYear) {
		this.brandName = brandName;
		this.model = model;
		this.productionYear = productionYear;
	}
}
console.log('----------create-----------');
var tesla = _.create(Car.prototype,{brandName:'tesla',model:'roadster',productionYear:2020});
console.log(tesla);

console.log('----------invert-----------');
var invert = _.invert(tesla);
console.log(invert);
console.log('----------omit-----------');
var omit = _.omit(tesla,'model');
console.log(omit);
console.log('----------pick-----------');
var pick = _.pick(tesla,'brandName','productionYear');
console.log(pick);
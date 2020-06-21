var keyObj = _.keys({ name: 'jhon',age:22});
var obj = { name: 'jhon',age:22};
console.log(keyObj);

//values

var valuesObj = _.values({ name: 'jhon',age:22});

console.log(valuesObj);

var map = _.map({ name: 'jhon',age:22},function(key){
	return key+1;
});
console.log(map);

//pairs
var pairs = _.pairs({ name: 'jhon',age:22});

console.log(pairs);

//inverted

var invert = _.invert(obj);
console.log(invert);

//create
function Person(name){
	this.name  = name;
}

var create = _.create(Person.prototype,{name:'pole',age: 20});
		
console.log(create);
					

//functions

console.log(_.functions(_));

//extend

var extended = _.extend(obj,{job: 'it'});
console.log(extended);

//pick

var pick = _.pick(obj,'name');
console.log(pick);

//omit

var omit = _.omit(obj,'name');
console.log(omit);

//defaults

var def = _.defaults({isPerson: true},obj);
console.log(obj);

//has

var has = _.has(obj,'name');
console.log(has);

//isequel


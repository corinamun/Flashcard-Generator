function BasicCard (front,back) {
	this.front = front;
	this.back = back;
	this.printStats = function () {
		console.log(this.front);
		console.log(this.back);
};

var firstPresident = new BasicCard(
	"Who was the first president of the United States?", "George Washington");
	console.log(firstPresident.back);

}

//end
//module.exports = BasicCard
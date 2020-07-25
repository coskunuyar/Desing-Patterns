const game = {
    description: function(){
        return `Name:${this.name} , 
                Owner: ${this.owner} , 
                CreationDate: ${this.creationDate}`;
    }
};

let airStrike3 = Object.create(game, {
    name: { value: "Air Strike 3"}, 
    owner: {value: "Coskun Uyar"},
    creationDate: {value: Date.now()}
});

console.log(airStrike3.description());
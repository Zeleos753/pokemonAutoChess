const schema = require('@colyseus/schema');
const Schema = schema.Schema;
const MapSchema = schema.MapSchema;
const Pokemon = require('./Pokemon').Pokemon;

class Player extends Schema
{
    constructor(id, facebookName){
        super();
        this.id = id;
        this.facebookName = facebookName;
        this.board = new MapSchema();
        this.shop = new MapSchema();
        this.level = 1;
        this.money = 0;
    }
}

schema.defineTypes(Player,{
    id:"string",
    facebookName:"string",
    board: {map: Pokemon},
    shop: {map: Pokemon},
    level: "number",
    money: "number"
})

module.exports = Player;
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Use native promises
mongoose.Promise = global.Promise;

const GameSchema = new Schema({
    user: String,
    points: Number,
    Board: [],
    categories: [CategorySchema]
});

const CatagorySchema = new Schema({
    name: String,
    questions:[QuestionSchema]
});

const QuestionSchema = new Schema({
    value: Number,
    question: String,
    answer: String
});

let GameModel = mongoose.model("Game", GameSchema);
let CategoryModel = mongoose.model("Category", CatagorySchema);
let QuestionModel = mongoose.model("Question", QuestionSchema);

module.exports = {
    Game: GameModel,
    Category: CategoryModel,
    Question: QuestionModel
};
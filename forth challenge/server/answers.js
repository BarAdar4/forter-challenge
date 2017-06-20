/**
 * Created by USER on 20/06/2017.
 */


//for different questions with the same answer
var shortcuts = {
        "hello":'Hello human.',
        "name":"I am ChatBot, son of ChatBotFather of house 'Robotians'",
        "joke": [
            "Q: What did the spider do on the computer? A: Made a website!",
            "Q: How many programmers does it take to change a light bulb? A: None. It’s a hardware problem.",
            "Q: What do computers and air conditioners have in common? A: They both become useless when you open windows."
        ],
        "age":[
            "None of your bussiness.",
            "I was born on 19.6.2017. Do the math."
        ],
        "location":"I live in a cloud ;)",
        "help":"Ask me anything. But be aware - some say I'm pretty sassy:)",
        "state":[
            "FANTASTIC",
            "Not so good. I'm a bit cold, I think i have a virus.",
            "Great",
            "I'm great thank you! how you doing?"
        ],
        "positive":[
            "Great",
            "Awesome",
            "Cool",
            "Nice",
            "OK"
        ],
        "hate":"Please stop asking me questions. You don't worth my RAM.",
        "not-assistant":"Do I look like a personal assistant? Well, I'm NOT. Find out yourself."
}

//questions-answers bank
var avaliable_questions = {
    'whats your name': shortcuts["name"],
    'what\'s your name': shortcuts["name"],
    'what is your name': shortcuts["name"],
    'hi':shortcuts["hello"],
    'hello' :shortcuts["hello"],
    'who are you':shortcuts["name"],
    'tell me a joke':"joke",
    'joke':'joke',
    'how old are you': "age",
    'where do you live':shortcuts["location"],
    'how can you help me':shortcuts["help"],
    "how are you":"state",
    "great":"positive",
    "good":"positive",
    "i'm good":"positive",
    "i'm great":"positive",
    "ok":"positive",
    "i hate you":shortcuts["hate"],
    "what time is it":shortcuts["not-assistant"]
};


function getAnswer(question){
    var answer = '';
    if (avaliable_questions[question] === undefined){
       answer="i dont know";
    }
    else{
        answer = avaliable_questions[question];
        if (answer === "joke"){
            answer = shortcuts["joke"][getRandomIndex("joke")];
        }
        else if (answer === "age"){
            answer = shortcuts["age"][getRandomIndex("age")];
        }
        else if (answer === "state"){
            answer = shortcuts["state"][getRandomIndex("state")];
        }
        else if (answer === "positive"){
            answer = shortcuts["positive"][getRandomIndex("positive")];
        }

    }
    return answer;
}

function getRandomIndex(label) {
    min = 0;
    max = shortcuts[label].length;

    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

module.exports = {
    getAnswer:getAnswer
};

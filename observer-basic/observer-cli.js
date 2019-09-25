const EventEmitter = require('events');
const readline = require('readline');

const printToConsole = (str) => {
  console.log('\n')
  console.log(str)
  console.log('\n')
}

class ChatBot extends EventEmitter {
  constructor () {
    super()
    this.config = {
      input: process.stdin,
      output: process.stdout,
      terminal: false,
    };
    this.prefix = '>> ';
    this.rl = readline.createInterface(this.config);
    this.rl.setPrompt(this.prefix);
  }

  getInput() {
    this.rl.question("How many times did you die in Sekio? \n>> ", (num) => {
      this.emit("get_reply", num);
    })
  }
}

const bot = new ChatBot();
const threshold = 10;

bot.getInput();

bot.on('get_reply', (num) => {
  if (parseInt(num) > threshold) {
    printToConsole('菜鸟')
  } else {
    printToConsole('What a twitch streamer')
  }
  bot.getInput();
})

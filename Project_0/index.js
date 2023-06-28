const { Telegraf } = require('telegraf');
const { message } = require('telegraf/filters');

require('dotenv').config();
const bot = new Telegraf(process.env.BOT_TOKEN);

const binarySearchString = `
const binarySearch = function search(arr, x) {
    let low = 0, hi = arr.length -1;
    while(low <= hi) {
        let mid = low + Math.floor(hi - low)/2;
        if(arr[mid] == x) return mid;
        else if(arr[mid] < x) {
            low = mid + 1;
        } else {
            hi = mid - 1;
        }
    }

    return undefined;
}`

try {
    bot.start((ctx) => ctx.reply('Welcome to Pratima\'s Tech bot'));   // /start
    bot.on(message('sticker'), (ctx) => ctx.reply('👍'));

    bot.command('binarysearch', (ctx) => ctx.reply(binarySearchString));   // /binarysearch
    
    bot.on('text', (ctx) =>  {
        console.log(ctx.update.message.text);
        if(ctx.update.message.text == "How are you?") {
            ctx.reply('I am fine, What about you?'); 
        } else {
            ctx.reply('I don\'t understand');
        }
    })

       
    bot.launch();
} catch {
    console.log('Unexpected search');
}

const TelegramBot = require('node-telegram-bot-api');

const token = '';

const bot = new TelegramBot(token, { polling: true });

const muteWords = ["hello", "pay", "test"]
// bot.onText(/\/start/, (msg, match) => {
//     // 'msg' is the received Message from Telegram
//     // 'match' is the result of executing the regexp above on the text content
//     // of the message
//     const chatId = msg.chat.id;
//     const resp = match[1]; // the captured "whatever"
//     console.log(msg);

//     // send back the matched "whatever" to the chat
//     bot.sendMessage(chatId, resp);
//   });



bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    
    if (muteWords.find(x => x == msg.text)) {
        // bot.banChatMember(chatId,  msg.from.id,{
        //     untilDate : Date.now() + 3600

        // })
    }
    // const pollOptions = ['Ready', 'Not read'];
    // bot.sendPoll(chatId, 'Choose an option:', pollOptions, {
    //     is_anonymous: false,  // You can set this to true if you want to make the poll anonymous
    //     allows_multiple_answers: false  // Set this to true if you want to allow multiple answers
    // });


    // let pollId = 5307900126914675834
    // setInterval(() => {
    //     bot.stopPoll(chatId, pollOptions,pollId)
    //     console.log("Hello");
    // }, 2000)

     // 312746344313759 + (60 * 5)
    let data = new Date();
    data.setDate(data.getDate() +  60 * 5)

    bot.restrictChatMember(chatId, msg.from.id, {
        until_date: data,
    })

    // bot.deleteChatStickerSet(chatId)



});

// bot.on("poll_answer", (poll) => {
//     console.log(poll.poll_id);
// })
const axios = require('axios');

const webhookUrl = "https://discord.com/api/webhooks/1199715213465894993/lRoyr-MTEZl-ZJp1GZw0ykZj6sviabIr87P4HsHkwhx10Qwj8z5FrruNO3nC8YniT4wn";

axios({
    method: 'post',
    url: webhookUrl,
    data: {
        "content": "Hello, World!",
        "embeds": [
            {
                "title": "Hello, Embed!",
                "description": "This is an embedded message."
            }
        ]
    }
})
import { WebhookClient } from "discord.js";

export default {
    token: process.env.token, // Bot token
    color: "903EB8", // Default color for embeds
    prefix: process.env.prefix || "-", // Bot prefix its not used in the bot
    WebhookUrl: new WebhookClient({ url: process.env.webhook }), // Webhook URL for image uploads
    debugMode: false, // Debug mode for the bot this allow only developers to use the bot
    developers: [`${process.env.dev}`], // Developer IDs for the bot
    whiteListedGuilds: [`${process.env.server}`], // Whitelisted guilds for the bot to work in
    host: "https://7xrr.glitch.me",
    editSpeed: 10,
    text: ["This bot was custom-developed"],
    customPassword: '72717xrhazeZ$'
};

const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'YOUR_BOT_TOKEN'; // Replace with your bot token

// Client Commands
const decide_cmd = '!decide';

// Client Responses

// Classes - TODO
class Location {

    // Constructor for default location object
    constructor(name, priority, status, location) {
        this.name = name
        this.priority = priority
        this.status = status
        this.location = location
    }

    // Method to display info on location
    displayInfo() {
        message.reply(`Name: ${this.name},\tStatus: ${this.status}\tLocation: ${this.location}`)
    }
}

class Decider {

    location_list = []

    // Constructor for default values
    constructor(){}

    // Add Location to list
    add_to_loc_list(location){
        this.location_list.push(location)
    }
}

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', (message) => {
    // Ignore messages from the bot itself
    if (message.author.bot) return;

    // Check if the message starts with a specific command
    if (message.content.toLowerCase() === decide_cmd) {
        // Send begining message
        message.reply("So we are waiting till 4pm to see if eng dies down:");
        
        eng_sc_status = true
        eng_ld_status = true
        thors_status = true

        // Decide our location

        // would you like to reset/set location priorities? - TODO

        // ENG Success Center
        message.reply("How many people are in the Success Center?")
        if (parseInt(message.content, 10) > 2) {
            message.reply("After asking them to leave. . . did they leave?")
            if (message.content.toLowerCase() === "no" || message.content.toLowerCase() === "n") {
                eng_sc_status = false
            }
        }

        // ENG Long Desk
        message.reply("Is the desk availiable?")
        if (message.content.toLowerCase() === "no" | message.content.toLowerCase() === "n") {
            eng_ld_status = false
        }
        
        // Thors Place
        message.reply("Is Thor's place availiable?")
        if (message.content.toLowerCase() === "no" | message.content.toLowerCase() === "n") {
            eng_ld_status = false
        }
        
        if (eng_sc_status){
            locname = "ENG's Success Center"
            message.content.reply(`We all go to ${locname} and have a great time!`)
        }
        else if (eng_ld_status){
            locname = "ENG's Long Desk"
            message.content.reply(`We all go to ${locname} and have a great time!`)
        }
        else if (thors_status){
            locname = "Thor's Place"
            message.content.reply(`We all go to ${locname} and have a good time!`)
        }
        else if (false) { // Additional options
            message.content.reply()
        }
        else {
            message.content.reply("UH OH! We have to find a new spot for DND!")
        }

        // if () { // Option 1 - ENG Success Center
        //     message.reply('We all go to ENG\'s Success Center and have a great time!');
        // }
        // else if (){ // Option 2 - ENG Long Desk
        //     message.reply('We all go to ENG\'s LONG desk and have a great time!')
        // }
        // else if (false){ // Additional options
        //     message.reply()
        // }
        // else { // Option X - Thors place
        //     message.reply('We go to thor\'s place and have a good time!');
        // }
        
    }
});

// Login to Discord with your app's token
client.login(token);  
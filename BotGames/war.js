module.exports = {
    name: "leveler", 
    description: "tracks and gives xp", 
    async execute(msg, fs, random, jsonfile){
        const reply = msg.author;

        let filter = msg => !msg.author.bot;
        let options = {
            max: 1,
            time: 3000
        }

        let collector = msg.author.creatMessageCollector(filter, options);

        collector.on("collect", msg =>{
            
        });

    }
}
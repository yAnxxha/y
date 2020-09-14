const config    = require("../config.json");
const commands  = require("../scripts/commandsReader")(config.prefix);

const descriptions = {
    "m!ajuda": "Use esse comando para ver os comandos disponiveis",
    "m!icon": "Abre a foto de perfil de um usuário",
    "m!clear": "Limpe o chat",
    "m!ping":  "Pingue o bot"
};


module.exports = async (client,msg) =>{
    var texto = "Comandos:";
    Object.keys(commands).forEach(command => {
        texto += `\n ${command}: ${descriptions[command] ? descriptions[command] : 'Não tem descrição'}`
    });
    msg.reply(texto);
};
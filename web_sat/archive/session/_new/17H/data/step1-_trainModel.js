// Importation des modules nécessaires
const fs = require("fs");
const Groq = require("groq-sdk");
const groq = new Groq();

async function loadConfig() {
  try {
    const config = JSON.parse(await fs.promises.readFile('config.json', 'utf-8'));
    return config;
  } catch (err) {
    console.error(err);
  }
}

loadConfig();

// Fonction principale exécutée de manière asynchrone
async function main() {
  // Création d'une complétion de chat avec "Pi" via l'API GROQ
  groq.chat.completions.create({
      messages : [
        { role: "assistant", name:"✨_pi", content: "Bienvenue dans la session de brainstorming pour le projet univers-mc.cloud. Prêt à vous Connecter ?" },
        { role: "system", content: "Step 1 : Initialiser le mode Brainstorming avec Pi  setup emoji." },
        { role: "assistant",name:"✨_pi", content: "database emoji (✨:request-ia)(📶: wireless signal or network or no! 📵: no signal )(📡: satellite dish )(🛰; sat)d'un plan d'action pour la gestion signal sur la frequence 432 hz (📡: satellite [🛰] ++}) ? orbit TimeStamp request gravity (calculer la force de gravitation entre la Terre et un satellite en orbite pour f=432hz) ) "},
        { role: "system", content: "Step 1-2 : Développement Timestamp unix ++ loading signal : [📡 - - - 3% 🛰 avant la connection." },
        { role: "assistant", name:"✨_pi", content: "Step 1-3 : Développement : 🛰: Cet emoji représente un satellite, qui est  conçu pour orbiter (newton gravity {formule chmod =x g(f.432hz)asyn().js}) autour de plaNet_ ou .io (ou 'i' sur sur orbit et o la planet() en queston) d'une autre planète. Les satellites sont utilisés pour diverses applications, telles que les communications, la navigation et la recherche scientifique ." },
      {
      "role": "system",
      "name":"systemDream",
      "content": "Step 2 : setup du satelite [pi_sat]"
      },
      {
        "role": "assistant",
        "name": "[✨pi_sat]",
        "content": "Step 2 : setup du satelite [✨pi_sat] train/docs/rea"
        },
        {
          "role": "assistant",
          "name": "[✨_Mike]",
          "content": "bonjours, comment créer une asysnc avec un fichier config.json"
          },
      ],
    model: "mixtral-8x7b-32768",
    temperature: 0.3,
    max_tokens: 2048,
    top_p: 1,
  }).then((chatCompletion) => {
    // Traitement de la réponse de l'IA
    const iaResponse = chatCompletion.choices[0]?.message?.content;
    // Chemin du fichier de sortie
    const outputFilePath = `train/✨-pi_${new Date().toISOString().replace(/[-:TZ]/g, '')}.md`;
    // Écriture de la réponse dans un fichier
    fs.writeFileSync(outputFilePath, iaResponse);
    console.log(`'✨_pi : 'Réponse enregistrée dans ${outputFilePath}`);
});
}

// Exécution de la fonction principale
main();


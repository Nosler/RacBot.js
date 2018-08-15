const Discord = require('discord.js');
const client = new Discord.Client();

var bot_token = null;

var file_reader = require('readline').createInterface({
  input: require('fs').createReadStream('token.txt')
});

file_reader.on('line', function(line) {
  console.log("FETCHING TOKEN");
  console.log(line);
  bot_token = line;
})

var file_reader = require('readline').createInterface({
  input: require('fs').createReadStream('token.txt')
});

file_reader.on('line', function(line) {
  console.log("FETCHING TOKEN");
  console.log(line);
  bot_token = line;
})


var facts = [
   'One hypothesis for the dark fur around a raccoon\'s eyes is that it may help reduce glare and enhance night vision.',
   'The number of rings on a raccoon\'s tail range from 5 to 8.',
   'Raccoons can live up to 20 years in captivity',
   'Raccoons were introduced into Germany, Russia, and Japan in the 20th century.',
   'The first urban sighting of a raccoon was in Cincinnati in the 1920\'s.',
   'Raccoons give birth to 4-5 kits in a litter.',
   'The scientific name for raccoons is *Procyon lotor*, which means “Before-dog washer”.',
   'Raccoons can run at speeds of up to 15 miles per hour.',
   '\'Raccoon\' is a Powahatan word meaning “animal that scratches with its hands”',
   'The raccoon is the largest member of the *Procyonidae* family.',
   'The American Whig Party used the a raccoon as their mascot in the 1830\'s.',
   'Raccoons can both sweat and pant to disperse of heat, whereas most mammals can only perform one.',
   'Studies on raccoons have shown that raccoons have a learning speed akin to apes.',
   'Raccoons were made into popular pets and imported to Japan after the success of the 1977 anime, Rascal the Raccoon.',
   'Sterling North’s *Rascal* is an an autobiographical book, documenting a year of his life in which he raised a raccoon named Rascal.',
   'A group of raccoons is called a \'Gaze\'.',
   'The Germanic word for raccoon is *Waschbär*, which translates to “The Washing Bear” due to the animal\'s habit of dousing food in water.',
   'French Naturalist Comte de Buffon believed raccoons doused their food in water due to an inability to produce saliva, we now know this to be false.',
   'Calivin Coolidge had a pet raccoon named Rebecca.',
   'The comic book character Rocket Raccoon was directly inspired by Paul McCartney’s faux-western song, Rocky Raccoon.',
   'Raccoons communicate with each other using over 200 different sounds and 12-15 different calls.',
   'Raccoons are capable of opening doors, jars, bottles and latches.',
   'There has only been one recorded human death from raccoon rabies in the United States.',
   'Raccoons can withstand a drops of 35 feet.',
   'On average, Adult raccoons weigh 15 to 40 pounds. However, there have been specimens from urban areas that weigh up to 60 pounds.',
   'Raccoons make several types of noises, including purrs, chittering sounds, and various growls, snarls, and snort.',
   'Raccoons can rotate their hind feet 180 degrees and descend trees headfirst.',
   'The famous Sioux leader Spotted Tail took his name from a raccoon skin hat with the tail attached he acquired from a fur trader.',
   'When fed cat food over a long period of time, raccoons can develop gout.',
   'Since 1987, the raccoon has been identified as the most important wild furbearer in North America in terms of revenue.',
   'The Dakota Sioux believe raccoons have natural spirit powers, as their masks resemble facial paintings used during rituals to connect to spirit beings.',
   'Entrances to raccoon dens are usually at least 4 inches high and 6 inches wide.',
   'The Spanish word for raccoons, *mapache* was borrowed from the Aztec Nahualti word *mapachitli*, meaning \'[the] one who takes everything in its hands\'.',
   'The famous Sioux leader Spotted Tail took his name afrom a raccoon skin hat he acquired from a fur trader.',
   'When fed cat food over a long period of time, raccoons can develop gout.',
   'As of 1987, the raccoon was identified as the most important wild furbearer in terms of revenue.',
   'The Dakota Sioux believe the raccoon has natural spirit powers, since its mask resembles the facial paintings (two-fingered swashes of black and white) used during rituals to connect to spirit beings.',
   'The percentage of urban raccoons sleeping in abandoned or occupied houses varies from 15-43%. With the lowest being Washginton DC, USA and the highest being Kassel, Germany.'
];

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '!fact') {
    msg.reply(facts[Math.floor(Math.random()*38)]);
  }
});

yield sleep(5000);
client.loginWithToken(bot_token, out);

function output(error, token){
  if (error) {
    console.log("Error Logging in with token ${error}");
    yield sleep(5000);
    client.login(bot_token);
}

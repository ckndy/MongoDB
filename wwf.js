use wwf;

db.createCollection("Wrestlers", {capped: true, max: 6});

db.wrestlers.insert([{

  name: "Hulk Hogan",
  finisher: "Leg Drop"
},
{
  name: "The Ultimate Warrior",
  finisher: "Gorilla Press Slam + Big Splash"
},
{
  name: "Randy Savage",
  finisher: "Flying Elbow Drop"
},
{
  name: "The Undertaker",
  finisher: "Tombstone Piledriver"
},
{
  name: "Bret Hart",
  finisher: "The Sharpshooter"
},
{
  name: "Shawn Michaels",
  finisher: "Sweet Chin Music"
}]);

db.wrestlers.find().pretty();

db.dropDatabase();




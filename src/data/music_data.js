function importAll(r) {
  let files = {};
  r.keys().forEach((item) => {
    files[item.replace("./", "")] = r(item).default;
  });
  return files;
}

const soundtracks = importAll(
  require.context("../assets/audio/Soundtracks", false, /\.(mp3)$/)
);
const piano = importAll(
  require.context("../assets/audio/Piano", false, /\.(mp3)$/)
);
const ensemble = importAll(
  require.context("../assets/audio/Ensemble", false, /\.(mp3)$/)
);

const music_data = {
  Header: {
    title: "Music",
    subtitle:
      "My library of compositions and arrangements. Starred tracks are recommendations, my personal favourites.",
  },
  Soundtracks: {
    title: "Soundtracks",
    paragraph: "Epic film and video game-inspired soundtracks. ",
    music: [
      {
        title: "Ancient Fantasies",
        description:
          "Adventurous and fast-paced soundtracks, evocative of fantasy sceneries.",
        tracks: [
          {
            title: "To The Lands Beyond",
            source: soundtracks["ToTheLandsBeyond.mp3"],
            starred: true,
          },
          {
            title: "Wonderland",
            source: soundtracks["Wonderland.mp3"],
          },
          {
            title: "Little Fantasy Suite",
            source: soundtracks["LittleFantasySuite.mp3"],
            starred: true,
          },
          {
            title: "Fallen",
            source: soundtracks["Fallen.mp3"],
          },
          {
            title: "Atlantis",
            source: soundtracks["Atlantis.mp3"],
          },
          {
            title: "Ancient Awakening",
            source: soundtracks["AncientAwakening.mp3"],
          },
        ],
      },
      {
        title: "Natura",
        description: "Soundtracks encapsulating the beauty of mother nature.",
        tracks: [
          {
            title: "Windward",
            source: soundtracks["Windward.mp3"],
            starred: true,
          },
          {
            title: "The Mist Of The Fjords",
            source: soundtracks["TheMistOfTheFjords.mp3"],
            starred: true,
          },
          {
            title: "Amazon",
            source: soundtracks["Amazon.mp3"],
          },
          {
            title: "Everest",
            source: soundtracks["Everest.mp3"],
          },
          {
            title: "Arctic Apricity",
            source: soundtracks["ArcticApricity.mp3"],
          },
          {
            title: "Arise! (Fanfare)",
            source: soundtracks["Arise.mp3"],
          },
        ],
      },
      {
        title: "Other",
        description: "Miscellaneous soundtracks.",
        tracks: [
          {
            title: "Sail!",
            source: soundtracks["Sail.mp3"],
          },
          {
            title: "Arcane Abyss",
            source: soundtracks["ArcaneAbyss.mp3"],
          },
          {
            title: "Azure Ascent",
            source: soundtracks["AzureAscent.mp3"],
          },
        ],
      },
    ],
  },
  Piano: {
    title: "Solo Piano",
    paragraph:
      "Works for solo piano, covering a wide range of styles, from Romantic to Modern.",
    music: [
      {
        title: "The Birthstones Suite",
        description: "One for each of the twelve birthstones. Modern-style.",
        tracks: [
          {
            title: "I - Garnet",
            source: piano["1 - Garnet.mp3"],
          },
          {
            title: "II - Amethyst",
            source: piano["2 - Amethyst.mp3"],
          },
          {
            title: "III - Aquamarine",
            source: piano["3 - Aquamarine.mp3"],
          },
          {
            title: "IV - Diamond",
            source: piano["4 - Diamond.mp3"],
          },
          {
            title: "V - Emerald",
            source: piano["5 - Emerald.mp3"],
          },
          {
            title: "VI - Pearl",
            source: piano["6 - Pearl.mp3"],
          },
          {
            title: "VII - Ruby",
            source: piano["7 - Ruby.mp3"],
          },
          {
            title: "VIII - Peridot",
            source: piano["8 - Peridot.mp3"],
            starred: true,
          },
          {
            title: "IX - Sapphire",
            source: piano["9 - Sapphire.mp3"],
            starred: true,
          },
          {
            title: "X - Opal",
            source: piano["10 - Opal.mp3"],
          },
        ],
      },
      {
        title: "Modern",
        description: "Modern, pop and film-style piano pieces.",
        tracks: [
          {
            title: "Halcyon Days",
            source: piano["HalcyonDays.mp3"],
            starred: true,
          },
          {
            title: "Ataraxia",
            source: piano["Ataraxia.mp3"],
          },
          {
            title: "Endgame",
            source: piano["Endgame.mp3"],
          },
          {
            title: "To The Stars",
            source: piano["ToTheStars.mp3"],
          },
        ],
      },
      {
        title: "Post-Classical",
        description: "Styles ranging from the 18th to 20th centuries.",
        tracks: [
          {
            title: "Fugue on a Theme by Rachmaninoff",
            source: piano["RachmaninoffFugue.mp3"],
            starred: true,
          },
          {
            title: "Etude Minimaliste",
            source: piano["MinimalismEtude.mp3"],
          },
          {
            title: 'Atonal "Cereal" Fugue',
            source: piano["AtonalFugue.mp3"],
          },
          {
            title: "Waltz in A Flat Major",
            source: piano["WaltzInAFlatMajor.mp3"],
          },
          {
            title: "Chopin Etude Medley",
            source: piano["ChopinEtudeMedley.mp3"],
          },
          {
            title: "Variations on a Theme by Beethoven",
            source: piano["PathetiqueVariations.mp3"],
          },
          {
            title: "Coconut Rag",
            source: piano["CoconutRag.mp3"],
          },
          {
            title: "Nocturne in F Minor",
            source: piano["NocturneInFMinor.mp3"],
          },
          {
            title: "Polonaise in B Major",
            source: piano["PolonaiseInBMajor.mp3"],
          },
        ],
      },
      {
        title: "Contemplations",
        description: "A set of reflective contemporary pieces.",
        tracks: [
          {
            title: "I",
            source: piano["Contemplation 1.mp3"],
          },
          {
            title: "II",
            source: piano["Contemplation 2.mp3"],
          },
          {
            title: "III",
            source: piano["Contemplation 3.mp3"],
          },
          {
            title: "IV",
            source: piano["Contemplation 4.mp3"],
          },
          {
            title: "V",
            source: piano["Contemplation 5.mp3"],
            starred: true,
          },
          {
            title: "Sphinxes",
            source: piano["Contemplation Sphinxes.mp3"],
          },
        ],
      },
    ],
  },
  Ensemble: {
    title: "Ensemble and Orchestra",
    paragraph:
      "My compositions for orchestra, as well as smaller ensembles such as string quartets and piano trios.",
    music: [
      {
        title: "Piano Concerto in C",
        description: "A culmination of my musical studies up until this point.",
        tracks: [
          {
            title: "I - Allegro Moderato",
            source: ensemble["Concerto 1.mp3"],
          },
          {
            title: "II - Andante-Vivace",
            source: ensemble["Concerto 2.mp3"],
          },
          {
            title: "III - Allegro Maestoso",
            source: ensemble["Concerto 3.mp3"],
            starred: true,
          },
        ],
      },
      {
        title: "The High Cards",
        description:
          "A piano-trio suite, capturing the symbolism of each suit.",
        tracks: [
          {
            title: "I - Ace Of Spades",
            source: ensemble["AceOfSpades.mp3"],
            starred: true,
          },
          {
            title: "II - Ace Of Hearts",
            source: ensemble["AceOfHearts.mp3"],
          },
          {
            title: "III - Ace Of Clubs",
            source: ensemble["AceOfClubs.mp3"],
          },
          {
            title: "IV - Ace Of Diamonds",
            source: ensemble["AceOfDiamonds.mp3"],
          },
        ],
      },
      {
        title: "Suite of the Elements",
        description:
          "An orchestral suite, inspired by the four elements of nature.",
        tracks: [
          {
            title: "I - Water",
            source: ensemble["1 - Water.mp3"],
          },
          {
            title: "II - Air",
            source: ensemble["2 - Air.mp3"],
          },
          {
            title: "III - Earth",
            source: ensemble["3 - Earth.mp3"],
            starred: true,
          },
          {
            title: "IV - Fire",
            source: ensemble["4 - Fire.mp3"],
          },
        ],
      },
      {
        title: "Macbeth Suite",
        description:
          "Composed for an English project. 5 movements, one for each act.",
        tracks: [
          {
            title: "Movement I",
            source: ensemble["Macbeth I.mp3"],
          },
          {
            title: "Movement II",
            source: ensemble["Macbeth II.mp3"],
          },
          {
            title: "Movement III",
            source: ensemble["Macbeth III.mp3"],
          },
          {
            title: "Movement IV",
            source: ensemble["Macbeth IV.mp3"],
          },
          {
            title: "Movement V",
            source: ensemble["Macbeth V.mp3"],
            starred: true,
          },
        ],
      },
      {
        title: "Modern",
        description: "Harmonies used are reflective of my own writing style.",
        tracks: [
          {
            title: 'Prelude - "Rebirth" (String Orchestra)',
            source: ensemble["RebirthPrelude.mp3"],
            starred: true,
          },
          {
            title: 'Prelude - "Sacrifice" (Symphony Orchestra)',
            source: ensemble["SacrificePrelude.mp3"],
          },
          {
            title: 'Prelude - "Evening Airs" (String Orchestra)',
            source: ensemble["EveningAirsPrelude.mp3"],
          },
          {
            title: "Halcyon Days (Piano Trio)",
            source: ensemble["HalcyonDaysPianoTrio.mp3"],
          },
          {
            title: "Taiko Phase",
            source: ensemble["TaikoPhase.mp3"],
          },
        ],
      },
      {
        title: "Classical",
        description:
          "Inspired by the works of Romantic and Late Romantic composers.",
        tracks: [
          {
            title: "Waltz in A Flat Major",
            source: ensemble["Waltz No.1.mp3"],
            starred: true,
          },
          {
            title: "Waltz in C Sharp Minor",
            source: ensemble["Waltz No.2.mp3"],
          },
          {
            title: 'Fugue on "We Wish You A Merry Christmas"',
            source: ensemble["WeWishYouAMerryChristmasFugue.mp3"],
          },
          {
            title: "Fugue on a Theme by Rachmaninoff (String Quartet)",
            source: ensemble["RachmaninoffFugue.mp3"],
          },
        ],
      },
    ],
  },
  Footer: {
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
};

export default music_data;

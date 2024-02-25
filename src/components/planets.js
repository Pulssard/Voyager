const planets = [
    {
        id:1,
        title: "Mercury",
        text: "The closest planet to the Sun, Mercury is a small, rocky world with a thin atmosphere.",
        path: "",
        status: "sale",
        price: 5
    },
    {
        id:2,
        title: "Venus",
        text: "Venus is known for its thick atmosphere, composed mainly of carbon dioxide, and its extremely high surface temperatures.",
        path: "",
        status: "",
        price: 7
    },
    {
        id:3,
        title: "Earth",
        text: "Our home planet, Earth is the only known place in the universe where life exists.",
        path: "",
        status: "sale",
        price: 8
    },
    {
        id:4,
        title: "Mars",
        text: "The Red Planet, Mars is a cold desert world with a thin atmosphere, and it's the focus of exploration for potential future human colonization.",
        path: "",
        status: "" ,
        price: 3
    },
    {
        id:5,
        title: "Jupiter",
        text: "The largest planet in our solar system, Jupiter is a gas giant with a thick atmosphere and dozens of moons.",
        path: "",
        status: "sale",
        price: 5
    },
    {
        id:6,
        title: "Saturn",
        text: "Saturn is famous for its stunning ring system, composed mostly of ice particles.",
        path: "",
        status: "sale",
        price: 2
    },
    {
        id:7,
        title: "Uranus",
        text: "Uranus is an ice giant, with a chilly atmosphere made mostly of hydrogen and helium.",
        path: "",
        status: "sale",
        price: 6
    },
    {
        id:8,
        title: "Neptune",
        text: "Neptune is the farthest planet from the Sun and is known for its deep blue coloration due to methane in its atmosphere.",
        path: "",
        status: "" ,
        price: 21
    }
    
];

const constellations = [
    {
      id: 9,
      title: "Cassiopeia",
      text: "Cassiopeia is a constellation in the northern sky, named after the vain queen Cassiopeia in Greek mythology.",
      status: "sale",
      price: 87
    },
    {
      id: 10,
      title: "Pegasus",
      text: "Pegasus is a constellation in the northern sky, named after the winged horse Pegasus in Greek mythology.",
      status: "",
      price: 45
    },
    {
      id: 11,
      title: "Orion",
      text: "Orion is a prominent constellation located on the celestial equator and visible throughout the world.",
      status: "",
      price: 112
    }
  ];

  const stars = [
    {
      id: 12,
      title: "Pulsar",
      text: "A pulsar is a highly magnetized rotating neutron star that emits beams of electromagnetic radiation out of its magnetic poles.",
      status: "sale",
      price: 72
    },
    {
      id: 13,
      title: "Brown Dwarf",
      text: "A brown dwarf is a substellar object that is neither a star nor a planet, but something in between.",
      status: "",
      price: 23
    },
    {
      id: 14,
      title: "Sun",
      text: "The Sun is the star at the center of the Solar System. It is a nearly perfect sphere of hot plasma, with internal convective motion that generates a magnetic field.",
      status: "",
      price: 96
    },
    {
      id: 15,
      title: "Blue Star",
      text: "Blue stars are hot luminous stars, with surface temperatures of 10,000 to 40,000 K. They appear blue because of their high temperature.",
      status: "sale",
      price: 17
    }
  ];

  const galaxies = [
    {
      id: 16,
      title: "Milky Way",
      text: "The Milky Way is the galaxy that contains our Solar System. It is a barred spiral galaxy with a diameter between 150,000 and 200,000 light-years.",
      status: "",
      price: 115
    },
    {
      id: 17,
      title: "Andromeda",
      text: "The Andromeda Galaxy is a barred spiral galaxy approximately 2.537 million light-years from Earth, making it the nearest spiral galaxy to the Milky Way.",
      status: "",
      price: 81
    },
    {
      id: 18,
      title: "Hoag's Object",
      text: "Hoag's Object is a non-typical galaxy of the type known as a ring galaxy. It is named after Arthur Hoag who discovered it in 1950.",
      status: "sale",
      price: 32
    }
  ];

export default planets;
export { constellations, stars, galaxies };



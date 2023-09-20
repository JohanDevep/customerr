module.exports = {
  GOOGLE_MAP_title:
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5592.654656826517!2d-73.55886!3d45.503489!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9b1374e784c0934e!2sSoins%20Karisma%20Inc%20(%20Si%C3%A8ge%20Social%20)!5e0!3m2!1sen!2sus!4v1676415296785!5m2!1sen!2sus",
  GOOGLE_MAP_KEY: process.env.REACT_APP_GOOGLE_MAP_KEY,
  GOOGLE_MAP_URL: `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAP_KEY}&v=3.exp&libraries=geometry,drawing,places?hl=en-US`,
  CURRENCY:{
    CANADIAN_DOLLAR:"CAD",
    USD_DOLLAR:"USD"
  },
  MAIN_LOCATION: [
    {
      id: "0",
      name: "Soins Karismä Salon",
      title: "249 Rue Saint-Jacques, Montréal, QC H2Y 1M6, Canada",
      latitude: "45.5034923",
      longitude: "-73.5610487",
      status: "active",
    },
  ],
  PLACES: [
    {
      id: "0",
      name: "Soins Karismä Par Beautémarc",
      title: "1191 Av. Cartier Local 17, Québec, QC G1R 2S9",
      latitude: "46.8029033",
      longitude: "-71.2264413",
      status: "active",
    },
    {
      id: "1",
      name: "Soins Karismä Par Téquila & Rhum",
      title: "2685 Ch Sainte-Marie A, Mascouche, Quebec J7K 1M8",
      latitude: "45.752154",
      longitude: "-73.6155181",
      status: "active",
    },
    {
      id: "2",
      name: "Soins Karismä Salon",
      title: "9335 Bd Lacordaire, Saint-Léonard, QC H1R 2B6",
      latitude: "45.5986649",
      longitude: "-73.6122212",
      status: "active",
    },
  ],
  SALONS_DETAILS: [
    {
      uuid: "0",
      name: "Salon Soins Karismä",
      location: "249 Rue Saint-Jacques, Montréal, QC H2Y 1M6, Canada",
      timing: {
        open: "",
        close: "",
      },
      owner_review: "",
      media: [
        {
          img: "https://dnyhc7e4ce952.cloudfront.net/media/__sized__/images/010-ST-JACQ-main-edited-1_ae292e866c-thumbnail-512x512-70.jpg",
        },
      ],
      salons_description:
        "Our Soins Karismä salon has all you need to have an unforgettable experience; you will feel at home. " +
        "Check the complete list of our services using your Dashboard.",
      rating: "4.6",
      total_reviews: "30",
    },
    {
      uuid: "1",
      name: "Salon Soins Karismä",
      location: "740 Rue Principale #106, Granby, Quebec J2G 2Y4",
      timing: {
        open: "",
        close: "",
      },
      owner_review: "",
      media: [
        {
          img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/263306754.jpg?k=adfc589917e37e5365b4b4073fb6f7bf8cf107154d1cd3495c30c60e061a64ca&o=&hp=1",
        },
      ],
      salons_description:
        "Our Soins Karismä salon has all you need to have an unforgettable experience; you will feel at home. Check the complete list of our services using your Dashboard.",
      rating: "4.6",
      total_reviews: "30",
    },
    {
      uuid: "2",
      name: "Salon Soins Karismä",
      location: "3 Rue Sunnydale, Dollard-des-Ormeaux, QC H9B 1E1",
      timing: {
        open: "",
        close: "",
      },
      owner_review: "",
      media: [
        {
          img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/263306754.jpg?k=adfc589917e37e5365b4b4073fb6f7bf8cf107154d1cd3495c30c60e061a64ca&o=&hp=1",
        },
      ],
      salons_description:
        "Our Soins Karismä salon has all you need to have an unforgettable experience; you will feel at home. Check the complete list of our services using your Dashboard.",
      rating: "4.6",
      total_reviews: "30",
    },
    {
      uuid: "0",
      name: "Soins Karismä Par Beautémarc",
      location: "1191 Av. Cartier Local 17, Québec, QC G1R 2S9",
      timing: {
        open: "",
        close: "",
      },
      owner_name: "Marc Boulet",
      owner_image:
        "https://storage.googleapis.com/soinskarisma-salon-images/salon-owners/Salon%20Owner%20Quebec.jpg",
      owner_review:
        "Manager and Salon Owner of Quebec, Marc has more than 25 years of experience in the beauty industry. Marc finds joy in meeting his clients directly, talking to them and caring about the service they receive. He has trained his team thoroughly to provide quality services.\n" +
        "\n" +
        "Soins Karismä Par Beautémarc is constantly evolving to offer you a complete and innovative range of services. Check the complete list of our services using your Dashboard.\n",
      media: [
        {
          img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/263306754.jpg?k=adfc589917e37e5365b4b4073fb6f7bf8cf107154d1cd3495c30c60e061a64ca&o=&hp=1",
        },
      ],
      salons_description:
        "Our Soins Karismä salon has all you need to have an unforgettable experience; you will feel at home. Check the complete list of our services using your Dashboard.",
      rating: "4.6",
      total_reviews: "30",
    },
    {
      uuid: "1",
      name: "Soins Karismä Par Téquila & Rhum ",
      location: "2685 Ch Sainte-Marie A, Mascouche, Quebec J7K 1M8",
      timing: {
        open: "",
        close: "",
      },
      owner_name: "Yvena Henry",
      owner_image:
        "https://storage.googleapis.com/soinskarisma-salon-images/salon-owners/Salon%20Owner%20Mascouche.jpg",
      owner_review:
        "Manager and salon owner on Mascouche, Yvena has more than 15 years of experience in the beauty industry. Yvena loves to welcome her clients and listen to their needs in order to train her team with the best possible techniques. She takes care of every detail so that each client spends a unique moment in the salon.\n" +
        "\n" +
        "Soins Karismä Par Téquila & Rhum offers you an experience full of novelty, pleasure, and purity. Check the complete list of our services using your Dashboard.\n",
      media: [
        {
          img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/263306754.jpg?k=adfc589917e37e5365b4b4073fb6f7bf8cf107154d1cd3495c30c60e061a64ca&o=&hp=1",
        },
      ],
      salons_description:
        "Our Soins Karismä salon has all you need to have an unforgettable experience; you will feel at home. Check the complete list of our services using your Dashboard.",
      rating: "4.6",
      total_reviews: "30",
    },
    {
      uuid: "2",
      name: "Salon Soins Karismä",
      location: "9335 Bd Lacordaire, Saint-Léonard, QC H1R 2B6",
      timing: {
        open: "",
        close: "",
      },
      owner_name: "Yvena Henry",
      owner_image:
        "https://storage.googleapis.com/soinskarisma-salon-images/salon-owners/Salon%20owner%20St%20Leonard.jpg",
      owner_review:
        "Manager of the Saint-Leonard salon in Montreal, Ada has more than 25 years of experience in the beauty industry, including 30 years of experience in hairdressing. Smiling, she gives great energy within the salon. Ada finds happiness in serving her clients and being in contact with different people every day.",
      media: [
        {
          img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/263306754.jpg?k=adfc589917e37e5365b4b4073fb6f7bf8cf107154d1cd3495c30c60e061a64ca&o=&hp=1",
        },
      ],
      salons_description:
        "Our Soins Karismä salon has all you need to have an unforgettable experience; you will feel at home. Check the complete list of our services using your Dashboard.",
      rating: "4.6",
      total_reviews: "30",
    },
  ],
};

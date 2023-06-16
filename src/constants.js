const techs = [
  'HTML',
  'CSS',
  'JS',
  'React',
  'Git',
  'Express.js',
  'mongoDB',
];

const portfoloiList = [
  {
    text: 'Статичный сайт',
    link: 'https://tereneka.github.io/how-to-learn/',
  },
  {
    text: 'Адаптивный сайт',
    link: 'https://tereneka.github.io/rus-travel-guide/',
  },
  {
    text: 'Одностраничное приложение',
    link: 'https://mesto.tereneka.nomoredomains.monster',
  },
];

const moviesCardList = [
  [
    {
      nameRu: 'В погоне за Бенкси',
      duration: 40,
      image:
        'https://images.unsplash.com/photo-1681999683665-6902894af42c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDcyfGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
      movieId: 1,
    },
    {
      nameRu: 'Письма богу',
      duration: 68,
      image:
        'https://images.unsplash.com/photo-1677869057920-419fa822c0fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
      movieId: 2,
    },
    {
      nameRu: 'Лето',
      duration: 130,
      image:
        'https://images.unsplash.com/photo-1685934375263-10a654c583d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI1fGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
      movieId: 3,
    },
    {
      nameRu: 'ЮЗЗЗ',
      duration: 150,
      image:
        'https://images.unsplash.com/photo-1673650783213-482e66f87916?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4M3xobWVudlFoVW14TXx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
      movieId: 4,
    },
    {
      nameRu: 'В погоне за Бенкси',
      duration: 27,
      image:
        'https://images.unsplash.com/photo-1681999683665-6902894af42c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDcyfGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
      movieId: 5,
    },
    {
      nameRu: 'Письма богу',
      duration: 68,
      image:
        'https://images.unsplash.com/photo-1677869057920-419fa822c0fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
      movieId: 6,
    },
    {
      nameRu: 'Лето',
      duration: 130,
      image:
        'https://images.unsplash.com/photo-1685934375263-10a654c583d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI1fGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
      movieId: 7,
    },
    {
      nameRu: 'ЮЗЗЗ',
      duration: 150,
      image:
        'https://images.unsplash.com/photo-1673650783213-482e66f87916?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4M3xobWVudlFoVW14TXx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
      movieId: 8,
    },
    {
      nameRu: 'В погоне за Бенкси',
      duration: 27,
      image:
        'https://images.unsplash.com/photo-1681999683665-6902894af42c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDcyfGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
      movieId: 9,
    },
    {
      nameRu: 'Письма богу',
      duration: 68,
      image:
        'https://images.unsplash.com/photo-1677869057920-419fa822c0fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
      movieId: 10,
    },
    {
      nameRu: 'Лето',
      duration: 130,
      image:
        'https://images.unsplash.com/photo-1685934375263-10a654c583d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI1fGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
      movieId: 11,
    },
    {
      nameRu: 'ЮЗЗЗ',
      duration: 150,
      image:
        'https://images.unsplash.com/photo-1673650783213-482e66f87916?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4M3xobWVudlFoVW14TXx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
      movieId: 12,
    },
  ],
  [
    {
      nameRu: 'В погоне за Бенкси',
      duration: 40,
      image:
        'https://images.unsplash.com/photo-1681999683665-6902894af42c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDcyfGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
      movieId: 13,
    },
    {
      nameRu: 'Письма богу',
      duration: 68,
      image:
        'https://images.unsplash.com/photo-1677869057920-419fa822c0fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
      movieId: 14,
    },
    {
      nameRu: 'Лето',
      duration: 130,
      image:
        'https://images.unsplash.com/photo-1685934375263-10a654c583d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI1fGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
      movieId: 15,
    },
    {
      nameRu: 'ЮЗЗЗ',
      duration: 150,
      image:
        'https://images.unsplash.com/photo-1673650783213-482e66f87916?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4M3xobWVudlFoVW14TXx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
      movieId: 16,
    },
    {
      nameRu: 'В погоне за Бенкси',
      duration: 27,
      image:
        'https://images.unsplash.com/photo-1681999683665-6902894af42c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDcyfGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
      movieId: 17,
    },
    {
      nameRu: 'Письма богу',
      duration: 68,
      image:
        'https://images.unsplash.com/photo-1677869057920-419fa822c0fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
      movieId: 18,
    },
    {
      nameRu: 'Лето',
      duration: 130,
      image:
        'https://images.unsplash.com/photo-1685934375263-10a654c583d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI1fGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
      movieId: 19,
    },
    {
      nameRu: 'ЮЗЗЗ',
      duration: 150,
      image:
        'https://images.unsplash.com/photo-1673650783213-482e66f87916?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4M3xobWVudlFoVW14TXx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
      movieId: 20,
    },
    {
      nameRu: 'В погоне за Бенкси',
      duration: 27,
      image:
        'https://images.unsplash.com/photo-1681999683665-6902894af42c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDcyfGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
      movieId: 21,
    },
    {
      nameRu: 'Письма богу',
      duration: 68,
      image:
        'https://images.unsplash.com/photo-1677869057920-419fa822c0fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
      movieId: 22,
    },
    {
      nameRu: 'Лето',
      duration: 130,
      image:
        'https://images.unsplash.com/photo-1685934375263-10a654c583d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI1fGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
      movieId: 23,
    },
    {
      nameRu: 'ЮЗЗЗ',
      duration: 150,
      image:
        'https://images.unsplash.com/photo-1673650783213-482e66f87916?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4M3xobWVudlFoVW14TXx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
      movieId: 24,
    },
  ],
];

const savedMoviesCardList = [
  {
    nameRu: 'В погоне за Бенкси',
    duration: 40,
    image:
      'https://images.unsplash.com/photo-1681999683665-6902894af42c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDcyfGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    movieId: 1,
  },
  {
    nameRu: 'Письма богу',
    duration: 68,
    image:
      'https://images.unsplash.com/photo-1677869057920-419fa822c0fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fGhtZW52UWhVbXhNfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
    movieId: 2,
  },
  {
    nameRu: 'ЮЗЗЗ',
    duration: 150,
    image:
      'https://images.unsplash.com/photo-1673650783213-482e66f87916?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4M3xobWVudlFoVW14TXx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60',
    movieId: 24,
  },
];

export {
  techs,
  portfoloiList,
  moviesCardList,
  savedMoviesCardList,
};

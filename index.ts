// Import stylesheets
import './style.css';

// ...So now lets... write TypeScript code!!!

interface invoice {
  id_cliente: string;
  id_empresa: string;
  vencimiento: string;
}

interface payment {
  payment_date: string;
  card: Card;
}

interface Card {
  card_nuber: string;
  due_date: string;
}

let firstCard: Card = { card_nuber: '895375094530', due_date: '2029/01/02' };
let firstPayment: payment = { payment_date: '2023/12/05', card: firstCard };

let vencFmt_: string = '';

if (!!firstPayment?.card?.due_date) {
  const vencCard: string = String(firstPayment?.card?.due_date);
  vencFmt_ = vencCard.replace(/[/]/g, '');
}

console.log(`Vencimiento tarjeta: ${vencFmt_}`);

let firstInvoice: invoice = {
  id_cliente: '36968360',
  id_empresa: 'UNCF',
  vencimiento: '06/27',
};

const { id_cliente, id_empresa, vencimiento } = firstInvoice;

let vencFmt: string = '';

if (!!vencimiento) {
  const venc: string = String(firstInvoice['vencimiento']);
  vencFmt = venc.replace(/[/]/g, '');
}

console.log(`Vencimiento: ${vencFmt}`);

// ###################################################

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1><p>TypeScript Scrapbook</p></h1>`;

interface Person {
  name: string;
  id: number;
  phone: number;
  hasAccess: boolean;
}

const showPersonName = (somebody: Person) => {
  return new Promise<string>((resolve, reject) => {
    if (!!somebody.name) {
      resolve(somebody.name);
    } else {
      reject(`Please enter your name`);
    }
  });
};

const display = async (firstName: string) => {
  const someGuy: Person = {
    name: firstName ?? 'Bobby',
    id: 1,
    phone: 1230987,
    hasAccess: false,
  };
  try {
    const result = await showPersonName(someGuy);
    console.log(`Hello ${result}!!`);
  } catch (err) {
    console.log(err);
  }
};

// display(undefined);

// ###################################################

interface RickAndMorty {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin?: Origin;
  location?: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

interface Origin {
  name: string;
  url: string;
}

interface Location {
  name: string;
  url: string;
}

let ricksAndMortys: Array<RickAndMorty> = [
  {
    id: '19',
    name: 'Antenna Rick',
    status: 'unknown',
    species: 'Human',
    type: 'Human with antennae',
    gender: 'Male',
    origin: {
      name: 'unknown',
      url: '',
    },
    location: {
      name: 'unknown',
      url: '',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/19.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/10'],
    url: 'https://rickandmortyapi.com/api/character/19',
    created: '2017-11-04T22:28:13.756Z',
  },
  {
    id: '38',
    name: 'Beth Smith',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Female',
    origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1',
    },
    location: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/38.jpeg',
    episode: [
      'https://rickandmortyapi.com/api/episode/1',
      'https://rickandmortyapi.com/api/episode/2',
      'https://rickandmortyapi.com/api/episode/3',
      'https://rickandmortyapi.com/api/episode/4',
      'https://rickandmortyapi.com/api/episode/5',
      'https://rickandmortyapi.com/api/episode/6',
      'https://rickandmortyapi.com/api/episode/22',
      'https://rickandmortyapi.com/api/episode/51',
    ],
    url: 'https://rickandmortyapi.com/api/character/38',
    created: '2017-11-05T09:48:44.230Z',
  },
  {
    id: '47',
    name: 'Birdperson',
    status: 'Alive',
    species: 'Alien',
    type: 'Bird-Person',
    gender: 'Male',
    origin: {
      name: 'Bird World',
      url: 'https://rickandmortyapi.com/api/location/15',
    },
    location: {
      name: 'Planet Squanch',
      url: 'https://rickandmortyapi.com/api/location/35',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/47.jpeg',
    episode: [
      'https://rickandmortyapi.com/api/episode/11',
      'https://rickandmortyapi.com/api/episode/16',
      'https://rickandmortyapi.com/api/episode/21',
      'https://rickandmortyapi.com/api/episode/22',
      'https://rickandmortyapi.com/api/episode/26',
      'https://rickandmortyapi.com/api/episode/49',
      'https://rickandmortyapi.com/api/episode/51',
    ],
    url: 'https://rickandmortyapi.com/api/character/47',
    created: '2017-11-05T11:13:36.018Z',
  },
  {
    id: '240',
    name: 'Mr. Goldenfold',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: {
      name: 'Earth (Replacement Dimension)',
      url: 'https://rickandmortyapi.com/api/location/20',
    },
    location: {
      name: 'Earth (Replacement Dimension)',
      url: 'https://rickandmortyapi.com/api/location/20',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/240.jpeg',
    episode: [
      'https://rickandmortyapi.com/api/episode/9',
      'https://rickandmortyapi.com/api/episode/16',
      'https://rickandmortyapi.com/api/episode/17',
      'https://rickandmortyapi.com/api/episode/18',
      'https://rickandmortyapi.com/api/episode/21',
      'https://rickandmortyapi.com/api/episode/22',
      'https://rickandmortyapi.com/api/episode/24',
      'https://rickandmortyapi.com/api/episode/27',
      'https://rickandmortyapi.com/api/episode/30',
      'https://rickandmortyapi.com/api/episode/39',
    ],
    url: 'https://rickandmortyapi.com/api/character/240',
    created: '2017-12-30T17:42:56.349Z',
  },
  {
    id: '328',
    name: 'Slow Rick',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: {
      name: 'unknown',
      url: '',
    },
    location: {
      name: 'Citadel of Ricks',
      url: 'https://rickandmortyapi.com/api/location/3',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/328.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/28'],
    url: 'https://rickandmortyapi.com/api/character/328',
    created: '2018-01-10T16:14:16.331Z',
  },
  {
    id: '407',
    name: 'Regular Tyrion Lannister',
    status: 'Alive',
    species: 'Human',
    type: '',
    gender: 'Male',
    origin: {
      name: 'Interdimensional Cable',
      url: 'https://rickandmortyapi.com/api/location/6',
    },
    location: {
      name: 'Interdimensional Cable',
      url: 'https://rickandmortyapi.com/api/location/6',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/407.jpeg',
    episode: ['https://rickandmortyapi.com/api/episode/8'],
    url: 'https://rickandmortyapi.com/api/character/407',
    created: '2018-04-15T20:50:10.475Z',
  },
];

const rick2Search: string = '19';

const searchRick = (searchId: string) => {
  let rickFound = ricksAndMortys.find((rick) => {
    return rick.id === searchId;
  });
  return rickFound;
};
const found = searchRick(rick2Search);
console.log(found);

// ###################################################

type User = {
  id: string;
  name: string;
};

type Employee = User & {
  email: string;
};

const people: (User | Employee)[] = [
  { id: '1', name: 'Hector' },
  { id: '2', name: 'Achilles' },
  { id: '3', name: 'Priam', email: 'priam@test.com' },
  { id: '4', name: 'Peleus', email: 'peleus@test.com' },
];

const isEmployee = (person: User | Employee): person is Employee => {
  return 'email' in person;
};

people.forEach((person) => {
  isEmployee(person)
    ? console.log(`My employee email is ${person.email}`)
    : console.log(`I am just a person named ${person.name}`);
});

// #####################################################

const colors = ['text-yellow-500', 'text-violet-500', 'text-blue-500'] as const;
type ExtractColor<S extends string> = S extends `text-${infer R}-500` ? R : S;
type Example = ExtractColor<typeof colors[number]>;

const findColor = (color: ExtractColor<typeof colors[number]>) => {
  return colors.find((c) => c.includes(color));
};

findColor('blue');

type language = `Java` | `Python` | `JavaScript` | `C#`;
type country = `us` | `gb` | `de`;
type fullCode = `${language}-${country}`;

const code: fullCode = `JavaScript-gb`;
console.log(`Code: ${code}`);

// #####################################################

interface ingredients {
  vegetables: string;
  meats: string;
  toppings: string[];
}

type choice = { item: string };

const fastFoodOrder = (preference?: choice) => {
  interface GreatSandwich {
    msg: string;
    sandwich: string[];
  }
  const response: string = 'Your hamburger is ready!';
  return new Promise((resolve, reject) => {
    const menu: ingredients = {
      meats: 'beef patties',
      vegetables: 'lettuce',
      toppings: ['mustard', 'ketchup', 'vegan mayo'],
    };

    setTimeout(() => {
      if (!!preference) {
        const weHave = menu.toppings.includes(choice.item);
        if (weHave) {
          let fullSandwich: GreatSandwich = {
            msg: 'Your hamburger is ready!',
            sandwich: ['cucumber', 'tomatoes', 'cheese', 'bacon', 'lettuce'],
          };
          resolve(fullSandwich);
        } else {
          reject('No vegan Mayo');
        }
      } else {
        reject({ error: 'Sorry your choice is not available.' });
      }
    }, 5000);
  });
};

let choice: choice = { item: 'vegan mayo' };
const go2FastFood = fastFoodOrder(choice)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

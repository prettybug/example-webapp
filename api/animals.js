import { sql } from '@vercel/postgres';

const example_data = [
    {name: "Tiger", color: "yellow"}, 
    {name: "Parrot", color: "red"},
    {name: "Turtle", color: "green"},
    {name: "Wombat", color: "brown"},
]

export default async(request, response) => {
  try {
    const result = await sql`SELECT * FROM animals;`;
    console.log({result})
  } catch (error) {
    console.error({error, caller: "animals.js"})
  }

  return response.json({animals: example_data});
}
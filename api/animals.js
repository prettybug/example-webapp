import { sql } from '@vercel/postgres';

export default async(request, response) => {
  try {
    const result = await sql`SELECT * FROM animals;`;
    return response.json({animals: result.rows});
  } catch (error) {
    return response.json({animals: []});
  }

}
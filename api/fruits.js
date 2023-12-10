import { sql } from '@vercel/postgres';

export default async(request, response) => {
  try {
    const result = await sql`SELECT * FROM fruits;`;
    return response.json({fruits: result.rows});
  } catch (error) {
    return response.json({fruits: []});
  }

}
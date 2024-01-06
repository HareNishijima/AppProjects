import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';

export type PostData = {
	id: String,
	top: String,
	content: String,
};

export async function getPosts(){

  noStore();

  try {
    const data = await sql<PostData>`SELECT * FROM posts`;
    return data.rows;
  } catch (e) {
    console.error(e);
    throw e;
  }
}
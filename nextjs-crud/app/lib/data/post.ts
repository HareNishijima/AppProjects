import { sql } from '@vercel/postgres';
import { unstable_noStore as noStore } from 'next/cache';
const { v4 } = require("uuid");

export type PostData = {
	id: string,
	top: string,
	content: string,
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

export async function postPosts(top :string, content: string){
  noStore();
  const uuid = v4();

  try {
    const data = await sql<PostData>`INSERT INTO posts VALUES(${uuid}, ${top}, ${content})`;
    return data.rows;
  } catch (e) {
    console.error(e);
    throw e;
  }
}

export async function deletePost(id: string){
  noStore();

  try {
    const data = await sql<PostData>`DELETE FROM posts WHERE id = ${id}`;
    return data.rows;
  } catch (e) {
    console.error(e);
    throw e;
  }
}
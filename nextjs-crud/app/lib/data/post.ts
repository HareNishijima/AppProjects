import { sql } from '@vercel/postgres';
const { db } = require("@vercel/postgres");
import { unstable_noStore as noStore } from 'next/cache';
const { v4 } = require("uuid");

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

export async function postPosts(top :string, content: string){
  const uuid = v4();

  try {
    console.log(uuid, top, content);
    
    const data = await sql<PostData>`INSERT INTO posts VALUES(${uuid}, ${top}, ${content})`;
    return data.rows;
  } catch (e) {
    console.error(e);
    throw e;
  }
}
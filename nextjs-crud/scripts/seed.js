const { db } = require("@vercel/postgres");

(async () => {
  try {
    const client = await db.connect();

    await createPosts(client);
    //await seedData(client);

    await client.end();
  } catch (e) {
    console.error("An error occurred while attempting to seed the database:", e);
  }
})();

async function createPosts(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    await client.sql`
      CREATE TABLE IF NOT EXISTS posts (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        top CHAR(1) NOT NULL,
        content VARCHAR(255) NOT NULL
      );
    `;
    console.log(`Created "posts" table`);
  } catch (e) {
    console.error("Error seeding posts:", e);
    throw e;
  }
}

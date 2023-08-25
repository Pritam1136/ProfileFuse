import { getCollection } from "astro:content";

async function getUsers() {
  const users = await getCollection("data", ({ data }) => {
    return data;
  });
  return users.map((user) => ({
    slug: user.slug,
    name: user.data.name,
    img: user.data.img,
  }));
}

export async function get({}) {
  return new Response(JSON.stringify(await getUsers()), {
    status: 200,
    headers: {
      "Content-type": "application/json",
    },
  });
}

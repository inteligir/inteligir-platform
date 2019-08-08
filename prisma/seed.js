require('module-alias/register');
const prisma = require('@server/services/db');

async function main() {
  try {
    await prisma.mutation.createUser({
      data: {
        username: 'kyh',
        email: 'im.kaiyu@gmail.com',
        password:
          '$2b$10$dqyYw5XovLjpmkYNiRDEWuwKaRAvLaG45fnXE5b3KTccKZcRPka2m', // "secret42",
        permissions: { set: ['USER'] },
        courses: {
          create: [
            {
              title: 'Intro to JavaScript',
              emoji: '💻',
              description: 'Learn the programming language of the web',
              categories: ['FEATURED'],
            },
          ],
        },
      },
    });
  } catch (e) {
    console.log(e);
  }
}

main();
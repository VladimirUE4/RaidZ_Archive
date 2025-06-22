import axios from 'axios';


const DISCORD_API_URL = 'https://discord.com/api/v9';
const DISCORD_BOT_TOKEN = '1247219621543546891';
const DISCORD_GUILD_ID = '1196732471757250630';
const DESIRED_ROLE_ID = '1196732471790800967';

async function getDiscordUser(userId) {
  try {
    const response = await axios.get(`${DISCORD_API_URL}/guilds/${DISCORD_GUILD_ID}/members/${userId}`, {
      headers: {
        Authorization: `Bot ${DISCORD_BOT_TOKEN}`,
      },
    });

    const user = {
      id: response.data.user.id,
      username: response.data.user.username,
      discriminator: response.data.user.discriminator,
      avatar: response.data.user.avatar,
      roles: response.data.roles,
    };

    return user;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function checkUserRole(userId) {
  const user = await getDiscordUser(userId);

  if (user) {
    return user.roles.includes(DESIRED_ROLE_ID);
  }

  return false;
}

// Usage example:
const userId = '821682089351053312';
checkUserRole(userId).then((hasDesiredRole) => {
  if (hasDesiredRole) {
    console.log("Yeah")
  } else {
    console.log("Failed")
  }
});

# RacBot.js

A Discord.js-powered Discord bot for all your Raccoon Fact needs.

## Installation Instructions

### Create a Discord Application Bot:
1. Log into your Discord account at:
https://discordapp.com/developers/applications/
2. Select **Create Application**, give it whatever name or description you like, then select **Save Changes**
3. On the left-side panel, select **Bot**, then **Add Bot**
4. Disable "Public Bot"
5. Click **Click to Reveal Token**, and save it somewhere safe.
6. In the **General Details** section, copy the Client ID
7. Go to the following link, replacing CLIENTID with your bot's Client ID
https://discordapp.com/oauth2/authorize?client_id=CLIENTID&scope=bot
8. Select the server you wish to add it to


#### Install Discord.js
1. Install Node.js:
https://nodejs.org/en/download/package-manager
2. Run  ``npm install discord.js``
2. If that doesn't work, run ``sudo apt-get update``, then try again

## Install tmux
- Run ``sudo apt-get install tmux``

### Installing and Running the Bot
1. Move the ``rac_facts`` directory to a location of your choosing
2. Paste your bot token inside the included file **token.txt**
  1. Ensure that it is readable by only by the owner, run ``chmod 400 token.txt``
3. Open tmux via the command: ``tmux``
4. Finally, start the bot with the command ``sudo node racbot.js``
5. Detatch from your tmux session via ``Ctrl-B``, then ``D``

**Your bot should now be supplying knowledge-hungry denizens of your server Raccoon facts via the simple command "!fact".**

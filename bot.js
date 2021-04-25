//ログイン処理
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "f!";
const token = process.env.DISCORD_BOT_TOKEN;

client.on('ready', () => {
client.user.setPresence({ activity: { name: `f!help|Bot導入数:${client.guilds.cache.size}|furasuma導入数40人突破おめでとうございまぁーーーーーーす！！` }, status: 'online' })
    console.log('ready...');
});

client.on('message', message =>{
    if(message.author.bot){
        return;
   }

      if (message.content === 'おっすおっす') {
        let channel = message.channel;
        let author = message.author.username;
        let reply_text = `おっすおっすだおん！`;
        message.reply(reply_text)
            .then(message => console.log(`Sent message: ${reply_text}`))
            .catch(console.error);
        return;
  }

//メッセージ系
if (message.content === 'furasuma無能') {
message.channel.send(`えぇそんなこと言わんでよお`)
}

if (message.content === 'furasuma殺す') {
message.channel.send(`…`)
}

if (message.content.match(/元気/)) {
message.channel.send(`どうしてそんなに元気なの？`)
}

if (message.content.match(/寒い/)) {
message.channel.send(`あー寒くなりましたねぇ…`)
}

if (message.content.match(/暑い/)) {
message.channel.send(`もっと！熱くなれよぉぉぉぉぉぉぉぉ！`)
}

if (message.content === 'お茶') {
message.channel.send(`ふわああぁ！いらっしゃぁい！よぉこそぉ↑ジャパリカフェへ～！どうぞどうぞ！ゆっぐりしてってぇ！`)
message.channel.send(`いやま゛っ↓てたよぉ！やっとお客さんが来てくれたゆぉ！嬉しいなあ！ねえなんにぃのんむぅ　色々あるよぉ、これね、紅茶って言うんだってぇハ↓カセに教えてもらったンの！ここからお湯が出るからそれを使ってにぇ！`)
}

if (message.content === 'f!invite') {
message.channel.send(`https://discord.com/api/oauth2/authorize?client_id=721544250650787911&permissions=8&scope=bot`)
}

if (message.content.match(/疲れた/)) {
message.channel.send(`ぬわああああああん疲れたもおおおおおおおん`)
}

if (message.content.match(/過疎/)) {
message.channel.send(`過疎ってんじゃねーぞクソガキ`)
}

if (message.content.match(/暇/)) {
message.channel.send(`暇なら座談会来ない？`)
}

if (message.content.match(/草/)) {
message.channel.send(`は、生やさないでください！`)
}

if (message.content.match(/おはよ/)) {
message.channel.send(`おっすおっす`)
}

if (message.content.match(/バカ/)) {
message.channel.send(`あんたの脳みそは、犬~~作~~以下だ！`)
}

if (message.content.match(/よろしく/)) {
message.channel.send(`よく来たわね、いらっしゃい`)
}

if (message.content.match(/こん/)) {
message.channel.send(`ころもあー`)
}

if (message.content.match(/寝る/)) {
message.channel.send(`おやすみなさいませごしゅじんさま`)
}

if (message.content.match(/死ね/)) {
message.channel.send(`お前が死ね`)
}
	
if (message.content.match(/眠い/)) {
message.channel.send(`寝ろ`)
}

if (message.content.match(/死ね/)) {
message.channel.send(`お前が死ね`)
}

if (message.content.match(/風呂落ち/)) {
message.channel.send(`逝ってら`)
}

if (message.content.match(/きもい/)) {
message.channel.send(`~~鏡見てこいハゲ~~`)
}

if (message.content.match(/早く/)) {
message.channel.send(`あくしろよ`)
}

if (message.content.match(/ゆでたまご/)) {
message.channel.send(`v◯`)
}

if (message.content.match(/やったぁ！/)) {
message.channel.send(`へぇっ！？`)
}

if (message.content.match(/まじ/)) {
message.channel.send(`マジなんやで♥`)
}
	
if (message.content.match(/あっ/)) {
message.channel.send(`あっ…(察し)`)
}

if (message.content.match(/そうだよ/)) {
message.channel.send(`そうなんだよっ！`)
}

if (message.content.match(/ビール冷えてるかー？/)) {
message.channel.send(`あたいが冷やしてあげるー！`)
}


if (message.content === 'f!avatar') {
    message.reply(message.author.displayAvatarURL());
  }

client.on("message", async message => {
  if (message.content.indexOf(prefix) !== 0) return;
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();

  if (command === "eval" || command === "el") {
    // Put your userID here
    if (message.author.id !== "715141604486283275") {
     message.channel.send(
        "残念ながらevalはbot運営とボット所有者しか使えません。"
      );
      return;
  }

    let evaled;
    try {
      evaled = await eval(args.join(" "));
                message.react("✅");
    } catch (error) {
      console.error(error);
      message.channel.send({
        embed: {
          color: 0x00ae86,
          title: "ERROR",
          description: "ERROR内容```" + error + "```"
        }
      });
      message.react("❌");
    }
  }
});

  if (!message.guild) return;

  // If the message content starts with "!kick"
  if (message.content.startsWith('f!kick')) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
    if (message.member.hasPermission('KICK_MEMBERS')) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Kick the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         */
        member
          .kick('Optional reason that will display in the audit logs')
          .then(() => {
            // We let the message author know we were able to kick the person
            message.reply(`${user.tag}をKickしたナリ。`);
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to kick the member,
            // either due to missing permissions or role hierarchy
            message.reply('権限ミスのせいでKickできませんでした。');
	    message.reply("権限の順番を確認してください。");
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
        message.reply("That user isn't in this guild!");
      }
      // Otherwise, if no user was mentioned
    } else {
      message.reply("そのユーザーはこの世におらんゾイ！");
    }
   }
}
	
  if (!message.guild) return;

  // if the message content starts with "!ban"
  if (message.content.startsWith('f!ban')) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
    if (message.member.hasPermission('BAN_MEMBERS')) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Ban the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         * Read more about what ban options there are over at
         * https://discord.js.org/#/docs/main/master/class/GuildMember?scrollTo=ban
         */
        member
          .ban({
            reason: 'They were bad!',
          })
          .then(() => {
            // We let the message author know we were able to ban the person
            message.reply(`${user.tag}をBANしたよ！やったあ！`);
          })
          .catch(err => {
            // An error happened
            // This is generally due to the bot not being able to ban the member,
            // either due to missing permissions or role hierarchy
            message.reply('ロールの順序ミスでBANできんゾイ！！！');
            // Log the error
            console.error(err);
          });
      } else {
        // The mentioned user isn't in this guild
        message.reply("That user isn't in this guild!");
      }
    } else {
      // Otherwise, if no user was mentioned
      message.reply("（そのユーザーは存在し）ないです");
    }
  }
}


if (message.content === 'f!userinfo') {
message.channel.send(
  {embed: {
    color: 7506394,
    fields: [
      {
        name: "あなたのユーザー名",
        value: `${message.author.username}`
      },
      {
        name: "あなたのユーザーID",
        value: `${message.author.id}`
      },
      {
        name: "アカウント完成日",
        value: `${message.author.createdAt}`
      },
      {
        name: "アバター",
        value: `${message.author.displayAvatarURL}`
      },
      {
        name: "システム",
        value: `${message.author.system}`
      }
    ]
  }})
}
	
if (message.content === 'f!serverinfo') {
message.channel.send(
  {embed: {
    color: 7506394,
    fields: [
      {
        name: "サーバー名",
        value: `${message.guild.name}`
      },
      {
        name: "サーバーのメンバー数",
        value: `${message.guild.memberCount}`
      },
      {
        name: "サーバー完成日",
        value: `${message.guild.createdAt}`
      },
      {
        name: "地域",
        value: `${message.guild.region}`
      },
      {
        name: "このサーバーのオーナー",
        value: `${message.guild.owner}`
      }
    ]
  }})
}

if (message.content === 'f!help') {
message.channel.send(
  {embed: {
    color: 7506394,
    title: "はいはい、ヘルプでいいわね",
    fields: [
      {
        name: "f!help",
        value: "こ↑の↓ヘルプを表示します"
      },
      {
        name: "f!invite",
        value: "Botの招待リンクを表示します"
      },
      {
        name: "f!ping",
        value: "PING値が測れます"
      },
      {
        name: "f!kick",
        value: "メンバーをkickします(Kick権限がないと不可)"
      },
      {
        name: "f!ban",
        value: "メンバーをBANしますを(BAN権限がないと不可)"
      },
      {
        name: "f!eval",
        value: "Botテスト用コマンドです(開発者しか使えません)"
      },
      {
        name: "f!userinfo",
        value: "自分のuserinfoを調べます"
      },
      {
        name: "f!serverinfo",
        value: "コマンドを実行したサーバーの情報を表示します"
      },
      {
        name: "グローバルチャットを利用するなら",
        value: "furasuma-globalというチャンネルを作成するとできます\nソースは[ここ](https://qiita.com/yutarou12/items/e38c9b55e944e621f6d7)をお借りしたナリ"
      },
    ]
  }})
}

    if (message.channel.name === 'furasuma-global')
     {
         if (message.author.bot) return;
         if (message.attachments.size <= 0)
         {
             message.delete()
         }
         client.channels.cache.forEach(channel =>
         {
             if (message.attachments.size <= 0)
             {
                 const embed = new Discord.MessageEmbed()
                     .setAuthor(message.author.tag, message.author.avatarURL())
                     .setDescription(message.content)
                     .setColor(0x2C2F33)
                     .setFooter(message.guild.name, message.guild.iconURL())
                     .setTimestamp()
                 if (channel.name === 'furasuma-global')
                 {
                     channel.send(embed)
                     return;
                 }
                 return;
             }
             if (!message.attachments.forEach(attachment =>
             {
                 const embed = new Discord.MessageEmbed()
                     .setAuthor(message.author.tag, message.author.avatarURL())
                     .setImage(attachment.url)
                     .setDescription(attachment.url)
                     .setColor(0x2C2F33)
                     .setFooter(message.guild.name, message.guild.iconURL())
                     .setTimestamp()
                 if (channel.name === 'furasuma-global')
                 {
                     channel.send(embed)
                     return;
                 }
                 return;
             }));
             return;
         });
     }
 })

//↑ここに後述のコードをコピペする↑
client.login(token);

/*
   ██████╗ ██╗   ██╗███████╗███████╗███╗   ██╗      ███╗   ███╗██████╗ 
  ██╔═══██╗██║   ██║██╔════╝██╔════╝████╗  ██║      ████╗ ████║██╔══██╗
  ██║   ██║██║   ██║█████╗  █████╗  ██╔██╗ ██║█████╗██╔████╔██║██║  ██║
  ██║▄▄ ██║██║   ██║██╔══╝  ██╔══╝  ██║╚██╗██║╚════╝██║╚██╔╝██║██║  ██║   
  ╚██████╔╝╚██████╔╝███████╗███████╗██║ ╚████║      ██║ ╚═╝ ██║██████╔╝   
   ╚══▀▀═╝  ╚═════╝ ╚══════╝╚══════╝╚═╝  ╚═══╝      ╚═╝     ╚═╝╚═════╝   
  
══════════════════════════════════════════════════════════════════════════
                            ( OWNER  DETAILS )
══════════════════════════════════════════════════════════════════════════
✅ Queen Multi-device Whatsapp Bot
✅ Coded By 🅢🅤🅝🅔🅣🅗
══════════════════════════════════════════════════════════════════════════
                              ( CONTACT ME )
══════════════════════════════════════════════════════════════════════════
✅ Telegram: https://t.me/DarkWinzo
✅ Whatsapp: https://wa.link/jw9ki6
✅ Instagram:https://msng.link/o/?darkwinzo=ig
✅ Youtube: https://youtube.com/c/DarkWinzo                                                                                                      
══════════════════════════════════════════════════════════════════════════
                             ( PROJECT DETAILS )
══════════════════════════════════════════════════════════════════════════
✅ @project_name Queen-MD [WA Multi-device]
✅ @author DarkWinzo <https://github.com/DarkWinzo>
✅ @description A WhatsApp based 3ʳᵈ party application that provide many 
   services with a real-time automated conversational experience
✅ @link <https://github.com/DarkWinzo/Queen-MD>
✅ @version 0.0.1
══════════════════════════════════════════════════════════════════════════
                             ( PROJECT RULES )
══════════════════════════════════════════════════════════════════════════
✅ If you want to recode, reupload
   or copy the codes/script,
   please Contact me;
✅ If the recoded/reupload or copy script? "i will take action immediately"
✅ © 2022 Queen Bot Inc.Technical Hacker Team
✅ God Bless You, Family and Myself
══════════════════════════════════════════════════════════════════════════
*/

const fs = require('fs')
const chalk = require('chalk')

global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//|⬡════════════════════════════════════════════|❝ Queen Multi Device Whatsapp Bot---->Add Zenzapis Key Here ❞|═══════════════════════════════════════════⬡|//	
global.APIKeys = {
	'https://zenzapis.xyz': 'Api key එක මෙතන Paste කරගන්න', //https://zenzapis.xyz වෙබ් සයිට් එකට ගිහින් sign up වෙලා api key එක කොපි කරන් ඇවිත් මෙතන paste කරගන්න.
}

//|⬡════════════════════════════════════════════|❝ Queen Multi Device Whatsapp Bot---->Add Your Number Here ❞|═══════════════════════════════════════════⬡|//	

global.owner = ['94770378874'] //ඔය මන් 94700000000 දාපු තැනට ඒක අයින් කරලා ඒ වෙනුවට ඔයාගෙ නම්බර් එක paste කර ගන්න.(සගල වරහන් දෙක ඇතුලෙම හරියට නම්බර් එක ටයිප් කරගන්න.)ඉතුරු මොකුත් හදන්න යන්න එපා..ඒම උනොත් වැඩ කරන එකක් නෑ...ඔන්න මන් එපා කියපුව එඩිට් කරන්න ගිහින් මගෙන් උදව් ඉල්ලන් එහෙම එනෝ නෙවේ හොදේ..
global.premium = ['94770378874'] //ඔය මන් 94700000000 දාපු තැනට ඒක අයින් කරලා ඒ වෙනුවට ඔයාගෙ නම්බර් එක paste කර ගන්න.(සගල වරහන් දෙක ඇතුලෙම හරියට නම්බර් එක ටයිප් කරගන්න.)ඉතුරු මොකුත් හදන්න යන්න එපා..ඒම උනොත් වැඩ කරන එකක් නෑ...ඔන්න මන් එපා කියපුව එඩිට් කරන්න ගිහින් මගෙන් උදව් ඉල්ලන් එහෙම එනෝ නෙවේ හොදේ..





//|⬡════════════════════════════════════════════|❝ Queen Multi Device Whatsapp Bot---->Don't Change Here ❞|═══════════════════════════════════════════⬡|//	

global.packname = 'Q'+'u'+'e'+'e'+'n'+'-'+'M'+'D'
global.BotName = 'Q'+'u'+'e'+'e'+'n'+'-'+'M'+'D'
global.Contact = 'C'+'o'+'n'+'t'+'a'+'c'+'t'+' '+'D'+'a'+'r'+'k'+'W'+'i'+'n'+'z'+'o'
global.footer ='Q'+'u'+'e'+'e'+'n'+'-'+'M'+'D'
global.author = 'D'+'a'+'r'+'k'+'W'+'i'+'n'+'z'+'o'
global.sessionName = 's'+'e'+'s'+'s'+'i'+'o'+'n'+'.'+'q'+'u'+'e'+'e'+'n'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⤑'

//|⬡════════════════════════════════════════════|❝ Queen Multi Device Whatsapp Bot---->Don't Change Here ❞|═══════════════════════════════════════════⬡|//	

global.mess = {
    success: 'වැඩේ ඉවරයි...✓',
    admin: 'මෙම විධානය භාවිතා කළ හැක්කේ මගේ *Admin Group එක* සඳහා පමණි,මෝඩයා!',
    botAdmin: 'සමාවන්න😔️,මට මෙම කණ්ඩායමේ *පරිපාලක (Admin)* වරයෙකු නොවී මෙම විධානය ක්‍රියාත්මක කළ නොහැක.',
    owner: 'මෙම විධානය භාවිතා කළ හැක්කේ මගේ *හිමිකරුට* පමණි,මෝඩයා!',
    group: 'මෙම විධානය සාදා ඇත්තේ *Groups* සඳහා පමණි,මෝඩයා!',
    private: 'මෙම විධානය සාදා ඇත්තේ *Private Chats* සඳහා පමණි,මෝඩයා!',
    bot: 'මෙම විධානය භාවිතා කළ හැක්කේ මගේ *Owner number* එක සඳහා  පමණි,මෝඩයා!',
    wait: 'මදක් රැදී සිටින්න...⏳️',
    endLimit: 'ඔබගේ දෛනික සීමාව කල් ඉකුත් වී ඇත, සීමාව සෑම පැය 12කට වරක් නැවත සකසනු ලැබේ🕛️',
}

//|⬡════════════════════════════════════════════|❝ Queen Multi Device Whatsapp Bot---->Don't Change Here ❞|═══════════════════════════════════════════⬡|//	

global.limitawal = {
    premium: "Infinity",
    free: 100
}

//|⬡════════════════════════════════════════════|❝ Queen Multi Device Whatsapp Bot---->Don't Change Here ❞|═══════════════════════════════════════════⬡|//	

global.thumb = fs.readFileSync('./Media/Image/Queen.jpeg')
global.Queen = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

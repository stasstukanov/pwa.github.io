$(document).ready(function () {
    // page language
    var defaultLanguage = "en";
    var currentLanguage = getUserLang();
    function getUserLang() {
      var lang;
      if (navigator.languages && navigator.languages.length) {
        lang = navigator.languages[0]
      }
      else if (navigator.userLanguage) {
        lang = navigator.userLanguage
      }
      else {
        lang = navigator.language
      }
      return lang.slice(0, 2);
    }
    /* Push block */
    var pageHref = window.location.href || document.URL;
    var smartlink = "/smartlink/jumpIframe?format=html&tds_reason=";
    var $bannerBlocks = $(".banner-change");
    var pushBlock = this.querySelector(".push-wrapper");
    var pushButton = pushBlock.querySelector(".push-btn.yes-btn");
    var pushCloseButton = pushBlock.querySelector(".push-btn.no-btn");
    var push_path = {
    main: "/smartlink/jumpIframe?format=html&tds_reason=ipp&p10=push_in_page&p9=main",
     profile: "/smartlink/jumpIframe?format=html&tds_reason=ipp&p10=push_in_page&p9=profile",
     profile_photo: "/smartlink/jumpIframe?format=html&tds_reason=ipp&p10=push_in_page&p9=profile_photo",
     chat: "/smartlink/jumpIframe?format=html&tds_reason=ipp&p10=push_in_page&p9=chat",
    };
    var push_current_path = push_path.main;
    /*banner-change*/
    var banner_path = {
    main: "/smartlink/jumpIframe?format=html&tds_reason=interstitial_banner&p9=main",
     profile: "/smartlink/jumpIframe?format=html&tds_reason=interstitial_banner&p9=profile",
     profile_photo: "/smartlink/jumpIframe?format=html&tds_reason=interstitial_banner&p9=profile_photo",
     chat: "/smartlink/jumpIframe?format=html&tds_reason=interstitial_banner&p9=chat",
    };
    var banner_current_path = banner_path.main;
    /*social-btn*/
    var social_path = {
    main: "/smartlink/jumpIframe?format=html&tds_reason=lenta&p9=main",
     profile: "/smartlink/jumpIframe?format=html&tds_reason=lenta&p9=profile",
     profile_photo: "/smartlink/jumpIframe?format=html&tds_reason=lenta&p9=profile_photo",
     chat: "/smartlink/jumpIframe?format=html&tds_reason=lenta&p9=chat",
    };
    var social_current_path = social_path.main;
    /* redirect logic start */
    var dataHref = $(".default-redirect-link").attr("href");
    var isSubmitClicked = false;
    /* redirect logic end */
    $overlay = $(".overlay");
    /*get random number*/
    function randomNumber(min, max) {
      return Math.round(min - 0.5 + Math.random() * (max - min + 1));
    }
    $headerSection = $(".header-section");
    var model = {
    stepNumber: 1,
     step1: {
     isStartChat: false,
      isTypingMessage: false,
      currentMessageCounter: 0,
      isEndOfChat: false,
      isMemberOnline: true,
      isPopup2Visible: false,
     }
     ,
     step2: {
     isStartChat: false,
      isTypingMessage: false,
      currentMessageCounter: 0,
      isEndOfChat: false,
      isMemberOnline: true,
      isPopup2Visible: false,
     }
     ,
     step3: {
     isStartChat: false,
      isTypingMessage: false,
      currentMessageCounter: 0,
      isEndOfChat: false,
      isMemberOnline: true,
      isPopup2Visible: false,
     }
     ,
     step4: {
     isStartChat: false,
      isTypingMessage: false,
      currentMessageCounter: 0,
      isEndOfChat: false,
      isMemberOnline: true,
      isPopup2Visible: false,
     }
     ,
     step5: {
     isStartChat: false,
      isTypingMessage: false,
      currentMessageCounter: 0,
      isEndOfChat: false,
      isMemberOnline: true,
      isPopup2Visible: false,
     }
     ,
     step6: {
     isStartChat: false,
      isTypingMessage: false,
      currentMessageCounter: 0,
      isEndOfChat: false,
      isMemberOnline: true,
      isPopup2Visible: false,
     }
     ,
     step7: {
     isStartChat: false,
      isTypingMessage: false,
      currentMessageCounter: 0,
      isEndOfChat: false,
      isMemberOnline: true,
      isPopup2Visible: false,
     }
     ,
     step8: {
     isStartChat: false,
      isTypingMessage: false,
      currentMessageCounter: 0,
      isEndOfChat: false,
      isMemberOnline: true,
      isPopup2Visible: false,
     }
     ,
    };
    var memberStatusText = {
    online: "online",
     offline: "went offline",
    };
    var currentMessageList;
    var messageList = {
    en: {
     user1: {
      userName: "fuckmymouse",
       userMessages: [
         {
         messageType: "memberMessage",
          messageText: "I hope you are not masturbating on my pics?",
         }
         ,
         {
         messageType: "memberMessage",
          messageText: "hahahahah",
         }
         ,
         {
         messageType: "memberMessage",
          messageText: "giving you more",
         }
         ,
         {
         messageType: "photoMessage",
          messageText: "<div class='chat-text'>" + "18+ Content. Please verify your age." + "</div>" + "<div class='chat-text'>" + "CLICK HERE" + "</div>",
         }
         ,
         {
         messageType: "memberMessage",
          messageText: "if your dick gets hard seeing this.",
         }
         ,
         {
         messageType: "memberMessage",
          messageText: "let catch in 10 minutes on my verified profile here",
         }
         ,
         {
         messageType: "inviteMessage",
          messageText:
          "<div class='chat-message-content-wrapper'>" +
          "<div class='chat-title'>" +
          "@Profile: fuckmymouse" +
          "</div>" +
          "<div class='chat-text'>" +
          "fuckmymouse sends a link to her profile. Click to connect with fuckmymouse and others you may know. Get the power to share and make the world more open and connected." +
          "</div>" +
          "</div>",
         }
         ,
         {
         messageType: "memberMessage",
          messageText: "drop me a line once signed up",
         }
         ,
       ],
         }
         ,
         user2: {
         userName: "mala2",
         userMessages: [
         {
         messageType: "memberMessage",
         messageText: "ever fucked a hot tattoo model?",
         }
         ,
         {
         messageType: "memberMessage",
         messageText: "do I turn you on?",
         }
         ,
         {
         messageType: "memberMessage",
         messageText: "where do you think i should make my next tattoo?",
         }
         ,
         {
         messageType: "photoMessage",
         messageText: "<div class='chat-text'>" + "18+ Content. Please verify your age." + "</div>" + "<div class='chat-text'>" + "CLICK HERE" + "</div>",
         }
         ,
         {
         messageType: "memberMessage",
         messageText: "lets better talk here. its my profile",
         }
         ,
         {
         messageType: "inviteMessage",
         messageText:
         "<div class='chat-message-content-wrapper'>" +
         "<div class='chat-title'>" +
         "@Profile: mala2" +
         "</div>" +
         "<div class='chat-text'>" +
         "mala2 sends a link to her profile. Click to connect with mala2 and others you may know. Get the power to share and make the world more open and connected." +
         "</div>" +
         "</div>",
         }
         ,
       ],
      }
      ,
      user3: {
      userName: "Ryan",
       userMessages: [
         {
         messageType: "memberMessage",
          messageText: "do you want to see my boobs?",
         }
         ,
         {
         messageType: "memberMessage",
          messageText: "closer than you can imagine",
         }
         ,
         {
         messageType: "photoMessage",
          messageText: "<div class='chat-text'>" + "18+ Content. Please verify your age." + "</div>" + "<div class='chat-text'>" + "CLICK HERE" + "</div>",
         }
         ,
         {
         messageType: "memberMessage",
          messageText: "if your dick gets hard seeing this." + "</br>" + "I can show you more here:",
         }
         ,
         {
         messageType: "inviteMessage",
          messageText:
          "<div class='chat-message-content-wrapper'>" +
          "<div class='chat-title'>" +
          "@Profile: Ryan" +
          "</div>" +
          "<div class='chat-text'>" +
          "Ryan sends a link to her profile. Click to connect with Ryan and others you may know. Get the power to share and make the world more open and connected." +
          "</div>" +
          "</div>",
         }
         ,
       ],
         }
         ,
         user4: {
         userName: "formysta24",
         userMessages: [
         {
         messageType: "memberMessage",
         messageText: "I hope you are not masturbating on my pics?",
         }
         ,
         {
         messageType: "memberMessage",
         messageText: "hahahahah",
         }
         ,
         {
         messageType: "memberMessage",
         messageText: "giving you more",
         }
         ,
         {
         messageType: "photoMessage",
         messageText: "<div class='chat-text'>" + "18+ Content. Please verify your age." + "</div>" + "<div class='chat-text'>" + "CLICK HERE" + "</div>",
         }
         ,
         {
         messageType: "memberMessage",
         messageText: "if your dick gets hard seeing this.",
         }
         ,
         {
         messageType: "memberMessage",
         messageText: "let catch in 10 minutes on my verified profile here",
         }
         ,
         {
         messageType: "inviteMessage",
         messageText:
         "<div class='chat-message-content-wrapper'>" +
         "<div class='chat-title'>" +
         "@Profile: formysta24" +
         "</div>" +
         "<div class='chat-text'>" +
         "formysta24 sends a link to her profile. Click to connect with formysta24 and others you may know. Get the power to share and make the world more open and connected." +
         "</div>" +
         "</div>",
         }
         ,
         {
         messageType: "memberMessage",
         messageText: "drop me a line once signed up",
         }
         ,
       ],
      }
      ,
      user5: {
      userName: "shadyLady",
       userMessages: [
         {
         messageType: "memberMessage",
          messageText: "I hope you are not masturbating on my pics?",
         }
         ,
         {
         messageType: "memberMessage",
          messageText: "hahahahah",
         }
         ,
         {
         messageType: "memberMessage",
          messageText: "giving you more",
         }
         ,
         {
         messageType: "photoMessage",
          messageText: "<div class='chat-text'>" + "18+ Content. Please verify your age." + "</div>" + "<div class='chat-text'>" + "CLICK HERE" + "</div>",
         }
         ,
         {
         messageType: "memberMessage",
          messageText: "if your dick gets hard seeing this.",
         }
         ,
         {
         messageType: "memberMessage",
          messageText: "let catch in 10 minutes on my verified profile here",
         }
         ,
         {
         messageType: "inviteMessage",
          messageText:
          "<div class='chat-message-content-wrapper'>" +
          "<div class='chat-title'>" +
          "@Profile: shadyLady" +
          "</div>" +
          "<div class='chat-text'>" +
          "shadyLady sends a link to her profile. Click to connect with shadyLady and others you may know. Get the power to share and make the world more open and connected." +
          "</div>" +
          "</div>",
         }
         ,
         {
         messageType: "memberMessage",
          messageText: "drop me a line once signed up",
         }
         ,
       ],
         }
         ,
         user6: {
         userName: "ImaniSexy",
         userMessages: [
         {
         messageType: "memberMessage",
         messageText: "I hope you are not masturbating on my pics?",
         }
         ,
         {
         messageType: "memberMessage",
         messageText: "hahahahah",
         }
         ,
         {
         messageType: "memberMessage",
         messageText: "giving you more",
         }
         ,
         {
         messageType: "photoMessage",
         messageText: "<div class='chat-text'>" + "18+ Content. Please verify your age." + "</div>" + "<div class='chat-text'>" + "CLICK HERE" + "</div>",
         }
         ,
         {
         messageType: "memberMessage",
         messageText: "if your dick gets hard seeing this.",
         }
         ,
         {
         messageType: "memberMessage",
         messageText: "let catch in 10 minutes on my verified profile here",
         }
         ,
         {
         messageType: "inviteMessage",
         messageText:
         "<div class='chat-message-content-wrapper'>" +
         "<div class='chat-title'>" +
         "@Profile: ImaniSexy" +
         "</div>" +
         "<div class='chat-text'>" +
         "ImaniSexy sends a link to her profile. Click to connect with ImaniSexy and others you may know. Get the power to share and make the world more open and connected." +
         "</div>" +
         "</div>",
         }
         ,
         {
         messageType: "memberMessage",
         messageText: "drop me a line once signed up",
         }
         ,
       ],
      }
      ,
      user7: {
      userName: "Kirsten",
       userMessages: [
         {
         messageType: "memberMessage",
          messageText: "I hope you are not masturbating on my pics?",
         }
         ,
         {
         messageType: "memberMessage",
          messageText: "hahahahah",
         }
         ,
         {
         messageType: "memberMessage",
          messageText: "giving you more",
         }
         ,
         {
         messageType: "photoMessage",
          messageText: "<div class='chat-text'>" + "18+ Content. Please verify your age." + "</div>" + "<div class='chat-text'>" + "CLICK HERE" + "</div>",
         }
         ,
         {
         messageType: "memberMessage",
          messageText: "if your dick gets hard seeing this.",
         }
         ,
         {
         messageType: "memberMessage",
          messageText: "let catch in 10 minutes on my verified profile here",
         }
         ,
         {
         messageType: "inviteMessage",
          messageText:
          "<div class='chat-message-content-wrapper'>" +
          "<div class='chat-title'>" +
          "@Profile: Kirsten" +
          "</div>" +
          "<div class='chat-text'>" +
          "Kirsten sends a link to her profile. Click to connect with Kirsten and others you may know. Get the power to share and make the world more open and connected." +
          "</div>" +
          "</div>",
         }
         ,
         {
         messageType: "memberMessage",
          messageText: "drop me a line once signed up",
         }
         ,
       ],
         }
         ,
         user8: {
         userName: "Zhang21213",
         userMessages: [
         {
         messageType: "memberMessage",
         messageText: "I hope you are not masturbating on my pics?",
         }
         ,
         {
         messageType: "memberMessage",
         messageText: "hahahahah",
         }
         ,
         {
         messageType: "memberMessage",
         messageText: "giving you more",
         }
         ,
         {
         messageType: "photoMessage",
         messageText: "<div class='chat-text'>" + "18+ Content. Please verify your age." + "</div>" + "<div class='chat-text'>" + "CLICK HERE" + "</div>",
         }
         ,
         {
         messageType: "memberMessage",
         messageText: "if your dick gets hard seeing this.",
         }
         ,
         {
         messageType: "memberMessage",
         messageText: "let catch in 10 minutes on my verified profile here",
         }
         ,
         {
         messageType: "inviteMessage",
         messageText:
         "<div class='chat-message-content-wrapper'>" +
         "<div class='chat-title'>" +
         "@Profile: Zhang21213" +
         "</div>" +
         "<div class='chat-text'>" +
         "Zhang21213 sends a link to her profile. Click to connect with Zhang21213 and others you may know. Get the power to share and make the world more open and connected." +
         "</div>" +
         "</div>",
         }
         ,
         {
         messageType: "memberMessage",
         messageText: "drop me a line once signed up",
         }
         ,
       ],
      }
     }
     ,
     de: {
     user1: {
      userName: "Fickhaeschen",
       userMessages: [{
                      messageType: "memberMessage",
                       messageText: "Ich hoffe du holst dir nicht auf meine Fotos einen runter?"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "Hahahahah"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "Zeig dir gerne mehr"
                      }
                      ,
                      {
                      messageType: "photoMessage",
                       messageText: "<div class='chat-text'>" +
                       "Inhalt ab 18. Bitte bestätige dein Alter." +
                       "</div>" +
                       "<div class='chat-text'>" +
                       "KLICK HIER" +
                       "</div>"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "Falls dein Schwanz hart wird, wenn du das siehst,"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "solltest du...in...sagen wir 10 Minuten auf meinem geprüften Profil vorbeischauen"
                      }
                      ,
                      {
                      messageType: "inviteMessage",
                       messageText: "<div class='chat-message-content-wrapper'>" +
                       "<div class='chat-title'>" +
                       "@Profil: Fickhaeschen" +
                       "</div>" +
                       "<div class='chat-text'>" +
                       "Fickhaeschen schickt einen Link an ihr Profil. Einfach anklicken, wenn du mit Fickhaeschen und anderen, die du kennen könntest in Kontakt kommen willst. Nutze die Möglichkeit zum Teilen und gestalte die Welt ein bisschen offener und herzlicher." +
                       "</div>" +
                       "</div>"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "Melde dich bei mir, wenn du dich angemeldet hast"
                      }
                     ],
      }
      ,
      user2: {
      userName: "Lady Machsmir2",
       userMessages: [{
                      messageType: "memberMessage",
                       messageText: "Hast du schon mal ein geiles Tattoomodel gefickt?"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "Mache ich dich an?"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "Was meinst du, wohin sollte ich mein nächstes Tattoo stechen lassen?"
                      }
                      ,
                      {
                      messageType: "photoMessage",
                       messageText: "<div class='chat-text'>" +
                       "Inhalt ab 18. Bitte bestätige dein Alter." +
                       "</div>" +
                       "<div class='chat-text'>" +
                       "KLICK HIER" +
                       "</div>"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "Lass uns lieber hier quatschen. Das ist mein Profil"
                      }
                      ,
                      {
                      messageType: "inviteMessage",
                       messageText: "<div class='chat-message-content-wrapper'>" +
                       "<div class='chat-title'>" +
                       "@Profil: Lady Machsmir2" +
                       "</div>" +
                       "<div class='chat-text'>" +
                       "Lady Machsmir2 schickt einen Link an ihr Profil. Einfach anklicken, wenn du mit Lady Machsmir2 und anderen, die du kennen könntest in Kontakt kommen willst. Nutze die Möglichkeit zum Teilen und gestalte die Welt ein bisschen offener und herzlicher." +
                       "</div>" +
                       "</div>"
                      }
                     ],
      }
      ,
      user3: {
      userName: "Rumpelliese",
       userMessages: [{
                      messageType: "memberMessage",
                       messageText: "Willst du meine Titten sehen?"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "Näher als du es dir vorstellen kannst"
                      }
                      ,
                      {
                      messageType: "photoMessage",
                       messageText: "<div class='chat-text'>" +
                       "Inhalt ab 18. Bitte bestätige dein Alter." +
                       "</div>" +
                       "<div class='chat-text'>" +
                       "KLICK HIER" +
                       "</div>"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "Falls dein Schwanz hart wird, wenn du das siehst," + "</br>" +
                       "zeig ich dir hier gerne mehr:"
                      }
                      ,
                      {
                      messageType: "inviteMessage",
                       messageText: "<div class='chat-message-content-wrapper'>" +
                       "<div class='chat-title'>" +
                       "@Profil: Rumpelliese" +
                       "</div>" +
                       "<div class='chat-text'>" +
                       "Rumpelliese schickt einen Link an ihr Profil. Einfach anklicken, wenn du mit Rumpelliese und anderen, die du kennen könntest in Kontakt kommen willst. Nutze die Möglichkeit zum Teilen und gestalte die Welt ein bisschen offener und herzlicher." +
                       "</div>" +
                       "</div>"
                      }
                     ],
      }
      ,
      user4: {
      userName: "Pimpanella",
       userMessages: [{
                      messageType: "memberMessage",
                       messageText: "Ich hoffe du holst dir nicht auf meine Fotos einen runter?"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "Hahahahah"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "Zeig dir gerne mehr"
                      }
                      ,
                      {
                      messageType: "photoMessage",
                       messageText: "<div class='chat-text'>" +
                       "Inhalt ab 18. Bitte bestätige dein Alter." +
                       "</div>" +
                       "<div class='chat-text'>" +
                       "KLICK HIER" +
                       "</div>"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "Falls dein Schwanz hart wird, wenn du das siehst,"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "solltest du...in...sagen wir 10 Minuten auf meinem geprüften Profil vorbeischauen"
                      }
                      ,
                      {
                      messageType: "inviteMessage",
                       messageText: "<div class='chat-message-content-wrapper'>" +
                       "<div class='chat-title'>" +
                       "@Profil: Pimpanella" +
                       "</div>" +
                       "<div class='chat-text'>" +
                       "Pimpanella schickt einen Link an ihr Profil. Einfach anklicken, wenn du mit Pimpanella und anderen, die du kennen könntest in Kontakt kommen willst. Nutze die Möglichkeit zum Teilen und gestalte die Welt ein bisschen offener und herzlicher." +
                       "</div>" +
                       "</div>"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "Melde dich bei mir, wenn du dich angemeldet hast"
                      }
                     ],
      }
      ,
      user5: {
      userName: "SexyHexy",
       userMessages: [{
                      messageType: "memberMessage",
                       messageText: "Ich hoffe du holst dir nicht auf meine Fotos einen runter?"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "Hahahahah"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "Zeig dir gerne mehr"
                      }
                      ,
                      {
                      messageType: "photoMessage",
                       messageText: "<div class='chat-text'>" +
                       "Inhalt ab 18. Bitte bestätige dein Alter." +
                       "</div>" +
                       "<div class='chat-text'>" +
                       "KLICK HIER" +
                       "</div>"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "Falls dein Schwanz hart wird, wenn du das siehst,"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "solltest du...in...sagen wir 10 Minuten auf meinem geprüften Profil vorbeischauen"
                      }
                      ,
                      {
                      messageType: "inviteMessage",
                       messageText: "<div class='chat-message-content-wrapper'>" +
                       "<div class='chat-title'>" +
                       "@Profil: SexyHexy" +
                       "</div>" +
                       "<div class='chat-text'>" +
                       "SexyHexy schickt einen Link an ihr Profil. Einfach anklicken, wenn du mit SexyHexy und anderen, die du kennen könntest in Kontakt kommen willst. Nutze die Möglichkeit zum Teilen und gestalte die Welt ein bisschen offener und herzlicher." +
                       "</div>" +
                       "</div>"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "Melde dich bei mir, wenn du dich angemeldet hast"
                      }
                     ],
      }
      ,
      user6: {
      userName: "SugarBang",
       userMessages: [{
                      messageType: "memberMessage",
                       messageText: "Ich hoffe du holst dir nicht auf meine Fotos einen runter?"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "Hahahahah"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "Zeig dir gerne mehr"
                      }
                      ,
                      {
                      messageType: "photoMessage",
                       messageText: "<div class='chat-text'>" +
                       "Inhalt ab 18. Bitte bestätige dein Alter." +
                       "</div>" +
                       "<div class='chat-text'>" +
                       "KLICK HIER" +
                       "</div>"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "Falls dein Schwanz hart wird, wenn du das siehst,"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "solltest du...in...sagen wir 10 Minuten auf meinem geprüften Profil vorbeischauen"
                      }
                      ,
                      {
                      messageType: "inviteMessage",
                       messageText: "<div class='chat-message-content-wrapper'>" +
                       "<div class='chat-title'>" +
                       "@Profil: SugarBang" +
                       "</div>" +
                       "<div class='chat-text'>" +
                       "SugarBang schickt einen Link an ihr Profil. Einfach anklicken, wenn du mit SugarBang und anderen, die du kennen könntest in Kontakt kommen willst. Nutze die Möglichkeit zum Teilen und gestalte die Welt ein bisschen offener und herzlicher." +
                       "</div>" +
                       "</div>"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "Melde dich bei mir, wenn du dich angemeldet hast"
                      }
                     ],
      }
      ,
      user7: {
      userName: "Kirsten",
       userMessages: [{
                      messageType: "memberMessage",
                       messageText: "Ich hoffe du holst dir nicht auf meine Fotos einen runter?"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "Hahahahah"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "Zeig dir gerne mehr"
                      }
                      ,
                      {
                      messageType: "photoMessage",
                       messageText: "<div class='chat-text'>" +
                       "Inhalt ab 18. Bitte bestätige dein Alter." +
                       "</div>" +
                       "<div class='chat-text'>" +
                       "KLICK HIER" +
                       "</div>"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "Falls dein Schwanz hart wird, wenn du das siehst,"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "solltest du...in...sagen wir 10 Minuten auf meinem geprüften Profil vorbeischauen"
                      }
                      ,
                      {
                      messageType: "inviteMessage",
                       messageText: "<div class='chat-message-content-wrapper'>" +
                       "<div class='chat-title'>" +
                       "@Profil: Kirsten" +
                       "</div>" +
                       "<div class='chat-text'>" +
                       "Kirsten schickt einen Link an ihr Profil. Einfach anklicken, wenn du mit Kirsten und anderen, die du kennen könntest in Kontakt kommen willst. Nutze die Möglichkeit zum Teilen und gestalte die Welt ein bisschen offener und herzlicher." +
                       "</div>" +
                       "</div>"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "Melde dich bei mir, wenn du dich angemeldet hast"
                      }
                     ],
      }
      ,
      user8: {
      userName: "Zoe2000",
       userMessages: [{
                      messageType: "memberMessage",
                       messageText: "Ich hoffe du holst dir nicht auf meine Fotos einen runter?"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "Hahahahah"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "Zeig dir gerne mehr"
                      }
                      ,
                      {
                      messageType: "photoMessage",
                       messageText: "<div class='chat-text'>" +
                       "Inhalt ab 18. Bitte bestätige dein Alter." +
                       "</div>" +
                       "<div class='chat-text'>" +
                       "KLICK HIER" +
                       "</div>"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "Falls dein Schwanz hart wird, wenn du das siehst,"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "solltest du...in...sagen wir 10 Minuten auf meinem geprüften Profil vorbeischauen"
                      }
                      ,
                      {
                      messageType: "inviteMessage",
                       messageText: "<div class='chat-message-content-wrapper'>" +
                       "<div class='chat-title'>" +
                       "@Profil: Zoe2000" +
                       "</div>" +
                       "<div class='chat-text'>" +
                       "Zoe2000 schickt einen Link an ihr Profil. Einfach anklicken, wenn du mit Zoe2000 und anderen, die du kennen könntest in Kontakt kommen willst. Nutze die Möglichkeit zum Teilen und gestalte die Welt ein bisschen offener und herzlicher." +
                       "</div>" +
                       "</div>"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "Melde dich bei mir, wenn du dich angemeldet hast"
                      }
                     ]
      }
     }
     ,
     fr: {
     user1: {
      userName: "baisemasouris",
       userMessages: [{
                      messageType: "memberMessage",
                       messageText: "J'espère que tu ne te masturbes pas sur mes photos ?"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "hahahahah"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "je te donne encore plus"
                      }
                      ,
                      {
                      messageType: "photoMessage",
                       messageText: "<div class='chat-text'>" +
                       "Contenu 18+. Merci de vérifier ton âge." +
                       "</div>" +
                       "<div class='chat-text'>" +
                       "CLIQUE ICI" +
                       "</div>"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "si ta bite devient dure en voyant ça."
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "viens me voir dans 10 minutes sur mon profil vérifié ici"
                      }
                      ,
                      {
                      messageType: "inviteMessage",
                       messageText: "<div class='chat-message-content-wrapper'>" +
                       "<div class='chat-title'>" +
                       "@Profil: baisemasouris" +
                       "</div>" +
                       "<div class='chat-text'>" +
                       "baisemasouris envoie un lien vers son profil. Clique pour te connecter avec baisemasouris et d'autres personnes que tu connais peut-être. Partage et vis dans un monde plus ouvert et connecté." +
                       "</div>" +
                       "</div>"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "envoie-moi un message une fois inscrit"
                      }
                     ],
      }
      ,
      user2: {
      userName: "tapetite2",
       userMessages: [{
                      messageType: "memberMessage",
                       messageText: "Tu as déjà baisé une mannequin tatouée sexy ?"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "Est-ce que je t'excite ?"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "Où tu penses que je devrais faire mon prochain tatouage ?"
                      }
                      ,
                      {
                      messageType: "photoMessage",
                       messageText: "<div class='chat-text'>" +
                       "Contenu 18+. Merci de vérifier ton âge." +
                       "</div>" +
                       "<div class='chat-text'>" +
                       "CLIQUE ICI" +
                       "</div>"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "parlons plutôt ici. c'est mon profil"
                      }
                      ,
                      {
                      messageType: "inviteMessage",
                       messageText: "<div class='chat-message-content-wrapper'>" +
                       "<div class='chat-title'>" +
                       "@Profil: tapetite2" +
                       "</div>" +
                       "<div class='chat-text'>" +
                       "tapetite2 envoie un lien vers son profil. Clique pour te connecter avec tapetite2 et d'autres personnes que tu connais peut-être. Partage et vis dans un monde plus ouvert et connecté." +
                       "</div>" +
                       "</div>"
                      }
                     ],
      }
      ,
      user3: {
      userName: "tapetite",
       userMessages: [{
                      messageType: "memberMessage",
                       messageText: "Tu veux voir mes seins ?"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "plus près que tu ne peux l'imaginer"
                      }
                      ,
                      {
                      messageType: "photoMessage",
                       messageText: "<div class='chat-text'>" +
                       "Contenu 18+. Merci de vérifier ton âge." +
                       "</div>" +
                       "<div class='chat-text'>" +
                       "CLIQUE ICI" +
                       "</div>"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "si ta bite devient dure en voyant ça." + "</br>" +
                       "Je peux t'en montrer plus ici :"
                      }
                      ,
                      {
                      messageType: "inviteMessage",
                       messageText: "<div class='chat-message-content-wrapper'>" +
                       "<div class='chat-title'>" +
                       "@Profil: tapetite" +
                       "</div>" +
                       "<div class='chat-text'>" +
                       "tapetite envoie un lien vers son profil. Clique pour te connecter avec tapetite et d'autres personnes que tu connais peut-être. Partage et vis dans un monde plus ouvert et connecté." +
                       "</div>" +
                       "</div>"
                      }
                     ],
      }
      ,
      user4: {
      userName: "pourmoi24",
       userMessages: [{
                      messageType: "memberMessage",
                       messageText: "J'espère que tu ne te masturbes pas sur mes photos ?"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "hahahahah"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "je te donne encore plus"
                      }
                      ,
                      {
                      messageType: "photoMessage",
                       messageText: "<div class='chat-text'>" +
                       "Contenu 18+. Merci de vérifier ton âge." +
                       "</div>" +
                       "<div class='chat-text'>" +
                       "CLIQUE ICI" +
                       "</div>"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "si ta bite devient dure en voyant ça."
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "viens me voir dans 10 minutes sur mon profil vérifié ici"
                      }
                      ,
                      {
                      messageType: "inviteMessage",
                       messageText: "<div class='chat-message-content-wrapper'>" +
                       "<div class='chat-title'>" +
                       "@Profil: pourmoi24" +
                       "</div>" +
                       "<div class='chat-text'>" +
                       "pourmoi24 envoie un lien vers son profil. Clique pour te connecter avec pourmoi24 et d'autres personnes que tu connais peut-être. Partage et vis dans un monde plus ouvert et connecté." +
                       "</div>" +
                       "</div>"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "envoie-moi un message une fois inscrit"
                      }
                     ],
      }
      ,
      user5: {
      userName: "filleTimide",
       userMessages: [{
                      messageType: "memberMessage",
                       messageText: "J'espère que tu ne te masturbes pas sur mes photos ?"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "hahahahah"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "je te donne encore plus"
                      }
                      ,
                      {
                      messageType: "photoMessage",
                       messageText: "<div class='chat-text'>" +
                       "Contenu 18+. Merci de vérifier ton âge." +
                       "</div>" +
                       "<div class='chat-text'>" +
                       "CLIQUE ICI" +
                       "</div>"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "si ta bite devient dure en voyant ça."
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "viens me voir dans 10 minutes sur mon profil vérifié ici"
                      }
                      ,
                      {
                      messageType: "inviteMessage",
                       messageText: "<div class='chat-message-content-wrapper'>" +
                       "<div class='chat-title'>" +
                       "@Profil: filleTimide" +
                       "</div>" +
                       "<div class='chat-text'>" +
                       "filleTimide envoie un lien vers son profil. Clique pour te connecter avec filleTimide et d'autres personnes que tu connais peut-être. Partage et vis dans un monde plus ouvert et connecté." +
                       "</div>" +
                       "</div>"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "envoie-moi un message une fois inscrit"
                      }
                     ],
      }
      ,
      user6: {
      userName: "Julysexy",
       userMessages: [{
                      messageType: "memberMessage",
                       messageText: "J'espère que tu ne te masturbes pas sur mes photos ?"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "hahahahah"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "je te donne encore plus"
                      }
                      ,
                      {
                      messageType: "photoMessage",
                       messageText: "<div class='chat-text'>" +
                       "Contenu 18+. Merci de vérifier ton âge." +
                       "</div>" +
                       "<div class='chat-text'>" +
                       "CLIQUE ICI" +
                       "</div>"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "si ta bite devient dure en voyant ça."
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "viens me voir dans 10 minutes sur mon profil vérifié ici"
                      }
                      ,
                      {
                      messageType: "inviteMessage",
                       messageText: "<div class='chat-message-content-wrapper'>" +
                       "<div class='chat-title'>" +
                       "@Profil: Julysexy" +
                       "</div>" +
                       "<div class='chat-text'>" +
                       "Julysexy envoie un lien vers son profil. Clique pour te connecter avec Julysexy et d'autres personnes que tu connais peut-être. Partage et vis dans un monde plus ouvert et connecté." +
                       "</div>" +
                       "</div>"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "envoie-moi un message une fois inscrit"
                      }
                     ],
      }
      ,
      user7: {
      userName: "Kikichérie",
       userMessages: [{
                      messageType: "memberMessage",
                       messageText: "J'espère que tu ne te masturbes pas sur mes photos ?"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "hahahahah"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "je te donne encore plus"
                      }
                      ,
                      {
                      messageType: "photoMessage",
                       messageText: "<div class='chat-text'>" +
                       "Contenu 18+. Merci de vérifier ton âge." +
                       "</div>" +
                       "<div class='chat-text'>" +
                       "CLIQUE ICI" +
                       "</div>"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "si ta bite devient dure en voyant ça."
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "viens me voir dans 10 minutes sur mon profil vérifié ici"
                      }
                      ,
                      {
                      messageType: "inviteMessage",
                       messageText: "<div class='chat-message-content-wrapper'>" +
                       "<div class='chat-title'>" +
                       "@Profil: Kikichérie" +
                       "</div>" +
                       "<div class='chat-text'>" +
                       "Kikichérie envoie un lien vers son profil. Clique pour te connecter avec Kikichérie et d'autres personnes que tu connais peut-être. Partage et vis dans un monde plus ouvert et connecté." +
                       "</div>" +
                       "</div>"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "envoie-moi un message une fois inscrit"
                      }
                     ],
      }
      ,
      user8: {
      userName: "Zhang21213",
       userMessages: [{
                      messageType: "memberMessage",
                       messageText: "J'espère que tu ne te masturbes pas sur mes photos ?"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "hahahahah"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "je te donne encore plus"
                      }
                      ,
                      {
                      messageType: "photoMessage",
                       messageText: "<div class='chat-text'>" +
                       "Contenu 18+. Merci de vérifier ton âge." +
                       "</div>" +
                       "<div class='chat-text'>" +
                       "CLIQUE ICI" +
                       "</div>"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "si ta bite devient dure en voyant ça."
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "viens me voir dans 10 minutes sur mon profil vérifié ici"
                      }
                      ,
                      {
                      messageType: "inviteMessage",
                       messageText: "<div class='chat-message-content-wrapper'>" +
                       "<div class='chat-title'>" +
                       "@Profil: Zhang21213" +
                       "</div>" +
                       "<div class='chat-text'>" +
                       "Zhang21213 envoie un lien vers son profil. Clique pour te connecter avec Zhang21213 et d'autres personnes que tu connais peut-être. Partage et vis dans un monde plus ouvert et connecté." +
                       "</div>" +
                       "</div>"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "envoie-moi un message une fois inscrit"
                      }
                     ],
      }
     }
     ,
     es: {
     user1: {
      userName: "Follamiconejito",
       userMessages: [{
                      messageType: "memberMessage",
                       messageText: "espero que no te estés masturbado con mis fotos?"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "ja ja"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "te envío más"
                      }
                      ,
                      {
                      messageType: "photoMessage",
                       messageText: "<div class='chat-text'>" +
                       "Contenido para mayores de 18. Por favor, verifica tu edad." +
                       "</div>" +
                       "<div class='chat-text'>" +
                       "HAZ CLIC AQUÍ" +
                       "</div>"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "si se te pone dura viendo esto."
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "hablemos en 10 minutos en mi perfil verificado"
                      }
                      ,
                      {
                      messageType: "inviteMessage",
                       messageText: "<div class='chat-message-content-wrapper'>" +
                       "<div class='chat-title'>" +
                       "@Profile: Follamiconejito" +
                       "</div>" +
                       "<div class='chat-text'>" +
                       "Follamiconejito te envía un enlace a su perfil. Haz clic para conectar con Follamiconejito y otras usuarias que puedes conocer. Consigue el poder de compartir y hacer del mundo un lugar más abierto y conectado." +
                       "</div>" +
                       "</div>"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "escríbeme cuando te hayas registrado"
                      }
                     ],
      }
      ,
      user2: {
      userName: "ChicaMala2",
       userMessages: [{
                      messageType: "memberMessage",
                       messageText: "alguna vez te follaste a una modelo tatuada?"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "te pongo?"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "dónde crees que debería hacerme el próximo tatuaje?"
                      }
                      ,
                      {
                      messageType: "photoMessage",
                       messageText: "<div class='chat-text'>" +
                       "Contenido para mayores de 18. Por favor, verifica tu edad." +
                       "</div>" +
                       "<div class='chat-text'>" +
                       "HAZ CLIC AQUÍ" +
                       "</div>"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "hablemos mejor aquí, es mi perfil"
                      }
                      ,
                      {
                      messageType: "inviteMessage",
                       messageText: "<div class='chat-message-content-wrapper'>" +
                       "<div class='chat-title'>" +
                       "@Profile: ChicaMala2" +
                       "</div>" +
                       "<div class='chat-text'>" +
                       "ChicaMala2 te envía un enlace a su perfil. Haz clic para conectar con ChicaMala2 y otras usuarias que puedes conocer. Consigue el poder de compartir y hacer del mundo un lugar más abierto y conectado." +
                       "</div>" +
                       "</div>"
                      }
                     ],
      }
      ,
      user3: {
      userName: "Leire",
       userMessages: [{
                      messageType: "memberMessage",
                       messageText: "quieres verme las tetas?"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "más cerca de lo que imaginas"
                      }
                      ,
                      {
                      messageType: "photoMessage",
                       messageText: "<div class='chat-text'>" +
                       "Contenido para mayores de 18. Por favor, verifica tu edad." +
                       "</div>" +
                       "<div class='chat-text'>" +
                       "HAZ CLIC AQUÍ" +
                       "</div>"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "si se te pone dura viendo esto." + "</br>" +
                       "Puedo mostrarte más aquí:"
                      }
                      ,
                      {
                      messageType: "inviteMessage",
                       messageText: "<div class='chat-message-content-wrapper'>" +
                       "<div class='chat-title'>" +
                       "@Profile: Leire" +
                       "</div>" +
                       "<div class='chat-text'>" +
                       "Leire te envía un enlace a su perfil. Haz clic para conectar con Leire y otras usuarias que puedes conocer. Consigue el poder de compartir y hacer del mundo un lugar más abierto y conectado." +
                       "</div>" +
                       "</div>"
                      }
                     ],
      }
      ,
      user4: {
      userName: "SexyLady",
       userMessages: [{
                      messageType: "memberMessage",
                       messageText: "espero que no te estés masturbado con mis fotos?"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "ja ja"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "te envío más"
                      }
                      ,
                      {
                      messageType: "photoMessage",
                       messageText: "<div class='chat-text'>" +
                       "Contenido para mayores de 18. Por favor, verifica tu edad." +
                       "</div>" +
                       "<div class='chat-text'>" +
                       "HAZ CLIC AQUÍ" +
                       "</div>"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "si se te pone dura viendo esto."
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "hablemos en 10 minutos en mi perfil verificado"
                      }
                      ,
                      {
                      messageType: "inviteMessage",
                       messageText: "<div class='chat-message-content-wrapper'>" +
                       "<div class='chat-title'>" +
                       "@Profile: SexyLady" +
                       "</div>" +
                       "<div class='chat-text'>" +
                       "SexyLady te envía un enlace a su perfil. Haz clic para conectar con SexyLady y otras usuarias que puedes conocer. Consigue el poder de compartir y hacer del mundo un lugar más abierto y conectado." +
                       "</div>" +
                       "</div>"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "escríbeme cuando te hayas registrado"
                      }
                     ],
      }
      ,
      user5: {
      userName: "Eva24",
       userMessages: [{
                      messageType: "memberMessage",
                       messageText: "espero que no te estés masturbado con mis fotos?"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "ja ja"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "te envío más"
                      }
                      ,
                      {
                      messageType: "photoMessage",
                       messageText: "<div class='chat-text'>" +
                       "Contenido para mayores de 18. Por favor, verifica tu edad." +
                       "</div>" +
                       "<div class='chat-text'>" +
                       "HAZ CLIC AQUÍ" +
                       "</div>"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "si se te pone dura viendo esto."
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "hablemos en 10 minutos en mi perfil verificado"
                      }
                      ,
                      {
                      messageType: "inviteMessage",
                       messageText: "<div class='chat-message-content-wrapper'>" +
                       "<div class='chat-title'>" +
                       "@Profile: Eva24" +
                       "</div>" +
                       "<div class='chat-text'>" +
                       "Eva24 te envía un enlace a su perfil. Haz clic para conectar con Eva24 y otras usuarias que puedes conocer. Consigue el poder de compartir y hacer del mundo un lugar más abierto y conectado." +
                       "</div>" +
                       "</div>"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "escríbeme cuando te hayas registrado"
                      }
                     ],
      }
      ,
      user6: {
      userName: "MariTetas",
       userMessages: [{
                      messageType: "memberMessage",
                       messageText: "espero que no te estés masturbado con mis fotos?"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "ja ja"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "te envío más"
                      }
                      ,
                      {
                      messageType: "photoMessage",
                       messageText: "<div class='chat-text'>" +
                       "Contenido para mayores de 18. Por favor, verifica tu edad." +
                       "</div>" +
                       "<div class='chat-text'>" +
                       "HAZ CLIC AQUÍ" +
                       "</div>"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "si se te pone dura viendo esto."
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "hablemos en 10 minutos en mi perfil verificado"
                      }
                      ,
                      {
                      messageType: "inviteMessage",
                       messageText: "<div class='chat-message-content-wrapper'>" +
                       "<div class='chat-title'>" +
                       "@Profile: MariTetas" +
                       "</div>" +
                       "<div class='chat-text'>" +
                       "MariTetas te envía un enlace a su perfil. Haz clic para conectar con MariTetas y otras usuarias que puedes conocer. Consigue el poder de compartir y hacer del mundo un lugar más abierto y conectado." +
                       "</div>" +
                       "</div>"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "escríbeme cuando te hayas registrado"
                      }
                     ],
      }
      ,
      user7: {
      userName: "Sarita",
       userMessages: [{
                      messageType: "memberMessage",
                       messageText: "espero que no te estés masturbado con mis fotos?"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "ja ja"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "te envío más"
                      }
                      ,
                      {
                      messageType: "photoMessage",
                       messageText: "<div class='chat-text'>" +
                       "Contenido para mayores de 18. Por favor, verifica tu edad." +
                       "</div>" +
                       "<div class='chat-text'>" +
                       "HAZ CLIC AQUÍ" +
                       "</div>"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "si se te pone dura viendo esto."
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "hablemos en 10 minutos en mi perfil verificado"
                      }
                      ,
                      {
                      messageType: "inviteMessage",
                       messageText: "<div class='chat-message-content-wrapper'>" +
                       "<div class='chat-title'>" +
                       "@Profile: Sarita" +
                       "</div>" +
                       "<div class='chat-text'>" +
                       "Sarita te envía un enlace a su perfil. Haz clic para conectar con Sarita y otras usuarias que puedes conocer. Consigue el poder de compartir y hacer del mundo un lugar más abierto y conectado." +
                       "</div>" +
                       "</div>"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "escríbeme cuando te hayas registrado"
                      }
                     ],
      }
      ,
      user8: {
      userName: "Mariola21213",
       userMessages: [{
                      messageType: "memberMessage",
                       messageText: "espero que no te estés masturbado con mis fotos?"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "ja ja"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "te envío más"
                      }
                      ,
                      {
                      messageType: "photoMessage",
                       messageText: "<div class='chat-text'>" +
                       "Contenido para mayores de 18. Por favor, verifica tu edad." +
                       "</div>" +
                       "<div class='chat-text'>" +
                       "HAZ CLIC AQUÍ" +
                       "</div>"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "si se te pone dura viendo esto."
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "hablemos en 10 minutos en mi perfil verificado"
                      }
                      ,
                      {
                      messageType: "inviteMessage",
                       messageText: "<div class='chat-message-content-wrapper'>" +
                       "<div class='chat-title'>" +
                       "@Profile: Mariola21213" +
                       "</div>" +
                       "<div class='chat-text'>" +
                       "Mariola21213 te envía un enlace a su perfil. Haz clic para conectar con Mariola21213 y otras usuarias que puedes conocer. Consigue el poder de compartir y hacer del mundo un lugar más abierto y conectado." +
                       "</div>" +
                       "</div>"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "escríbeme cuando te hayas registrado"
                      }
                     ],
      }
     }
     ,
     pt: {
     user1: {
      userName: "fodeaminharata",
       userMessages: [{
                      messageType: "memberMessage",
                       messageText: "Espero que não esteja se masturbando nas minhas fotos?"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "ahahahahah"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "eu dou-te mais"
                      }
                      ,
                      {
                      messageType: "photoMessage",
                       messageText: "<div class='chat-text'>" +
                       "Conteúdos para 18+. Confirme a sua idade." +
                       "</div>" +
                       "<div class='chat-text'>" +
                       "CLICAR AQUI" +
                       "</div>"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "se o teu pau ficar duro ao ver isto."
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "Vemo-nos daqui a 10 minutos no meu perfil verificado aqui"
                      }
                      ,
                      {
                      messageType: "inviteMessage",
                       messageText: "<div class='chat-message-content-wrapper'>" +
                       "<div class='chat-title'>" +
                       "@Perfil: fodeaminharata" +
                       "</div>" +
                       "<div class='chat-text'>" +
                       "fodeaminharata envia uma ligação para o perfil dela. Clique para se ligar a fodeaminharata e outras que possa conhecer. Tenha o poder de partilhar e tornar o mundo mais aberto e ligado." +
                       "</div>" +
                       "</div>"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "diz qualquer coisa quando estiveres registado"
                      }
                     ],
      }
      ,
      user2: {
      userName: "maria2",
       userMessages: [{
                      messageType: "memberMessage",
                       messageText: "alguma vez fodeste uma modelo tatuada sexy?"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "excito-te?"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "onde achas que devo fazer a minha próxima tatuagem?"
                      }
                      ,
                      {
                      messageType: "photoMessage",
                       messageText: "<div class='chat-text'>" +
                       "Conteúdos para 18+. Confirme a sua idade." +
                       "</div>" +
                       "<div class='chat-text'>" +
                       "CLICAR AQUI" +
                       "</div>"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "o melhor é falarmos aqui. é o meu perfil"
                      }
                      ,
                      {
                      messageType: "inviteMessage",
                       messageText: "<div class='chat-message-content-wrapper'>" +
                       "<div class='chat-title'>" +
                       "@Perfil: maria2" +
                       "</div>" +
                       "<div class='chat-text'>" +
                       "maria2 envia uma ligação para o perfil dela. Clique para se ligar a maria2 e outras que possa conhecer. Tenha o poder de partilhar e tornar o mundo mais aberto e ligado." +
                       "</div>" +
                       "</div>"
                      }
                     ],
      }
      ,
      user3: {
      userName: "Rute",
       userMessages: [{
                      messageType: "memberMessage",
                       messageText: "queres ver a minhas mamas?"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "mais perto do que imaginas"
                      }
                      ,
                      {
                      messageType: "photoMessage",
                       messageText: "<div class='chat-text'>" +
                       "Conteúdos para 18+. Confirme a sua idade." +
                       "</div>" +
                       "<div class='chat-text'>" +
                       "CLICAR AQUI" +
                       "</div>"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "se o teu pau ficar duro ao ver isto." + "</br>" +
                       "Posso mostrar-te mais aqui:"
                      }
                      ,
                      {
                      messageType: "inviteMessage",
                       messageText: "<div class='chat-message-content-wrapper'>" +
                       "<div class='chat-title'>" +
                       "@Perfil: Rute" +
                       "</div>" +
                       "<div class='chat-text'>" +
                       "Rute envia uma ligação para o perfil dela. Clique para se ligar a Rute e outras que possa conhecer. Tenha o poder de partilhar e tornar o mundo mais aberto e ligado." +
                       "</div>" +
                       "</div>"
                      }
                     ],
      }
      ,
      user4: {
      userName: "todatua24",
       userMessages: [{
                      messageType: "memberMessage",
                       messageText: "Espero que não esteja se masturbando nas minhas fotos?"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "ahahahahah"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "eu dou-te mais"
                      }
                      ,
                      {
                      messageType: "photoMessage",
                       messageText: "<div class='chat-text'>" +
                       "Conteúdos para 18+. Confirme a sua idade." +
                       "</div>" +
                       "<div class='chat-text'>" +
                       "CLICAR AQUI" +
                       "</div>"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "se o teu pau ficar duro ao ver isto."
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "Vemo-nos daqui a 10 minutos no meu perfil verificado aqui"
                      }
                      ,
                      {
                      messageType: "inviteMessage",
                       messageText: "<div class='chat-message-content-wrapper'>" +
                       "<div class='chat-title'>" +
                       "@Perfil: todatua24" +
                       "</div>" +
                       "<div class='chat-text'>" +
                       "todatua24 envia uma ligação para o perfil dela. Clique para se ligar a todatua24 e outras que possa conhecer. Tenha o poder de partilhar e tornar o mundo mais aberto e ligado." +
                       "</div>" +
                       "</div>"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "diz qualquer coisa quando estiveres registado"
                      }
                     ],
      }
      ,
      user5: {
      userName: "LadyLoka",
       userMessages: [{
                      messageType: "memberMessage",
                       messageText: "Espero que não esteja se masturbando nas minhas fotos?"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "ahahahahah"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "eu dou-te mais"
                      }
                      ,
                      {
                      messageType: "photoMessage",
                       messageText: "<div class='chat-text'>" +
                       "Conteúdos para 18+. Confirme a sua idade." +
                       "</div>" +
                       "<div class='chat-text'>" +
                       "CLICAR AQUI" +
                       "</div>"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "se o teu pau ficar duro ao ver isto."
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "Vemo-nos daqui a 10 minutos no meu perfil verificado aqui"
                      }
                      ,
                      {
                      messageType: "inviteMessage",
                       messageText: "<div class='chat-message-content-wrapper'>" +
                       "<div class='chat-title'>" +
                       "@Perfil: LadyLoka" +
                       "</div>" +
                       "<div class='chat-text'>" +
                       "LadyLoka envia uma ligação para o perfil dela. Clique para se ligar a LadyLoka e outras que possa conhecer. Tenha o poder de partilhar e tornar o mundo mais aberto e ligado." +
                       "</div>" +
                       "</div>"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "diz qualquer coisa quando estiveres registado"
                      }
                     ],
      }
      ,
      user6: {
      userName: "IsaSexy",
       userMessages: [{
                      messageType: "memberMessage",
                       messageText: "Espero que não esteja se masturbando nas minhas fotos?"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "ahahahahah"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "eu dou-te mais"
                      }
                      ,
                      {
                      messageType: "photoMessage",
                       messageText: "<div class='chat-text'>" +
                       "Conteúdos para 18+. Confirme a sua idade." +
                       "</div>" +
                       "<div class='chat-text'>" +
                       "CLICAR AQUI" +
                       "</div>"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "se o teu pau ficar duro ao ver isto."
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "Vemo-nos daqui a 10 minutos no meu perfil verificado aqui"
                      }
                      ,
                      {
                      messageType: "inviteMessage",
                       messageText: "<div class='chat-message-content-wrapper'>" +
                       "<div class='chat-title'>" +
                       "@Perfil: IsaSexy" +
                       "</div>" +
                       "<div class='chat-text'>" +
                       "IsaSexy envia uma ligação para o perfil dela. Clique para se ligar a IsaSexy e outras que possa conhecer. Tenha o poder de partilhar e tornar o mundo mais aberto e ligado." +
                       "</div>" +
                       "</div>"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "diz qualquer coisa quando estiveres registado"
                      }
                     ],
      }
      ,
      user7: {
      userName: "Cristina",
       userMessages: [{
                      messageType: "memberMessage",
                       messageText: "Espero que não esteja se masturbando nas minhas fotos?"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "ahahahahah"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "eu dou-te mais"
                      }
                      ,
                      {
                      messageType: "photoMessage",
                       messageText: "<div class='chat-text'>" +
                       "Conteúdos para 18+. Confirme a sua idade." +
                       "</div>" +
                       "<div class='chat-text'>" +
                       "CLICAR AQUI" +
                       "</div>"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "se o teu pau ficar duro ao ver isto."
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "Vemo-nos daqui a 10 minutos no meu perfil verificado aqui"
                      }
                      ,
                      {
                      messageType: "inviteMessage",
                       messageText: "<div class='chat-message-content-wrapper'>" +
                       "<div class='chat-title'>" +
                       "@Perfil: Cristina" +
                       "</div>" +
                       "<div class='chat-text'>" +
                       "Cristina envia uma ligação para o perfil dela. Clique para se ligar a Cristina e outras que possa conhecer. Tenha o poder de partilhar e tornar o mundo mais aberto e ligado." +
                       "</div>" +
                       "</div>"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "diz qualquer coisa quando estiveres registado"
                      }
                     ],
      }
      ,
      user8: {
      userName: "Zita21213",
       userMessages: [{
                      messageType: "memberMessage",
                       messageText: "Espero que não esteja se masturbando nas minhas fotos?"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "ahahahahah"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "eu dou-te mais"
                      }
                      ,
                      {
                      messageType: "photoMessage",
                       messageText: "<div class='chat-text'>" +
                       "Conteúdos para 18+. Confirme a sua idade." +
                       "</div>" +
                       "<div class='chat-text'>" +
                       "CLICAR AQUI" +
                       "</div>"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "se o teu pau ficar duro ao ver isto."
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "Vemo-nos daqui a 10 minutos no meu perfil verificado aqui"
                      }
                      ,
                      {
                      messageType: "inviteMessage",
                       messageText: "<div class='chat-message-content-wrapper'>" +
                       "<div class='chat-title'>" +
                       "@Perfil: Zita21213" +
                       "</div>" +
                       "<div class='chat-text'>" +
                       "Zita21213 envia uma ligação para o perfil dela. Clique para se ligar a Zita21213 e outras que possa conhecer. Tenha o poder de partilhar e tornar o mundo mais aberto e ligado." +
                       "</div>" +
                       "</div>"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "diz qualquer coisa quando estiveres registado"
                      }
                     ],
      }
     }
     ,
     it: {
     user1: {
      userName: "scopamitutta",
       userMessages: [{
                      messageType: "memberMessage",
                       messageText: "I hope you are not masturbating on my pics?"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "hahahahah"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "ti do qualcosa in più"
                      }
                      ,
                      {
                      messageType: "photoMessage",
                       messageText: "<div class='chat-text'>" +
                       "Contenuti +18. Verifica la tua età." +
                       "</div>" +
                       "<div class='chat-text'>" +
                       "CLICCA QUI" +
                       "</div>"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "se il tuo cazzo diventa duro vedendo questo."
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "parliamo tra 10 minuti sul mio profilo verificato qui"
                      }
                      ,
                      {
                      messageType: "inviteMessage",
                       messageText: "<div class='chat-message-content-wrapper'>" +
                       "<div class='chat-title'>" +
                       "@Profilo: scopamitutta" +
                       "</div>" +
                       "<div class='chat-text'>" +
                       "scopamitutta invia un link al suo profilo. Clicca per connetterti con scopamitutta e altri utenti che potresti conoscere. Usa il tuo potere di condividere e rendere il mondo più aperto e connesso." +
                       "</div>" +
                       "</div>"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "scrivimi quando ti sei iscritto"
                      }
                     ],
      }
      ,
      user2: {
      userName: "cattiva692",
       userMessages: [{
                      messageType: "memberMessage",
                       messageText: "mai scopato una sexy modella tatuata?"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "ti eccito?"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "dove pensi che dovrei fare il mio prossimo tatuaggio?"
                      }
                      ,
                      {
                      messageType: "photoMessage",
                       messageText: "<div class='chat-text'>" +
                       "Contenuti +18. Verifica la tua età." +
                       "</div>" +
                       "<div class='chat-text'>" +
                       "CLICCA QUI" +
                       "</div>"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "parliamo meglio qui…. è il mio profilo"
                      }
                      ,
                      {
                      messageType: "inviteMessage",
                       messageText: "<div class='chat-message-content-wrapper'>" +
                       "<div class='chat-title'>" +
                       "@Profilo: cattiva692" +
                       "</div>" +
                       "<div class='chat-text'>" +
                       "cattiva692 invia un link al suo profilo. Clicca per connetterti con cattiva692 e altri utenti che potresti conoscere. Usa il tuo potere di condividere e rendere il mondo più aperto e connesso." +
                       "</div>" +
                       "</div>"
                      }
                     ],
      }
      ,
      user3: {
      userName: "Rachele",
       userMessages: [{
                      messageType: "memberMessage",
                       messageText: "vuoi vedere le mie tette?"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "più vicino di quanto tu possa immaginare"
                      }
                      ,
                      {
                      messageType: "photoMessage",
                       messageText: "<div class='chat-text'>" +
                       "Contenuti +18. Verifica la tua età." +
                       "</div>" +
                       "<div class='chat-text'>" +
                       "CLICCA QUI" +
                       "</div>"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "se il tuo cazzo diventa duro vedendo questo." + "</br>" +
                       "posso mostrarti di più qui: "
                      }
                      ,
                      {
                      messageType: "inviteMessage",
                       messageText: "<div class='chat-message-content-wrapper'>" +
                       "<div class='chat-title'>" +
                       "@Profilo: Rachele" +
                       "</div>" +
                       "<div class='chat-text'>" +
                       "Rachele invia un link al suo profilo. Clicca per connetterti con Rachele e altri utenti che potresti conoscere. Usa il tuo potere di condividere e rendere il mondo più aperto e connesso." +
                       "</div>" +
                       "</div>"
                      }
                     ],
      }
      ,
      user4: {
      userName: "curvy24",
       userMessages: [{
                      messageType: "memberMessage",
                       messageText: "I hope you are not masturbating on my pics?"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "hahahahah"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "ti do qualcosa in più"
                      }
                      ,
                      {
                      messageType: "photoMessage",
                       messageText: "<div class='chat-text'>" +
                       "Contenuti +18. Verifica la tua età." +
                       "</div>" +
                       "<div class='chat-text'>" +
                       "CLICCA QUI" +
                       "</div>"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "se il tuo cazzo diventa duro vedendo questo."
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "parliamo tra 10 minuti sul mio profilo verificato qui"
                      }
                      ,
                      {
                      messageType: "inviteMessage",
                       messageText: "<div class='chat-message-content-wrapper'>" +
                       "<div class='chat-title'>" +
                       "@Profilo: curvy24" +
                       "</div>" +
                       "<div class='chat-text'>" +
                       "curvy24 invia un link al suo profilo. Clicca per connetterti con curvy24 e altri utenti che potresti conoscere. Usa il tuo potere di condividere e rendere il mondo più aperto e connesso." +
                       "</div>" +
                       "</div>"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "scrivimi quando ti sei iscritto"
                      }
                     ],
      }
      ,
      user5: {
      userName: "SexyLady",
       userMessages: [{
                      messageType: "memberMessage",
                       messageText: "I hope you are not masturbating on my pics?"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "hahahahah"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "ti do qualcosa in più"
                      }
                      ,
                      {
                      messageType: "photoMessage",
                       messageText: "<div class='chat-text'>" +
                       "Contenuti +18. Verifica la tua età." +
                       "</div>" +
                       "<div class='chat-text'>" +
                       "CLICCA QUI" +
                       "</div>"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "se il tuo cazzo diventa duro vedendo questo."
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "parliamo tra 10 minuti sul mio profilo verificato qui"
                      }
                      ,
                      {
                      messageType: "inviteMessage",
                       messageText: "<div class='chat-message-content-wrapper'>" +
                       "<div class='chat-title'>" +
                       "@Profilo: SexyLady" +
                       "</div>" +
                       "<div class='chat-text'>" +
                       "SexyLady invia un link al suo profilo. Clicca per connetterti con SexyLady e altri utenti che potresti conoscere. Usa il tuo potere di condividere e rendere il mondo più aperto e connesso." +
                       "</div>" +
                       "</div>"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "scrivimi quando ti sei iscritto"
                      }
                     ],
      }
      ,
      user6: {
      userName: "Fragola43",
       userMessages: [{
                      messageType: "memberMessage",
                       messageText: "I hope you are not masturbating on my pics?"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "hahahahah"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "ti do qualcosa in più"
                      }
                      ,
                      {
                      messageType: "photoMessage",
                       messageText: "<div class='chat-text'>" +
                       "Contenuti +18. Verifica la tua età." +
                       "</div>" +
                       "<div class='chat-text'>" +
                       "CLICCA QUI" +
                       "</div>"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "se il tuo cazzo diventa duro vedendo questo."
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "parliamo tra 10 minuti sul mio profilo verificato qui"
                      }
                      ,
                      {
                      messageType: "inviteMessage",
                       messageText: "<div class='chat-message-content-wrapper'>" +
                       "<div class='chat-title'>" +
                       "@Profilo: Fragola43" +
                       "</div>" +
                       "<div class='chat-text'>" +
                       "Fragola43 invia un link al suo profilo. Clicca per connetterti con Fragola43 e altri utenti che potresti conoscere. Usa il tuo potere di condividere e rendere il mondo più aperto e connesso." +
                       "</div>" +
                       "</div>"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "scrivimi quando ti sei iscritto"
                      }
                     ],
      }
      ,
      user7: {
      userName: "Kiara",
       userMessages: [{
                      messageType: "memberMessage",
                       messageText: "I hope you are not masturbating on my pics?"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "hahahahah"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "ti do qualcosa in più"
                      }
                      ,
                      {
                      messageType: "photoMessage",
                       messageText: "<div class='chat-text'>" +
                       "Contenuti +18. Verifica la tua età." +
                       "</div>" +
                       "<div class='chat-text'>" +
                       "CLICCA QUI" +
                       "</div>"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "se il tuo cazzo diventa duro vedendo questo."
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "parliamo tra 10 minuti sul mio profilo verificato qui"
                      }
                      ,
                      {
                      messageType: "inviteMessage",
                       messageText: "<div class='chat-message-content-wrapper'>" +
                       "<div class='chat-title'>" +
                       "@Profilo: Kiara" +
                       "</div>" +
                       "<div class='chat-text'>" +
                       "Kiara invia un link al suo profilo. Clicca per connetterti con Kiara e altri utenti che potresti conoscere. Usa il tuo potere di condividere e rendere il mondo più aperto e connesso." +
                       "</div>" +
                       "</div>"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "scrivimi quando ti sei iscritto"
                      }
                     ],
      }
      ,
      user8: {
      userName: "Zoccola123",
       userMessages: [{
                      messageType: "memberMessage",
                       messageText: "I hope you are not masturbating on my pics?"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "hahahahah"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "ti do qualcosa in più"
                      }
                      ,
                      {
                      messageType: "photoMessage",
                       messageText: "<div class='chat-text'>" +
                       "Contenuti +18. Verifica la tua età." +
                       "</div>" +
                       "<div class='chat-text'>" +
                       "CLICCA QUI" +
                       "</div>"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "se il tuo cazzo diventa duro vedendo questo."
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "parliamo tra 10 minuti sul mio profilo verificato qui"
                      }
                      ,
                      {
                      messageType: "inviteMessage",
                       messageText: "<div class='chat-message-content-wrapper'>" +
                       "<div class='chat-title'>" +
                       "@Profilo: Zoccola123" +
                       "</div>" +
                       "<div class='chat-text'>" +
                       "Zoccola123 invia un link al suo profilo. Clicca per connetterti con Zoccola123 e altri utenti che potresti conoscere. Usa il tuo potere di condividere e rendere il mondo più aperto e connesso." +
                       "</div>" +
                       "</div>"
                      }
                      ,
                      {
                      messageType: "memberMessage",
                       messageText: "scrivimi quando ti sei iscritto"
                      }
                     ],
      }
     }
    };
    if (currentLanguage in messageList) {
      currentMessageList = messageList[currentLanguage];
    }
    else {
      currentMessageList = messageList[defaultLanguage];
    }
    function getCurrentDataStep() {
      return '[data-step="' + model.stepNumber + '"]';
    }
    function addChatMessage(messageType, messageContent) {
      switch (messageType) {
        case "memberMessage":
          return "<div class='chat-message member-message'>" + "<div class='chat-message-inner'>" + messageContent + "</div>" + "</div>";
        case "userMessage":
          return "<div class='chat-message user-message'>" + "<div class='chat-message-inner'>" + messageContent + "</div>" + "</div>";
        case "photoMessage":
          return (
            "<div class='chat-message member-message chat-message-photo'>" +
            "<div class='chat-message-inner'>" +
            messageContent +
            "</div>" +
            "<div class='submit-btn' data-reason='chat2_banner'></div>" +
            "</div>"
          );
        case "inviteMessage":
          return (
            "<div class='chat-message member-message chat-invite'>" +
            "<div class='chat-message-inner'>" +
            messageContent +
            "</div>" +
            "<div class='submit-btn' data-reason='chat3_banner'></div>" +
            "</div>"
          );
      }
    }
    function typingMessage() {
      if (
        model["step" + model.stepNumber].currentMessageCounter < currentMessageList["user" + model.stepNumber].userMessages.length &&
        !model["step" + model.stepNumber].isTypingMessage &&
        model["step" + model.stepNumber].isStartChat
      ) {
        controller("chattedOn");
        setTimeout(function () {
          var currentStep = getCurrentDataStep();
          var currentMessage = currentMessageList["user" + model.stepNumber].userMessages[model["step" + model.stepNumber].currentMessageCounter];
          $(currentStep).find(".chat-message-wrapper").append(addChatMessage(currentMessage.messageType, currentMessage.messageText));
          controller("chattedOff");
        }
                    , randomNumber(4000, 5000));
      }
      else if (
        model["step" + model.stepNumber].currentMessageCounter >= currentMessageList["user" + model.stepNumber].userMessages.length &&
        !model["step" + model.stepNumber].isEndOfChat
      ) {
        controller("endOfChat");
        setTimeout(function () {
          controller("showPopup2");
        }
                    , 4000);
      }
    }
    function sendMessage() {
      var currentStep = getCurrentDataStep();
      var messageInput = $(currentStep).find(".chat-input-field");
      if (messageInput.val() !== "") {
        $(currentStep).find(".chat-message-wrapper").append(addChatMessage("userMessage", messageInput.val()));
        messageInput.val("");
      }
    }
    function controller(action) {
      switch (action) {
        case "startChat":
          model["step" + model.stepNumber].isStartChat = true;
          break;
        case "closeChat":
          model["step" + model.stepNumber].isStartChat = false;
          break;
        case "chattedOn":
          model["step" + model.stepNumber].isTypingMessage = true;
          break;
        case "chattedOff":
          model["step" + model.stepNumber].isTypingMessage = false;
          model["step" + model.stepNumber].currentMessageCounter = model["step" + model.stepNumber].currentMessageCounter + 1;
          break;
        case "endOfChat":
          model["step" + model.stepNumber].isEndOfChat = true;
          break;
        case "hidePopup":
          model["step" + model.stepNumber].isPopup2Visible = false;
          break;
        case "showPopup2":
          model["step" + model.stepNumber].isPopup2Visible = true;
          break;
        case "changeStep":
          if (model.stepNumber < $(".step-item").length) {
            model.stepNumber = model.stepNumber + 1;
          }
          break;
        case "showStep1":
          model.stepNumber = 1;
          model["step" + model.stepNumber].isStartChat = true;
          break;
        case "showStep2":
          model.stepNumber = 2;
          model["step" + model.stepNumber].isStartChat = true;
          break;
        case "showStep3":
          model.stepNumber = 3;
          model["step" + model.stepNumber].isStartChat = true;
          break;
      }
      render();
    }
    function render() {
      $(".step-block").attr("data-current-step", model.stepNumber);
      var currentStep = getCurrentDataStep();
      /* check start chat */
      if (model["step" + model.stepNumber].isStartChat) {
        $(currentStep).find(".member-block").removeClass("is-active");
        $(currentStep).find(".chat-block").addClass("is-active");
        $headerSection.addClass("is-closed");
        /* add new chat message */
        setTimeout(function () {
          typingMessage();
        }
                    , randomNumber(1000, 2000));
      }
      /* check close chat */
      if (!model["step" + model.stepNumber].isStartChat) {
        $(currentStep).find(".member-block").addClass("is-active");
        $(currentStep).find(".chat-block").removeClass("is-active");
        $headerSection.removeClass("is-closed");
      }
      /* check typing message */
      if (model["step" + model.stepNumber].isTypingMessage) {
        $(currentStep).find(".chat-message-wrapper").addClass("is-typping");
      }
      else {
        $(currentStep).find(".chat-message-wrapper").removeClass("is-typping");
      }
      /* check member status */
      if (!model["step" + model.stepNumber].isEndOfChat) {
        $(currentStep).find(".chat-activity").addClass("online").text(memberStatusText.online);
      }
      else {
        $(currentStep).find(".chat-activity").removeClass("online").text(memberStatusText.offline);
      }
      /* check end of chat */
      if (model["step" + model.stepNumber].isEndOfChat && model["step" + model.stepNumber].isMemberOnline) {
        var userName = currentMessageList["user" + model.stepNumber].userName;
        model["step" + model.stepNumber].isMemberOnline = false;
        $(currentStep).find(".chat-activity").removeClass("online").text(memberStatusText.offline);
        $(currentStep)
        .find(".chat-message-wrapper")
        .append("<div class='chat-message-status'>" + userName + " went offline</div>");
      }
    }
    function init() {
      render();
    }
    function setHj(key) {
      window.location.hash = key;
      hj("stateChange", window.location.href);
    }
    //setHj('');;
    $(".photo-wrapper").on("click", function () {
      $(this).toggleClass("is-active");
      var key = !$(this).hasClass("is-active") ? "profile" : "profile_photo";
      push_current_path = push_path[key];
      banner_current_path = banner_path[key];
      social_current_path = social_path[key];
      //setHj(key);
    }
                           );
    $(".close-chat").on("click", function () {
      var stepItem = $(this).closest(".step-item");
      stepItem.find(".member-block").addClass("is-active");
      stepItem.find(".chat-block").removeClass("is-active");
      $(".header-section").removeClass("is-closed");
      push_current_path = push_path.profile;
      banner_current_path = banner_path.profile;
      social_current_path = social_path.profile;
      //setHj('profile');
    }
                        );
    $(".open-chat").on("click", function () {
      controller("startChat");
      push_current_path = push_path.chat;
      banner_current_path = banner_path.chat;
      social_current_path = social_path.chat;
      //setHj('chat');
    }
                       );
    $(".chat-close-btn").on("click", function () {
      controller("closeChat");
      push_current_path = push_path.profile;
      banner_current_path = banner_path.profile;
      social_current_path = social_path.profile;
      //setHj('profile');
    }
                            );
    $(".chat-send-btn").on("click", function () {
      sendMessage();
    }
                           );
    $(".chat-input-field").keyup(function (event) {
      if (event.keyCode === 13) {
        sendMessage();
      }
    }
                                 );
    function reShowPopup() {
      setTimeout(function () {
        if (!model['step' + model.stepNumber].isStartChat) {
          var currentStep = getCurrentDataStep();
          model['step' + model.stepNumber].isPopup2Visible = true;
          $(currentStep).find('.popup-wrapper').attr('data-popup', '2');
          updateIframe();
        }
      }
                  , 1500);
    }
    $(".impression-popup .icon-close").on("click", function () {
      $(".impression-popup").removeClass("active");
    }
                                          );
    var isShowenSliderPopup = false;
    $(".slider-popup .icon-close").on("click", function () {
      $(".slider-popup").removeClass("active");
    }
                                      );
    $(".preview-item").on("click", function () {
      $(".preview-block").hide();
      model.stepNumber = $(this).data("item");
      init();
      reShowPopup();
      push_current_path = push_path.profile;
      banner_current_path = banner_path.profile;
      social_current_path = social_path.profile;
      //setHj('profile');
    }
                          );
    $(".back-button, .logo").on("click", function () {
      if (model.stepNumber > 0) {
        $headerSection.removeClass("is-closed");
        $(".preview-block").show();
        controller("closeChat");
        model.stepNumber = 0;
        $(".step-block").removeAttr("data-current-step");
        push_current_path = push_path.main;
        banner_current_path = banner_path.main;
        social_current_path = social_path.main;
        updateIframe();
        //setHj('');
      }
    }
                                );
    pushCloseButton.addEventListener("click", hidePushBlock);
    pushButton.addEventListener("click", function () {
      hidePushBlock();
      setLinkRedirect(push_current_path);
    }
                                );
    function hidePushBlock() {
      localStorage.setItem("pushClick", "true");
      pushBlock.classList.add("is-hidden");
    }
    if (localStorage.pushClick) hidePushBlock();
    if (localStorage.bannerClick) {
      $(".impression-popup").addClass("active");
      updateIframe();
    }
    function setLinkRedirect(link) {
      window._openOrigin ? window._openOrigin(pageHref, "_blank") : window.open(pageHref, "_blank");
      window.location = link;
    }
    window.addEventListener("blur", function (event) {
      $(".impression-popup").addClass("active");
      updateIframe();
    }
                            );
    //TGURL IFRAME
    function generateIframeUrl(link, reason) {
      return link + reason;
    }
    function setIframe(url, $el, width, height) {
      var $visibleElements = $el.filter(':visible');
      if ($visibleElements.length && !$visibleElements.find('iframe').length) {
        var iframe =
            '<iframe src="' +
            url +
            '" width="' +
            width +
            '" height="' +
            height +
            '" border="0" frameborder="0" scrolling="no"></iframe>';
        $visibleElements.append(iframe);
      }
    }
    var smartlink = "/smartlink/jumpIframe?format=html&tds_reason=";
    function updateIframe() {
      //If window is not iframe
      var frameEl = window.frameElement;
      if (!frameEl) {
        var $iframeHead = $(".preview-header");
        var $iframeProfileHead = $(".header-block");
        var $iframePhotoFooter = $(".photo-wrapper");
        //Ban header 300x100
        var $iframeFooter = $(".preview-footer");
        //Ban footer 300х100
        var $iframeFooterBig = $(".footer-block");
        //Ban footer 300х250
        var $iframeMiddle = $(".preview-middle");
        //ban middle 300*100
        setIframe(generateIframeUrl(smartlink, "main_header_banner"), $iframeHead, 300, 100);
        setIframe(generateIframeUrl(smartlink, "profile_header_banner"), $iframeProfileHead, 300, 100);
        setIframe(generateIframeUrl(smartlink, "photo-footer_banner"), $iframePhotoFooter, 300, 100);
        setIframe(generateIframeUrl(smartlink, "main_footer_banner"), $iframeFooter, 300, 100);
        setIframe(generateIframeUrl(smartlink, "profile_footer_banner"), $iframeFooterBig, 300, 250);
        setIframe(generateIframeUrl(smartlink, "main_middle_banner"), $iframeMiddle, 300, 250);
      }
    }
    updateIframe();
    $(document).on("click", "[data-reason]", function () {
      var reason = $(this).data("reason");
      var chatLink = generateIframeUrl(smartlink, reason);
      localStorage.setItem("bannerClick", "true");
      if (window._openOrigin) {
        window._openOrigin(chatLink, "_blank", "noopener");
      }
      else {
        window.open(chatLink, "_blank", "noopener");
      }
    }
                   );
    $bannerBlocks.each(function () {
      $items = $(this).find(".banner-item");
      var number = randomNumber(0, $items.length - 1);
      $items.eq(number).addClass("active");
    }
                       );
    $bannerBlocks.on("click", function () {
      //window._openOrigin ? window._openOrigin(banner_current_path, "_blank") : window.open(banner_current_path, "_blank");
      //window.location = pageHref;
      setLinkRedirect(banner_current_path);
    }
                     );
    // Social Bar
    var $alertBtn = $(".alert-btn");
    $alertBtn.on("click", function (e) {
      setLinkRedirect(social_current_path);
    }
                 );
    setTimeout(function () {
      $alertBtn.addClass("is-active");
    }
                , 5000);
    // push keys
    var pushTranslationKey = document.querySelectorAll(".push-translation-key");
    var currentPushTranslationKeys;
    var pushTranslationKeys = {
    en: [
      "Some sexy sent you a photo",
      "Click to view",
      "Annie,28",
      "REJECT",
      "VIEW PHOTOS"
    ],
     de: [
       "Neues Foto von 1 sexy Mieze",
       "Klick einfach drauf und schau nach",
       "Annie,28",
       "ABLEHNEN",
       "FOTOS ANSEHEN"
     ],
     fr: [
       "Fille sexy a envoyé une photo",
       "Clique pour voir",
       "Kasia, 24",
       "REJETTE",
       "VOIR PHOTOS"
     ],
     es: [
       "Un pibón te envió una foto",
       "Haz clic para ver",
       "Elena, 24",
       "RECHAZAR",
       "VER FOTOS"
     ],
     pt: [
       "NOVA MENSAGEM!",
       "Olá, sou nova aqui e ando à procura de encontros para sexo!",
       "Cátia, 24",
       "MAIS TARDE",
       "RESPONDER"
     ],
     it: [
       "Ti hanno inviato una foto",
       "Clicca per vedere",
       "Katia, 24",
       "RIFIUTA",
       "GUARDA LE FOTO"
     ]
    }
    if (currentLanguage in pushTranslationKeys) {
      currentPushTranslationKeys = pushTranslationKeys[currentLanguage];
    }
    else {
      currentPushTranslationKeys = pushTranslationKeys[defaultLanguage];
    }
    for (var i = 0; i < pushTranslationKey.length; i++) {
      pushTranslationKey[i].innerHTML = currentPushTranslationKeys[i];
    }
    // page keys
    var pageTranslationKey = document.querySelectorAll(".page-translation-key");
    var currentPageTranslationKeys;
    var pageTranslationKeys = {
    en: [
      "Meet & Fuck",
      "Games",
      "Live sex",
      "fuckmymouse (22)",
      "Near you",
      "mala2 (21)",
      "Downtown",
      "Ryan (29)",
      "Near Central Station",
      "formysta24 (24)",
      "Central Station",
      "shadyLady (25)",
      "Country area",
      "ImaniSexy (23)",
      "2 miles",
      "Kirsten (23)",
      "Near you",
      "Zhang21213 (22)",
      "2 miles",
      "fuckmymouse",
      "Age:",
      "22",
      "Status:",
      "Open for Sex",
      "City:",
      "Location:",
      "See Location",
      "About Me:",
      "I can't say NO to cute guy. So you have a lot of chances to fuck me :)",
      "Photo Gallery",
      "More Photos",
      "Request Sex",
      "Start Chat",
      "fuckmymouse",
      "You have started chat with fuckmymouse",
      "mala2",
      "Age:",
      "22",
      "Status:",
      "Open for Sex",
      "City:",
      "Location:",
      "See Location",
      "About Me:",
      "I don’t really have time to date around so i come here to satisfy my sexual urges ;)",
      "Photo Gallery",
      "More Photos",
      "Request Sex",
      "Start Chat",
      "mala2",
      "You have started chat with mala2",
      "Ryan",
      "Age:",
      "29",
      "Status:",
      "Open for Sex",
      "City:",
      "Location:",
      "See Location",
      "About Me:",
      "I am very interested in the neuroscience research. I was born in a teacher family. My father studied on metal materials, nanocomposite and X-ray diffraction. My mother studied on chemical analysis. Influenced by my parents, I have an instinct of curiosity",
      "Photo Gallery",
      "More Photos",
      "Request Sex",
      "Start Chat",
      "Ryan",
      "You have started chat with Ryan",
      "formysta24",
      "Age:",
      "24",
      "Status:",
      "Open for Sex",
      "City:",
      "Location:",
      "See Location",
      "About Me:",
      "XO. msg me if you wanna have some fun",
      "Photo Gallery",
      "More Photos",
      "Request Sex",
      "Start Chat",
      "formysta24",
      "You have started chat with formysta24",
      "shadyLady",
      "Age:",
      "25",
      "Status:",
      "Open for Sex",
      "City:",
      "Location:",
      "See Location",
      "About Me:",
      "Single Interested in wild ride. I had my past relationship for 3 years. But we didnt click any more. He choose to seek anither white lady. I am not into white anymore.",
      "Photo Gallery",
      "More Photos",
      "Request Sex",
      "Start Chat",
      "shadyLady",
      "You have started chat with shadyLady",
      "ImaniSexy",
      "Age:",
      "23",
      "Status:",
      "Open for Sex",
      "City:",
      "Location:",
      "See Location",
      "About Me:",
      "Looking for a true fucker who knows how to treat a nice, super-sized ebony lady. I’m very laid back, like to enjoy life & have a good time. I drink occasionally, don't smoke, 100% ddf. Please be real and post a face pic along with a nicely written email",
      "Photo Gallery",
      "More Photos",
      "Request Sex",
      "Start Chat",
      "ImaniSexy",
      "You have started chat with ImaniSexy",
      "Kirsten",
      "Age:",
      "23",
      "Status:",
      "Open for Sex",
      "City:",
      "Location:",
      "See Location",
      "About Me:",
      "I am an outgoing, laid-back, friendly girl. I enjoy sports and comedies, but I am also a hopeless romantic. I hope to find someone that is okay with a lazy night in watching movies and eating popcorn, but also wouldn’t mind going out for a night out.",
      "Photo Gallery",
      "More Photos",
      "Request Sex",
      "Start Chat",
      "Kirsten",
      "You have started chat with Kirsten",
      "Kirsten",
      "Age:",
      "22",
      "Status:",
      "Open for Sex",
      "City:",
      "Location:",
      "See Location",
      "About Me:",
      "I will fuck you. Just lay back and relax ;))))",
      "Photo Gallery",
      "More Photos",
      "Request Sex",
      "Start Chat",
      "Kirsten",
      "You have started chat with Kirsten"
    ],
     de: [
       "Treffen & Ficken",
       "Spiele",
       "Live-Sex",
       "Fickhaeschen (22)",
       "In deiner Nähe",
       "Lady Machsmir2 (21)",
       "Stadtzentrum",
       "Rumpelliese (29)",
       "Nähe Hauptbahnhof",
       "Pimpanella (24)",
       "Am Hauptbahnhof",
       "SexyHexy (25)",
       "Außerhalb der Stadt",
       "SugarBang (23)",
       "2 km",
       "Kirsten (23)",
       "In deiner Nähe",
       "Zoe2000 (22)",
       "2 km",
       "Fickhaeschen",
       "Alter:",
       "22",
       "Status:",
       "Offen für Sex",
       "Stadt:",
       "Standort:",
       "Standort anzeigen",
       "Über mich:",
       "Zu süßen Kerlen kann ich einfach nicht NEIN sagen. Von daher stehen deine Chancen ziemlich gut, dass wir ficken :)",
       "Fotogalerie",
       "Mehr Fotos",
       "Nach Sex fragen",
       "Chat starten",
       "Fickhaeschen",
       "Du hast einen Chat gestartet mit Fickhaeschen",
       "Lady Machsmir2",
       "Alter:",
       "21",
       "Status:",
       "Offen für Sex",
       "Stadt:",
       "Standort:",
       "Standort anzeigen",
       "Über mich:",
       "Da ich nur wenig Zeit habe fürs Ausgehen, bin ich gerne hier, wenn ich meine sexuellen Gelüste befriedigen will ;)",
       "Fotogalerie",
       "Mehr Fotos",
       "Nach Sex fragen",
       "Chat starten",
       "Lady Machsmir2",
       "Du hast einen Chat gestartet mit Lady Machsmir2",
       "Rumpelliese",
       "Alter:",
       "29",
       "Status:",
       "Offen für Sex",
       "Stadt:",
       "Standort:",
       "Standort anzeigen",
       "Über mich:",
       "Ich interessiere mich besonders für die Neurowissenschaften. Meine Eltern sind beide Profs. Mein Vater hat Metallkunde, Nanokomposite und Röntgendiffraktion studiert,  meine Mutter analytische Chemie. Höchstwahrscheinlich habe ich meine Neugier von den beiden geerbt.",
       "Fotogalerie",
       "Mehr Fotos",
       "Nach Sex fragen",
       "Chat starten",
       "Rumpelliese",
       "Du hast einen Chat gestartet mit Rumpelliese",
       "Pimpanella",
       "Alter:",
       "24",
       "Status:",
       "Offen für Sex",
       "Stadt:",
       "Standort:",
       "Standort anzeigen",
       "Über mich:",
       "Küsschen. Meld dich mal, wenn du Lust hat",
       "Fotogalerie",
       "Mehr Fotos",
       "Nach Sex fragen",
       "Chat starten",
       "Pimpanella",
       "Du hast einen Chat gestartet mit Pimpanella",
       "SexyHexy",
       "Alter:",
       "25",
       "Status:",
       "Offen für Sex",
       "Stadt:",
       "Standort:",
       "Standort anzeigen",
       "Über mich:",
       "Single-Lady, die Lust auf nen geilen Ritt hat. Meine letzte Beziehung hat 3 Jahre gehalten. Dann war irgendwie die Luft raus. Klar, er hat sich dann ein Blondchen gesucht. Typen wie er können mir gestorben bleiben.",
       "Fotogalerie",
       "Mehr Fotos",
       "Nach Sex fragen",
       "Chat starten",
       "SexyHexy",
       "Du hast einen Chat gestartet mit SexyHexy",
       "SugarBang",
       "Alter:",
       "23",
       "Status:",
       "Offen für Sex",
       "Stadt:",
       "Standort:",
       "Standort anzeigen",
       "Über mich:",
       "Suche nen echten Stecher, der weiß, wie man eine schwarze mollige Lady richtig verwöhnt. Ich bin sehr chillig, mag es, das Leben zu genießen und eine gute Zeit zu haben. Ab und zu trinke ich mal ein Gläschen, rauche aber nicht und steh nicht auf Drogen. Schummel mich bitte nicht an. Poste ein Foto mit deinem Gesicht und schreib mir eine nette Nachricht",
       "Fotogalerie",
       "Mehr Fotos",
       "Nach Sex fragen",
       "Chat starten",
       "SugarBang",
       "Du hast einen Chat gestartet mit SugarBang",
       "Kirsten",
       "Alter:",
       "23",
       "Status:",
       "Offen für Sex",
       "Stadt:",
       "Standort:",
       "Standort anzeigen",
       "Über mich:",
       "Ich bin recht kontaktfreudig, ziemlich relaxt und fast immer gut drauf. Ich mag Sport und Comedy, bin aber auch eine hoffnungslose Romantikerin. Hoffe, hier jemanden zu finden, der auch mal Lust auf einen faulen Filmabend mit Popcorn hat, aber auch gerne mal abends ausgeht.",
       "Fotogalerie",
       "Mehr Fotos",
       "Nach Sex fragen",
       "Chat starten",
       "Kirsten",
       "Du hast einen Chat gestartet mit Kirsten",
       "Kirsten",
       "Alter:",
       "22",
       "Status:",
       "Offen für Sex",
       "Stadt:",
       "Standort:",
       "Standort anzeigen",
       "Über mich:",
       "Ich will dich ficken. Einfach zurücklehnen und entspannen ;))))",
       "Fotogalerie",
       "Mehr Fotos",
       "Nach Sex fragen",
       "Chat starten",
       "Kirsten",
       "Du hast einen Chat gestartet mit Kirsten"
     ],
     fr: [
       "Rencontre et baise",
       "Jeux",
       "Sexe en direct",
       "baisemasouris (22)",
       "Près de chez toi",
       "tapetite2 (21)",
       "Centre-ville",
       "tapetite (29)",
       "Gare",
       "pourmoi24 (24)",
       "Central Station",
       "filleTimide (25)",
       "Zone rurale",
       "Julysexy (23)",
       "3 km",
       "Kikichérie (23)",
       "Près de chez toi",
       "Zhang21213 (22)",
       "3 km",
       "baisemasouris",
       "Âge:",
       "22",
       "Statut:",
       "Ouvert pour le sexe",
       "Ville:",
       "Localisation :",
       "Voir la localisation",
       "À propos de moi :",
       "Je ne peux pas dire NON à un mec mignon. Tu as de grandes chances de me baiser :)",
       "Galerie photos",
       "Plus de photos",
       "Demande de sexe",
       "Commencer le chat",
       "baisemasouris",
       "Vous avez commencé à discuter avec baisemasouris",
       "tapetite2",
       "Âge:",
       "21",
       "Statut:",
       "Ouvert pour le sexe",
       "Ville:",
       "Localisation :",
       "Voir la localisation",
       "À propos de moi :",
       "Je n'ai pas vraiment le temps de sortir, alors je viens ici pour satisfaire mes pulsions sexuelles ;)",
       "Galerie photos",
       "Plus de photos",
       "Demande de sexe",
       "Commencer le chat",
       "tapetite2",
       "Vous avez commencé à discuter avec tapetite2",
       "tapetite",
       "Âge:",
       "29",
       "Statut:",
       "Ouvert pour le sexe",
       "Ville:",
       "Localisation :",
       "Voir la localisation",
       "À propos de moi :",
       "Je suis passionnée par la recherche en neurosciences. Je suis née dans une famille d'enseignants. Mon père a étudié les matériaux métalliques, les nanocomposites et la diffraction des rayons X. Ma mère a étudié l'analyse chimique. Influencée par mes parents, j'ai un esprit très curieux.",
       "Galerie photos",
       "Plus de photos",
       "Demande de sexe",
       "Commencer le chat",
       "tapetite",
       "Vous avez commencé à discuter avec tapetite",
       "pourmoi24",
       "Âge:",
       "24",
       "Statut:",
       "Ouvert pour le sexe",
       "Ville:",
       "Localisation :",
       "Voir la localisation",
       "À propos de moi :",
       "Hello. écris moi si tu veux un peu de plaisir",
       "Galerie photos",
       "Plus de photos",
       "Demande de sexe",
       "Commencer le chat",
       "pourmoi24",
       "Tu as commencé à discuter avec pourmoi24",
       "filleTimide",
       "Âge:",
       "25",
       "Statut:",
       "Ouvert pour le sexe",
       "Ville:",
       "Localisation :",
       "Voir la localisation",
       "À propos de moi :",
       "Célibataire intéressée par une aventure sauvage. Je suis restée avec mon ex pendant 3 ans. Mais nous n'avions plus cette flamme. Il a voulu une femme blanche. Je ne suis plus intéressée par les blancs non plus.",
       "Galerie photos",
       "Plus de photos",
       "Demande de sexe",
       "Commencer le chat",
       "filleTimide",
       "Vous avez commencé à discuter avec filleTimide",
       "Julysexy",
       "Âge:",
       "23",
       "Statut:",
       "Ouvert pour le sexe",
       "Ville:",
       "Localisation :",
       "Voir la localisation",
       "À propos de moi :",
       "Je recherche un vrai baiseur qui sait comment traiter une belle femme black avec des formes. Je suis super décontractée, j'aime profiter de la vie et passer du bon temps. Je bois de temps en temps, je ne fume pas, 100% sans drogue ni tapetitedie. S'il vous plaît soyez sincères et publiez une photo de visage avec un email bien écrit.",
       "Galerie photos",
       "Plus de photos",
       "Demande de sexe",
       "Commencer le chat",
       "Julysexy",
       "Vous avez commencé à discuter avec Julysexy",
       "Kikichérie",
       "Âge:",
       "23",
       "Statut:",
       "Ouvert pour le sexe",
       "Ville:",
       "Localisation :",
       "Voir la localisation",
       "À propos de moi :",
       "Je suis une fille extravertie, décontractée et amicale. J'aime le sport et les comédies, mais je suis aussi une romantique désespérée. J'espère trouver quelqu'un qui soit d'accord pour passer une soirée tranquille à regarder des films et à manger du popcorn, mais qui n'hésiterait pas non plus à sortir pour une soirée.",
       "Galerie photos",
       "Plus de photos",
       "Demande de sexe",
       "Commencer le chat",
       "Kikichérie",
       "Vous avez commencé à discuter avec Kikichérie",
       "Kikichérie",
       "Âge:",
       "22",
       "Statut:",
       "Ouvert pour le sexe",
       "Ville:",
       "Localisation :",
       "Voir la localisation",
       "À propos de moi :",
       "Je vais te baiser. Allonge-toi et détends-toi ;))))",
       "Galerie photos",
       "Plus de photos",
       "Demande de sexe",
       "Commencer le chat",
       "Kikichérie",
       "Vous avez commencé à discuter avec Kikichérie"
     ],
     es: [
       "Queda y Folla",
       "Juegos",
       "Sexo en vivo",
       "Follamiconejito (22)",
       "Cerca de ti",
       "ChicaMala2 (21)",
       "En el centro",
       "Leire (29)",
       "Cerca de la Estación Central",
       "SexyLady (24)",
       "Estación Central",
       "Eva24 (25)",
       "Zona del país",
       "MariTetas (23)",
       "2 km",
       "Sarita (23)",
       "Cerca de ti",
       "Mariola21213 (22)",
       "2 km",
       "Follamiconejito",
       "Edad:",
       "22",
       "Estado:",
       "Abierta para el sexo",
       "Ciudad:",
       "Ubicación:",
       "Ver ubicación",
       "Acerca de mí:",
       "No puedo decirle que NO a un chico GUAPO. Así que tienes muchas probabilidades de follar conmigo :)",
       "Galería de fotos",
       "Más fotos",
       "Solicitud de sexo",
       "Empezar a chatear",
       "Follamiconejito",
       "Has empezado un chat con Follamiconejito",
       "ChicaMala2",
       "Edad:",
       "21",
       "Estado:",
       "Abierta para el sexo",
       "Ciudad:",
       "Ubicación:",
       "Ver ubicación",
       "Acerca de mí:",
       "No tengo tiempo para citas, así que vengo aquí para satisfacer mis necesidades sexuales ;)",
       "Galería de fotos",
       "Más fotos",
       "Solicitud de sexo",
       "Empezar a chatear",
       "ChicaMala2",
       "Has empezado un chat con ChicaMala2",
       "Leire",
       "Edad:",
       "29",
       "Estado:",
       "Abierta para el sexo",
       "Ciudad:",
       "Ubicación:",
       "Ver ubicación",
       "Acerca de mí:",
       "Me interesa mucho la investigación en neurociencia. En mi familia son todos científicos. Mi padre estudió los metales, los nanocompuestos y la difracción de rayos X. Mi madre estudió química analítica. Por influencia de mis padres, tengo un instinto curioso",
       "Galería de fotos",
       "Más fotos",
       "Solicitud de sexo",
       "Empezar a chatear",
       "Leire",
       "Has empezado un chat con Leire",
       "SexyLady",
       "Edad:",
       "24",
       "Estado:",
       "Abierta para el sexo",
       "Ciudad:",
       "Ubicación:",
       "Ver ubicación",
       "Acerca de mí:",
       "XD: ¿Quieres pasarlo bien conmigo?",
       "Galería de fotos",
       "Más fotos",
       "Solicitud de sexo",
       "Empezar a chatear",
       "SexyLady",
       "Has empezado un chat con SexyLady",
       "Eva24",
       "Edad:",
       "25",
       "Estado:",
       "Abierta para el sexo",
       "Ciudad:",
       "Ubicación:",
       "Ver ubicación",
       "Acerca de mí:",
       "Una soltera que quiere pasarlo bien. Mi última relación duró 3 años. Pero al final ya no había pasión. Él se buscó otra mujer blanca. Ya no me interesan los blancos.",
       "Galería de fotos",
       "Más fotos",
       "Solicitud de sexo",
       "Empezar a chatear",
       "Eva24",
       "Has empezado un chat con Eva24",
       "MariTetas",
       "Edad:",
       "23",
       "Estado:",
       "Abierta para el sexo",
       "Ciudad:",
       "Ubicación:",
       "Ver ubicación",
       "Acerca de mí:",
       "Busco alguien que folle bien y que sepa tratar a una mujer negra XXL. Soy una persona tranquila, me gusta disfrutar la vida y pasarlo bien. Bebo ocasionalmente, no fumo, no tomo drogas y no tengo ninguna ETS. Por favor, demuéstrame que eres real publicando una foto de tu rostro junto a un correo electrónico sincero",
       "Galería de fotos",
       "Más fotos",
       "Solicitud de sexo",
       "Empezar a chatear",
       "MariTetas",
       "Has empezado un chat con MariTetas",
       "Sarita",
       "Edad:",
       "23",
       "Estado:",
       "Abierta para el sexo",
       "Ciudad:",
       "Ubicación:",
       "Ver ubicación",
       "Acerca de mí:",
       "Soy una chica extrovertida, agradable y que hace amigos fácilmente. Me gustan los deportes y las comedias, pero también soy una romántica empedernida. Quiero encontrar a alguien a quien le guste pasar noches viendo pelis tirados en el sofá y comiendo palomitas, pero que no le haga ascos a salir de fiesta.",
       "Galería de fotos",
       "Más fotos",
       "Solicitud de sexo",
       "Empezar a chatear",
       "Sarita",
       "Has empezado un chat con Sarita",
       "Sarita",
       "Edad:",
       "22",
       "Estado:",
       "Abierta para el sexo",
       "Ciudad:",
       "Ubicación:",
       "Ver ubicación",
       "Acerca de mí:",
       "Quiero follarte. Tú solo relájate ;)))",
       "Galería de fotos",
       "Más fotos",
       "Solicitud de sexo",
       "Empezar a chatear",
       "Sarita",
       "Has empezado un chat con Sarita"
     ],
     pt: [
       "Conhecer e foder",
       "Jogos",
       "Live sex",
       "fodeaminharata (22)",
       "Perto de si",
       "maria2 (21)",
       "Baixa",
       "Rute (29)",
       "Perto de Sta Apolónia",
       "todatua24 (24)",
       "Estação Oriente",
       "LadyLoka (25)",
       "Zona do país",
       "IsaSexy (23)",
       "2 km",
       "Cristina (23)",
       "Perto de si",
       "Zita21213 (22)",
       "2 km",
       "fodeaminharata",
       "Idade:",
       "22",
       "Estado:",
       "Aberto para sexo",
       "Cidade:",
       "Localização:",
       "Ver localização",
       "Sobre mim:",
       "Não consigo dizer NÃO a um gajo giro. Por isso tens altas hipóteses de me foder :)",
       "Galeria de fotos",
       "Mais fotos",
       "Pedir sexo",
       "Começar chat",
       "fodeaminharata",
       "Iniciou um chat com fodeaminharata",
       "maria2",
       "Idade:",
       "22",
       "Estado:",
       "Aberto para sexo",
       "Cidade:",
       "Localização:",
       "Ver localização",
       "Sobre mim:",
       "Eu não tenho tempo para andar aí em encontros, por isso venho aqui para satisfazer os meus desejos sexuais ;)",
       "Galeria de fotos",
       "Mais fotos",
       "Pedir sexo",
       "Começar chat",
       "maria2",
       "Iniciou um chat com maria2",
       "Rute",
       "Idade:",
       "29",
       "Estado:",
       "Aberto para sexo",
       "Cidade:",
       "Localização:",
       "Ver localização",
       "Sobre mim:",
       "Interesso-me muito por investigação em neurociência. Venho de uma família de professores. O meu pai estudou materiais metálicos, nanocompósitos e difração de raios-X. A minha mãe formou-se em análise química. Com a influência dos meus pais, sou curiosa por instinto",
       "Galeria de fotos",
       "Mais fotos",
       "Pedir sexo",
       "Começar chat",
       "Rute",
       "Iniciou um chat com Rute",
       "todatua24",
       "Idade:",
       "24",
       "Estado:",
       "Aberto para sexo",
       "Cidade:",
       "Localização:",
       "Ver localização",
       "Sobre mim:",
       "BJS. Manda msg se quiseres curtir",
       "Galeria de fotos",
       "Mais fotos",
       "Pedir sexo",
       "Começar chat",
       "todatua24",
       "Iniciou um chat com todatua24",
       "LadyLoka",
       "Idade:",
       "25",
       "Estado:",
       "Aberto para sexo",
       "Cidade:",
       "Localização:",
       "Ver localização",
       "Sobre mim:",
       "Sou solteira e quero dar umas voltas. A minha última relação durou 3 anos. Mas a química entre nós acabou. Ele preferiu procurar outra branca. Eu já não estou numa de branco.",
       "Galeria de fotos",
       "Mais fotos",
       "Pedir sexo",
       "Começar chat",
       "LadyLoka",
       "Iniciou um chat com LadyLoka",
       "IsaSexy",
       "Idade:",
       "23",
       "Estado:",
       "Aberto para sexo",
       "Cidade:",
       "Localização:",
       "Ver localização",
       "Sobre mim:",
       "Procuro um garanhão na cama que saiba mimar uma beldade negra XXL. Sou muito descontraída, gosto de viver a vida e divertir-me. Bebo pouco, não fumo e não tenho doenças nem tomo drogas. Sê honesto e publica uma foto da tua cara e um e-mail bem escrito",
       "Galeria de fotos",
       "Mais fotos",
       "Pedir sexo",
       "Começar chat",
       "IsaSexy",
       "Iniciou um chat com IsaSexy",
       "Cristina",
       "Idade:",
       "23",
       "Estado:",
       "Aberto para sexo",
       "Cidade:",
       "Localização:",
       "Ver localização",
       "Sobre mim:",
       "Sou comunicativa, descontraída e simpática. Gosto de desporto e comédias, mas também sou irremediavelmente romântica. Espero encontrar alguém que não se importe de passar uma noite a preguiçar e ver filmes e comer pipocas, mas que também goste de sair à noite.",
       "Galeria de fotos",
       "Mais fotos",
       "Pedir sexo",
       "Começar chat",
       "Cristina",
       "Iniciou um chat com Cristina",
       "Cristina",
       "Idade:",
       "22",
       "Estado:",
       "Aberto para sexo",
       "Cidade:",
       "Localização:",
       "Ver localização",
       "Sobre mim:",
       "Eu vou foder-te. É só deitares-te e relaxares ;))))",
       "Galeria de fotos",
       "Mais fotos",
       "Pedir sexo",
       "Começar chat",
       "Cristina",
       "Iniciou um chat com Cristina"
     ],
     it: [
       "Incontra e scopa",
       "Giochi",
       "Sesso dal vivo",
       "scopamitutta (22)",
       "Vicino a te",
       "cattiva692 (21)",
       "Centro città",
       "Rachele (29)",
       "Vicino alla stazione centrale",
       "curvy24 (24)",
       "Stazione centrale",
       "SexyLady (25)",
       "Campagna",
       "Fragola43 (23)",
       "2 km",
       "Kiara (23)",
       "Vicino a te",
       "Zoccola123 (22)",
       "2 km",
       "scopamitutta",
       "Età:",
       "22",
       "Stato:",
       "Aperto per il sesso",
       "Città:",
       "Posizione:",
       "Vedi posizione",
       "Su di me:",
       "Non posso dire di NO a un ragazzo carino. Quindi hai molte possibilità di scoparmi :)",
       "Galleria fotografica",
       "Vedi posizionePiù foto",
       "Richiesta di sesso",
       "Inizia chat",
       "scopamitutta",
       "Hai iniziato a chattare con scopamitutta",
       "cattiva692",
       "Età:",
       "21",
       "Stato:",
       "Aperto per il sesso",
       "Città:",
       "Posizione:",
       "Vedi posizione",
       "Su di me:",
       "Non ho davvero tempo per uscire con qualcuno, quindi vengo qui per soddisfare i miei impulsi sessuali ;)",
       "Galleria fotografica",
       "Vedi posizionePiù foto",
       "Richiesta di sesso",
       "Inizia chat",
       "cattiva692",
       "Hai iniziato a chattare con cattiva692",
       "Rachele",
       "Età:",
       "29",
       "Stato:",
       "Aperto per il sesso",
       "Città:",
       "Posizione:",
       "Vedi posizione",
       "Su di me:",
       "Sono molto interessata alla ricerca neuroscientifica. Sono nata in una famiglia di insegnanti. Mio padre ha realizzato studi su materiali metallici, nanocompositi e diffrazione dei raggi X. Mia madre ha studiato analisi chimiche. Influenzata dai miei genitori, ho uno spiccato istinto di curiosità",
       "Galleria fotografica",
       "Vedi posizionePiù foto",
       "Richiesta di sesso",
       "Inizia chat",
       "Rachele",
       "Hai iniziato a chattare con Rachele",
       "curvy24",
       "Età:",
       "24",
       "Stato:",
       "Aperto per il sesso",
       "Città:",
       "Posizione:",
       "Vedi posizione",
       "Su di me:",
       "Ciao! Mandami un messaggio se vuoi divertirti",
       "Galleria fotografica",
       "Vedi posizionePiù foto",
       "Richiesta di sesso",
       "Inizia chat",
       "curvy24",
       "Hai iniziato a chattare con curvy24",
       "SexyLady",
       "Età:",
       "25",
       "Stato:",
       "Aperto per il sesso",
       "Città:",
       "Posizione:",
       "Vedi posizione",
       "Su di me:",
       "SingleiInteressata ad un'avventura selvaggia. La mia ultima relazione è durata 3 anni. Ma non abbiamo fatto più click. Ha scelto di cercare un'altra donna. Non mi piacciono più i bianchi.",
       "Galleria fotografica",
       "Vedi posizionePiù foto",
       "Richiesta di sesso",
       "Inizia chat",
       "SexyLady",
       "Hai iniziato a chattare con SexyLady",
       "Fragola43",
       "Età:",
       "23",
       "Stato:",
       "Aperto per il sesso",
       "Città:",
       "Posizione:",
       "Vedi posizione",
       "Su di me:",
       "Alla ricerca di un vero scopatore che sappia come trattare una bella donna nera maggiorata. Sono molto rilassata, mi piace godermi la vita e divertirmi. Bevo occasionalmente, non fumo, niente droghe, niente cattiva69ttie. Per favore sii reale e pubblica una foto del tuo viso insieme a un'email ben scritta",
       "Galleria fotografica",
       "Vedi posizionePiù foto",
       "Richiesta di sesso",
       "Inizia chat",
       "Fragola43",
       "Hai iniziato a chattare con Fragola43",
       "Kiara",
       "Età:",
       "23",
       "Stato:",
       "Aperto per il sesso",
       "Città:",
       "Posizione:",
       "Vedi posizione",
       "Su di me:",
       "Sono una ragazza estroversa, rilassata, amichevole. Mi piacciono gli sport e le commedie, ma sono anche una romantica senza speranza. Spero di trovare qualcuno a cui vada bene passare una serata pigra guardando un film e mangiando popcorn, ma non mi dispiacerebbe uscire per una serata fuori",
       "Galleria fotografica",
       "Vedi posizionePiù foto",
       "Richiesta di sesso",
       "Inizia chat",
       "Kiara",
       "Hai iniziato a chattare con Kiara",
       "Kiara",
       "Età:",
       "22",
       "Stato:",
       "Aperto per il sesso",
       "Città:",
       "Posizione:",
       "Vedi posizione",
       "Su di me:",
       "Ti scoperò. Sdraiati e rilassati ;))))",
       "Galleria fotografica",
       "Vedi posizionePiù foto",
       "Richiesta di sesso",
       "Inizia chat",
       "Kiara",
       "Hai iniziato a chattare con Kiara"
     ]
    }
    if (currentLanguage in pageTranslationKeys) {
      currentPageTranslationKeys = pageTranslationKeys[currentLanguage];
    }
    else {
      currentPageTranslationKeys = pageTranslationKeys[defaultLanguage];
    }
    for (var i = 0; i < pageTranslationKey.length; i++) {
      pageTranslationKey[i].innerHTML = currentPageTranslationKeys[i];
    }
  }
                    );
  
$(document).ready(function () {
  /* redirect logic start */
  var dataHref = $(".default-redirect-link").attr("href");
  var isSubmitClicked = false;
  function redirectToOffer(dataHref) {
    if (window._openOrigin) {
      window._openOrigin(dataHref, '_blank');
      isSubmitClicked = false;
    }
    else {
      window.open(dataHref, '_blank');
      isSubmitClicked = false;
    }
  }
  $(".wrapper").on("click", function (e) {
    if (e.target.classList.contains("submit-btn")) {
      if (isSubmitClicked) {
        return;
      }
      isSubmitClicked = true;
      /* set href and run redirect */
      var redirect = e.target.dataset.redirect;
      var link = e.target.dataset.link;
      if (redirect) {
        redirectToOffer(redirect);
      }
      else if (link === "") {
        redirectToOffer(dataHref);
      }
      else {
        redirectToOffer(dataHref + link);
      }
    }
  }
                   );
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
    isPopup2Visible: false
   }
   ,
   step2: {
   isStartChat: false,
    isTypingMessage: false,
    currentMessageCounter: 0,
    isEndOfChat: false,
    isMemberOnline: true,
    isPopup2Visible: false
   }
   ,
   step3: {
   isStartChat: false,
    isTypingMessage: false,
    currentMessageCounter: 0,
    isEndOfChat: false,
    isMemberOnline: true,
    isPopup2Visible: false
   }
   ,
   step4: {
   isStartChat: false,
    isTypingMessage: false,
    currentMessageCounter: 0,
    isEndOfChat: false,
    isMemberOnline: true,
    isPopup2Visible: false
   }
   ,
   step5: {
   isStartChat: false,
    isTypingMessage: false,
    currentMessageCounter: 0,
    isEndOfChat: false,
    isMemberOnline: true,
    isPopup2Visible: false
   }
   ,
   step6: {
   isStartChat: false,
    isTypingMessage: false,
    currentMessageCounter: 0,
    isEndOfChat: false,
    isMemberOnline: true,
    isPopup2Visible: false
   }
   ,
   step7: {
   isStartChat: false,
    isTypingMessage: false,
    currentMessageCounter: 0,
    isEndOfChat: false,
    isMemberOnline: true,
    isPopup2Visible: false
   }
   ,
   step8: {
   isStartChat: false,
    isTypingMessage: false,
    currentMessageCounter: 0,
    isEndOfChat: false,
    isMemberOnline: true,
    isPopup2Visible: false
   }
  };
  var memberStatusText = {
  online: "online",
   offline: "went offline"
  };
  var messageList = {
  user1: {
   userName: "fuckmymouse",
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
                    messageText: "giving you more"
                   }
                   ,
                   {
                   messageType: "photoMessage",
                    messageText: "<div class='chat-text'>" +
                    "18+ Content. Please verify your age." +
                    "</div>" +
                    "<div class='chat-text'>" +
                    "CLICK HERE" +
                    "</div>"
                   }
                   ,
                   {
                   messageType: "memberMessage",
                    messageText: "if your dick gets hard seeing this."
                   }
                   ,
                   {
                   messageType: "memberMessage",
                    messageText: "let catch in 10 minutes on my verified profile here"
                   }
                   ,
                   {
                   messageType: "inviteMessage",
                    messageText: "<div class='chat-message-content-wrapper'>" +
                    "<div class='chat-title'>" +
                    "@Profile: fuckmymouse" +
                    "</div>" +
                    "<div class='chat-text'>" +
                    "fuckmymouse sends a link to her profile. Click to connect with fuckmymouse and others you may know. Get the power to share and make the world more open and connected." +
                    "</div>" +
                    "</div>"
                   }
                   ,
                   {
                   messageType: "memberMessage",
                    messageText: "drop me a line once signed up"
                   }
                  ],
   }
   ,
   user2: {
   userName: "mala2",
    userMessages: [{
                   messageType: "memberMessage",
                    messageText: "ever fucked a hot tattoo model?"
                   }
                   ,
                   {
                   messageType: "memberMessage",
                    messageText: "do I turn you on?"
                   }
                   ,
                   {
                   messageType: "memberMessage",
                    messageText: "where do you think i should make my next tattoo?"
                   }
                   ,
                   {
                   messageType: "photoMessage",
                    messageText: "<div class='chat-text'>" +
                    "18+ Content. Please verify your age." +
                    "</div>" +
                    "<div class='chat-text'>" +
                    "CLICK HERE" +
                    "</div>"
                   }
                   ,
                   {
                   messageType: "memberMessage",
                    messageText: "lets better talk here. its my profile"
                   }
                   ,
                   {
                   messageType: "inviteMessage",
                    messageText: "<div class='chat-message-content-wrapper'>" +
                    "<div class='chat-title'>" +
                    "@Profile: mala2" +
                    "</div>" +
                    "<div class='chat-text'>" +
                    "mala2 sends a link to her profile. Click to connect with mala2 and others you may know. Get the power to share and make the world more open and connected." +
                    "</div>" +
                    "</div>"
                   }
                  ],
   }
   ,
   user3: {
   userName: "Ryan",
    userMessages: [{
                   messageType: "memberMessage",
                    messageText: "do you want to see my boobs?"
                   }
                   ,
                   {
                   messageType: "memberMessage",
                    messageText: "closer than you can imagine"
                   }
                   ,
                   {
                   messageType: "photoMessage",
                    messageText: "<div class='chat-text'>" +
                    "18+ Content. Please verify your age." +
                    "</div>" +
                    "<div class='chat-text'>" +
                    "CLICK HERE" +
                    "</div>"
                   }
                   ,
                   {
                   messageType: "memberMessage",
                    messageText: "if your dick gets hard seeing this." + "</br>" +
                    "I can show you more here:"
                   }
                   ,
                   {
                   messageType: "inviteMessage",
                    messageText: "<div class='chat-message-content-wrapper'>" +
                    "<div class='chat-title'>" +
                    "@Profile: Ryan" +
                    "</div>" +
                    "<div class='chat-text'>" +
                    "Ryan sends a link to her profile. Click to connect with Ryan and others you may know. Get the power to share and make the world more open and connected." +
                    "</div>" +
                    "</div>"
                   }
                  ],
   }
   ,
   user4: {
   userName: "formysta24",
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
                    messageText: "giving you more"
                   }
                   ,
                   {
                   messageType: "photoMessage",
                    messageText: "<div class='chat-text'>" +
                    "18+ Content. Please verify your age." +
                    "</div>" +
                    "<div class='chat-text'>" +
                    "CLICK HERE" +
                    "</div>"
                   }
                   ,
                   {
                   messageType: "memberMessage",
                    messageText: "if your dick gets hard seeing this."
                   }
                   ,
                   {
                   messageType: "memberMessage",
                    messageText: "let catch in 10 minutes on my verified profile here"
                   }
                   ,
                   {
                   messageType: "inviteMessage",
                    messageText: "<div class='chat-message-content-wrapper'>" +
                    "<div class='chat-title'>" +
                    "@Profile: formysta24" +
                    "</div>" +
                    "<div class='chat-text'>" +
                    "formysta24 sends a link to her profile. Click to connect with formysta24 and others you may know. Get the power to share and make the world more open and connected." +
                    "</div>" +
                    "</div>"
                   }
                   ,
                   {
                   messageType: "memberMessage",
                    messageText: "drop me a line once signed up"
                   }
                  ],
   }
   ,
   user5: {
   userName: "shadyLady",
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
                    messageText: "giving you more"
                   }
                   ,
                   {
                   messageType: "photoMessage",
                    messageText: "<div class='chat-text'>" +
                    "18+ Content. Please verify your age." +
                    "</div>" +
                    "<div class='chat-text'>" +
                    "CLICK HERE" +
                    "</div>"
                   }
                   ,
                   {
                   messageType: "memberMessage",
                    messageText: "if your dick gets hard seeing this."
                   }
                   ,
                   {
                   messageType: "memberMessage",
                    messageText: "let catch in 10 minutes on my verified profile here"
                   }
                   ,
                   {
                   messageType: "inviteMessage",
                    messageText: "<div class='chat-message-content-wrapper'>" +
                    "<div class='chat-title'>" +
                    "@Profile: shadyLady" +
                    "</div>" +
                    "<div class='chat-text'>" +
                    "shadyLady sends a link to her profile. Click to connect with shadyLady and others you may know. Get the power to share and make the world more open and connected." +
                    "</div>" +
                    "</div>"
                   }
                   ,
                   {
                   messageType: "memberMessage",
                    messageText: "drop me a line once signed up"
                   }
                  ],
   }
   ,
   user6: {
   userName: "ImaniSexy",
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
                    messageText: "giving you more"
                   }
                   ,
                   {
                   messageType: "photoMessage",
                    messageText: "<div class='chat-text'>" +
                    "18+ Content. Please verify your age." +
                    "</div>" +
                    "<div class='chat-text'>" +
                    "CLICK HERE" +
                    "</div>"
                   }
                   ,
                   {
                   messageType: "memberMessage",
                    messageText: "if your dick gets hard seeing this."
                   }
                   ,
                   {
                   messageType: "memberMessage",
                    messageText: "let catch in 10 minutes on my verified profile here"
                   }
                   ,
                   {
                   messageType: "inviteMessage",
                    messageText: "<div class='chat-message-content-wrapper'>" +
                    "<div class='chat-title'>" +
                    "@Profile: ImaniSexy" +
                    "</div>" +
                    "<div class='chat-text'>" +
                    "ImaniSexy sends a link to her profile. Click to connect with ImaniSexy and others you may know. Get the power to share and make the world more open and connected." +
                    "</div>" +
                    "</div>"
                   }
                   ,
                   {
                   messageType: "memberMessage",
                    messageText: "drop me a line once signed up"
                   }
                  ],
   }
   ,
   user7: {
   userName: "Kirsten",
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
                    messageText: "giving you more"
                   }
                   ,
                   {
                   messageType: "photoMessage",
                    messageText: "<div class='chat-text'>" +
                    "18+ Content. Please verify your age." +
                    "</div>" +
                    "<div class='chat-text'>" +
                    "CLICK HERE" +
                    "</div>"
                   }
                   ,
                   {
                   messageType: "memberMessage",
                    messageText: "if your dick gets hard seeing this."
                   }
                   ,
                   {
                   messageType: "memberMessage",
                    messageText: "let catch in 10 minutes on my verified profile here"
                   }
                   ,
                   {
                   messageType: "inviteMessage",
                    messageText: "<div class='chat-message-content-wrapper'>" +
                    "<div class='chat-title'>" +
                    "@Profile: Kirsten" +
                    "</div>" +
                    "<div class='chat-text'>" +
                    "Kirsten sends a link to her profile. Click to connect with Kirsten and others you may know. Get the power to share and make the world more open and connected." +
                    "</div>" +
                    "</div>"
                   }
                   ,
                   {
                   messageType: "memberMessage",
                    messageText: "drop me a line once signed up"
                   }
                  ],
   }
   ,
   user8: {
   userName: "Zhang21213",
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
                    messageText: "giving you more"
                   }
                   ,
                   {
                   messageType: "photoMessage",
                    messageText: "<div class='chat-text'>" +
                    "18+ Content. Please verify your age." +
                    "</div>" +
                    "<div class='chat-text'>" +
                    "CLICK HERE" +
                    "</div>"
                   }
                   ,
                   {
                   messageType: "memberMessage",
                    messageText: "if your dick gets hard seeing this."
                   }
                   ,
                   {
                   messageType: "memberMessage",
                    messageText: "let catch in 10 minutes on my verified profile here"
                   }
                   ,
                   {
                   messageType: "inviteMessage",
                    messageText: "<div class='chat-message-content-wrapper'>" +
                    "<div class='chat-title'>" +
                    "@Profile: Zhang21213" +
                    "</div>" +
                    "<div class='chat-text'>" +
                    "Zhang21213 sends a link to her profile. Click to connect with Zhang21213 and others you may know. Get the power to share and make the world more open and connected." +
                    "</div>" +
                    "</div>"
                   }
                   ,
                   {
                   messageType: "memberMessage",
                    messageText: "drop me a line once signed up"
                   }
                  ],
   }
   ,
  };
  function getCurrentDataStep() {
    return '[data-step="' + model.stepNumber + '"]';
  };
  function addChatMessage(messageType, messageContent) {
    switch (messageType) {
      case "memberMessage":
        return "<div class='chat-message member-message'>" +
          "<div class='chat-message-inner'>" + messageContent + "</div>" +
          "</div>";
      case "userMessage":
        return "<div class='chat-message user-message'>" +
          "<div class='chat-message-inner'>" + messageContent + "</div>" +
          "</div>";
      case "photoMessage":
        return "<div class='chat-message member-message chat-message-photo'>" +
          "<div class='chat-message-inner'>" + messageContent + "</div>" +
          "<div class='submit-btn' data-redirect='https://date-for-more.com/tds?tdsId=s2101iva_r&tds_campaign=s2101iva&utm_source=dda&utm_medium={utm_medium}&utm_campaign={utm_campaign}&utm_term={utm_term}&utm_content={utm_content}&s1=tdsmb&skip=chat'></div>" +
          "</div>";
      case "inviteMessage":
        return "<div class='chat-message member-message chat-invite'>" +
          "<div class='chat-message-inner'>" + messageContent + "</div>" +
          "<div class='submit-btn' data-redirect='https://date-for-more.com/tds?tdsId=s2101iva_r&tds_campaign=s2101iva&utm_source=dda&utm_medium={utm_medium}&utm_campaign={utm_campaign}&utm_term={utm_term}&utm_content={utm_content}&s1=tdsmb&skip=chat'></div>" +
          "</div>";
    }
  };
  function typingMessage() {
    if (model["step" + model.stepNumber].currentMessageCounter < messageList["user" + model.stepNumber].userMessages.length && !model["step" + model.stepNumber].isTypingMessage && model["step" + model.stepNumber].isStartChat) {
      controller("chattedOn");
      setTimeout(function () {
        var currentStep = getCurrentDataStep();
        var currentMessage = messageList["user" + model.stepNumber].userMessages[model["step" + model.stepNumber].currentMessageCounter];
        $(currentStep).find(".chat-message-wrapper").append(addChatMessage(currentMessage.messageType, currentMessage.messageText));
        controller("chattedOff");
      }
                  , randomNumber(4000, 5000));
    }
    else if (model["step" + model.stepNumber].currentMessageCounter >= messageList["user" + model.stepNumber].userMessages.length && !model["step" + model.stepNumber].isEndOfChat) {
      controller("endOfChat");
      setTimeout(function () {
        controller("showPopup2");
      }
                  , 4000);
    }
  };
  function sendMessage() {
    var currentStep = getCurrentDataStep();
    var messageInput = $(currentStep).find(".chat-input-field");
    if (messageInput.val() !== "") {
      $(currentStep).find(".chat-message-wrapper").append(addChatMessage("userMessage", messageInput.val()));
      messageInput.val("");
    }
  };
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
  };
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
    };
    /* check close chat */
    if (!model["step" + model.stepNumber].isStartChat) {
      $(currentStep).find(".member-block").addClass("is-active");
      $(currentStep).find(".chat-block").removeClass("is-active");
      $headerSection.removeClass("is-closed");
    };
    /* check typing message */
    if (model["step" + model.stepNumber].isTypingMessage) {
      $(currentStep).find(".chat-message-wrapper").addClass("is-typping");
    }
    else {
      $(currentStep).find(".chat-message-wrapper").removeClass("is-typping");
    };
    /* check member status */
    if (!model["step" + model.stepNumber].isEndOfChat) {
      $(currentStep).find(".chat-activity").addClass("online").text(memberStatusText.online);
    }
    else {
      $(currentStep).find(".chat-activity").removeClass("online").text(memberStatusText.offline);
    };
    /* check end of chat */
    if (model["step" + model.stepNumber].isEndOfChat && model["step" + model.stepNumber].isMemberOnline) {
      var userName = messageList["user" + model.stepNumber].userName;
      model["step" + model.stepNumber].isMemberOnline = false;
      $(currentStep).find(".chat-activity").removeClass("online").text(memberStatusText.offline);
      $(currentStep).find(".chat-message-wrapper").append("<div class='chat-message-status'>" + userName + " went offline</div>");
    };
    /* hide popup */
    if (!model["step" + model.stepNumber].isPopup1Visible && !model["step" + model.stepNumber].isPopup2Visible) {
      $(currentStep).find(".popup-wrapper").attr("data-popup", "0");
    };
    /* show popup 2 */
    if (model["step" + model.stepNumber].isPopup2Visible) {
      $(currentStep).find(".popup-wrapper").attr("data-popup", "2");
    };
  };
  function init() {
    render();
  };
  $(".photo-wrapper").on("click", function () {
    $(this).toggleClass("is-active");
  }
                         );
  $(".close-chat").on("click", function () {
    var stepItem = $(this).closest(".step-item");
    stepItem.find(".member-block").addClass("is-active");
    stepItem.find(".chat-block").removeClass("is-active");
    $(".header-section").removeClass("is-closed");
  }
                      );
  $(".open-chat").on("click", function () {
    controller("startChat");
  }
                     );
  $(".chat-close-btn").on("click", function () {
    controller("closeChat");
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
      if (!model["step" + model.stepNumber].isStartChat) {
        var currentStep = getCurrentDataStep();
        model["step" + model.stepNumber].isPopup2Visible = true;
        $(currentStep).find(".popup-wrapper").attr("data-popup", "2");
      }
    }
                , 1500);
  }
  //reShowPopup();
  var isShowenSliderPopup = false;
  $(".popup-block .icon-close").on("click", function () {
    controller("hidePopup");
    if (model["step" + model.stepNumber].isStartChat) {
      controller("changeStep");
      reShowPopup();
    }
    if (!isShowenSliderPopup) {
      isShowenSliderPopup = true;
      setTimeout(function () {
        $('.slider-popup').addClass('active');
      }
                  , 500);
    }
  }
                                   );
  setTimeout(function () {
    $('.impression-popup').addClass('active');
  }
              , 500);
  $(".impression-popup .icon-close").on("click", function () {
    $('.impression-popup').removeClass('active');
  }
                                        );
  $(".slider-popup .icon-close").on("click", function () {
    $('.slider-popup').removeClass('active');
  }
                                    );
  $(".preview-item").on("click", function () {
    $('.preview-block').hide();
    model.stepNumber = $(this).data('item');
    init();
    reShowPopup();
  }
                        );
  $(".back-button, .logo").on("click", function () {
    if (model.stepNumber > 0){
      $headerSection.removeClass("is-closed");
      $('.preview-block').show();
      controller("closeChat");
      model.stepNumber = 0;
      $('.step-block').removeAttr('data-current-step');
    }
  }
                              );
}
                  );

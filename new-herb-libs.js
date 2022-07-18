var changeBgStepOne = function () {
    var mediaContainer = document.getElementById("mediaContainer");

    var bgSelect = document.getElementById("herbLibSelect");

    switch (bgSelect.options[bgSelect.selectedIndex].value) {
      case "demulcents":
        mediaContainer.style.backgroundImage =
          "url('https://cdn11.bigcommerce.com/s-8466dwhhql/product_images/uploaded_images/demulcents2.jpg')";
        break;
      case "adaptogens":
        mediaContainer.style.backgroundImage =
          "url('https://cdn11.bigcommerce.com/s-8466dwhhql/product_images/uploaded_images/adaptogens.jpg')";
        break;
      case "lemon":
        mediaContainer.style.backgroundImage =
          "url('https://cdn11.bigcommerce.com/s-8466dwhhql/product_images/uploaded_images/lemonbalm-upliftingtea.jpg')";
        break;
      default:
        mediaContainer.style.backgroundImage =
          "url('https://cdn11.bigcommerce.com/s-8466dwhhql/product_images/uploaded_images/demulcents2.jpg')";
        break;
    }
  };

   // select buttons for event listeners
   var getHerbLibStoryButton = document.querySelector("#getHerbLibStory");
   var herbLibResetButton = document.querySelector("#herb-lib-reset");
   var getHerbLibFormButton = document.querySelector("#getHerbLibForm");
   var chooseHerbLibAgain = document.querySelector("#chooseHerbLibAgain");

   var stepOne = document.querySelector("#stepOne");
   var stepTwo = document.querySelector("#stepTwo");
   var stepThree = document.querySelector("#stepThree");
   var stepFour = document.querySelector("#stepFour");
   var line = document.querySelector("#line");

   var playHerbLibsButton = document.querySelector("#playHerbLibs");
   var introSection = document.querySelector("#herb-lib-intro-wrapper");
   var stepOneSection = document.querySelector("#herb-lib-wrapper");
   var stepTwoSection = document.querySelector("#herb-lib-board-wrapper");
   var stepTwoTitle = document.querySelector("#boardTitleStepTwo");
   var stepThreeTitle = document.querySelector("#boardTitleStepThree");
   var stepTwoChooseStoryAgainButton = document.querySelector('#chooseStoryAgainStepTwo');
  

   // select div sections for showing/hiding
   var selectHerbLibStory = document.querySelector("#herbLibSelectStory");
   var herbLibStoryForm = document.querySelector("#herbLibStoryForm");
   var finishedHerbLibStory = document.querySelector(
     "#finishedHerbLibStory"
   );

   // select input div for populating the list/clearing the list
   var herbLibInputs = document.querySelector("#herbLibStoryForm div");

   // select the user's choice for herb lib story from the dropdown
   var chosenHerbLibStory = document.querySelector("select");

   // establish visibility of a herb lib story
   var herbLibStoryVisible = false;

   // array containing data for each herb lib story
   var herbLibStory = {
     demulcents: [
       ["Verb", "Body Part", "Verb", "Plural Noun", "Type Of Liquid", "Type Of Liquid"],
       "#demulcentsHerbLibTitle",
       "#demulcentsHerbLibText",
       "#demulcentsHerbLibText span",
       "finishedDemulcents",
       [
        "Herbs that are mucilaginous or oily and produce a 'goo' that coats, soothes, and ",
        { Verb: "protects"},
        " ",
        { "Body Part": "mucus"},
        " membranes",
        { punctuation: "."},
        " This slime action ",
        { Verb: "triggers" },
        " a reflex that helps promote natural moistening ",
        { "Plural Noun": "secretions" },
        " within the body",
        { punctuation: "." },
        " They are best extracted as an infusion in ",
        { "Type Of Liquid": "water" },
        " rather than in ",
        { "Type Of Liquid": "alcohol" },
        " tincture form",
        { punctuation: "." }
    ],
    "WHAT ARE DEMULCENTS?"
     ],
     adaptogens: [
       [
         "Plural noun",
         "Type Of Emotion",
         "Same Plural Noun As Previous Answer",
         "Verb Ending With -ING",
         "Noun (Thing)",
         "Adjective",
         "Adjective",
         "Adjective Ending With -ING",
         "Adjective",
         "A / AN",
         "Type Of Animal (Singular)",
         "Plural Noun"
       ],
       "#adaptogensHerbLibTitle",
       "#adaptogensHerbLibText",
       "#adaptogensHerbLibText span",
       "finishedAdaptogens",
       [
        "This diverse group of ",
        { "Plural Noun": "herbs" },
        " helps us face and handle ",
        { "Type Of Emotion": "stress" },
        " as it happens",
        { punctuation: "." },
        " These ",
        { "Same Plural Noun As Previous Answer": "herbs" },
        " restore overall balance and strengthen the functioning of the body as whole without ",
        { "Verb Ending With -ING": "impacting" },
        " the balance of an individual ",
        { "Noun (Thing)": "organ" },
        " or body system",
        { punctuation: "." },
        " Adaptogens facilitate these changes through a wide range of ",
        { Adjective: "internal" },
        " actions",
        { punctuation: ","},
        " rather than one ",
        { Adjective: "specific" },
        " action",
        { punctuation: "."},
        " Adaptogens can be ",
        { "Adjective Ending With -ING": "stimulating" },
        " or ",
        { Adjective: "relaxing" },
        " and may help improve focus",
        { punctuation: "," },
        " maintain ",
        { "A / AN": "a" },
        " ",
        { "Type Of Animal (Singular)": "healthy" },
        { punctuation: "'"},
        "s immune system",
        { punctuation: "," },
        " or provide some other broad-spectrum normalizing influence on unbalanced ",
        { "Plural Noun": "physiological processes"},
        { punctuation: "."}
    ],
    "WHAT ARE ADAPTOGENS?"
     ],
     lemon: [
       [
         "First Name Of A Person You Know",
         "Type Of Room In A House",
         "Name Of A Plant",
         "Name Of An Herb",
         "Same First Name Of A Person You Know As Previous Answer",
         "Adjective",
         "Continent",
         "Adjective",
         "Adjective To Describe A Scent",
         "Number",
         "Number",
         "Body Part",
         "Name Of A Pet",
         "Plural Noun",
         "Plural noun",
         "Adjective",
       ],
       "#lemonHerbLibTitle",
       "#lemonHerbLibText",
       "#lemonHerbLibText span",
       "finishedLemonBalm",
       [
        "Lemon balm ",
        { punctuation: "("},
        { "First Name Of A Person You Know": "Melissa" },
        " officinalis",
        { punctuation: ")" },
        " is a member of the mint family (Lamiaceae)",
        { punctuation: "." },
        " This sizeable family has over 3,500 members",
        { punctuation: ","},
        " including some of the most commonly used ",
        { "Type Of Room In A House": "kitchen" },
        " herbs",
        { punctuation: "," },
        " like ",
        { "Name Of A Plant": "basil" },
        { punctuation: "," },
        " lavender",
        { punctuation: "," },
        " ",
        { "Name Of An Herb": "oregano" },
        { punctuation: "," },
        " and thyme",
        { punctuation: "." },
        " The translation of the word ",
        { "Same First Name Of A Person You Know As Previous Answer": "Melissa" },
        " in Greek is honeybee",
        { punctuation: "," },
        " aptly named since lemon balm is a favorite of our pollinating friends",
        { punctuation: "."},
        " This ",
        { Adjective: "lush" },
        " perennial is native to southern ",
        { Continent: "Europe" },
        " and is known for its ",
        { Adjective: "robust" },
        " and aromatic ",
        { "Adjective To Describe A Scent": "lemony" },
        " scent and flavor",
        { punctuation: "," },
        " as well as its ",
        { Number: "numerous" },
        " uses and benefits",
        { punctuation: "." },
        " The use of lemon balm is recorded as far as ",
        { Number: "300" },
        " BCE",
        { punctuation: "," },
        " where it was referred to as ",
        { punctuation: "'" },
        "honey ",
        { "Body Part": "leaf" },
        { punctuation: "'" },
        " by a Greek scholar named ",
        { "Name Of A Pet": "Theo" },
        "phrastus",
        { punctuation: "." },
        " During the Tudor period",
        { punctuation: "," },
        " lemon balm was scattered on ",
        { "Plural Noun": "floors" },
        " to freshen ",
        { "Plural Noun": "rooms" },
        " with its delightful scent",
        { punctuation: "." },
        " It is safe to say that lemon balm",
        { punctuation: "'" },
        "s reputation has been long established as a versatile",
        { punctuation: "," },
        " delicious",
        { punctuation: "," },
        " and ",
        { Adjective: "beneficial" },
        " herb",
        { punctuation: "."}
    ],
    "THE HISTORY OF LEMON BALM"
     ],
   };

   playHerbLibsButton.addEventListener("click", function () {
        stepOneSection.classList.remove("herb-lib-hidden");
        introSection.classList.add("herb-lib-hidden");
   });

   stepTwoChooseStoryAgainButton.addEventListener("click", function () {
      // stepTwoSection.classList.add("herb-lib-hidden");
      // stepOneSection.classList.remove("herb-lib-hidden");

      // selectHerbLibStory.classList.remove("herb-lib-hidden");
      // herbLibStoryForm.classList.add("herb-lib-hidden");
      // finishedHerbLibStory.classList.add("herb-lib-hidden");
 
      // herbLibStoryVisible = false;
      // herbLibInputs.innerHTML = "";
 
      // stepOne.classList.add("active");
      // stepOne.classList.remove("done");
      // stepTwo.classList.remove("active");
      // line.style.width = 0 * 25 + "%";
      // stepTwo.classList.remove("done");
      // stepThree.classList.remove("done");
      // stepThree.classList.remove("active");
      // stepFour.classList.remove("done");
      // stepFour.classList.remove("active");

      window.location.reload(true);
   });

   // hide selection dropdown and show generated form for user inputs
   getHerbLibFormButton.addEventListener("click", function () {
     stepTwoSection.classList.remove("herb-lib-hidden");
     stepOneSection.classList.add("herb-lib-hidden");
    
    makeHerbLibForm();
     getQuote();
    //  fadeQuote();

     stepOne.classList.remove("active");
     stepOne.classList.add("done");
     stepTwo.classList.add("active");
     line.style.width = 1 * 25 + "%";
     stepTwo.classList.remove("done");
     stepThree.classList.remove("done");
     stepThree.classList.remove("active");
     stepFour.classList.remove("done");
     stepFour.classList.remove("active");

     selectHerbLibStory.classList.add("herb-lib-hidden");
     herbLibStoryForm.classList.remove("herb-lib-hidden");

     
   });

   chooseHerbLibAgain.addEventListener("click", function () {
     selectHerbLibStory.classList.remove("herb-lib-hidden");
     herbLibStoryForm.classList.add("herb-lib-hidden");

     herbLibInputs.innerHTML = "";

     stepOne.classList.add("active");
     stepOne.classList.remove("done");
     stepTwo.classList.remove("active");
     line.style.width = 0 * 25 + "%";
     stepTwo.classList.remove("done");
     stepThree.classList.remove("done");
     stepThree.classList.remove("active");
     stepFour.classList.remove("done");
     stepFour.classList.remove("active");
   });

   // reset button to try again
   herbLibResetButton.addEventListener("click", function () {
     herbLibStoryVisible = false;
     herbLibInputs.innerHTML = "";

     stepOne.classList.add("active");
     stepOne.classList.remove("done");
     stepTwo.classList.remove("active");
     line.style.width = 0 * 25 + "%";
     stepTwo.classList.remove("done");
     stepThree.classList.remove("done");
     stepThree.classList.remove("active");
     stepFour.classList.remove("done");
     stepFour.classList.remove("active");

     showHideHerbLibStory();
   });

   // generate story, hide form and show finished story
   getHerbLibStoryButton.addEventListener("click", function () {
     herbLibStoryVisible = true;
     

     makeHerbLibStory();
     showHideHerbLibStory();

     stepOne.classList.remove("active");
     stepOne.classList.add("done");
     stepTwo.classList.remove("active");
     line.style.width = 2 * 25 + "%";
     stepTwo.classList.add("done");
     stepThree.classList.remove("done");
     stepThree.classList.add("active");
     stepFour.classList.remove("done");
     stepFour.classList.remove("active");
   });

   // generate form based on selected herb lib story from dropdown
   function makeHerbLibForm() {
     var herbLibStoryChoice = herbLibStory[chosenHerbLibStory.value][0];

     for (var i = 0; i < herbLibStoryChoice.length; i++) {
       herbLibInputs.innerHTML +=
         "<label class='herb-lib-label'>" +
         herbLibStoryChoice[i] +
         '<br><input class="herb-lib-input" type="text"></label>';
     }

     
   }

   // use user inputted words to build story from base text
   function makeHerbLibStory() {
     var herbLibTitleSlot = document.querySelector(
       herbLibStory[chosenHerbLibStory.value][2]
     );
     var herbLibWordSlots = document.querySelectorAll(
       herbLibStory[chosenHerbLibStory.value][3]
     );
     var herbLibInputWords = document.querySelectorAll(".entry");

     // set answers in the form to corresponding span slot in story
     for (var i = 0; i < herbLibWordSlots.length; i++) {
       herbLibWordSlots[i].textContent = herbLibInputWords[i].value;
     }
   }

   // alter the visibility of text selections depending on if story should be seen or app reset
   function showHideHerbLibStory() {
     var herbLibStoryText = document.querySelector(
       herbLibStory[chosenHerbLibStory.value][2]
     );

     var herbLibStoryClass = herbLibStory[chosenHerbLibStory.value][4];

     var herbLibStoryTitle = document.querySelector(
       herbLibStory[chosenHerbLibStory.value][1]
     );

     if (herbLibStoryVisible) {
       finishedHerbLibStory.classList.add(herbLibStoryClass);
       herbLibStoryTitle.classList.remove("herb-lib-hidden");
       herbLibStoryText.classList.remove("herb-lib-hidden");
       finishedHerbLibStory.classList.remove("herb-lib-hidden");
       herbLibStoryForm.classList.add("herb-lib-hidden");
     } else {
       finishedHerbLibStory.classList.remove(herbLibStoryClass);
       herbLibStoryTitle.classList.add("herb-lib-hidden");
       herbLibStoryText.classList.add("herb-lib-hidden");
       finishedHerbLibStory.classList.add("herb-lib-hidden");
       selectHerbLibStory.classList.remove("herb-lib-hidden");
       finishedHerbLibStory.classList.remove(setHerbLibClass);
     }
   }

// NEW

function getQuote() {
    console.clear();
    $(".container")
        .addClass("editing")
        .removeClass("original-shown");
        // var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        var quoteChoice = herbLibStory[chosenHerbLibStory.value][5]
        $(".quote").html("");
        var $quote = $("<p></p>");
        $.each(quoteChoice, function(index, value) {
            if (typeof value == "string") {
                $('<span class="text">' + value + "</span>").appendTo($quote);
            }
            if (typeof value == "object") {
                $.each(value, function(pos, word) {
                    if (pos == "punctuation") {
                        $('<span class="punctuation">' + word + "</span>").appendTo(
                            $quote
                        );
                    } else {
                        $(
                            '<span class="blank"><input type="text" placeholder=" " value="' +
                                word +
                                '" readonly class="original" /><input type="text" id="word-' +
                                index +
                                '" placeholder=" " class="entry" /><label for="word-' +
                                index +
                                '">' +
                                pos +
                                "</label></span>"
                        ).appendTo($quote);
                    }
                });
            }
        });
        $quote.appendTo(".quote");
        Stretchy.resizeAll();
        // $('input.entry').eq(0).focus();

    };



    // function fadeQuote() {
    //     setTimeout(function(){
    //         $(".container").addClass("editing")
    //     }, 2500);
    // }
    
    // getQuote();

    $("button.show-original").on("click", function(e) {
        e.preventDefault();
        $(".container").addClass("original-shown");
        Stretchy.resizeAll();
    });
    $("button.hide-original").on("click", function(e) {
        e.preventDefault();
        $(".container").removeClass("original-shown");
        Stretchy.resizeAll();
    });
    $("form").on("submit", function(e) {
        e.preventDefault();
        $(".container").toggleClass("editing");
        stepTwoTitle.classList.add("herb-lib-hidden");
        stepThreeTitle.classList.remove("herb-lib-hidden");
        

        var stepThreeChoosenTitle = herbLibStory[chosenHerbLibStory.value][6];
        console.log(stepThreeChoosenTitle);

        stepThreeTitle.innerHTML = stepThreeChoosenTitle;

        herbLibStoryVisible = false;


     makeHerbLibStory();
     showHideHerbLibStory();


     stepOne.classList.remove("active");
     stepOne.classList.add("done");
     stepTwo.classList.remove("active");
     line.style.width = 2 * 25 + "%";
     stepTwo.classList.add("done");
     stepThree.classList.remove("done");
     stepThree.classList.add("active");
     stepFour.classList.remove("done");
     stepFour.classList.remove("active");
    });
    $("button.new").on("click", function() {
        getQuote();
    });
    
    $(window).on("resize", function() {
        Stretchy.resizeAll();
    });
var shuffleSequence = seq("i1","i2","setcounter","sep",sepWith("sep", seq("p1","p2","p3","p4","p5")));			  

var completionMessage = "Congratulations! You're done. Enter the following completion code in the appropriate field at the MTurk site to receive credit: FH87930422";
var showProgressBar = false;
var equalGroupSizes = true;

var defaults = [
		"Separator", {
		    transfer: "keypress",
		    normalMessage: "Place your fingers on '1', '2', and '9' and press any key to continue on to the next item.",
		    errorMessage: "WRONG!!  Place your index fingers on '1', '2', and '9' and press any key to continue on to the next item."
		},
		"DashedSentence", {
		    mode: "speeded acceptability",
		    display: "in place",
		    wordTime: 270,
		    wordPauseTime: 0,
		    hideProgressBar: true
		},
		"CQuestion", {
		    as: [["1","'1' for RED"], ["2","'2' for Blue"], ["9", "'9' for Green"]],
		    autoFirstChar: true,
		    showNumbers: false,
		    presentAsScale: true,
		    timeout: 5000,
		    hideProgressBar: true,
		    presentHorizontally: true,
		    randomOrder: false
		},
		"Message", {
		    hideProgressBar: true,
		    transfer: "keypress"
		},
		"Form", {
		    hideProgressBar: true,
		    continueOnReturn: true,
		    saveReactionTime: true
		}
		];

var items = [
	     ["setcounter", "__SetCounter__", {  }],
	     ["sep", "Separator", { }],
	     
       ["i1", "Form", {
           html: { include: "intro1.html" }
       } ],
       
       ["i2", "Form", {
           html: { include: "intro2.html" },
       } ],
         
         //
         // Practice items
         //
				["p1", "CQuestion", {q: "Turtle",
					textColor: "green",
				  hasCorrect: 2,
				}],
				["p2", "CQuestion", {q: "Falcon",
					textColor: "blue",
				  hasCorrect: 1,
				}],
				["p3", "CQuestion", {q: "Swordfish",
					textColor: "red",
				  hasCorrect: 0,
				}],
				["p4", "CQuestion", {q: "River",
					textColor: "green",
				  hasCorrect: 2,
				}],
				["p5", "CQuestion", {q: "Falcon",
					textColor: "red",
				  hasCorrect: 0,
				}]
	     
	     ];
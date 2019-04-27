//GAME IS ABOUT 80S ARCADE GAME

//array of word for the hangman
var words = ["GALAGA","PAC-MAN", "DONKEY-KONG", "FROGGER", "DIG-DUG", "DEFENDER", "TETRIS"];

//scope declaration
var randomWord="";
var lettersOfWord=[];
var blanks=0;
var blanksAndCorrect=[];
var strblanks="";
var wrongletters=[];

//game counter
var wrong =10;
var found = false;
var wins=0;
var lose=0;


function setran(){

    //computer generates random word from words array
    randomWord = words[Math.floor(Math.random() * words.length)];
    
    // split the individual word into separate arrays, and store in new array 
    lettersOfWord = randomWord.split("");
    
    //store length of word in blanks, for later use
    blanks = lettersOfWord.length;
    console.log('blanks', blanks);
    
    //creating a loop to generate "_" for each letter in array stored in blanks
    for (var i = 0; i < blanks; i++) {
        if (lettersOfWord[i]=="-"){
            blanksAndCorrect[i]="-";
        }
        else{
            blanksAndCorrect.push(" _ ");
        }
    }
    $("#letters").html(blanksAndCorrect);

}


//Start the program
setran();


function clear (){
    randomWord="";
    lettersOfWord=[];
    blanks=0;
    blanksAndCorrect=[];
    strblanks="";
    wrong=10;
    $("#wrongguess").html("GUESS REMAINING: " +wrong);
    wrongletters=[];
}

document.onkeyup = function(event) {
    console.log('keyup', event);
    var letter = event.key.toUpperCase();
    for (var i=0; i< blanks;i++){
        console.log('for loop');
        if (letter === lettersOfWord[i]){
            blanksAndCorrect[i]=lettersOfWord[i];
            console.log("match found: ", blanksAndCorrect);
            $("#letters").html(blanksAndCorrect);
            found=true;
            strblanks=blanksAndCorrect.join('');
            console.log("blank string", strblanks);
        }
        
        found=false;
    }
    if(found==false){
        wrongletters.push(letter);
        wrong--;
        $("#wrongguess").html("GUESS REMAINING: " + wrong);
        $("#wrongletter").html("Your GUESSES: " + wrongletters);
    }
    if (wrong<1){
        lose++;
        clear();
        setran();
        $("#totallost").html("Total lost: " + lose);
        console.log("YOU LOSE");
        $("#winning").html("Total Winnings: " + wins);
        $("#wrongguess").html("GUESS REMAINING: " + wrong);
    }
    if(strblanks==randomWord){
        wins++;
        $("#winning").html("Total Winnings: " + wins);
        $("#totallost").html("Total lost: " + lose);
        console.log("YOU WIN");
        wrongletters=[];
        $("#wrongguess").html("GUESS REMAINING: " + wrong);
        clear();
        setran();
    }
}


//display starting stats
$("#totallost").html("Total lost: " + lose);
$("#winning").html("Total Winnings: " + wins);
$("#wrongguess").html("GUESS REMAINING: " + wrong);
$("#wrongletter").html("Your GUESSES: " + wrongletters);




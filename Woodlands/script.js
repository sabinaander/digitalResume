const state = {
    activePage: 0,
    name: ''
}

/**
 * Function to check valid/invalid input. If valid, change the value of name and move to the next scene.
 */
function getName() {
    /**  @type {string} */
    const inputName = document.getElementById('inputName').value
    state.name = inputName

    /** valid input, change the scene */
    if (inputName) {
        changeScene(4)
    }
    /** invalid input, display error message */
    else {
        changeScene(2, "Whoops! That's not a real name, is it?")
    }
}

const page = document.querySelector('#page')

const DEAD = 3

const pages = [
    /**
     * Scene 0 - Start Page
     */
    {
        content:/*html*/ `
            <div class="fadein centerContainer">
                <h1>Woodlands</h1>
                <button onclick="changeScene(1)" class="blink">ENTER</button>
            </div>
        `
        ,
        nextScenes: [1]
    }
    ,
    /**
     * Scene 1 (with information about the scenario)
     */
    {
        content: /*html*/ `
            <div class="centerContainer">
                <div class="box">
                    <p>You enter a outerwordly looking forest.<br>
                    The land of "Woodlands" is like nothing you've never seen.<br>
                    Strange fauna, and unbelievble creatures.<br>
                    A small figure approach you, and asks for your help:<br></p>
                    <p class="smallText">Howdy stranger!<br>
                    Woodlands is knees deep in a horrible crisis!<br>
                    YOU must fight the evil forces! YOU!</p>
                </div>
                <div class="dualButtons">
                    <button onclick="changeScene(2)">UMM...<br> OKAY?</button>
                    <button class ="redText" onclick="changeScene(DEAD)">NOPE</button>
                </div>
            </div>
        `
        ,
        nextScenes: [2, DEAD]
    }
    ,
    /**
     * Scene 2 (Chosen "UMM... OKAY" show "adventure-info")
     * Function to be able to store name when "game over".
     */
    {
        content: function() {
            return /*html*/`
            <div class="centerContainer">
                <div class="box">
                    <p class="biggerFont">SPLENDID!</p>
                    <p>I can't tell you much about the task at hand, but I am confident YOU will fix this!<br>
                    Many have tried and failed before you, but don't worry, YOU are the one!
                    Could you please tell me your name?</p>
                    <input id="inputName" value="${state.name}" placeholder="Write your name...">
                </div>
                <button onclick="getName()">ENTER WITH CAUTION</button>
            </div>
        `
        }
        ,
        nextScenes: [4]
    }
    ,
    /**
     * Scene 3 (Chosen "NOPE" or dead in fight show red background + Try Again? button)
     */
    {
        content:/*html*/ `
            <div class="centerContainer dead">            
                <p>"Hero" *pfft*<br>
                Your'e nothing but a coward. 
                You could come back another time, but I doubt you'll make it.</p>
                <button onclick="changeScene(0)">TRY AGAIN?</button>
            </div>
        `
        ,
        nextScenes: [0]
    }
    ,
    /**
     * Scene 4 (Chosen "ENTER WITH CAUTION", function to be able to show name)
     */
    {
        content: function () {
            return /*html*/ `
            <div class="centerContainer cardBox">   
                <div class="card">
                    <img src="/media/cat.png" class="charImg">
                    <div class="nextContainer">
                    <p>Well then ${state.name}!<br>
                    The task at hand is simple...<br>
                    You just have to defeat the evil forces, can't be that hard... right?<br>
                    Luckily you have your sword and som PAWSitive energy!</p>  
                    <img onclick="changeScene(5)" class="nextArrow" src="/media/nextarrow.png"> 
                    </div>
            </div>
        `
        }
        ,
        nextScenes: [5]
    }
    ,
    /**
     * Scene 5 (Mushroom-scene. Make a crucial  choice!)
     */
    {
        content: /*html*/ `
            <div class="centerContainer">
                <div class="box card">
                <img src="/media/shroom.png" class="pixelImg">
                    <p>You've been wandering through the woods for a long time.<br>
                    Energy is running low, tummy's rumbling...<br>
                    You come across some strange looking mushrooms under a bush.<br>
                    It looks delicious, but is it really safe to eat something like this?
                </p>
                </div>
                <div class="dualButtons">
                    <button onclick="changeScene(6)">TAKE THE<br> CHANCE!</button>
                    <button class ="redText" onclick="changeScene(7)">DANGER!</button>
                </div>
            </div>
        `
        ,
        nextScenes: [6, 7]
        
    }
    ,
    /**
     * Scene 6 (Ate the mushroom)
     */
    {
        content: /*html*/ `
            <div class="centerContainer cardBox">   
                <div class="card">
                    <div class="nextContainer">
                        <p>You feel energized!<br>
                        What kind of mushroom was that even?!<br>
                        Everything is looking beautiful... colors are more vibrant than ever. are the trees... breathing?<br><br>
                        I feel like anything could happen now! This is for sure the best day of my life.<br>
                        I'm glad I went on this trip!
                        </p>  
                        <img onclick="changeScene(8)" class="nextArrow" src="/media/nextarrow.png"> 
                    </div>
                </div>
            </div>
        `
        ,
        nextScenes: [8]
    }
    ,
    /**
     * Scene 7 (Did not eat the mushroom)
     */
    {
        content: /*html*/ `
            <div class="centerContainer cardBox">   
                <div class="card">
                    <div class="nextContainer">
                        <p>It's not worth it... <br>
                        I know there's some really messed up mushrooms, my mission is too important.<br>
                        I feel awfully hungry and slow, but hopefully there'll be a tavern of sorts ahead.<br>
                        I mean... even evil forces need to eat, right?
                        </p>  
                        <img onclick="changeScene(9)" class="nextArrow" src="/media/nextarrow.png"> 
                    </div>
                </div>
            </div>
        `
        ,
        nextScenes: [9]
    }
    ,
    /**
     * Scene 8 (Ate the mushroom -> Enter fight)
     */
    {
        content: function () {
            return /*html*/ `
            <div class="centerContainer cardBox">   
                <div class="cardColumn">
                    <div class="nextContainer">
                        <h3>Strange encounter!</h3>
                        <p>"WHO ARE YOU?"</p>
                        <p class="smallText"> - says a funny looking creature in a silly tone.</p>
                        <p>Oh, my name is ${state.name}, I'm here to defeat all evil!</p><br>
                        <p class="smallText">(When I look at this creature I'm withholding the urge to laugh. He's got 4 eyes, a pink glowing aura and a hole in their stomache for ice cream.<br>
                         NO WAY he can be dangerous!)</p>
                        <p>"Defeat all evil huh? *laugh*<br> 
                        I would never let such a small critter like you defeat me!<br>
                        Are you gonna defend your honour with that plastic sword of yours? *laugh*"</p>             
                    </div>
                </div>
                <div class="dualButtons">
                    <button onclick="changeScene(10)">COME AT ME!</button>
                    <button class ="redText" onclick="changeScene(11)">ESCAPE</button>
                </div>
            </div>
        `
        }
        ,
        nextScenes: [10]
    }
    ,
    /**
     * Scene 9 (Did not eat the mushroom -> Enter fight)
     */
    {
        content: function () {
            return /*html*/ `
            <div class="centerContainer cardBox">   
                <div class="cardColumn">
                    <div class="nextContainer">
                        <h3>Strange encounter!</h3>
                        <p>"WHO ARE YOU?"</p>
                        <p class="smallText">- Says a stranger with a strong tone.</p>
                        <p>Oh, my name is ${state.name}, I'm here to defeat all evil!</p>
                        <p>"Defeat all evil huh?"<br>
                        This land has been free from any evil forces for hundreds of years. Who told you this?<br>            
                        Actually, coming to think of it, I have no idea...<br>
                        I just ran across this weirdo in the vast area of Woodlands who told me I should take upon this quest.<br>
                        "Oh no...<br>
                        You must've met Jake. He's a crazy head eating lot's of poisonous mushrooms, he rambles on about quests and evil."</p>
                        <p class="smallText">I've seen those... Orange with pink spots... Close call...</p>
                    </div>
                    <img onclick="changeScene(12)" class="nextArrow" src="/media/nextarrow.png"> 
                </div>
            </div>
        `
        }
        ,
        nextScenes: [12]
    }
    ,
    /**
     * Scene 10 (Pressed "Come At me!")
     */
    {
        content: function () {
            return /*html*/ `
            <div class="centerContainer cardBox">   
                <div class="cardColumn">
                    <div class="nextContainer">
                       <p class="smallText"> ${state.name} wakes up with a terrible pain in the back of the head.</p>
                        <p>"What? Where am I...? What theee?"<br><br>
                        Looking around ${state.name} notice nothing but woods, all regular boring woods.<br><br>
                        Was this all a dream?<br><br>
                        "Why am I covered in ice cream?"<br><br>
                    <h3 class="blink"> To be continued...</h3>
                    <button class ="redText" onclick="changeScene(0)">EXIT</button>
                </div>
            </div>
        `
        }
    }
    ,
    /**
     * Scene 11 (Pressed "ESCAPE")
     */
    {
        content: function () {
            return /*html*/ `
            <div class="centerContainer cardBox">   
                <div class="cardColumn">
                    <div class="nextContainer">
                       <p class="smallText"> You try to run, but the nasty creature is following you.<br><br>
                       The whole world has taken a turn to worse, it's all covered in blood with dangers lurking behind every stone.<br><br>
                       You see a bright light, run towards it, the second you're about to enter there's a loud...<br>
                       <p class ="redText">BANG!</p>
                       <p>Silence...<br><br>
                        You can't see anything, feel anything.<br><br>
                         It's all... gone.</p><br>
                        <button class ="redText" onclick="changeScene(DEAD)">EXIT</button>
                    </div>
                </div>
            </div>
        `
        }
    }
    ,
    /**
     * Scene 12 (Did not eat the mushroom -> Had encounter -> Next scene)
     */
    {
        content: function () {
            return /*html*/ `
            <div class="centerContainer cardBox">   
                <div class="cardColumn">
                    <div class="nextContainer">
                        <p class="smallText">"You look a bit tired."</p>
                        <p class="smallText">"Yeah, long night. I'm starving actually"</p>
                        <p class="smallText">"I know what you need, follow me, I don't live to far off from here."</p>
                        <p class="smallText"> The two strangers wander off through the forest until a small cabin appears. They enter and in the kitchen there's a big pot cooking some kind of stew.</p>
                        <p class="smallText">"Take a seat, I'll get you some food, heroes need energy to stay strong."</p>
                        <p class="smallText"> And there they sat, enjoying their meal, when ${state.name} noticed something odd.<br>
                        Pink spots in the stew. Many of them.</p><br>
                        <h3 class="blink"> To be continued...</h3>   
                    </div>
                    <button class ="redText" onclick="changeScene(0)">EXIT</button>
                </div>
            </div>
        `
        }
    }   
]



/**
 * Function to show nextScene with input values
 * @param {number} nextPage 
 * @param {string} [errorText]
 */
const changeScene = function (nextPage, errorText) {
    state.activePage = nextPage
    /** creates a second function to be able to store name before rendering new scene */
    if (typeof pages[state.activePage].content === 'function') {
        page.innerHTML = pages[state.activePage].content()
    }
    else {
        page.innerHTML = pages[state.activePage].content
    }
    /** displaying error message if invalid input */
    if (errorText) {
        const box = document.querySelector('.box')
        box.innerHTML += `<p class="errorText">${errorText}</p>`
    }
}

changeScene(0)
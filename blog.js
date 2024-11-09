let data = [
    {date: "Nov 3rd, 2024", data: [
        `
        <h3>Making the Halloween Minigame</h3>
        <p>Last month I released the Halloween Minigame on this site. Being the first seasonal minigame, I had to build the framework for future minigames. If you haven’t played the minigame, it’s a fast-paced shooter that tests your reflexes as you blast falling pumpkins with a purple lightning bolt. I got the idea of a lightning bolt from one of my favorite '80s movies; Ghostbusters. I created the music as an experiment on 
        <a href='https://jummb.us'>JummBox</a> 
        and surprised myself with a decent tune, so 
        <a href='https://github.com/GreyBeard42/greybeard42.github.io/releases/tag/v4.2.5' >I added it to the Minigame on November 2nd.</a> 
        I could've had the music added on Halloween day, but my Codespaces Quota had expired for the month. If you want to play the minigame any time of the year, just open up the developer console (F12 or Right Click menu -> Inspect) and type \"halloween()\" in the \"Console\" tab.</p>
        
        <h3>Struggling with p5.js Tile-based Game</h3>
        <p>I've tried to work with grids of images in <a href=\"https://p5js.org\">p5.js</a>, and always seem froget how HARD AND PAINFUL it is to make the collision for each square. If you've taken your time scrolling through the JavaScript page, you would know that on April 1st (unintentional) this year, I created a <i>really simple</i> grid-based farming game. It did take many hours, but I did successfully make collision from scratch. But then, on a dark Halloween night, I had the idea to make a Pokemon-like RPG game with beautiful pixel art and effects. Man, I really frogot about the nonsense equations. I am no professional, I am certian someone wiser than me could achive this.</p>
        
        <h3>An upcoming JavaScript project</h3>
        <p>Since you've read through most of this page, I thought I'd treat you with my next project to be worked on after this <a href="blog.js">Blog Script</a> has been commited to the site. I'm going to make a Planner for Classwork and/or Hobbies. I've been using a private GitHub Project for planning out updates for this site and I've decided I want to give a shot at making my own organizer. So far, I hope to make Local Storage, Save Files, and Customizable Styles for it. If I choose to go all the way with this project, it could be done by December.</p>
        `,
        `
        <img src='images/blog/halloween.png'>
        <p>A screenshot of the Halloween Minigame. The text reads, \"Click to blast those dang pumpkins! | Score: 90\" *This was before the v4.2.2 update when I moved the text in front of the pumpkins and bolt.</p>
        
        <img src=\"images/art/lakeHills.png\" style=\"image-rendering: pixelated;\">
        <p>My Latest Pixel art of a pretty lake that I hiked around this summer.</p>

        <div style=\"display: flex;\">
            <div class=\"column\" style=\"flex: 1;\">
                <img src=\"images/blog/lecture.png\">
                <p>Lecture commenting on a user's choice in media as they flex their fingers in preparation to play tetris.</p>
                <img src=\"images/blog/tileBasedFail.png\">
                <p>A screenshot of the Tile-Based game that caused me so much greif. I do not recomend this!</p>
            </div>
            <div class=\"column\" style=\"flex: 1;\">
                <img src=\"images/blog/editingLecture.png\">
                <p>Editing the manefest.json file in Lecture using VSCode.</p>
                <img src=\"images/blog/cometSense.png\">
                <p>A screenshot of Comet Sense being \"edited\" in VSCode</p>
            </div>
        </div>
        `,
        `
        <h3>Lecture - My Chrome Extension</h3>
        <p><a href='https://github.com/GreyBeard42/lecture'>Lecture</a> 
        is a chrome extension I made that lectures you on the pages you visit. I enjoyed learning how to make a chrome extension learning about manifest.json files, Key files, and advanced CSS styling. The hardest thing about making this extension was ironically writing the lectures and coming up with ideas since I'm regularly on many of the lecture sites. (If you have any ideas, tell me; I'll add them to the database) I created it locally in VSCode learning from 
        <a href=\"https://developer.chrome.com/docs/extensions/get-started\">Google's awesome tutorials</a> 
        and <a href=\"https://www.w3schools.com/\">W3 Schools</a>. 
        I don't suggest that you keep this extension on; it will lecture you every time you go to Github, Wikipedia, Youtube or any other popular website. However, I am glad to have made this and have another project to look back at.</p>
        
        <h3>A Scraped Idea that could have been grand</h3>
        <p>In Late October, I had the idea to try making an incremental game about space travel called Comet Sense. Inspired by <a href=\"https://store.steampowered.com/app/1103100/1000_days_to_escape/\">1000 Days to Escape</a> and <a href=\"https://orteil.dashnet.org/cookieclicker\">Cookie Clicker</a>, I wanted to try and make a unique incremental game loaded with story and conflict. Incremental games are hard to do right. Since there are so many, you have to make something polished and grand without being too simple and familiar. I watched a TED talk titled, <a href=\"https://www.youtube.com/watch?v=6pY7EjqD3QA\">The Four-Letter Code to Selling Anything</a> by Derek Thompson who talked about how content needs to have the perfect combination of novelty and familiarity. I thought I could pull that off with this game. The problem with making a large game with a deep story is to have the motivation to continue and reach a final product. In the case of Comet Sense, I quickly burnt out. I'm pretty confident that was because <b>I didn't map out how the game would play and feel.</b> The most important thing to do before even making the UI of a vast game is to map it out beforehand. I know, I don't want to do that either, I just want to get to making the thing. I'm not much of a game ideas expert, which is why I prefer making simpler games like <a href=\"/javascript/clearance\">Clearance</a> or <a href=\"/javascript/starstrike\">Starstrike.</a> People totally underestimate the difficulty of coming up with game ideas, it's really hard to find that perfect ratio of familiarity.</p>
        `
    ]}
]
let view = data.length-1
let params = new URLSearchParams(window.location.search)
if(params.get("n")) view = JSON.parse(params.get("n"))

if(view>=data.length-1) next.style.display = 'none'
if(view<=0) prev.style.display = 'none'

next.addEventListener("click", () => {location.href = location.origin+location.pathname+"?n="+(JSON.parse(view)+1)})
prev.addEventListener("click", () => {location.href = location.origin+location.pathname+"?n="+(JSON.parse(view)-1)})

date.innerText = "No. "+(view+1)+" - "+data[view].date

let left = document.createElement('div')
left.innerHTML =  data[view].data[0]
left.classList.add('column')
left.style.flex = "2"
columns.appendChild(left)

let middle = document.createElement('div')
middle.innerHTML =  data[view].data[1]
middle.classList.add('column')
middle.style.flex = "4"
columns.appendChild(middle)

let right = document.createElement('div')
right.innerHTML =  data[view].data[2]
right.classList.add('column')
right.style.flex = "2"
columns.appendChild(right)
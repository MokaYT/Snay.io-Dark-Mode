GM_addStyle (`

#ReplaySaveBtn {
    top: 15vw;
}

#modmenubtn {
    top: 15vw;
}

#modmenuclosebtn {
    top: 15vw;
    right: 2vw;
}

#modmenu {
    top: 15vw;
    border: 2px;
    border-radius: 9px;
    border-style: solid;
    border-color: white;
    background-color: rgba(0,0,0,.7);
    position: absolute;
    right: 1vw
}

modmenutitle {
    margin-left: 38px;
}

modmenu input {
    height: 0.6vw;
}

#badge-gallery-header {
    background-color: #000;
}
#gallery-content {
    background: black;
}

#season-gallery-header {
    background: black;
}

#settings-subtitle {
    color: white;
}

#window-header {
    background-color: black;
}

.swal-modal {
    background-color: black;
    border: 3px solid white;
}
.swal-title {
    color: white;
}
.swal-text {
    color: white;
}

#players-header {
    background-color: black;
}

#quests-body {
    background: linear-gradient(90deg, red, #101010);
}

#quests-header {
    background: black;
}

.window-header {
    background: black;
}

#replays-header {
    background: black;
}

#overlays,#connecting {
    background-image: url("https://i.imgur.com/9mXQMeu.png");
}

#leaderboards-header {
    background: black;
}

.free-rewards .reward-tag {
    background: #000;
    border-radius: 0 0 5vh 5vh;
}
.vip-rewards .reward-tag {
    background: #000;
    border-radius: 5vh 5vh 0 0;
}


#login-content {
    background: #000;
}
#login form span {
    background-color: #ffffff;
    border-radius: 10px 0px 0px 10px;
}
#login form input[type=email],input[type=password],input[type=text] {
    background-color: #ffffff;
    border-radius: 0 10px 10px 0;
    margin-bottom: 1.3em;
    padding: 0 18px;
}

#login form input[type=submit]:hover {
    background-color: #ff4949
}

#login form input[type=submit] {
    background-color: #e91111;
    border: 2px white solid;
    border-radius: 3px;
    -moz-border-radius: 3px;
    -webkit-border-radius: 25px;
    color: #eee;
    font-weight: 700;
    margin-bottom: 10px;
    text-transform: uppercase;
    width: 200px;
    margin-left: 40px;
}


`)

const settingsContent = document.querySelector("#settings-content");
settingsContent.style.backgroundColor = "black";
const playersContent = document.querySelector("#players-content");
playersContent.style.backgroundColor = "black";
const leaderboardsContent = document.querySelector("#leaderboards-content");
leaderboardsContent.style.backgroundColor = "black";
const storeContent = document.querySelector("#store-content");
storeContent.style.backgroundColor = "black";
const seasonsContent = document.querySelector("#seasons-content");
seasonsContent.style.backgroundImage = "linear-gradient(90deg, red, #101010)";
const accountContent = document.querySelector("#account-content");
accountContent.style.backgroundColor = "black";
const badgeGalleryContent = document.querySelector("#badge-gallery-content");
badgeGalleryContent.style.backgroundColor = "black";
const tilesGalleryContent = document.querySelector("#tiles-gallery-content");
tilesGalleryContent.style.backgroundColor = "black";
const serversContent = document.querySelector("#servers-content");
serversContent.style.backgroundColor = "black";
const emojiGalleryContent = document.querySelector("#emoji-gallery-content");
emojiGalleryContent.style.backgroundColor = "black";
const replaysContent = document.querySelector("#replays-content");
replaysContent.style.backgroundColor = "black";
const spinnerContent = document.querySelector("#spinner-content");
spinnerContent.style.backgroundImage = "linear-gradient(90deg, red, #101010)";
const vipContent = document.querySelector("#vip-content");
vipContent.style.backgroundImage = "linear-gradient(90deg, red, #101010)";

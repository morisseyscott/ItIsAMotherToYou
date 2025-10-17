const videos = [
  { src: "cigarette1.mov", text: "I want you both to know I have a really good life insurance policy" },
  { src: "cigarette2.mov", text: "I think you should set a time to go in person and soon and communicate with her. " },
  { src: "cigarette3.mov", text: "I don’t see this getting better and we may need to make some decisions. " },
  { src: "cigarette4.mov", text: "Yeah. As long as your expectations are low!" },
  { src: "cigarette5.mov", text: "I love you. I'm sorry I'm not there w you" },
  { src: "cigarette6.mov", text: "All good? People still coming over? Why are you at a weird house? Drugs? Abduction? " },
  { src: "cigarette7.mov", text: "WHEREDOIFINDYOU???" },
  { src: "cigarette8.mov", text: "My phone may die and I am going into the sphere. Just FYI." },
  { src: "cigarette9.mov", text: "Don’t forget today is April Fools" },
  { src: "cigarette10.mov", text: "I took all the scary religious propaganda meant to target the vulnerable populations at the Ybor post office and put it all in your box. Enjoy.  " },
  { src: "cigarette11.mov", text: "now I am being more meta than the artist and I don’t even know what meta means " },
  { src: "cigarette12.mov", text: "I want to tell her to fuck off but then I don’t know why. " },
  { src: "cigarette13.mov", text: "Don’t tell anyone about it until we know what it is." },
  { src: "cigarette14.mov", text: "Don’t buy a car or anything" },
  { src: "cigarette15.mov", text: "Life has been weird here. Look at Chicken. She looks changed. " },
  { src: "cigarette16.mov", text: "Is she resting her head on your shoulder?" },
  { src: "cigarette17.mov", text: "You are now my dream journal" },
  { src: "cigarette18.mov", text: "Imagining you in pain is the worst pain." },
  { src: "cigarette19.mov", text: "I made all of that up but I think I’m just gonna go with it. It’s Art" },
  { src: "cigarette1.mov", text: "I’m sorry I messed up as a mom the last 6 years. I hope you can forgive me and let me be a part of this journey." },
  { src: "cigarette2.mov", text: "I’m not doing well w criticism right now. I love you." },
  { src: "cigarette3.mov", text: "I’m doing the best I can" },
  { src: "cigarette4.mov", text: "Are you happy?" },
  { src: "cigarette5.mov", text: "Love you both. I’m sick BTW." },
  { src: "cigarette6.mov", text: "Y’all know to never take any drugs unless it’s prescribed to you right?" },
  { src: "cigarette7.mov", text: "I think you should set a time to go in person and soon and communicate with her. " },
  { src: "cigarette8.mov", text: "I am sorry I forced you to do something nefarious" },
  { src: "cigarette9.mov", text: "I’d give you all the money if I could and I didn’t purchase those grounding sheets." },
  { src: "cigarette10.mov", text: "I love you. I'm sorry I'm not there w you" },
  { src: "cigarette11.mov", text: "I feel like you both know this- but I have never said it to you. It’s every where, in everything, and it kills you immediately." },
  { src: "cigarette12.mov", text: "That dog creeps me out. But I guess it’s my sister." },
  { src: "cigarette13.mov", text: "I don’t think I will have any debt in like 5 years. These are important things to know." },
  { src: "cigarette14.mov", text: "I was waiting on the sidewalk for you. Crying." },
  { src: "cigarette15.mov", text: "Don’t buy drugs in any park" },
  { src: "cigarette16.mov", text: "We have to trap the kittens I think." },
  { src: "cigarette17.mov", text: "My intention when I grew you was to make you into self-sustaining humans." },
  { src: "cigarette18.mov", text: "I plan my dinner." },
  { src: "cigarette19.mov", text: "There is no power at the house. Neighbors texted that the trunk is open on a car." },
  { src: "cigarette1.mov", text: "We aren’t the only ones to wonder. When did everyone else stop talking about it?" },
  { src: "cigarette2.mov", text: "Is there a fish that likes to be in a fish tank?" },
  { src: "cigarette3.mov", text: "I’m serious about changing your residency. Like now." },
  { src: "cigarette4.mov", text: "Maybe we can all move to Rwanda." },
  { src: "cigarette5.mov", text: "Answer me. Did they already take you away to a camp???" },
  { src: "cigarette6.mov", text: "Heat warning. Stay inside!" },
  { src: "cigarette7.mov", text: "I was just making sure a weird man (that I don’t know) wasn’t in the house. " },
  { src: "cigarette8.mov", text: "Is that from a prison camp? What does the moon look like there?" },
  { src: "cigarette9.mov", text: "I keep thinking y’all are going to forget Chicken. Don’t forget Chicken. " },
  { src: "cigarette10.mov", text: "Make sure no one drinks and drives and don’t touch any liquor that is not already open. " },
  {src: "cigarette11.mov", text: "How noncommunicative you are" },
  { src: "cigarette12.mov", text: " I think it’s a good idea for you both to be w daddy and put your frustrations on him v me. " }
];

const clickSound = document.getElementById("clickSound");

let currentIndex = 0;

const videoElement = document.getElementById("myVideo");
const textElement = document.getElementById("overlayText");
const container = document.getElementById("videoContainer");

container.addEventListener("click", () => {
  clickSound.currentTime = 0; // rewind to start in case it overlaps
clickSound.play();
clickSound.volume = 0.4;


  currentIndex = (currentIndex + 1) % videos.length;

  // Instantly switch video and text
  videoElement.src = videos[currentIndex].src;
  textElement.textContent = videos[currentIndex].text;
});
const infoButton = document.getElementById("infoButton");
const infoPopup = document.getElementById("infoPopup");
const closePopup = document.getElementById("closePopup");

infoButton.addEventListener("click", (event) => {
  event.stopPropagation();
  infoPopup.classList.add("show");
});

closePopup.addEventListener("click", () => {
  infoPopup.classList.remove("show");
});

// Close when clicking outside content box
infoPopup.addEventListener("click", (event) => {
  if (event.target === infoPopup) {
    infoPopup.classList.remove("show");
  }
});


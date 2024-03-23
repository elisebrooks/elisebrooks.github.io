const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = "It was 50 fahrenheit outside, so :insertx: went to ride a unicycle. When they got to :inserty:, they stared in disgust for a minute, then :insertz:. Bob saw everything, and was shocked — :insertx: weighs 20 pounds; how could they ride a unicycle?";
const insertX = ["Michael Phelps",
    "Miffy",
    "a sentient mailbox"];
const insertY = ["the center of the Earth",
    "Mount Rushmore",
    "a black hole"];
const insertZ = ["walked away",
    "realized it was a hallucination",
    "ate a sandwich made of literal sand"];

randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;
    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);
    newStory = newStory.replaceAll(":insertx:", xItem);
    newStory = newStory.replaceAll(":inserty:", yItem);
    newStory = newStory.replaceAll(":insertz:", zItem);
    if(customName.value !== '') {
    const name = customName.value;
        newStory = newStory.replaceAll('Bob', name);
    }

    if(document.getElementById("uk").checked) {
    const weight = Math.round(20*0.0714286).toString() + " stone";
    const temperature =  Math.round((50-32)*(5/9)).toString() + " centigrade";
        newStory = newStory.replaceAll("20 pounds", weight);
        newStory = newStory.replaceAll("50 fahrenheit", temperature);
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}
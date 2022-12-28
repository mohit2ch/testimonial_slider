const testimonies = [
  {
    testimony: ` “ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ” `,
    name: "Tanya Sinclair",
    job: "UX Engineer",
    src: "./images/image-tanya.jpg",
  },
  {
    testimony: `“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”`,
    name: "John Tarkpor",
    job: "Junior Front-end Developer",
    src: "./images/image-john.jpg",
  },
];

let testimony = document.getElementById("testimony");
let Name = document.getElementById("name");
let job = document.getElementById("job");
let pic = document.getElementById("pic");
function loadTestimony(index) {
  testimony.innerText = testimonies[index].testimony;
  Name.innerText = testimonies[index].name;
  job.innerText = testimonies[index].job;
  pic.innerHTML = `<img src="${testimonies[index].src}" alt="" srcset="" class="profile-pic"> `;
}

document.addEventListener("keydown", function (event) {
  if (event.key == "ArrowLeft") {
    loadTestimony(0);
  } else {
    loadTestimony(1);
  }
});

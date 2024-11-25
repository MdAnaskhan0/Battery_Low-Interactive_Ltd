const milestonesData = JSON.parse(data).data;

// load all milestones
const loadMilestones = () => {
  const milestones = document.querySelector(".milestones");

  milestones.innerHTML = `${milestonesData?.map((milestone) => {
      return `<div class="milestone border-b" id="${milestone._id}">
        <div class="flex">
          <div class="checkbox"><input type="checkbox" onclick="markMileStone(this, ${
            milestone._id
          })" /></div>
          <div onclick="openMilestone(this, ${milestone._id})">
            <p>
              ${milestone.name}
              <span><i class="fas fa-chevron-down"></i></span>
            </p>
          </div>
        </div>
        <div class="hidden_panel">
          ${milestone?.modules?.map((module) => {
              return `<div class="module border-b">
              <p>${module.name}</p>
            </div>`;
            })
            .join("")}
        </div>
      </div>`;
    })
    .join("")}`;
}


const openMilestone = (MilestoneElement, id) => {
    const currentPanel = MilestoneElement.parentNode.nextElementSibling;
    const shownPanel = document.querySelector(".show");
    const active = document.querySelector(".active");
    if(active && !MilestoneElement.classList.contains("active")) {
        active.classList.remove("active");
    }
    MilestoneElement.classList.toggle("active");
    
    if(!currentPanel.classList.contains("show") && shownPanel) shownPanel.classList.remove("show");
    
    // toggle current element
    currentPanel.classList.toggle("show");
    
    showMilestone(id);
}


// toggle current clicked one

const showMilestone = (id) => {
    const milestoneImage = document.querySelector(".milestoneImage");
    const name = document.querySelector(".title");
    const details = document.querySelector(".details");

    name.innerHTML = milestonesData[id].name;
    milestoneImage.style.opacity = "1";
    milestoneImage.src = milestoneImage.src = milestonesData[id].image;
    name.innerText = milestonesData[id].description;
}

const markMileStone = (checkbox, id) => {
    const doneList = document.querySelector(".doneList");
    const milestonesList = document.querySelector(".milestones");
    const item = document.getElementById(id);

    if (checkbox.checked) {
        milestonesList.removeChild(item);
        doneList.appendChild(item);
    } else {
        milestonesList.appendChild(item);
        doneList.removeChild(item);
    }
}

// Functions Call
loadMilestones();



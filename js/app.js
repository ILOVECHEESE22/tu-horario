const curtain = document.getElementById("curtain");
const dayPage = document.getElementById("dayPage");
const dayTitle = document.getElementById("dayTitle");
const scheduleContainer = document.getElementById("scheduleContainer");
const backButton = document.getElementById("backButton");

const days = [
    "domingo",
    "lunes",
    "martes",
    "miercoles",
    "jueves",
    "viernes",
    "sabado"
];

function openDay(dayNumber){

    const selected = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        dayNumber
    );

    const dayName = days[selected.getDay()];

    dayTitle.textContent =
        `${dayNumber} de ${months[currentDate.getMonth()]}`;

    scheduleContainer.innerHTML = "";

    if(schedule[dayName]){

        schedule[dayName].forEach(item=>{

            const card=document.createElement("div");
            card.className="card";

            if(item.type==="class"){

                card.innerHTML=`
                    <div class="time">${item.start} - ${item.end}</div>
                    <div class="subject">${item.subject}</div>
                `;

            }

            if(item.type==="break"){

                card.innerHTML=`
                    <div class="time">${item.start} - ${item.end}</div>

                    <textarea
                    placeholder="Escribe aquí..."
                    class="noteBox"></textarea>
                `;

            }

            if(item.type==="lunch"){

                card.innerHTML=`
                    <div class="time">${item.start} - ${item.end}</div>

                    <textarea
                    placeholder="Almuerzo..."
                    class="noteBox"></textarea>
                `;

            }

            scheduleContainer.appendChild(card);

        });

    }

    curtain.style.transform="translateY(0)";

    setTimeout(()=>{

        dayPage.style.display="block";

        curtain.style.transform="translateY(-100%)";

    },250);

}

backButton.onclick=()=>{

    curtain.style.transform="translateY(0)";

    setTimeout(()=>{

        dayPage.style.display="none";

        curtain.style.transform="translateY(100%)";

    },250);

};

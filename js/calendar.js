const monthTitle = document.getElementById("monthTitle");
const calendar = document.getElementById("calendar");

let currentDate = new Date();

const months = [
"Enero","Febrero","Marzo","Abril","Mayo","Junio",
"Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"
];

function renderCalendar(){

    calendar.innerHTML="";

    const year=currentDate.getFullYear();
    const month=currentDate.getMonth();

    monthTitle.textContent=`${months[month]} ${year}`;

    const firstDay=new Date(year,month,1);

    let start=(firstDay.getDay()+6)%7;

    const daysInMonth=new Date(year,month+1,0).getDate();

    const prevMonthDays=new Date(year,month,0).getDate();

    // Días del mes anterior
    for(let i=start-1;i>=0;i--){

        createDay(prevMonthDays-i,true);

    }

    // Días del mes actual
    for(let day=1;day<=daysInMonth;day++){

        createDay(day,false);

    }

    // Completar última fila
    while(calendar.children.length%7!==0){

        createDay(calendar.children.length,false,true);

    }

}

function createDay(number,isOther=false,next=false){

    const div=document.createElement("div");

    div.className="day";

    if(isOther){

        div.classList.add("otherMonth");

    }

    if(next){

        div.classList.add("otherMonth");

        number=calendar.children.length%7+1;

    }

    div.textContent=number;

    if(!isOther && !next){

        div.onclick=()=>openDay(number);

    }

    calendar.appendChild(div);

}

document.getElementById("prevMonth").onclick=()=>{

    currentDate.setMonth(currentDate.getMonth()-1);

    renderCalendar();

}

document.getElementById("nextMonth").onclick=()=>{

    currentDate.setMonth(currentDate.getMonth()+1);

    renderCalendar();

}

renderCalendar();

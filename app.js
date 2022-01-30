function loadcard(){
    var business=document.querySelector(".sub-container");
    var children="";
    for(var i=0;i<3;i++){
        children+=`
        <div class="card">
                  <div id="free">Free</div>
                 <p id="para-2">Give DataCamp a try for free</p>
                 <div class="permonth">
                    <div class="rupee">
                     <p id="rupee">₹</p>
                     <p id="zero">0</p>
                    </div>
                   <p id="month">/month</p>
                 </div>
                 <button class="button">Start Now</button>
            </div>
        `
    }
    business.innerHTML=children;
    var container1=document.querySelector(".container-1");
    var card="";
    for(var i=0;i<4;i++){
        card+=`
        <div class="card-info">
        <p><span id="arrow">></span>First chapter of all</p>
        <p><span id="arrow">></span>Projects (7)</p>
        <p><span id="arrow">></span>Practice challenges</p>
        <p><span id="arrow">></span>Workspace (BETA)</p>
        <p><span id="arrow">></span>Skill assessments</p>
    </div>
        `
    }
    container1.innerHTML=card;
}
loadcard();
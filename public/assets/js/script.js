$(".image1").on("click", function() {
    console.log("hello world");
    var card = `
    <div class="card mb-3" style="max-width: 540px;">
     <div class="row no-gutters">
       <div class="col-md-4">
         <img src="assets/images/Project1.jpg" class="card-img" alt="grumble">
       </div>
       <div class="col-md-8">
         <div class="card-body">
           <h5 class="card-title">Project: Grumble</h5>
           <p class="card-text">
           Grumble is an app made to help users ease the process of finding something to eat!<br>
           <a href="https://eunsoojung.github.io/Grumble/" target="blank"><strong>Live Link</strong></a><br><a href="https://github.com/itsmedexter/Grumble" target="blank"><strong>GitHub Repository</strong></a></p>
         </div>
       </div>
     </div>
   </div>
    `
    $("#dump").append(card);
    $(this).off("click");
});   

$(".image2").on("click", function() {
    console.log("hello world");
    var card = `
    <div class="card mb-3" style="max-width: 540px;">
     <div class="row no-gutters">
       <div class="col-md-4">
         <img src="assets/images/password2.jpg" class="card-img" alt="grumble">
       </div>
       <div class="col-md-8">
         <div class="card-body">
           <h5 class="card-title">Password Generator</h5>
           <p class="card-text">
           An app that generates a password with random numbers, letters, special characters.<br>
           <a href="https://itsmedexter.github.io/unit03_homework/" target="blank"><strong>Live Link</strong></a><br><a href="https://github.com/itsmedexter/unit03_homework" target="blank"><strong>GitHub Repository</strong></a></p>
         </div>
       </div>
     </div>
   </div>
    `
    $("#dump").append(card);
    $(this).off("click");
});


$(".image3").on("click", function() {
    console.log("hello world");
    var card = `
    <div class="card mb-3" style="max-width: 540px;">
     <div class="row no-gutters">
       <div class="col-md-4">
         <img src="assets/images/schedule2.jpg" class="card-img" alt="grumble">
       </div>
       <div class="col-md-8">
         <div class="card-body">
           <h5 class="card-title">Work Day Schedule</h5>
           <p class="card-text">Is an app to create new items in a blank html field with editable text input.<br>
           <a href="https://itsmedexter.github.io/unit05_homework/" target="blank"><strong>Live Link</strong></a><br><a href="https://github.com/itsmedexter/unit05_homework" target="blank"><strong>GitHub Repository</strong></a></p>
         </div>
       </div>
     </div>
   </div>
    `
    $("#dump").append(card);
    $(this).off("click");   
});
    

let txtBtn = document.querySelector(".save-text");
let pdfBtn = document.querySelector(".save-pdf");
let title = document.querySelector(".file-name");
let content = document.querySelector(".text-editor");

txtBtn.addEventListener("click", () => {
   let a = document.createElement("a");
   let blob = new Blob([content.innerText]);
   let fileUrl = URL.createObjectURL(blob);
   a.href = fileUrl;
   a.dowmload = title.value + ".txt";
   a.click();
})

pdfBtn.addEventListener('click', () => {
    html2pdf().from(content).save(title.value);
});
 
 
 $(document).ready(function(){
    $(".style-icon").click(function(){
        $(this).toggleClass("selected");
    });

    $(".align-icon").click(function(){
        $(this).toggleClass("selected");
    });

    $(".icon-bold").click(function(){
        $(".text-editor").toggleClass("bold");
    });

    $(".icon-italic").click(function(){
        $(".text-editor").toggleClass("italic");
    });

    $(".icon-underline").click(function(){
        $(".text-editor").toggleClass("underline");
    });

    $(".icon-align-left").click(function(){
        $(".text-editor").toggleClass("left");
    });

    $(".icon-align-center").click(function(){
        $(".text-editor").toggleClass("center");
    });
    
    $(".icon-align-right").click(function(){
        $(".text-editor").toggleClass("right");
    });

    $(".color-fill-icon").click(function(){
        $(".background-color-picker").click();
    });
    
    $(".color-fill-text").click(function(){
        $(".text-color-picker").click();
    });
    
    $(".background-color-picker").change(function(){
        $(".text-editor").css("background-color", $(this).val());
    });
    
    $(".text-color-picker").change(function(){
        $(".text-editor").css("color", $(this).val());
    });

    $(".font-family-selector").change(function(){
        $(".text-editor").css("font-family", $(this).val());
        $(".font-family-selector").css("font-family", $(this).val());
    });
    
    $(".font-size-selector").change(function(){
        $(".text-editor").css("font-size", $(this).val());
    });
   
    $(".menu-file").click(function() {
        $("<a>").prop({
            target: "_blank",
            href: "index.html"
        })[0].click();
    });

    $(".docs-icon").click(function() {
        $("<a>").prop({
            target: "_blank",
            href: "index.html"
        })[0].click();
    });

    $(".icon-zoom-in").click(function(){
    $(".text-editor").width(
        $(".text-editor").width() * 1.2
    );

    $(".text-editor").height(
        $(".text-editor").height() * 1.2
    );
    
    });

    $(".icon-zoom-out").click(function(){
    $(".text-editor").width(
        $(".text-editor").width() * 0.5
    );

    $(".text-editor").height(
        $(".text-editor").height() * 0.5
    );
    });
});
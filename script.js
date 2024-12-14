document.addEventListener('DOMContentLoaded', () => {

    const tracker = document.querySelector(".tracker");
    
    document.body.addEventListener("mousemove", e => {
        tracker.style.left = `${e.pageX - 10}px`;
        tracker.style.top = `${e.pageY - 10}px`;
    });
    
    document.addEventListener("mouseleave", () => {
        tracker.style.display = "none";
    });
    document.addEventListener("mousemove", () => {
        tracker.style.display = "unset";    
    });
    
    document.addEventListener("dblclick", () => {
        tracker.style.transform = "scale(1000)";
        tracker.style.filter= "opacity(.4)"
        setTimeout(() =>{ tracker.style.transform = "scale(1)"
                          tracker.style.filter= "opacity(1) "}, 400);
    });
    
    // Add event listeners to all <p> tags to change tracker styles on hover
    const paragraphs = document.getElementsByTagName("p");
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].addEventListener('mouseover', function() {
            tracker.classList.add('hovered');
        });
    
        paragraphs[i].addEventListener('mouseout', function() {
            tracker.classList.remove('hovered');
        });
    }
    
var button2 = document.querySelector(".button-2");
var feedback = document.querySelector(".form");
var cancel = document.querySelector(".cancel");

const toggleFeedback = () => {
    if (download.style.display === 'block') {
        return; // Do nothing if download is visible
    }
    feedback.style.display = feedback.style.display === 'block' ? 'none' : 'block';
};

button2.addEventListener('click', toggleFeedback);
cancel.addEventListener('click', toggleFeedback);

var button1 = document.querySelector(".button-1");
var download = document.querySelector(".download");
var cancel2 = document.querySelector(".cancel2");
var ok =document.querySelector(".ok");

const toggledownload = () => {
    if (feedback.style.display === 'block' || download.style.display === 'block') {
        return; // Do nothing if feedback is visible
    }
    download.style.display = download.style.display === 'block' ? 'none' : 'block';
};

button1.addEventListener('click', toggledownload);
cancel2.addEventListener('click', () => { download.style.display = 'none'});
ok.addEventListener('click',()=>{
    const link = document.createElement('a'); 
    link.href = 'Mohamed_Gani_Resume.docx'; 
    link.download = 'Mohamed_Gani_Resume.docx'; 
    link.click();
});
    
    });
    
    

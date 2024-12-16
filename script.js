document.addEventListener('DOMContentLoaded', () => {
    const tracker = document.querySelector(".tracker");
    const button2 = document.querySelector(".button-2");
    const feedback = document.querySelector(".form");
    const cancel = document.querySelector(".cancel");
    const button1 = document.querySelector(".button-1");
    const download = document.querySelector(".download");
    const cancel2 = document.querySelector(".cancel2");
    const ok = document.querySelector(".ok");
    const container = document.querySelector(".container");

    // Update tracker position on mouse move
    document.body.addEventListener("mousemove", e => {
        tracker.style.left = `${e.pageX - 10}px`;
        tracker.style.top = `${e.pageY - 10}px`;
        tracker.style.display = "unset";    
    });

    // Hide tracker on mouse leave
    document.addEventListener("mouseleave", () => {
        tracker.style.display = "none";
    });

    // Scale tracker on double click
    document.addEventListener("dblclick", () => {
        tracker.style.transform = "scale(1000)";
        tracker.style.filter = "opacity(.4)";
        setTimeout(() => {
            tracker.style.transform = "scale(1)";
            tracker.style.filter = "opacity(1)";
        }, 400);
    });

    // Add event listeners to all <p> tags to change tracker styles on hover
    const paragraphs = document.getElementsByTagName("p");
    for (let paragraph of paragraphs) {
        paragraph.addEventListener('mouseover', () => {
            tracker.classList.add('hovered');
        });
        paragraph.addEventListener('mouseout', () => {
            tracker.classList.remove('hovered');
        });
    }

    // Toggle feedback form visibility
    const toggleFeedback = () => {
        if (feedback.style.display === 'block' || download.style.display === 'block') {
            return; // Do nothing if download is visible
        }
        feedback.style.display = feedback.style.display === 'block' ? 'none' : 'block';
        button2.style.color = "#ff7f11";
        container.style.overflow = "hidden";
    };

    button2.addEventListener('click', toggleFeedback);
    cancel.addEventListener('click', () => {
        feedback.style.display = 'none';
        button2.style.color = "black";
        container.style.overflow = "auto";
    });

    // Toggle download visibility
    const toggleDownload = () => {
        if (feedback.style.display === 'block' || download.style.display === 'block') {
            return; // Do nothing if feedback is visible
        }
        download.style.display = download.style.display === 'block' ? 'none' : 'block';
        button1.style.color = "#ff7f11";
        container.style.overflow = "hidden";
    };

    button1.addEventListener('click', toggleDownload);
    cancel2.addEventListener('click', () => { 
        download.style.display = 'none';
        button1.style.color = "black";
        container.style.overflow = "auto"; 
    });

    // Download resume on button click
    ok.addEventListener('click', () => {
        const link = document.createElement('a'); 
        link.href = 'Mohamed_Gani_Resume.docx'; 
        link.download = 'Mohamed_Gani_Resume.docx'; 
        link.click();
    });
});

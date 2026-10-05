// =======================================================================================
// ==================================== custom cursor ====================================
// =======================================================================================

const cursor = document.getElementById("cursor");
// حطينا المتغيرين الجايين دول عشان نحل مشكلة تنافر الكود في خاصية ال transform لما يحصل اي event
let scaleValue = 1;
let translateValue = "";

if (cursor) {
    window.addEventListener("mousemove", (e) => {
        translateValue = `translate(${e.clientX - 7}px, ${e.clientY - 10}px)`;
        cursor.style.transform = `${translateValue} scale(${scaleValue})`;
    });

    
    window.addEventListener("mousedown", () => {
        scaleValue = 0.7;
        cursor.style.transform = `${translateValue} scale(${scaleValue})`;
    });

    
    window.addEventListener("mouseup", () => {
        scaleValue = 1;
        cursor.style.transform = `${translateValue} scale(${scaleValue})`;
    });

    
    window.addEventListener("click", () => {
        cursor.style.animation = "none";
        setTimeout(() => {
            cursor.style.animation = "blink 0.4s ease-in-out";
        }, 10);
    });
}


// =======================================================================================
// ==================================== Whats Message ====================================
// =======================================================================================
let WhatsUrl = `https://wa.me/201029379363?text=`;
let nameInput = document.getElementById("name");
let messageInput = document.getElementById("message");
let contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    if(/^[A-Za-z\u0600-\u06FF\s]+$/.test(nameInput.value)){
        if(messageInput.value){
            let currentUrl = WhatsUrl + `أهلا انا ${nameInput.value} ، ${messageInput.value}`;
            window.open(currentUrl,"_blank")
        }else{
            Swal.fire({
                title: 'Error!',
                text: 'Write All Data',
                icon: 'error',
                background: "#dac5a7",
                color: "#0e0e0e",  
                confirmButtonColor: "#0e0e0e",
                confirmButtonText: `<p style="color: #dac5a7">change it</p>`
            })
        }
    }else{
        Swal.fire({
            title: 'Error!',
            text: 'the name format is wrong',
            icon: 'error',
            confirmButtonText: `<p style="color: #dac5a7">change it</p>`,
            background: "#dac5a7",
            color: "#0e0e0e",  
            confirmButtonColor: "#0e0e0e",
        })
    }
})

// =======================================================================================
// ==================================== scroll to top ====================================
// =======================================================================================

const scrollToTopBtn = document.getElementById("scrollToTop");
window.addEventListener("scroll",()=>{
    if(window.scrollY > 100){
        scrollToTopBtn.style.transform = "translateY(0px)"
        scrollToTopBtn.style.opacity = "1"
        scrollToTopBtn.style.visibility = "visible"
    }else{
            scrollToTopBtn.style.transform = "translateY(10px)"
            scrollToTopBtn.style.opacity = "0"
            scrollToTopBtn.style.visibility = "hidden"
    }
})

scrollToTopBtn.addEventListener("click",()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})
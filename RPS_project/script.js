const gameContainer = document.querySelector(".container"),
    userResult = document.querySelector(".user_result img"),
    cpuResult = document.querySelector(".cpu_result img"),
    result = document.querySelector(".result"),
    optionImages = document.querySelectorAll(".option_image");

optionImages.forEach((image, index) => {
    image.addEventListener("click", (e) =>{
        image.classList.add("active");

        userResult.src = cpuResult.src = "images/rock.png";
        result.textContent = "Wait...";

        optionImages.forEach((image2, index2) => {
            index !== index2 && image2.classList.remove("active");
        });

        gameContainer.classList.add("start");

        let time = setTimeout(() => {

            gameContainer.classList.remove("start");

            let imageSrc = e.target.querySelector("img").getAttribute("src");
            userResult.src = imageSrc;

            let randomnum = Math.floor(Math.random() * 3);
            let cpuImages = ["images/rock.png", "images/paper.png", "images/scissor.png"];
            cpuResult.src = cpuImages[randomnum];

            let cpuValue = ["R", "P", "S"][randomnum];
            let userValue = ["R", "P", "S"][index];

            let outcomes = {
                RR : "Draw",
                RP : "CPU",
                RS : "User",
                PR : "User",
                PP : "Draw",
                PS : "CPU",
                SR : "CPU",
                SP : "User",
                SS : "Draw",
            };

            let outcomeValue = outcomes[userValue + cpuValue ];

            result.textContent = userValue === cpuValue ? "Match Draw" : outcomeValue + " Won!!";

        }, 2500);
    }); 
});


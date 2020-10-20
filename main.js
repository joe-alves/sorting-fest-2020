const TRANSITION_DURATION = 1000;
const SORT_TO_VIDEO_ID = {
    "Quick Sort": "ywWBy6J5gz8",
    "Bubble Sort": "lyZQPjUT5B4",
    "Insert Sort": "ROalU379l3U",
    "Merge Sort": "XaqR3G_NVoo",
    "Select Sort": "Ns4TPTC8whw",
};
/*
<iframe 
    height="500" 
    width="720" 
    src="https://www.youtube.com/embed/XaqR3G_NVoo" 
    frameborder="0" 
    allowfullscreen>
</iframe>
*/
const createIFrameElementForYoutubeVideo = (youtubeId) => {
    const wrapper = document.createElement("div");
    wrapper.innerHTML = `
        <iframe 
            height="500" 
            width="720" 
            src="https://www.youtube.com/embed/${youtubeId}" 
            frameborder="0" 
            allowfullscreen>
        </iframe>
    `;
    const element = wrapper.querySelector("iframe");
    return element;
};

document.addEventListener("DOMContentLoaded", () => {

    const videoContainer = document.getElementById("video-container");
    const buttons = document.querySelectorAll("#buttons-container button");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            switchVideo(btn.innerText);
        });
    });

    const controlVideoContainerEffect = () => {
        return new Promise((resolve) => {
            if (videoContainer.clientHeight === 0) {
                videoContainer.style.height = "500px";
                resolve();
            } else {
                videoContainer.style.height = "0px";
                setTimeout(() => {
                    videoContainer.style.height = "500px";
                    resolve();
                }, TRANSITION_DURATION);
            }
        });
        
    };

    const switchVideo = (sortName) => {
        videoContainer.innerHTML = "";
        controlVideoContainerEffect()
            .then(() => {
                const iframe = createIFrameElementForYoutubeVideo(
                    SORT_TO_VIDEO_ID[sortName]
                );
                videoContainer.appendChild(iframe);
            });
    };

});
(() => {
    let t = document.currentScript,
        e = t.getAttribute("data-userid"),
        i = () => {
            const img = document.createElement("img");
                img.src = "http://stg-chat-widget.azle.io/chatbot/img/bot.svg";
                img.alt = "icon";
                img.style.width = "45px"
            let t = document.createElement("button"),
                e = t.style;
                e.alignItems = "center", e.justifyContent ="center", e.display = "flex", t.appendChild(img), e.position = "fixed", e.right = "40px", e.bottom = "20px", e.width = "60px", e.height = "60px", e.backgroundSize = "cover", e.border = "none", e.backgroundColor = "#00AB55", e.borderRadius = "50%", t.onclick = () => {
                let t = document.getElementById("iframe"),
                    e = t.getAttribute("show"),
                    i = t.style;
                e ? (t.setAttribute("show", ""), i.opacity = 0) : (t.setAttribute("show", "true"), i.opacity = 1)
            }, document.body.appendChild(t)
        },
        r = () => {
            let t = document.createElement("div");
            t.id = "iframe";
            let i = t.style;
            i.opacity = 0, i.transition = "all .5s", i.boxSizing = "border-box", i.width = "400px", i.height = "650px", i.borderRadius="15px" , i.overflow="hidden" ,i.position = "fixed", i.bottom = "100px", i.right = "40px";
            let r = document.createElement("iframe"),
                o = r.style;
            o.boxSizing = "borderBox", o.position = "absolute", o.right = 0, o.top = 0, o.width = "100%", o.height = "100%", o.border = 0, o.margin = 0, o.padding = 0, t.appendChild(r);
            let d = `http://stg-chat-widget.azle.io/app?userid=${e}`;
            r.src = d, document.body.appendChild(t)
        };
    "complete" === document.readyState ? (r(), i()) : document.addEventListener("readystatechange", () => {
        "complete" === document.readyState && (r(), i())
    })
})();
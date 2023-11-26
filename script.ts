// const msg: string = "Hello!";
// alert(msg);

function loadCssFile(filename: string): void {
    const headTag: HTMLHeadElement = document.getElementsByTagName("head")[0];
    
    const oldStyle: Element | null = document.querySelector("head link[href*='styles']");
    if (oldStyle != null) {
        headTag.removeChild(oldStyle);
    }

    const newCssStyle: HTMLLinkElement = document.createElement("link");
    newCssStyle.setAttribute("rel", "stylesheet");
    newCssStyle.setAttribute("type", "text/css");
    newCssStyle.setAttribute("href", filename);
    headTag.appendChild(newCssStyle);
}

const noStyle: string = "";
const firstStyle: string = "styles/style1.css";
const secondStyle: string = "styles/style2.css";
const styles: string[] = [noStyle, firstStyle, secondStyle];
function generateCssLinks(styles: string[]): void {
    const footerElement: HTMLElement | null = document.getElementById("style_change");
    for (let i = 0; i < 3; i++) {
        const button: HTMLButtonElement = document.createElement("button");
        if (i == 0) {
            button.textContent = "brak css";
        } else {
            button.textContent = "css#0" + i;
        }
        button.addEventListener("click", function() {
            loadCssFile(styles[i]);
        });
        footerElement?.appendChild(button);
    }
}

generateCssLinks(styles);
import githubIcon from '../img/github.png';

export function footerLoad (content) {
    const footer = document.createElement('footer');
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');
    const linkGitHub = document.createElement('a');
    const gitHubLogo = document.createElement('img');
    const gitHubName = document.createElement('p')

    const artLink = document.createElement('a');
    const artLink2 = document.createElement('a');
    const artLink3 = document.createElement('a');

    footer.className = "footer";
    footer.id = "footer";

    div1.className = "footer__page";
    div2.className = "footer__art";

    linkGitHub.href = "https://github.com/SaToGo1";
    linkGitHub.className = "footer_gitHubLink"
    gitHubLogo.src = githubIcon;
    gitHubName.innerText = "SaToGo1";

    artLink.href = "https://www.artstation.com/mb0sco"
    artLink.innerText = "art by mb0sco"

    artLink2.href = "https://www.arte-latte.com/que-es-un-latte/";
    artLink2.innerText = "art from arte-latte";

    artLink3.href = "https://materialdesignicons.com/";
    artLink3.innerText = "icons from material design icons";
    

    div2.appendChild(artLink);
    div2.appendChild(artLink2);

    div3.appendChild(artLink3);

    linkGitHub.appendChild(gitHubLogo);
    linkGitHub.appendChild(gitHubName);
    div1.appendChild(linkGitHub);

    footer.appendChild(div1);
    footer.appendChild(div2);
    footer.appendChild(div3);
    content.appendChild(footer);
}
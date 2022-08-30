import phoneIcon from '../img/phone.svg';
import mailIcon from '../img/at.svg';
import instaIcon from '../img/instagram.svg';
import twitterIcon from '../img/twitter.svg';

export function contactLoad(content){

    const main = document.createElement('main');
    const pageTitle = document.createElement('h1');
    const titleDiv = document.createElement('div')
    
    const div = document.createElement('div');

    const aboutUsDiv = document.createElement('div');
    const aboutUsTitle = document.createElement('h2');
    const pageDescription1 = document.createElement('p');
    
    const contactInformationDiv = document.createElement('div');
    
    const contactInformation = document.createElement('h2');
    const contactPhoneMailDiv = document.createElement('div');
    const phoneDiv = document.createElement('div')
    const phone = document.createElement('p');
    const phoneImg = document.createElement('img');
    const mailDiv = document.createElement('div')
    const mail = document.createElement('p');
    const mailImg = document.createElement('img');

    const contactSocialNetwork = document.createElement('h2');
    const contactSocialNetworkDiv = document.createElement('div');
    const twitterDiv = document.createElement('div')
    const twitter = document.createElement('p');
    const twitterImg = document.createElement('img');
    const instaDiv = document.createElement('div')
    const insta = document.createElement('p');
    const instaImg = document.createElement('img');

    

    titleDiv.className = 'titleDiv';
    pageTitle.innerText = "Contact";
    pageTitle.className = "title";


    aboutUsDiv.className = "card";
    aboutUsTitle.innerText = "About Us";
    pageDescription1.innerText = "This Shop is run by Coffee Lovers, we feel like we are flying through a new world when we smell a good coffee, and we want to make you feel the same.";


    contactInformation.innerText = "Contact Information";
    contactInformationDiv.className = "contact__Contact-Information";

    contactPhoneMailDiv.className = "contact__phone-mail";

    mailDiv.className = "contact__icon-text";
    mailImg.src = mailIcon
    mailImg.className = "contact__Icon"
    mail.innerText = "thisMailIsFake@gmail.com";

    phoneDiv.className = "contact__icon-text";
    phoneImg.src = phoneIcon;
    phoneImg.className = "contact__Icon"
    phone.innerText = "111 11 11 11";

    contactSocialNetwork.innerText = "Social Network"
    contactSocialNetwork.className = "contact__social-network"
    contactSocialNetworkDiv.className = "contact__social-network-div"

    twitterDiv.className = "contact__icon-text";
    twitterImg.src = twitterIcon;
    twitterImg.className = "contact__Icon"
    twitter.innerText = "@thisTwitterIsFake";

    instaDiv.className = "contact__icon-text";
    instaImg.src = instaIcon;
    instaImg.className = "contact__Icon"
    insta.innerText = "@thisInstagramIsFake";



    aboutUsDiv.appendChild(aboutUsTitle);
    aboutUsDiv.appendChild(pageDescription1);
    div.appendChild(aboutUsDiv);

    mailDiv.appendChild(mailImg);
    mailDiv.appendChild(mail);
    phoneDiv.appendChild(phoneImg);
    phoneDiv.appendChild(phone);
    contactPhoneMailDiv.appendChild(mailDiv);
    contactPhoneMailDiv.appendChild(phoneDiv);

    twitterDiv.appendChild(twitterImg);
    twitterDiv.appendChild(twitter);
    instaDiv.appendChild(instaImg);
    instaDiv.appendChild(insta);
    contactSocialNetworkDiv.appendChild(twitterDiv);
    contactSocialNetworkDiv.appendChild(instaDiv);

    contactInformationDiv.appendChild(contactSocialNetwork);
    contactInformationDiv.appendChild(contactSocialNetworkDiv);
    contactInformationDiv.appendChild(contactInformation);
    contactInformationDiv.appendChild(contactPhoneMailDiv);

    div.appendChild(contactInformationDiv);

    main.id = "main";
    
    titleDiv.appendChild(pageTitle)
    main.appendChild(titleDiv);
    main.appendChild(div);

    content.appendChild(main);
}
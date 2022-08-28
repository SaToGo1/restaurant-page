export function headerLoad (content) {
    const header = document.createElement('header');
    
    header.className = "header";
    
    content.appendChild(header);
}
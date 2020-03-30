
function createProjects(){
    let projects = {
        "unchained":unchained(),
        "nickynwsite":unchained()   
    }
    return projects
}

var titles = {
    "unchained":"React Native Mobile App - Unchained",
    "nickynwsite":"Personal Website"   
}

function getTitle(url){
    return titles[url]
}



function unchained(){
    var sections = [];
    sections.push({
        image:"unchainedoverview",
        title:"Overview"
    })
    sections.push({
        image:"unchainedstack",
        title:"Review"
    })
    return sections;

}



export {createProjects, getTitle}



function createProjects(){
    let projects = {
        "unchained":unchained()    
    }
    return projects
}

function unchained(){
    var sections = [];
    sections.push({
        image:"placeholder0",
        title:"Overview"
    })
    sections.push({
        image:"placeholder1",
        title:"Justification"
    })
    sections.push({
        image:"placeholder2",
        title:"Review"
    })
    return sections;

}


export {createProjects}
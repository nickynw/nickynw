import React from 'react';
import '../App.css';

const imageurl = (url) => ("/images/" + url + ".png")

class StackList extends React.Component {
    render() {
        var stack = []
        this.props.stack.forEach((item) => {
            stack.push(
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", padding:!item.image && 15}}>
                    {item.image && <img alt="" src={imageurl(item.image)} style={{ width: 60, height: 60, marginRight: 50, borderRadius:2}}></img>}
                    {item.description}
                </div>)
        })
        return (

 
                <div style={{marginLeft:"auto", marginRight:"auto"}}>
                    {stack}
                </div>
         
        )
    }
}

export { StackList }
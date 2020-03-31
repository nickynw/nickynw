import React from 'react';
import '../App.css';




class FadeTransition extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            trigger: false,
            opacity: 0
        };
    }
        //Initialises the grid and performs entrance transition
        componentDidMount() {
            setTimeout( () =>this.setState({opacity:1}),5);
        }
    
        componentDidUpdate(prevProps, prevState) {
            if (this.props.pushURL !== prevProps.pushURL && this.state.trigger==false) {
                this.setState({trigger:true})
                this.triggerTransition("out")
            }
         }

        triggerTransition(direction){
            this.setState({opacity:0})
            setTimeout(
                () =>
                    this.tick(direction)
                ,
                1000
            );
       
        }
    
        tick(direction) {
            if(this.props.pushURL!=undefined && direction=="out"){
                 this.props.history.push(this.props.pushURL)
             }
        }
    

    
  
    render() {

        return (
            <div style={{
                opacity:this.state.opacity,
                transition: "opacity 0.8s linear"
                }}>
                {this.props.content}
            </div>
             
        )
    }
}

export { FadeTransition }
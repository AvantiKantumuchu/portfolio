import React, {Component} from 'react';
import Projects from './Projects';
import Title from './Title';
import SocialProfiles from './SocialProfiles';
import profile from './assets/profile.jpeg';

class App extends Component{
    constructor(){
        super();
        this.state = { displayBio: false};
    }
    toggleDisplayBio = () => {
        this.setState({displayBio:!this.state.displayBio});
    }
    render() {
        return( <div>
        <img src = {profile} alt= 'profile' className ='profile'/>
        <div><h2>Avanti Kantumuchu</h2>{ this.state.displayBio ? <Title/>: null} </div>
        { this.state.displayBio ? ( <div><h6>Experienced Software Developer with a demonstrated history of working in the software and marketing industry. Skilled in emerging front-end Javascript frameworks like React, Vue and Angular, Databases, HTML, and Agile and Waterfall Methodologies. Strong engineering professional with a Master's degree focused in Computer Science from Bradley University. </h6><button onClick = {this.toggleDisplayBio}>Showless</button></div>) : (<div><button onClick = {this.toggleDisplayBio}>Readmore</button></div>) }
        <Projects/>
        <SocialProfiles/>
        </div> )
    }
}
export default App;

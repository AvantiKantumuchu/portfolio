import React, {Component} from 'react';

const TITLES = [
    ' a Software Engineer ',
    ' a Philanthropist ',
    ' an Artist '
];

class Title extends Component {
    state = { titleIndex: 0 };

    componentDidMount() {
        console.log('Title component has mounted');
        this.animateTitles();
    }
    componentWillUnmount() {
        console.log('Title component will be unmounted!');
        //this.animateTitles();
    }

    animateTitles = () => {
        setInterval(() => {
            const titleIndex = (this.state.titleIndex + 1) % TITLES.length;
            this.setState({titleIndex});
        },4000);
        }

    render() {
        const title = TITLES[this.state.titleIndex];
    return (
        <p>I am {title}</p>
    )
    }
}

export default Title;

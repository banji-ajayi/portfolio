import React, { Component } from 'react';
import { Tabs, Tab, Grid ,Cell, Card, CardTitle, CardText, CardActions, CardMenu, IconButton, Button} from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0};
    }

    toggleCategories = () => {
        if(this.state.activeTab === 0 ) {
        return (
            <div className="projects">
        
         <Card shadow={4} style={{minWidth :'400', margin : 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', 
            background: 'url(https://christianliebel.com/wp-content/uploads/2016/02/Angular2-825x510.png) center/cover'}}>
            <div className='projectNo'>Angular Projects #1 </div>
            </CardTitle>
            <CardText>Davids Radio Web Application - (Built with Angular and Firebase) </CardText>
            <CardActions border> 
            <Button href="https://github.com/banji-ajayi/Davids-Radio"  rel="noopener noreferrer" target="_blank"
            colored> GitHub</Button>
            <Button href="https://davidsradio.com"  rel="noopener noreferrer" target="_blank"
            colored> Live Demo</Button>
            </CardActions>

            <CardMenu style={{color: '#fff'}}> 
             <IconButton name="share"/>
            </CardMenu>
            </Card>

            <Card shadow={4} style={{minWidth :'300', margin : 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', 
            background: 'url(https://christianliebel.com/wp-content/uploads/2016/02/Angular2-825x510.png) center/cover'}}>
            <div className='projectNo'>Angular Projects #2 </div>
            </CardTitle>
            <CardText>Andrew's Clothing - (Ecommerce Frontend developed with Angular) </CardText>
            <CardActions border> 
            <Button href="https://github.com/banji-ajayi/Andrews-Clothing"  rel="noopener noreferrer" target="_blank"
            colored> GitHub</Button>
            <Button href="https://andrew-clothing.herokuapp.com/#/home"  rel="noopener noreferrer" target="_blank"
            colored> Live Demo</Button>
            </CardActions>

            <CardMenu style={{color: '#fff'}}> 
                <IconButton name="share"/>
            </CardMenu>
        </Card>
           
            </div>
        )
        } else if(this.state.activeTab === 1 ) {
            return (
                <div className="projects">
        <Card shadow={4} style={{minWidth :'300', margin : 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', 
            background: 'url(https://cdn-images-1.medium.com/max/1050/1*i3hzpSEiEEMTuWIYviYweQ.png) center/cover'}}>
            <div className='projectNo'>React Projects #1 </div>
            </CardTitle>
            <CardText>My Reads - ( Developed with React to show the current state of books read by a user ) </CardText>
            <CardActions border> 
            <Button href="https://github.com/banji-ajayi/Davids-Radio"  rel="noopener noreferrer" target="_blank"
            colored> GitHub</Button>
            {/* <Button colored> Live Demo</Button> */}
            </CardActions>

            <CardMenu style={{color: '#fff'}}> 
                <IconButton name="share"/>
            </CardMenu>
        </Card>

        <Card shadow={4} style={{minWidth :'300', margin : 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', 
            background: 'url(https://cdn-images-1.medium.com/max/1050/1*i3hzpSEiEEMTuWIYviYweQ.png) center/cover'}}>
            <div className='projectNo'>React Projects #2 </div>
            </CardTitle>
            <CardText>Mobile Flashcards - ( created with React Native to set Quizzes for Study Purposes  ) </CardText>
            <CardActions border> 
            <Button href=" https://github.com/banji-ajayi/flashcards"  rel="noopener noreferrer" target="_blank"
            colored> GitHub</Button>
            {/* <Button colored> Live Demo</Button> */}
            </CardActions>

            <CardMenu style={{color: '#fff'}}> 
                <IconButton name="share"/>
            </CardMenu>
        </Card>
        </div>
            )
        }
    }

    render() {
        return(
        <div className="category">
            <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple> 
            <Tab>Angular</Tab>
            <Tab>React</Tab>
            
            </Tabs>
           
            <Grid > 
            <Cell col={12}>
            <div className="projectContent"> {this.toggleCategories()} </div>
            </Cell>
            </Grid>
      
         </div>
        )
    }
}

export default Projects;
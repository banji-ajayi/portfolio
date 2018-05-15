import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';

class Home extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto' }}>
            <Grid className="home-grid"> 
            <Cell col={12}>
            <img  src="https://media.licdn.com/dms/image/C4E03AQHi4E4nP412kA/profile-displayphoto-shrink_200_200/0?e=1531958400&v=beta&t=CSzr2__uz-8aR2-Ph8idAtI4bR_xBBnRqPrHz29JHHA"
            alt="avatar"
            className="avatar-img"/>

            <div className="banner">
            <h1>Full Stack Developer</h1>
            <hr/>
           <p>NodeJs | Angular | React | React Native | Mongodb | MySQL |  Express | Rest APIs | Firebase </p>
           <div className= "social-links">
           {/* LinkedIn  */}
           <a href="https://www.linkedin.com/in/femi-banji-ajayi-0a68765a/"  rel="noopener noreferrer" target="_blank">
           <i className="fa fa-linkedin-square"  aria-hidden="true" />
            </a>
         
           <a href="https://github.com/banji-ajayi"  rel="noopener noreferrer" target="_blank">
           <i className="fa fa-github-square"  aria-hidden="true" />
           </a>
           </div>
           </div>
            </Cell>
            </Grid>
            </div>
        )
    }
}

export default Home;
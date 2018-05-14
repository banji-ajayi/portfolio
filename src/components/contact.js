import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return(
            <div className="cbody">
            <Grid className="cgrid">
            <Cell col={6}>
                <h2>Femi Banji-Ajayi</h2>
                <img  src="https://cdn.iconscout.com/public/images/icon/premium/png-512/developer-avatar-3bc44a0cf42e14e9-512x512.png"
                alt="avatar"
                style={{height: '250px'}}/>
                <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}> I am a Software Developer building
                 platform/services for the Fintech, Telecom and other sectors with an 
                 ability to grasp new cutting edge technologies and systems. 
                 I have experience in Project Management, Software development, Database Management , 
                 and also work with Node.js Teams to build awesome applications

                </p>

            </Cell>
            <Cell col={6}>
                <h2>Contact Me</h2>
                <hr/>
            <div className='cList'>
                <List>
                    <ListItem>
                        <ListItemContent 
                        style= {{fontSize: '25px', fontFamily: 'calibri, sans-serif'}}>
                        <i className="fa fa-phone-square" aria-hidden="true"/>
                         (+27) 78 682 5201
                         </ListItemContent>
                    </ListItem>
                    <ListItem>
                    <ListItemContent 
                        style= {{fontSize: '25px', fontFamily: 'calibri, san-serif'}}>
                        <i className="fa fa-envelope" aria-hidden="true"/>
                         femibanjiajai@gmail.com
                         </ListItemContent>
                    </ListItem>
                    <ListItem>
                    <ListItemContent 
                        style= {{fontSize: '25px', fontFamily: 'calibri, sans-serif'}}>
                        <i className="fa fa-skype" aria-hidden="true"/>
                        Olufemi Banji-Ajayi
                         </ListItemContent>
                    </ListItem>
                </List>
             </div>
                
            </Cell>
            </Grid>
            </div>
        )
    }
}

export default Contact;
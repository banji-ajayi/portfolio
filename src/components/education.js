import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component {
    render () {
        return (
            // <div><h1>{this.props.startYear}</h1></div>
            <Grid> 
                <Cell col={4}> 
                    <p> {this.props.grad} - {this.props.endYear}</p>
             
                </Cell>
                <Cell col={8}>
                <h4 style={{marginTop: '1px'}}>{this.props.schoolName}</h4>
                <p>{this.props.course}</p>
                </Cell>
            </Grid>
        )
    }
}

export default Education;


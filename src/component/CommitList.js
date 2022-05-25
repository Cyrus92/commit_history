import React from 'react';
import Button from 'react-bootstrap/Button';
import CommitRow from './CommitRow.js';

export default class CommitList extends React.Component {
    constructor(props) {
        super(props);
    }


  render() {
    return (
        <div>
            <br /><br />
            {/* ROWS */}            
            {
                (Array.isArray(this.props.commitsData) && this.props.commitsData.length)?
                this.props.commitsData.map( function(commitItem,i){
                    return <CommitRow key={i} githubCommitItem={commitItem} />             
                            
                })
                :"No available data"

            }
            <br />
            {/* LOAD MORE BUTTON */}
            {
                (Array.isArray(this.props.commitsData) && this.props.commitsData.length)?
                <Button id="loadMoreBtn" variant="primary" >More (...) </Button>
                :""
            }
            <br /><br />
            
            
        </div>
    ) 
  }
}
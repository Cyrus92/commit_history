import React from 'react';
import Button from 'react-bootstrap/Button';
import CommitRow from '../component/CommitRow';

export default class CommitList extends React.Component {
    constructor(props) {
        super(props);
        // Set initial states
        // this.state = {
        //     hideLoadMoreBtn:props.commitsData.length<=0
        // };   
    }


  render() {
    return (
        <div>
            <br /><br />
            {/* ROWS */}            
            {
                this.props.commitsData.length>0?
                this.props.commitsData.map( function(commitItem,i){
                    return <CommitRow key={i} githubCommitItem={commitItem} />             
                            
                })
                :""

            }
            <br />
            {/* LOAD MORE BUTTON */}
            {
                this.props.commitsData.length>0?
                <Button id="loadMoreBtn" variant="primary" >More (+{this.props.commitsData.length }) </Button>
                :""
            }
            <br /><br />
            
            
        </div>
    ) 
  }
}
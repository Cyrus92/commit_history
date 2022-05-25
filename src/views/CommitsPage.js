import React from 'react';
import ProjectSwitcher from '../component/ProjectSwitcher';

export default class CommitsPage extends React.Component {
  constructor(props) {
    super(props);
    // Set initial states
    this.state = {
      commitsData:""
    };    
    
    // bind  setCommitsData 
    this.setCommitsData = this.setCommitsData.bind(this);
    
}

// set CommitsData  state
setCommitsData(data) {
  this.setState({commitsData: data})
}

  render() {
    return (
      <div>
          {/* ProjectSwitcher component */}
          <ProjectSwitcher  setCommitsData={this.setCommitsData} />
          
          {/* CommitList component */}
          <div  />
      </div>
    )
  }
}
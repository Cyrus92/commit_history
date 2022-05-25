import React from 'react';
import ProjectSwitcher from '../component/ProjectSwitcher';
import CommitList from '../component/CommitList.js';

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

componentDidMount() {
  
  
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
          <CommitList commitsData={this.state.commitsData}    />
      </div>
    )
  }
}
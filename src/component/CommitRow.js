import React from 'react';

export default class CommitRow extends React.Component {
  constructor(props) {
    super(props);
    
}
  render() {
    // console.log( this.props.githubCommitItem)
    return (
      <div className='row'>
        <div className='col-md-12 commitItem'>
          <h6 className='commitItemLink text-left'><a target="_blank" href={this.props.githubCommitItem?this.props.githubCommitItem.html_url:"#"}>{this.props.githubCommitItem?this.props.githubCommitItem.commit.message:""}</a></h6>
          <div className=''>
              <img className='commitItemImage float-left' src={this.props.githubCommitItem?this.props.githubCommitItem.author.avatar_url:""} />
              <p className='commitItemAuthor text-left'>{this.props.githubCommitItem?this.props.githubCommitItem.commit.author.name:""} committed on&nbsp;
              {
                this.props.githubCommitItem?
                new Date(this.props.githubCommitItem.commit.author.date ).toLocaleDateString():""
              }
              </p>
          </div>
        </div>

      </div>

    )
  }
}
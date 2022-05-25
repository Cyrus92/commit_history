import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Octokit } from "@octokit/rest"

const apiContext = "https://api.github.com";

export default class ProjectSwitcher extends React.Component {
    constructor(props) {
        super(props);
        // Set initial states
        this.state = {
            owner:"vinitshahdeo",// "cyrus92",
            repo: "Library-Management-System", //commit_history",
            totalCommits: 0,
            commits: "",
            page: 1,
            isLoading: true,
            disableShowCommitsBtn: true
        };    
        // bind Change Owner event
        this.handleChangeOwner = this.handleChangeOwner.bind(this);
        // bind Change Repo event
        this.handleChangeRepo = this.handleChangeRepo.bind(this);
        // bind Change fetchCommits event
        this.fetchCommits = this.fetchCommits.bind(this);
        // bind  fetchCommitsProcessing 
        this.fetchCommitsProcessing = this.fetchCommitsProcessing.bind(this);
        
    }

    componentDidMount() {
        // fetch commits according to default states
        this.fetchCommits(this.state.owner, this.state.repo)
        
        
    }

    // Change Owner event
    handleChangeOwner(e) {
        // set Owner field value to owner state
        this.setState({owner: e.target.value})
        // send Fetch commits request
        this.fetchCommits(e.target.value, this.state.repo)
    }

    // Change Repo event
    handleChangeRepo(e) {
        // set Repo field value to repo state
        this.setState({repo: e.target.value})
        // send Fetch commits request
        this.fetchCommits(this.state.owner, e.target.value)
    }

    
    // Process Fetch commits data
    fetchCommitsProcessing(response) {
        
        if (response.status==200) {
            const data = response.data; 
            // set totalCommits 
            this.setState({totalCommits: data.length}) 
            // set commits 
            this.setState({commits: data})
            // set disableShowCommitsBtn 
            if (this.state.totalCommits > 0) {
                this.setState({disableShowCommitsBtn: false})
            }else{
                this.setState({disableShowCommitsBtn: true})
            }
          }else{
            // set totalCommits 
            this.setState({totalCommits: 0})  
            // set commits 
            this.setState({commits: ""})
            // set disableShowCommitsBtn 
            this.setState({disableShowCommitsBtn: true})
        }
    }

    // Fetch commits
    async fetchCommits(owner="", repo="") {
        
        const octokit = new Octokit({
            auth: process.env.REACT_APP_GITHUB_TOKEN
        })
        
          
        // Request to server ends  
        await octokit.request(
            'GET /repos/{owner}/{repo}/commits', {
                owner: owner,
                repo: repo
        })
        // processing
        .then(response => this.fetchCommitsProcessing(response) )
        .catch( err => 
            // reset states 
            this.setState(
                {
                    totalCommits: 0,
                    commits: "",
                    disableShowCommitsBtn: true
                }
            )  
        );
    } 
    

    // Render component
    render() {
        return (
            <div className="row" >
                {/* Input to change owner and fetch commits */}
                <div className="col-md-5" >
                    <label className="float-left" >Owner</label>
                    <input
                        id="owner"
                        type="text"
                        placeholder="Enter owner name"
                        className="form-control"
                        onChange={this.handleChangeOwner}
                        value={this.state.owner}
                        required
                    />
                </div>
                
                <div className="col-md-7" >
                    <div className="row" >
                        {/* Input to change repo and fetch commits */}
                        <div className="col-md-8" >
                            <label className="float-left" >Repo</label><br/>
                            <input
                                id="repo"
                                type="text"
                                placeholder="Enter repo name"
                                className="form-control"
                                onChange={this.handleChangeRepo}
                                value={this.state.repo}
                                required
                            />
                        </div>
                        {/* Button to start updating commitsList */}
                        <div className="col-md-4" >
                            <br/>
                            <Button disabled={this.state.disableShowCommitsBtn} id="showCommitsBtn" variant="primary" >Show {this.state.totalCommits>0?this.state.totalCommits:""} commits</Button>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}
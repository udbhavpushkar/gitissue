import logo from '../../logo.svg';
import './App.css';
import Header from "../Header";
import React, {useEffect, useState} from "react";
import Issue from "../Issue";

function App() {

    const [owner, setOwner] = useState("")
    const [error, setError] = useState(false)
    const [repo, setRepo] = useState("")
    const [issue, setIssue] = useState([])
    const fetchIssue = (e)=>{
        e.preventDefault()
        fetch(`https://api.github.com/repos/${owner}/${repo}/issues`)
            .then((res)=>{
                if (res.ok){
                    return res.json()
                }else{
                    return Promise.reject("404")
                }
            })
            .then((res)=>{
                // res.forEach(el=>{
                //     issue.push(el)
                // })
                setError(false)
                setIssue(res)
            }).catch(error=>{
            setError(true)
        })
    }

  return (
    <div>
      <Header
          owner={owner}
          setOwner={setOwner}
          repo={repo}
          setRepo={setRepo}
          clickHandle={fetchIssue}
      />
      <Issue error={error} data={issue}/>
    </div>
  );
}

export default App;

import { React, useState } from 'react'
import axios from 'axios'
import Githubusers from '../../components/githubusers/Githubusers'

export default function Github() {
    const [search, Setsearch] = useState('');
    const [data, setdata] = useState(null);

    const response = async () => {
        try {
            const res = await axios.get(`https://api.github.com/users/${search}`)
            console.log(res.data)
            setdata(res.data)
            Setsearch("")
        }
        catch (error) {
            console.log(error)
        }
    }

    const onCliclhandler = () => {
        if (search == "") {
            alert("Please enter a valid username")
        }
        else {
            response()
        }

    }

    return (
        <div>
            <h1 style={{ color: 'white' }}>Github User Data </h1>
            <input style={{ marginTop: '5px', padding: "20px", width: '100%', color: 'white', background: 'linear-gradient(to right, #8e44ad, #3498db)', border: 'none', borderRadius: '30px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', transition: 'background 0.3s ease' }}
                type="text" placeholder="Search Github User" onChange={(e) => Setsearch(e.target.value)} />

            <button style={{ marginTop: '20px', padding: "20px", background: 'linear-gradient(to right,rgb(183, 137, 203), #3498db)', border: 'none', borderRadius: '30px', color: 'white', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', transition: 'background 0.3s ease' }}
                onClick={onCliclhandler}>Search</button>


            <div className="displaydata">

                {data && (
                    <Githubusers
                        key={data.id}
                        name={data.name}
                        login={data.login}
                        avatar_url={data.avatar_url}
                        html_url={data.html_url}
                        location={data.location}
                        bio={data.bio}
                        blog={data.blog}
                        followers={data.followers}
                        following={data.following}
                        public_repos={data.public_repos}
                        created_at={data.created_at}
                        updated_at={data.updated_at}
                    />
                )}

            </div>
        </div>
    )
}

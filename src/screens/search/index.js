import React from 'react';

export default function Search() {
    // state management rxjs => reactive js =>
    const [query, setQuery] = React.useState(''); // use => hooks useEffect, useHistory
    const [searchData, setSearchData] = React.useState([]);

    async function queryFromApi() {
        const resp = await fetch(`http://localhost:3000/search?search=${query}`);
        const data = await resp.json();
        setSearchData(data);
    }

    return (
        <div name="mainDiv">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                name="mainDiv"
            />
            <button
                type="button"
                onClick={queryFromApi}
                name="mainDiv"
            >
                Search
            </button>

            <h1>
                Search for
                {' '}
                {query}
            </h1>

            <div>
                {
                    searchData.map((doc) => (
                        <div key={doc._id}>
                            { doc.name }
                            -
                            { doc.address }
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

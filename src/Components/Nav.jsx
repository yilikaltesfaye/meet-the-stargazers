/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/display-name */
/* eslint-disable react-refresh/only-export-components */
import "./nav.scss"
export default ({cast, onChoice}) => {
    return (
        <nav className="container">
            <ul>
                <li>
                    <details role="list">
                        <summary aria-haspopup="listbox" role="link">Cast</summary>
                        <ul role="listbox">
                            { cast.map(member => (
                                <li key={member.id}>
                                    <a onClick={() => {onChoice(member)}} 
                                    >{member.name}</a>
                                </li>
                            ))}
                        </ul>
                    </details>
                </li>
            </ul>
            <ul>
                <li><a href="#"><img style={{height: '50px'}} src="images/logo_bug_stargazers.svg" alt="Stargazers logo" /></a></li>
            </ul>
        </nav>
    )
}
/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
/* eslint-disable react-refresh/only-export-components */
export default ({member, handleClose, handleChange}) => {
    return(
        <dialog id="modal-member" open>
            <article>
                <a href="#close" aria-label="Close" className="close" data-target="modal-member" onClick={handleClose}></a>
                <hgroup>
                    <div style={{
                    display: "flex",
                    gap: "1rem"
                    }}>
                        <img style={{width: "200px"}} src={`images/${member.slug}.svg`} alt={member.name} />
                        <hgroup>
                            <h1>{member.name}</h1>
                            <p>{member.bio}</p>
                            <hgroup style={{gap:'1rem'}}>
                                <a href="#" className="outline" role="button"
                                    onClick={() => {handleChange(Number(member.id) - 1)}}
                                >Previous</a>
                                <a href="#" className="outline" role="button"
                                    onClick={() => {handleChange(Number(member.id) + 1)}}
                                >Next</a>
                            </hgroup>
                        </hgroup>
                    </div>
                </hgroup>
            </article>
        </dialog>
    )
}
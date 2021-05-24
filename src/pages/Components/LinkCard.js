import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';


const LinkCard = ({ link, refreshLinks }) => {

    const archiveLink = async () => {
        link.archived = true;
        try {
            await fetch("/api/updateLink",
                {
                    method: "PUT",
                    body: JSON.stringify(link)
                })
            refreshLinks();
        }
        catch (error) {
            console.error("Error>>>", error)
        }
    }

    const deleteLink = async () => {
        const id = link._id;
        console.log(id)
        try {
            await fetch("/api/deleteLink",
                {
                    method: "DELETE",
                    body: JSON.stringify({ id })
                })
            refreshLinks();
        }
        catch (error) {
            console.error("Error>>>", error)
        }

    }


    return (
        <div className="card">
            <div className="card-header">
                {link?.name}
            </div>
            <div className="card-body">
                <a href={link?.url}>{link?.url}</a>
                <p>
                    {link?.description}
                </p>
            </div>
            <div className="card-footer">
                <button className="btn btn-warning mr-2"
                    onClick={archiveLink}
                >
                    Archive
                </button>

                <button className="btn btn-danger ml-3"
                    onClick={deleteLink}
                >
                    Delete
                </button>
            </div>

        </div>
    )
}

export default LinkCard;


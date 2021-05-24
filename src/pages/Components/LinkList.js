import React from 'react'
import LinkCard from './LinkCard';

const LinkList = ({ links, refreshLinks }) => {
    console.log(links)
    return (
        <div>
            <h4 className="my-4">Links</h4>
            {
                links && links.filter(link => !link.archived).map(link =>
                    <LinkCard
                        key={link._id}
                        link={link}
                        refreshLinks={refreshLinks}
                    />)
            }
            <h4 className="my-4">Archived Links</h4>
            {
                links && links.filter(link => link.archived).map(link =>
                    <LinkCard
                        key={link._id}
                        link={link}
                        refreshLinks={refreshLinks}
                    />)
            }
        </div>
    )
}
export default LinkList;

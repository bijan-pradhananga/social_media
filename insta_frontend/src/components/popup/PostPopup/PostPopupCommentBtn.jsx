import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'
export default function PostPopupCommentBtn({user, post, postComment}) {
    const [content,setContent] = useState('');
    const handleCmntChange = (e) => {
        setContent(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        postComment(user.id,post.id,content);
        setContent('')
    }

    return (
        <>
            <form action="" method="post" onSubmit={handleSubmit}>
                <div className='popup-content-footer2'>
                    <input type="text" placeholder='Add a comment' value={content} onChange={handleCmntChange} required/>
                    <button style={{cursor:'pointer'}}>
                        <FontAwesomeIcon icon={faPaperPlane} size="lg" style={{ color: 'white' }} />
                    </button>
                </div>
            </form>
        </>
    )
}

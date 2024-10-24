import { useState } from "react";
import { FcLike } from "react-icons/fc";
import { CiHeart } from "react-icons/ci";

const Like = () => {
    const [isLiked, setIsLiked] = useState(false);

    const handleLike = () => {
        setIsLiked(prev => !prev)
    }
    return (
        <div onClick={handleLike} className='rounded-lg p-3 cursor-pointer text-2xl absolute right-4 top-4 bg-white'>
            {
                isLiked ? <FcLike /> : <CiHeart />
            }
        </div>
    )
}

export default Like

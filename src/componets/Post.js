import React, { useEffect } from "react";

function Post(props) {


    const [post, setPost] = React.useState({
        userId: undefined,
        id: undefined,
        title: "",
        body: "",
    });

    const download = async () => {
        console.log("통신 시작");
        let response = await fetch(
            "https://jsonplaceholder.typicode.com/posts/3",    
            {
                method: "GET"
            }
        );
        console.log("통신 끝");
        console.log("response:" + response);
        let responseBody = await response.json();
        console.log("responseBody :" , responseBody);
        setPost(responseBody);
    };

    // 한번만 실행하겠다. 그림그려질때!!
    useEffect(()=>{
        download();
        console.log("Download 실행");
    }, []);

    return <div>
        userId: {post.userId}, id: {post.id}, title: {post.title} <br/>
        body: {post.body}
    </div>;
}

export default Post;
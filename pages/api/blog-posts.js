import {
    getDocs,
    limit, 
    orderBy,
    query,
    collection,
} from "firebase/firestore"
import {firestore, postToJson} from "../../lib/firebase"

const LIMIT = 5

export default async (_, res) => {

    
        const postsQuery = query(
            collection(firestore, "blog-posts"),
        orderBy("createdAt", "desc"),
        limit(LIMIT) 
        );

    const posts = (await getDocs(postsQuery)).docs.map(postToJson);
    console.log(posts)

    res.status(200).json(posts);

};


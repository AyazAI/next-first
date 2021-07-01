import articleStyles from "../styles/Article.module.css";
import Link from "next/link";

const ArticleItem = ({article}) =>{

    return(
        <div className={articleStyles.grid}>
            <Link href="/article/[id]" as={`/article/${article.id}`}>
                <a className={articleStyles.card}>
                    <h3>{article.title}</h3>
                    <p>{article.body}</p>
                </a>
            </Link>
        </div>
    )
}

export default ArticleItem;
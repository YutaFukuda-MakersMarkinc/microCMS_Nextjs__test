//3.SSGの記載

import { client } from "../../libs/client";
import styles from "../../styles/Home.module.scss"

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const data = await client.get({ endpoint: "blog", contentId: id });
    //console.log(data)
    
    return {
      props: {
        blog: data,
      },
    }
  };

//4.getStaticpathsの設定
export const getStaticPaths = async() => {
    const data = await client.get({ endpoint: "blog" });
    const paths = data.contents.map((content) => `/blog/${content.id}`);
    return{
        paths,
        fallback: false,
    }
};

//5.SSGで取得した情報を出力
  export default function BlogId({ blog }){
    return(
        <main className={styles.main}>
            <h1 className={styles.title}>{blog.title}</h1>
            <p className={styles.publishedAt}>
                {blog.publishedAt}
            </p>
            <div className={styles.post} dangerouslySetInnerHTML={{ __html: `${blog.body}`}}>
            </div>
        </main>
    )

  }
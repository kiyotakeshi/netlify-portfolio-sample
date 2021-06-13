import * as styles from './App.module.css';
import { Helmet } from 'react-helmet'; // title,meta タグを変更するためのライブラリ
import Layout from './Layout';
import PostItem from './PostItem';
import WorkItem from './WorkItem';

// CSS Modules により hoge.module.css ファイルを JS から呼び出し、
// 各クラスごとに動的に生成されたクラス名を付与してくれる
// そのため、コンポーネント内で閉じたスタイルを実現できる
// クラス名を key, 実際に付与されるクラス名が value のオブジェクトになっている
// App.module.css と Hello.module.css で同じ title というクラスを作っっても CSS の競合を起こさない
// console.log(styles);
// {container: "App_container__1MQN3", message: "App_message__2vrzR"}

const App = (props) => {
    return (
        <>
            <Layout>
                <Helmet>
                    <title>Ponkan1219</title>
                    <meta name="description" content="My first react website" />
                </Helmet>
                <h2 className={styles.heading}>About</h2>
                <p className={styles.profile}>
                    Gatsby.js がどのようなものか学習し始めたところです。
                </p>
                <h2 className={styles.heading}>Posts</h2>
                {props.posts.map((post) => {
                    return <PostItem post={post} key={post.title} />;
                })}
                <h2 className={styles.heading}>Works</h2>
                <div className={styles.workItems}>
                    {props.works.map((work) => {
                        return <WorkItem work={work} key={work.name} />;
                    })}
                </div>
                <div className={styles.workItems}></div>
            </Layout>
        </>
    );
};

export default App;

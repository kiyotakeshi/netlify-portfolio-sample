import styles from './App.module.css';
import Hello from './Hello';
import Layout from './Layout';

// CSS Modules により hoge.module.css ファイルを JS から呼び出し、
// 各クラスごとに動的に生成されたクラス名を付与してくれる
// そのため、コンポーネント内で閉じたスタイルを実現できる
// クラス名を key, 実際に付与されるクラス名が value のオブジェクトになっている
// App.module.css と Hello.module.css で同じ title というクラスを作っっても CSS の競合を起こさない
// console.log(styles);
// {container: "App_container__1MQN3", message: "App_message__2vrzR"}

const App = () => {
    return (
        <>
            <Layout>
                <p>Hello React</p>
            </Layout>
        </>
    );
};

export default App;

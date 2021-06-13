import Header from './Header';
import * as styles from './Layout.module.css';

const Layout = (props) => {
    return (
        <div className={styles.container}>
            <Header />
            {/* props.children はコンポーネントを呼び出す際に囲った要素が入る */}
            {/* <Layout><p>Hello React</p></Layout>  だと <p>Hello React</p> */}
            <main>{props.children}</main>
            <footer className={styles.footer}>
                <p className={styles.copyright}>test company</p>
            </footer>
        </div>
    );
};

export default Layout;

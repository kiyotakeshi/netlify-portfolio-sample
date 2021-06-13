import Header from './Header';
import * as styles from './Layout.module.css';

const Layout = (props) => {
    return (
        <div className={styles.container}>
            <Header />
            <main>{props.children}</main>
            <footer className={styles.footer}>
                <p className={styles.copyright}>test company</p>
            </footer>
        </div>
    );
};

export default Layout;

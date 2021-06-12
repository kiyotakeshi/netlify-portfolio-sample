import styles from './App.module.css';

const App = () => {
    const message = 'hello React';
    const isHide = true;
    const people = ['Yamada', 'Tanaka', 'Sato'];
    return (
        <div className={styles.container}>
            <p className={styles.message}>
                {isHide ? (
                    <p>isHide is true. {message}</p>
                ) : (
                    <p>isHide is false.</p>
                )}

                {people.map((person) => {
                    return <p key={person}>{person}</p>;
                })}
            </p>
        </div>
    );
};

export default App;

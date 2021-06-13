import styles from './App.module.css';
import Hello from './Hello';

const App = () => {
    const message = 'hello React';
    const isHide = true;
    const people = ['Yamada', 'Tanaka', 'Sato'];
    return (
        <>
            <div className={styles.container}>
                <div className={styles.message}>
                    {isHide ? (
                        <p>isHide is true. {message}</p>
                    ) : (
                        <p>isHide is false.</p>
                    )}

                    {people.map((person) => {
                        return <p key={person}>{person}</p>;
                    })}

                    <Hello name="props" />
                </div>
            </div>
        </>
    );
};

export default App;

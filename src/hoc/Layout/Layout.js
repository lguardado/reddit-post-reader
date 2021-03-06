import React from 'react';
import styles from './Layout.module.css'

const layout = (props) => {

        return (
            <React.Fragment>
                <main className={styles.Content}>
                    {props.children}
                </main>
            </React.Fragment>
        )
}

export default layout;
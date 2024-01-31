import React from 'react'
import styles from './MessageEmpty.module.scss'

const MessageEmpty = ({ title }) => {
    return (
        <div className={styles.containerEmptyMessage}>
            <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                <ellipse cx="26.1509" cy="26.1509" rx="26.1509" ry="26.1509" fill="#FF8D23" fill-opacity="0.13" />
                <circle cx="26.4126" cy="25.8894" r="22.2283" fill="#FF8D23" fill-opacity="0.25" />
                <path d="M26.1509 32.2526V26.1507M26.1509 20.0488H26.1662M41.4056 26.1507C41.4056 34.5756 34.5759 41.4054 26.1509 41.4054C17.726 41.4054 10.8962 34.5756 10.8962 26.1507C10.8962 17.7258 17.726 10.896 26.1509 10.896C34.5759 10.896 41.4056 17.7258 41.4056 26.1507Z" stroke="#FF8D23" stroke-width="3.39962" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

            <div className={styles.textEmptyMessage}>
                {title}
            </div>
        </div>
    )
}

export default MessageEmpty

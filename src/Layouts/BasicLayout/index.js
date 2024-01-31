import Head from 'next/head'
import React from 'react'

const BasicLayout = ({ pageTitle = null, children, }) => {
  return (
    <div>
          <Head>
              <title>
                  AuditBrain | {pageTitle}
              </title>
              <link rel='icon' href='/favicon.ico' />
          </Head>

          <main>
              {children}
          </main>
    </div>
  )
}

export default BasicLayout

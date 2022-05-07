import React from 'react';

const Blog = () => {
    return (
        <div className='mt-5'>
            <div className='w-50 mx-auto mb-5'>
                <h4>Javascript vs nodeJS</h4>
                <p> Javascript: is a Scripting language. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance.</p>

                <p>
                    nodeJS: is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser.
                </p>
            </div>
            <div className='w-50 mx-auto mb-5'>
                <h4>Sql vs NoSql</h4>
                <p>Sql: is a database language used for updating databases, executing queries in a structured way. Designed for relational database management systems.
                </p>
                <p>
                    NoSql: is a database system that, it does not use Structured Query Language. By using NoSql database, we can store unstructured data.  A very popular NoSql system is MongoDB.
                </p>
            </div>
            <div className='w-50 mx-auto mb-5'>
                <h4>What is the purpose of jwt and how does it work</h4>
                <p>
                    JSON Web Token (JWT) is an open standard that defines self-contained way for securely transmitting information between parties as a JSON object.
                </p>
                <p>
                    JWT are used by identity providers that authenticate users and provide verified access
                    information can be verified and trusted because JWT is digitally signed.
                </p>
            </div>
        </div>
    );
};

export default Blog;
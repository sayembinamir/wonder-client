import { Accordion } from "flowbite-react";
import React from "react";
// import { FaDownload } from "react-icons/fa";
// import Pdf from "react-to-pdf";

const ref = React.createRef();

const Blog = () =>
{
  return (
    <div className="mt-6 my-container g-8">
      {/* <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => (
          <div className="mr-4 text-right">
            <button
              className="px-3 py-2 font-medium text-white bg-indigo-500 rounded-lg hover:bg-indigo-700"
              onClick={toPdf}
            >
              <div className="flex gap-3 my-auto">
              <FaDownload /> Generate Pdf
              </div>
            </button>
          </div>
        )}
      </Pdf> */}
      <div ref={ref}>
        <h2 className="mb-4 text-3xl font-bold text-center text-blue-600">
          Frequently Asked Questions
        </h2>
        {/* Flowbite Accordion Start*/}
        <div>
          <Accordion>
            {/* 1st Question */}
            <Accordion.Panel>
              <Accordion.Title className="text-warning">What is an access token and refresh token? How do they work and where should we store them on the client-side?</Accordion.Title>
              <Accordion.Content >
                <p className="mb-2 text-gray-700 dark:text-gray-400">
                  access token and refresh token:
                  <br />


                  <span className="font-medium">uncontrolled components:</span> An access token is a credential used to access protected resources, while a refresh token is a credential used to obtain a new access token after the current one expires.

                  When a user logs in or grants permission to a third-party application, an access token is generated by the authorization server, which can be used to authenticate requests to protected APIs. Access tokens typically have a limited lifetime and will expire after a certain period of time.

                  Once an access token has expired, it can no longer be used to access protected resources. This is where the refresh token comes in. When the access token expires, the client can use the refresh token to request a new access token from the authorization server, without requiring the user to reauthenticate.

                  For security reasons, both the access token and the refresh token should be stored securely on the client-side. Ideally, they should be stored in memory rather than in local storage or cookies, as these options are more vulnerable to attacks such as cross-site scripting (XSS) or cross-site request forgery (CSRF). However, some frameworks and libraries may provide their own solutions for storing tokens securely, so its important to follow best practices recommended by those tools.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            {/* 2nd Question */}
            <Accordion.Panel>
              <Accordion.Title className="text-warning" >
                Compare SQL and NoSQL databases?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-700 dark:text-gray-400">
                  <span className="font-medium">SQL (Structured Query Language) and NoSQL (Not Only SQL) are two types of database management systems that differ in their data models, query languages, scalability, and other features.

                    SQL databases are relational databases that store data in tables with defined columns and relationships between them. They use a structured query language for querying and managing the data. SQL databases are suitable for handling complex queries, transactions, and large volumes of data. They offer high consistency and reliability, support for ACID (Atomicity, Consistency, Isolation, Durability) properties, and well-established tools and frameworks for backup, replication, and scaling. Examples of SQL databases include MySQL, PostgreSQL, Oracle, and Microsoft SQL Server.

                    NoSQL databases, on the other hand, are non-relational databases that store data in flexible, semi-structured, or unstructured formats such as key-value, document, graph, or column-family stores. They use various query languages depending on the type of database. NoSQL databases are suitable for handling dynamic, rapidly changing, and unstructured data, and for achieving high performance, availability, and scalability. They often provide eventual consistency and support for BASE (Basically Available, Soft-state, Eventually consistent) properties rather than strict consistency and transactional guarantees. Examples of NoSQL databases include MongoDB, Cassandra, Redis, and Amazon DynamoDB.

                    In summary, SQL databases excel in handling structured and complex data, providing strict consistency and transactional guarantees, and integrating with a wide range of tools and frameworks. NoSQL databases excel in handling unstructured or semi-structured data, providing scalability and performance, and supporting flexible and agile development practices. The choice between SQL and NoSQL depends on the specific requirements of the application, the type and volume of data to be stored and processed, the desired level of consistency and availability, and the available resources and expertise of the development team.

                  </span>



                </p>
              </Accordion.Content>
            </Accordion.Panel >
            {/* 3rd Question */}
            <Accordion.Panel >
              <Accordion.Title className="text-warning">
                What is express js? What is Nest JS ?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Difference between express js and Nest js:
                </p>

                <p className="mt-2 font-medium">
                  Express.js is a minimalist web framework for Node.js that provides a simple, robust set of features for building web applications and APIs. It offers a thin layer of fundamental web application features, such as routing, middleware, and request/response handling, without imposing any particular architecture or design pattern on the developer. Express.js supports a wide range of plugins and extensions, allowing developers to customize its behavior and add functionality as needed. Express.js is widely used in the Node.js ecosystem and is known for its flexibility, performance, and ease of use.

                  NestJS is a progressive Node.js framework for building scalable and efficient server-side applications. NestJS combines elements of OOP (Object Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming) to create a highly modular and flexible architecture. It is built on top of popular libraries and frameworks such as Express.js, TypeScript, and RxJS, and provides additional features such as dependency injection, testing, and code generation. NestJS aims to simplify the development of complex server-side applications by providing a set of well-organized abstractions and conventions that promote code reuse, maintainability, and scalability. It also comes with a powerful CLI (Command Line Interface) tool that can generate boilerplate code and perform various tasks such as linting, testing, and deployment. NestJS is gaining popularity among Node.js developers who value productivity, maintainability, and performance.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            {/* 4th Question */}
            <Accordion.Panel className="text-warning">
              <Accordion.Title className="text-warning">
                What is MongoDB aggregate and how does it work ?
              </Accordion.Title >
              <Accordion.Content>
                <p className="mb-2 font-medium text-gray-500 dark:text-gray-400">
                  MongoDB's aggregation framework is a powerful tool for performing complex data processing tasks on collections of MongoDB documents. The aggregate method is used to perform aggregation operations, which allow you to group and transform data stored in one or more collections.

                  The aggregation pipeline is comprised of stages, each stage representing an operation that transforms data as it flows through the pipeline. Each stage performs some operation on the input data and passes the transformed data to the next stage in the pipeline.

                  Some common stages in the pipeline include:

                  1.match: filters the input data based on a query predicate
                  2.group: groups the input data based on one or more fields and performs some operation (such as summing) on each group
                  3.sort: sorts the input data based on one or more fields
                  4.project: transforms the input data by including, renaming, or excluding fields
                  You can chain together any number of stages in a pipeline to construct complex aggregation queries. Aggregation queries in MongoDB are very flexible and can be used to perform a wide range of data processing tasks.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
        {/* Flowbite End */}
      </div>
    </div>
  );
};

export default Blog;
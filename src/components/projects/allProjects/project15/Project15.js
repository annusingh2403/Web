import React, { useState } from "react";
import "./Project15.css";
import data from "./Project15data";
import { Link } from "react-router-dom";

export default function Project15() {
  const [linkIndex, setLinkIndex] = useState(1);
//   const [href, setHref] = useState('');

  return (
    <>
      <div>
        <p style={{ color: "steelblue" }}>Project Fifteen ➡️</p>
      </div>
      <div
        style={{
          textAlign: "center",
          color: "steelblue",
          fontWeight: 600,
          letterSpacing: "2px",
        }}
      >
        <p
          style={{
            boxShadow: "0px 3px 4px .5px gray",
            width: "20rem",
            margin: "0 auto",
          }}
        >
          <span style={{ color: "tomato" }}>T</span>echnical{" "}
          <span style={{ color: "tomato" }}>D</span>ocumentation
        </p>
      </div>
                                    {/* NAVBAR */}
      <div className="project15">
        <div className="navbar-p15">
          <header className="header-left">JS Documentation</header>
          {data.map((item) => {
              console.log(item.url);
            return (
              <ul key={item.id}>
                <li>
                  <a
                    className={linkIndex === item.id ? "active-tab-p15 tab-p15" : "tab-p15"} href={item.url}
                    onClick={() => {
                        // setHref(item.url)
                        setLinkIndex(item.id)
                    }}
                    >
                    {item.title}
                   
                  </a>
                </li>
              </ul>
            );
          })}
        </div>

                                        {/* MAIN */}

        <div className="main-p15">
          <div className="main-div-p15" id="Introduction">
            <header className="header-right">Introduction</header>
            <p>
              JavaScript is a cross-platform, object-oriented scripting
              language. It is a small and lightweight language. Inside a host
              environment JavaScript can be connected to the objects of its
              environment to provide programmatic control over them.
            </p>
            <p>
              JavaScript contains a standard library of objects, such as Array,
              Date, and Math, and a core set of language elements such as
              operators, control structures, and statements. Core JavaScript can
              be extended for a variety of purposes by supplementing it with
              additional objects; for example:
            </p>
            <ul>
              <li>
                Client-side JavaScript extends the core language by supplying
                objects to control a browser and its Document Object Model
                (DOM). For example, client-side extensions allow an application
                to place elements on an HTML form and respond to user events
                such as mouse clicks, form input, and page navigation.
              </li>
              <li>
                Server-side JavaScript extends the core language by supplying
                objects relevant to running JavaScript on a server. For example,
                server-side extensions allow an application to communicate with
                a database, provide continuity of information from one
                invocation to another of the application, or perform file
                manipulations on a server.
              </li>
            </ul>
          </div>
          <div className="main-div-p15" id="What_you_should_know">
            <header className="header-right">What you should know</header>
            <ul>
              <li>
                A general understanding of the Internet and the World Wide Web
                (WWW).
              </li>
              <li>
                Good working knowledge of HyperText Markup Language (HTML).
              </li>
              <li>
                Some programming experience. If you are new to programming, try
                one of the tutorials linked on the main page about JavaScript.
              </li>
              <li>
                Some programming experience. If you are new to programming, try
                one of the tutorials linked on the main page about JavaScript.
              </li>
            </ul>
          </div>

          <div className="main-div-p15" id="JavaScript_and_Java">
            <header className="header-right">JavaScript and Java</header>
            <p>
              JavaScript and Java are similar in some ways but fundamentally
              different in some others. The JavaScript language resembles Java
              but does not have Java's static typing and strong type checking.
              JavaScript follows most Java expression syntax, naming conventions
              and basic control-flow constructs which was the reason why it was
              renamed from LiveScript to JavaScript.
            </p>
            <p>
              In contrast to Java's compile-time system of classes built by
              declarations, JavaScript supports a runtime system based on a
              small number of data types representing numeric, Boolean, and
              string values. JavaScript has a prototype-based object model
              instead of the more common class-based object model. The
              prototype-based model provides dynamic inheritance; that is, what
              is inherited can vary for individual objects. JavaScript also
              supports functions without any special declarative requirements.
              Functions can be properties of objects, executing as loosely typed
              methods.
            </p>
            <p>
              JavaScript is a very free-form language compared to Java. You do
              not have to declare all variables, classes, and methods. You do
              not have to be concerned with whether methods are public, private,
              or protected, and you do not have to implement interfaces.
              Variables, parameters, and function return types are not
              explicitly typed.
            </p>
          </div>

          <div className="main-div-p15" id="Hello_world">
            <header className="header-right">Hello world</header>
            <p>
              To get started with writing JavaScript, open the Scratchpad and
              write your first "Hello world" JavaScript code:
            </p>
            {/* <code>function greetMe(yourName) { alert("Hello " + yourName); }
greetMe("World");</code> */}
            <p>
              Select the code in the pad and hit Ctrl+R to watch it unfold in
              your browser!
            </p>
          </div>

          <div className="main-div-p15" id="Variables">
            <header className="header-right">Variables</header>
            <p>
              You use variables as symbolic names for values in your
              application. The names of variables, called identifiers, conform
              to certain rules.
            </p>
            <p>
              A JavaScript identifier must start with a letter, underscore (_),
              or dollar sign ($); subsequent characters can also be digits
              (0-9). Because JavaScript is case sensitive, letters include the
              characters "A" through "Z" (uppercase) and the characters "a"
              through "z" (lowercase).
            </p>
            <p>
              You can use ISO 8859-1 or Unicode letters such as å and ü in
              identifiers. You can also use the Unicode escape sequences as
              characters in identifiers. Some examples of legal names are
              Number_hits, temp99, and _name.
            </p>
          </div>

          <div className="main-div-p15" id="Declaring_variables">
            <header className="header-right">Declaring variables</header>
            <p>You can declare a variable in three ways:</p>
            <p>With the keyword var. For example,</p>
            <code>var x = 42.</code>
            <p>
              This syntax can be used to declare both local and global
              variables.
            </p>
            <p>By simply assigning it a value. For example,</p>
            <code>x = 42.</code>
            <p>
              This always declares a global variable. It generates a strict
              JavaScript warning. You shouldn't use this variant.
            </p>
            <p>With the keyword let. For example,</p>
            <code>let y = 13.</code>
            <p>
              This syntax can be used to declare a block scope local variable.
              See Variable scope below.
            </p>
          </div>

          <div className="main-div-p15" id="Variable_scope">
            <header className="header-right">Variable scope</header>
            <p>
              When you declare a variable outside of any function, it is called
              a global variable, because it is available to any other code in
              the current document. When you declare a variable within a
              function, it is called a local variable, because it is available
              only within that function.
            </p>
            <p>
              JavaScript before ECMAScript 2015 does not have block statement
              scope; rather, a variable declared within a block is local to the
              function (or global scope) that the block resides within. For
              example the following code will log 5, because the scope of x is
              the function (or global context) within which x is declared, not
              the block, which in this case is an if statement.
            </p>
            {/* <code>if (true) { var x = 5; } console.log(x); // 5</code> */}
            <p>
              This behavior changes, when using the let declaration introduced
              in ECMAScript 2015.
            </p>
            <p>By simply assigning it a value. For example,</p>
            {/* <code>if (true) { let y = 5; } console.log(y); // ReferenceError: y is
not defined</code>  */}
          </div>

          <div className="main-div-p15" id="Data_types">
            <header className="header-right">Data types</header>
              <p>The latest ECMAScript standard defines seven data types:</p>
              <ul>
                <li>Boolean. true and false.</li>
                <li>
                  null. A special keyword denoting a null value. Because
                  JavaScript is case-sensitive, null is not the same as Null,
                  NULL, or any other variant.
                </li>
                <li>
                  undefined. A top-level property whose value is undefined.
                </li>
                <li>Number. 42 or 3.14159.</li>
                <li>String. "Howdy"</li>
              </ul>
          </div>
        </div>
      </div>
    </>
  );
}

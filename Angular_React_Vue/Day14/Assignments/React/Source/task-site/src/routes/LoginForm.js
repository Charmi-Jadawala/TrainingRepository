import React from "react";

export default function LoginForm() {
  return (
    <div class="content">
      <section id="LoginForm">
        <header>
          <h1>Practice Exercise 3</h1>
          <h2>LOGIN FORM</h2>
        </header>

        <form id="LoginForm">
          <fieldset>
            <legend>Basic Details:</legend>
            <br />
            <label for="UserName">User Name:</label>
            <input
              type="text"
              id="UserName"
              required
              placeholder="FirstName LastName"
              title="Enter your Full Name"
            />
            <br />
            <br />
            <label for="Password">Password:</label>
            <input
              type="password"
              id="Password"
              required
              placeholder="Enter Password"
              pattern="[A-Z]{6}[0-9]{2}"
            />
            <br />
            <br />
            <input type="reset" value="RESET" />
            <input type="submit" value="SUBMIT" />
            <br />
            <br />
          </fieldset>
        </form>
      </section>
    </div>
  );
}

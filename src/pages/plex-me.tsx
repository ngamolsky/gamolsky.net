import React from "react";
import { Formik, Form, Field } from "formik";
import SEO from "../components/SEO";
import Container from "../components/Container";

interface FormValues {
  title: string;
  why: string;
  who: string;
  password: string;
}

const initialValues: FormValues = {
  title: "",
  why: "",
  who: "",
  password: "",
};

const PlexMe: React.FC = () => {
  const [error, setError] = React.useState<string>("");

  return (
    <Container borderColor={"#b81f4e"}>
      <SEO
        title="Plex Me"
        description="Site for friends to submit plex requests!"
      />
      <div className="p-8 flex flex-col">
        <div className="text-5xl">Plex Me Please</div>
        <Formik
          initialValues={initialValues}
          validate={(values) => {
            const errors: Partial<FormValues> = {};

            if (!values.title) {
              errors.title = "Required";
            }

            if (!values.why) {
              errors.why = "Required";
            }

            if (!values.who) {
              errors.who = "Required";
            }

            if (!values.password) {
              errors.password = "Required";
            }

            return errors;
          }}
          onSubmit={async (values) => {
            const url = true
              ? "https://api.gamolsky.net/plex/new-request"
              : "http://localhost:8787/plex/new-request";

            const result = await fetch(url, {
              method: "POST",
              body: JSON.stringify(values),
            });

            if (!result.ok) {
              const error = await result.text();
              setError(error);
            } else {
              setError("");
            }
          }}
        >
          {({ errors }) => (
            <Form className="flex flex-col gap-4 mt-8">
              <div className="flex gap-4 w-full">
                <label htmlFor="title" className="my-auto w-60">
                  What should I add?
                  {errors.title && <span className="text-red-500"> *</span>}
                </label>
                <Field
                  id="title"
                  name="title"
                  placeholder="Enter title"
                  className="flex-grow p-2 dark:bg-slate-700"
                />
              </div>
              <div className="mt-4 flex gap-4 w-full">
                <label htmlFor="why" className="my-auto w-60">
                  Why should I add it?
                </label>
                <Field
                  id="why"
                  name="why"
                  placeholder="Enter why"
                  className="flex-grow p-2 dark:bg-slate-700"
                />
              </div>
              <div className="mt-4 flex gap-4 w-full">
                <label htmlFor="who" className="my-auto w-60">
                  Who are you?
                </label>
                <Field
                  id="who"
                  name="who"
                  placeholder="Enter who"
                  className="flex-grow p-2 dark:bg-slate-700"
                />
              </div>
              <div className="mt-4 flex gap-4 w-full">
                <label htmlFor="password" className="my-auto w-60">
                  Who is my least favorite Avatar the last airbender character?
                </label>
                <Field
                  id="password"
                  name="password"
                  placeholder="Enter answer"
                  className="flex-grow p-2 dark:bg-slate-700"
                />
              </div>
              <button
                type="submit"
                className="dark:bg-amber-500 w-fit mx-auto p-2 dark:hover:bg-amber-600"
              >
                Submit
              </button>
              {error && <div className="text-red-500">{error}</div>}
            </Form>
          )}
        </Formik>
      </div>
    </Container>
  );
};

export default PlexMe;

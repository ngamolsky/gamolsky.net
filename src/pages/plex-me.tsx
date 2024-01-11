import React from "react";
import { Formik, Form, Field } from "formik";
import Container from "../components/Container";
import { IS_PRODUCTION } from "../utils/settings";
import { SEO } from "../components/SEO";

interface FormValues {
  title: string;
  why: string;
  who: string;
  passphrase: string;
  emailNotify: string;
}

const initialValues: FormValues = {
  title: "",
  why: "",
  who: "",
  passphrase: "",
  emailNotify: "",
};

const PlexMe: React.FC = () => {
  const [error, setError] = React.useState<string>("");
  const [success, setSuccess] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);

  const requiredFields = ["title", "why", "who", "passphrase"];

  return (
    <Container borderColor={"#b81f4e"}>
      <div className="p-8 flex flex-col max-w-4xl mx-auto h-full">
        <div className="text-5xl">Plex Me Please</div>

        {loading ? (
          <div className="flex flex-col justify-center items-center h-full">
            <div className="text-2xl">Sending Nikita's Way...</div>
          </div>
        ) : success ? (
          <div className="flex flex-col justify-center items-center h-full">
            <div className="text-2xl">{success}</div>
            <button
              className="bg-pink w-full mx-auto p-2 dark:hover:bg-rose-800 mt-8"
              onClick={() => {
                setSuccess("");
                setError("");
              }}
            >
              Add Another
            </button>
          </div>
        ) : (
          <Formik
            validateOnChange={false}
            validateOnBlur={false}
            initialValues={initialValues}
            validate={(values) => {
              const errors: Partial<FormValues> = {};

              const missingRequired = requiredFields.filter(
                (field) => !values[field as keyof FormValues]
              );

              if (!values.title) {
                errors.title = "Required";
              }

              if (!values.why) {
                errors.why = "Required";
              }

              if (!values.who) {
                errors.who = "Required";
              }

              if (!values.passphrase) {
                errors.passphrase = "Required";
              }

              if (values.emailNotify) {
                // validate email
                const emailRegex = /\S+@\S+\.\S+/;
                if (!emailRegex.test(values.emailNotify)) {
                  errors.emailNotify = "Invalid email address";
                  setError("Invalid email address");
                }
              }

              if (missingRequired.length > 0) {
                setError("Missing required fields");
              }

              return errors;
            }}
            onSubmit={async (values) => {
              setLoading(true);
              const url = IS_PRODUCTION
                ? "https://api.gamolsky.net/plex/new-request"
                : "http://localhost:8787/plex/new-request";

              try {
                const result = await fetch(url, {
                  method: "POST",
                  body: JSON.stringify(values),
                });

                if (!result.ok) {
                  const error = await result.text();

                  setError(error);
                  setLoading(false);
                } else {
                  setError("");
                  setSuccess("Request submitted!");
                  setLoading(false);
                }
              } catch (e) {
                setError("Something went wrong, please try again later.");
                setLoading(false);
              }
            }}
          >
            {() => (
              <Form className="flex flex-col gap-4 mt-8">
                {error && <div className="text-pink mb-8">{error}</div>}
                <div className="flex flex-col md:flex-row gap-4 w-full">
                  <label htmlFor="title" className="my-auto w-60">
                    What should I add?{" "}
                    <span className="text-red-500 text-xl">*</span>
                  </label>
                  <Field
                    id="title"
                    name="title"
                    placeholder="Enter title"
                    className="flex-grow p-2 dark:bg-slate-700 outline-pink"
                  />
                </div>
                <div className="flex flex-col md:flex-row gap-4 w-full">
                  <label htmlFor="why" className="my-auto w-60">
                    Why should I add it?
                    <span className="text-red-500 text-xl">*</span>
                  </label>
                  <Field
                    id="why"
                    name="why"
                    placeholder="Enter why"
                    className="flex-grow p-2 dark:bg-slate-700 outline-pink"
                  />
                </div>
                <div className="flex flex-col md:flex-row gap-4 w-full">
                  <label htmlFor="who" className="my-auto w-60">
                    Who is this? <span className="text-red-500 text-xl">*</span>
                  </label>
                  <Field
                    id="who"
                    name="who"
                    placeholder="Enter who"
                    className="flex-grow p-2 dark:bg-slate-700 outline-pink"
                  />
                </div>
                <div className="flex flex-col md:flex-row gap-4 w-full">
                  <label htmlFor="passphrase" className="my-auto w-60">
                    What do I and Megan Fox have in common?{" "}
                    <span className="text-red-500 text-xl">*</span>
                  </label>
                  <Field
                    id="passphrase"
                    name="passphrase"
                    placeholder="Enter answer"
                    className="flex-grow p-2 dark:bg-slate-700 outline-pink h-fit my-auto"
                  />
                </div>
                <div className="flex flex-col md:flex-row gap-4 w-full">
                  <label htmlFor="emailNotify" className="my-auto w-60">
                    Enter your email address if you want to be notified when I
                    add it!
                  </label>
                  <Field
                    id="emailNotify"
                    name="emailNotify"
                    placeholder="Enter email"
                    className="flex-grow p-2 dark:bg-slate-700 outline-pink h-fit my-auto"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-pink w-full mx-auto p-2 dark:hover:bg-rose-800 my-4 md:mt-8"
                >
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        )}
      </div>
    </Container>
  );
};

export default PlexMe;

export const Head = () => (
  <SEO
    title="Nikita Gamolsky | Plex Me"
    description="Site for friends to submit plex requests!"
    path="plex-me"
    image="plexMe.webp"
  />
);

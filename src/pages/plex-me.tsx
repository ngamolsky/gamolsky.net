import React, { Fragment } from "react";
import { Formik, Form, Field } from "formik";
import Container from "../components/Container";
import { IS_PRODUCTION } from "../utils/settings";
import { SEO } from "../components/SEO";
import { Dialog, Transition } from "@headlessui/react";

interface FormValues {
  title: string;
  why: string;
  who: string;
  passphrase: string;
  emailNotify: string;
  fastSubmit: boolean;
}

const initialValues: FormValues = {
  title: "",
  why: "",
  who: "",
  passphrase: "",
  emailNotify: "",
  fastSubmit: false,
};

const PlexMe: React.FC = () => {
  const [error, setError] = React.useState<string>("");
  const [success, setSuccess] = React.useState<string>("");
  const [loading, setLoading] = React.useState<boolean>(false);

  const requiredFields = ["title", "why", "who", "passphrase"];

  return (
    <Container borderColor={"#b81f4e"}>
      <div className="p-8 flex flex-col max-w-4xl mx-auto h-full">
        <div className="text-4xl">Plex Me Please</div>

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
              if (values.fastSubmit) {
                window.open(
                  "https://www.paypal.com/donate/?hosted_button_id=JRDEC53W2SXA8",
                  "_blank"
                );
              }

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
            {({ setFieldValue }) => (
              <Form className="flex flex-col gap-4 mt-8">
                {error && (
                  <ErrorDialog
                    isOpen={!!error}
                    close={() => {
                      setError("");
                    }}
                    error={error}
                  />
                )}
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
                <div>
                  <button
                    type="submit"
                    name="fastSubmit"
                    value="false"
                    className="bg-pink w-full mx-auto p-2 dark:hover:bg-rose-800 mt-4 md:mt-8"
                    onClick={() => {
                      setFieldValue("fastSubmit", false);
                    }}
                  >
                    Submit
                  </button>
                  <button
                    type="submit"
                    name="fastSubmit"
                    value="true"
                    className="bg-pink w-full mx-auto p-2 dark:hover:bg-rose-800 my-4 "
                    onClick={() => {
                      setFieldValue("fastSubmit", true);
                    }}
                  >
                    Submit Faster
                  </button>
                </div>
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
    title="Plex Me | Nikita Gamolsky"
    description="Site for friends to submit plex requests!"
    path="plex-me"
    image="plexMe.webp"
  >
    <meta name="robots" content="noindex, nofollow" />
  </SEO>
);

const ErrorDialog = ({
  isOpen,
  close,
  error,
}: {
  isOpen: boolean;
  close: () => void;
  error: string;
}) => (
  <Transition appear show={isOpen} as={Fragment}>
    <Dialog as="div" className="relative z-10" onClose={close}>
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-black/25" />
      </Transition.Child>

      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
              <Dialog.Title
                as="h3"
                className="text-lg font-medium leading-6 text-gray-900"
              >
                Error
              </Dialog.Title>
              <div className="mt-2">
                <p className="text-sm text-gray-500">{error}</p>
              </div>

              <div className="mt-4">
                <button
                  type="button"
                  className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  onClick={close}
                >
                  Close
                </button>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </div>
    </Dialog>
  </Transition>
);

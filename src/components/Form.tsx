import { Dispatch, SetStateAction, FormEvent } from 'react';

// small Component
import Star from './Star';

// svg
import starPicture from '../assets/images/star.svg';
import radioIcon from '../assets/images/icon-radio-selected.svg';
import checkBoxIcon from '../assets/images/icon-checkbox-check.svg';

// type
type FormProps = {
  firstName: string;
  setFirstName: Dispatch<SetStateAction<string>>;
  lastName: string;
  setLastName: Dispatch<SetStateAction<string>>;
  emailAddress: string;
  setEmailAddress: Dispatch<SetStateAction<string>>;
  queryType: string;
  setQueryType: React.Dispatch<
    SetStateAction<'' | 'general-enquiry' | 'support-request'>
  >;
  message: string;
  setMessage: Dispatch<SetStateAction<string>>;
  term: boolean;
  setTerm: Dispatch<SetStateAction<boolean>>;
  submitted: boolean;
  setSubmitted: Dispatch<SetStateAction<boolean>>;
  errors: {
    firstName: string;
    lastName: string;
    emailAddress: string;
    queryType: string;
    message: string;
    term: string;
  };
  // setErrors: Dispatch<
  //   SetStateAction<{
  //     firstName: string;
  //     lastName: string;
  //     emailAddress: string;
  //     queryType: string;
  //     message: string;
  //     term: string;
  //   }>
  // >;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

const Form = ({
  firstName,
  lastName,
  emailAddress,
  queryType,
  message,
  term,
  setFirstName,
  setLastName,
  setEmailAddress,
  setQueryType,
  setMessage,
  setTerm,
  submitted,
  errors,
  // setErrors,
  handleSubmit,
}: FormProps) => {
  return (
    <form
      className="flex flex-col gap-5"
      onKeyDown={(e) => {
        if (
          e.key === 'Enter' &&
          (e.target as HTMLElement).tagName !== 'TEXTAREA'
        ) {
          handleSubmit(e);
        }
      }}
      onSubmit={handleSubmit}
    >
      <div className="xl:flex xl:flex-row xl:gap-5">
        {/* First Name */}
        <div className="inline-flex flex-col gap-2 w-full xl:w-1/2 ">
          <label
            className="flex flex-row items-start gap-2 text-(--color-Grey900)"
            htmlFor="first-name"
          >
            First Name
            <Star />
          </label>
          <input
            type="text"
            className="border border-(--color-Grey500) rounded-md 
                         w-full hover:border-(--color-Green600) focus:outline-1
                       focus:outline-(--color-Green600) pt-3 pb-1 px-2 xl:pt-4"
            id="first-name"
            tabIndex={1}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            aria-describedby="first-name-error"
            aria-required="true"
          />
          {submitted && errors.firstName && (
            <p className="text-(--color-Red)" id="first-name-error">
              {errors.firstName}
            </p>
          )}
        </div>

        {/* Last Name */}
        <div className="inline-flex flex-col gap-2 w-full xl:w-1/2 ">
          <label
            className="flex flex-row items-start gap-2 text-(--color-Grey900)"
            htmlFor="last-name"
          >
            Last Name
            <Star />
          </label>
          <input
            type="text"
            className="border border-(--color-Grey500) rounded-md
                     hover:border-(--color-Green600) focus:outline-1
                     focus:outline-(--color-Green600) w-full pt-3 pb-1 px-2 xl:pt-4"
            id="last-name"
            tabIndex={1}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            aria-describedby="last-name-error"
            aria-required="true"
          />
          {submitted && errors.lastName && (
            <p className="text-(--color-Red)" id="last-name-error">
              {errors.lastName}
            </p>
          )}
        </div>
      </div>

      {/* Email Address */}
      <div className="flex flex-col gap-2">
        <label
          className="flex flex-row items-start gap-2 text-(--color-Grey900)"
          htmlFor="email-address"
        >
          Email Address
          <Star />
        </label>
        <input
          type="text"
          className="border border-(--color-Grey500) rounded-md 
                   hover:border-(--color-Green600) focus:outline-1
                   focus:outline-(--color-Green600) w-full pt-3 pb-1 px-2 xl:pt-4"
          id="email-address"
          tabIndex={1}
          value={emailAddress}
          onChange={(e) => setEmailAddress(e.target.value)}
          aria-describedby="email-error"
          aria-required="true"
        />
      </div>
      {submitted && errors.emailAddress && (
        <p className="text-(--color-Red)" id="email-error">
          {errors.emailAddress}
        </p>
      )}

      {/* Query Type */}
      <div
        className="flex flex-col gap-4"
        role="radiogroup"
        aria-label="Query Type"
      >
        <label className="flex flex-row items-start gap-1 text-(--color-Grey900) xl:w-full">
          Query Type
          <Star />
        </label>

        <div className="flex flex-col gap-5 xl:flex-row ">
          <div
            className="border border-(--color-Grey500) rounded-md 
                     has-[input:checked]:bg-[var(--color-Green200)]
                       xl:w-full hover:border-(--color-Green600)
                       "
          >
            <input
              type="radio"
              id="general-enquiry"
              name="query-type"
              value="general-enquiry"
              className="hidden"
              aria-label="General Enquiry"
              checked={queryType === 'general-enquiry'}
              onChange={(e) =>
                setQueryType(
                  e.target.value as '' | 'general-enquiry' | 'support-request',
                )
              }
              aria-describedby="query-type-error"
            />
            <label
              htmlFor="general-enquiry"
              data-value="general-enquiry"
              tabIndex={1}
              role="radio"
              aria-checked={queryType === 'general-enquiry'}
              aria-label="General Enquiry"
              className="flex items-center gap-3 hover:cursor-pointer text-[var(--color-Grey900)] px-5 py-3 focus:outline-[var(--color-Green600)]"
              onKeyDown={(e) => {
                if (e.key === ' ') {
                  e.preventDefault();
                  setQueryType('general-enquiry');
                }
              }}
            >
              <div className="img-wrapper border-1 border-[var(--color-Grey500)] rounded-full inline-block w-[18px] h-[18px] duration-300 ease-in-out hover:cursor-pointer">
                <img
                  src={radioIcon}
                  alt=""
                  className={`w-full h-full object-cover brightness-0 invert-100 transition-opacity duration-300`}
                />
              </div>
              General Enquiry
            </label>
          </div>

          <div
            className="border border-(--color-Grey500) rounded-md 
                     has-[input:checked]:bg-[var(--color-Green200)]
                       xl:w-full hover:border-(--color-Green600)
                       "
          >
            <input
              type="radio"
              id="support-request"
              name="query-type"
              value="support-request"
              className="hidden"
              aria-hidden="true"
              aria-label="Support Request"
              checked={queryType === 'support-request'}
              onChange={(e) =>
                setQueryType(
                  e.target.value as '' | 'general-enquiry' | 'support-request',
                )
              }
              aria-describedby="query-type-error"
            />
            <label
              htmlFor="support-request"
              className="flex items-center gap-3 hover:cursor-pointer text-(--color-Grey900) 
                         px-5 py-3 focus:outline-(--color-Green600)"
              tabIndex={1}
              role="radio"
              aria-checked={queryType === 'support-request'}
              aria-label="Support Request"
              onKeyDown={(e) => {
                if (e.key === ' ') {
                  e.preventDefault();
                  setQueryType('support-request');
                }
              }}
            >
              <div
                className="img-wrapper border-1 border-(--color-Grey500) rounded-full 
                           inline-block w-[18px] h-[18px] duration-300 ease-in-out 
                           hover:cursor-pointer"
              >
                <img
                  src={radioIcon}
                  alt=""
                  className="w-full h-full object-cover brightness-0 invert-100"
                />
              </div>
              Support Request
            </label>
          </div>
        </div>
      </div>
      {submitted && errors.queryType && (
        <p className="text-(--color-Red)" id="query-type-error">
          {errors.queryType}
        </p>
      )}

      {/* Message */}
      <div className="flex flex-col gap-2">
        <label
          className="flex flex-row items-start gap-2 text-(--color-Grey900)"
          htmlFor="message"
        >
          Message
          <Star />
        </label>
        <textarea
          id="message"
          className="w-full min-h-44 border border-(--color-Grey500) 
                     rounded-md xl:min-h-30 hover:border-(--color-Green600) 
                     focus:outline-1 focus:outline-(--color-Green600) p-2
                     "
          tabIndex={1}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          aria-describedby="message-error"
          aria-required="true"
        ></textarea>
      </div>
      {submitted && errors.message && (
        <p className="text-(--color-Red)" id="message-error">
          {errors.message}
        </p>
      )}

      {/* Term */}
      <div
        className="flex flex-row items-center gap-5
                   relative text-(--color-Grey900) sm:justify-start xl:my-4"
      >
        <input
          type="checkbox"
          id="term"
          className="hidden"
          aria-hidden="true"
          checked={term}
          onChange={(e) => setTerm(e.target.checked)}
          aria-describedby="term-error"
          aria-required="true"
        />

        <label
          htmlFor="term"
          className="custom-checkbox inline-flex hover:cursor-pointer items-center gap-3 "
        >
          <span
            className="box w-[18px] h-[18px] border border-(-color-Green200) 
                       inline-block relative shadow-[inset_0_0_1px_0_var(-color-Green200)]
                       focus:outline-(--color-Green600)"
            tabIndex={1}
            onKeyDown={(e) => {
              if (e.key === ' ') {
                e.preventDefault();
                setTerm(!term);
              }
            }}
            role="checkbox"
            aria-checked={term}
            aria-labelledby="term-label"
          >
            <img
              src={checkBoxIcon}
              alt=""
              className="absolute w-full h-full object-cover opacity-0"
            />
          </span>

          <span>
            I consent to being contacted by the{' '}
            <span className="relative">
              team
              <img
                src={starPicture}
                alt=""
                className="w-1 absolute -right-3 top-1"
                style={{
                  filter: `brightness(0) saturate(100%) invert(37%) sepia(15%) saturate(2886%) 
                     hue-rotate(124deg) brightness(95%) contrast(91%)`,
                }}
              />
            </span>
          </span>
        </label>
      </div>
      {submitted && errors.term && (
        <p className="text-(--color-Red)" id="term-error">
          {errors.term}
        </p>
      )}

      <button
        type="submit"
        className="bg-(--color-Green600) p-4 w-full text-(--color-White) 
                     hover:bg-[#064035] hover:cursor-pointer rounded-md focus:outline-(--color-Green600)"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;

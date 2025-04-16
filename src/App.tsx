import { useState, useEffect, FormEvent } from 'react';

import Header from './components/Header';
import Form from './components/Form';
import SuccessModal from './components/SuccessModal';

function App() {
  // useState
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [emailAddress, setEmailAddress] = useState<string>('');
  const [queryType, setQueryType] = useState<
    '' | 'general-enquiry' | 'support-request'
  >('');
  const [message, setMessage] = useState<string>('');
  const [term, setTerm] = useState<boolean>(false);

  // submit useState
  const [submitted, setSubmitted] = useState<boolean>(false);

  //error useState
  type Errors = {
    firstName: string;
    lastName: string;
    emailAddress: string;
    queryType: string;
    message: string;
    term: string;
  };

  const [errors, setErrors] = useState<Errors>({
    firstName: '',
    lastName: '',
    emailAddress: '',
    queryType: '',
    message: '',
    term: '',
  });

  const emailError: string = !emailAddress
    ? 'Email is required'
    : !emailAddress.includes('@')
    ? "Email must contain '@'"
    : !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailAddress)
    ? 'Please enter a valid email address'
    : '';

  // SuccessModal usestate
  const [showModal, setShowModal] = useState<boolean>(false);
  const [renderModal, setRenderModal] = useState<boolean>(false);

  // function
  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setSubmitted(true);
    const newErrors: Errors = {
      firstName: firstName.trim() ? '' : 'This field is required',
      lastName: lastName.trim() ? '' : 'This field is required',
      emailAddress: emailError,
      queryType: queryType ? '' : 'Please select a query type',
      message: message.trim() ? '' : 'This field is required',
      term: term
        ? ''
        : 'to submit this form, please consent to being contacted',
    };
    setErrors(newErrors);
  };

  const resetForm = (): void => {
    setFirstName('');
    setLastName('');
    setEmailAddress('');
    setQueryType('');
    setMessage('');
    setTerm(false);
    setSubmitted(false);
  };

  const isSuccess =
    submitted && Object.values(errors).every((err) => err === '');

  useEffect(() => {
    if (isSuccess) {
      setRenderModal(true);
      setTimeout(() => setShowModal(true), 10);
      const timer = setTimeout(() => {
        setShowModal(false);
        setTimeout(() => {
          setRenderModal(false);
          resetForm();
        }, 300);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isSuccess]);

  return (
    <>
      <div className="bg-(--color-Green200) min-h-svh p-5 flex flex-col relative">
        <div
          className="bg-(--color-White) p-5 rounded-xl flex flex-col gap-7 m-auto 
                     sm:w-[590px] md:w-[700px] lg:w-[950px] xl:w-[800px] 2xl:w-[1490px]
                     xl:p-8 "
        >
          <Header />
          <Form
            firstName={firstName}
            setFirstName={setFirstName}
            lastName={lastName}
            setLastName={setLastName}
            emailAddress={emailAddress}
            setEmailAddress={setEmailAddress}
            queryType={queryType}
            setQueryType={setQueryType}
            message={message}
            setMessage={setMessage}
            term={term}
            setTerm={setTerm}
            submitted={submitted}
            setSubmitted={setSubmitted}
            errors={errors}
            // setErrors={setErrors}
            handleSubmit={handleSubmit}
          />

          {renderModal && <SuccessModal isVisible={showModal} />}
        </div>
      </div>
    </>
  );
}

export default App;

import iconSuccessCheck from '../assets/images/icon-checkbox-check.svg';

type SuccessModalProps = {
  isVisible: boolean;
};

const SuccessModal: React.FC<SuccessModalProps> = ({ isVisible }) => {
  return (
    <div
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      className={`absolute top-5 right-[50%] translate-x-[50%] z-50 transition-all duration-300 ease-out
          ${
            isVisible
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 -translate-y-10 pointer-events-none'
          }
          bg-[var(--color-Grey900)] rounded-xl
        `}
    >
      <div className="flex flex-col gap-3 text-[var(--color-White)] p-6">
        <div className="flex items-center">
          <img src={iconSuccessCheck} alt="checkIcon" className="w-5 mr-4" />
          <h3 className="text-xl font-normal">Message Sent!</h3>
        </div>
        <p className="font-extralight">
          Thanks for completing the form. We'll be in touch soon!
        </p>
      </div>
    </div>
  );
};

export default SuccessModal;

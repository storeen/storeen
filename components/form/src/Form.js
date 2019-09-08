const Form = ({ children }) => (
  <>
    <div>{children}</div>

    <style jsx>
      {`
        div :global(.input-normal):not(:last-child) {
          margin-bottom: 20px;
        }

        div :global(.input-check):not(:last-child) {
          margin-bottom: 10px;
        }

        div :global(.with-description):not(:last-child) {
          margin-bottom: 15px;
        }

        div :global(button):not(:last-child) {
          margin-bottom: 20px;
        }
      `}
    </style>
  </>
);

export default Form;

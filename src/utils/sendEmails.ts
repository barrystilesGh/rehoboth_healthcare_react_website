import emailjs, { type EmailJSResponseStatus } from "emailjs-com";

const SERVICE_ID: string = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID: string = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY: string = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

interface FormValues {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}
export const sendEmail = async (form: FormValues): Promise<void> => {
  try {
    const response: EmailJSResponseStatus = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        from_name: form.name,
        reply_to: form.email,
        phone: form.phone,
        subject: form.subject,
        message: form.message,
      },
      PUBLIC_KEY
    );
    const data: EmailJSResponseStatus = await response;
    console.log(data.status);
    console.log(data.text);
  } catch (error) {
    console.error("Email failed:", error);
  }
};

export default sendEmail;

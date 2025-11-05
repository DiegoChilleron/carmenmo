import { useActionState } from "react";
import { useTranslation } from 'react-i18next';

type FormResult = {
    type: string;
    message: string;
} | null;

export const ContactForm = () => {

    const { t } = useTranslation();

    const [result, submitAction, isPending] = useActionState<FormResult, FormData>(
        async (_previousState, formData) => {
            const email = formData.get("email");
            const name = formData.get("name");
            const message = formData.get("message");

            if (!name || !email || !message) {
                return {
                    type: "error",
                    message: t('contact.error.missingFields'),
                };
            }

            try {
                const response = await fetch("https://formspree.io/f/xjkpnypq", {
                    method: "POST",
                    body: formData,
                    headers: {
                        "Accept": "application/json"
                    }
                });
                
                if (response.ok) {
                    return {
                        type: "success",
                        message: t('contact.success', { name }),
                    };
                } else {
                    return {
                        type: "error",
                        message: t('contact.error.submitFailed'),
                    };
                }
            } catch {
                return {
                    type: "error",
                    message: t('contact.error.submitFailed'),
                };
            }
        },
        null
    );

    return (
        <section className="container-modern">
                <h3 className="text-center mb-8 text-white">{t('socialnetworks.title')}</h3>
                {result && <p className={`message ${result.type}`}>{result.message}</p>}
                {isPending && <p className="message loading">{t('contact.loading')}</p>}
                <form action={submitAction} className="contact-form">
                <div className="form-field">
                    <label className="form-label" htmlFor="name">{t('contact.name')}</label>
                    <input className="form-input" type="text" id="name" name="name" />
                </div>
                <div className="form-field">
                    <label className="form-label" htmlFor="email">{t('contact.email')} *</label>
                    <input className="form-input" type="email" id="email" name="email" required />
                </div>
                <div className="form-field">
                    <label className="form-label" htmlFor="message">{t('contact.message')} *</label>
                    <textarea className="form-textarea" id="message" name="message" required />
                </div>
                <div className="pt-2">
                    <button className="btn-submit" type="submit" disabled={isPending}>
                        {isPending ? t('contact.sending') : t('contact.send')}
                    </button>
                </div>
            </form>
           
        </section>
    );
};

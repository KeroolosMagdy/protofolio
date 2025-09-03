
const contactFormEl = document.getElementById('contact-form') as HTMLFormElement;
const modal = document.getElementById('contact-modal');


function handleSendMessage(event: SubmitEvent) {
    event.preventDefault();

    const formData = new FormData(contactFormEl);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    if (!name || !email || !message) {
        // Rely on 'required' attribute for now.
        return;
    }

    const recipientEmail = 'kerolosmagdy551@gmail.com';
    const subject = `Message from ${name.trim()} via Portfolio`;
    const body = `You have a new message from your portfolio contact form:\n
Name: ${name.trim()}\n
Email: ${email.trim()}\n
Message:\n${message.trim()}`;

    const mailtoUrl = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open the user's default email client
    window.location.href = mailtoUrl;

    // Clear the form and close the modal
    contactFormEl.reset();
    if(modal) {
        modal.classList.remove('open');
    }
}

if (contactFormEl) {
    contactFormEl.addEventListener('submit', handleSendMessage);
}

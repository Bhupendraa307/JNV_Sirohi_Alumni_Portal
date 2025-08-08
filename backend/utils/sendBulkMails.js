// const sendMail = require('./sendEmail'); // Your existing utility
// const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// /**
//  * Send emails to a list of users (with fullName and email) with a delay to avoid spamming.
//  * 
//  * @param {Array} users - Array of Mongoose User documents or plain objects with fullName and email
//  * @param {Object} options - { subject, message } — message can include {{name}} placeholder
//  * @param {Number} delayMs - Delay between emails in milliseconds (default 1500ms)
//  */
// async function sendBulkEmails(users, options, delayMs = 1500) {
//     if (!Array.isArray(users)) throw new Error('Users must be an array');

//     for (let i = 0; i < users.length; i++) {
//         const user = users[i];

//         // Skip if no email or full name
//         if (!user.email || !user.fullName) {
//             console.warn(`⚠️ Skipping user with missing email or name:`, user);
//             continue;
//         }

//         try {
//             await sendMail({
//                 email: user.email,
//                 subject: options.subject,
//                 message: options.message.replace('{{name}}', user.fullName),
//             });

//             console.log(`✅ Email sent to ${user.fullName} <${user.email}>`);
//         } catch (err) {
//             console.error(`❌ Failed to send email to ${user.email}:`, err.message);
//         }

//         if (i !== users.length - 1) await sleep(delayMs); // delay before next email
//     }
// }

// module.exports = sendBulkEmails;














const sendMail = require('./sendEmail'); // Your existing utility
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Send emails to a list of users with a delay to avoid spamming.
 * 
 * @param {Array} users - Array of user objects with at least { fullName, email }
 * @param {Object} options - { subject, message }, where message can use {{name}} and {{email}} placeholders
 * @param {Number} delayMs - Delay between emails in milliseconds (default: 1500ms)
 */
async function sendBulkEmails(users, options, delayMs = 1500) {
    if (!Array.isArray(users)) throw new Error('Users must be an array');

    for (let i = 0; i < users.length; i++) {
        const user = users[i];

        // Ensure required fields
        const email = user.email?.trim();
        const name = user.fullName?.trim();

        if (!email || !name) {
            console.warn(`⚠️ Skipping user at index ${i} due to missing email or name:`, user);
            continue;
        }

        const personalizedMessage = options.message
            .replace(/{{name}}/g, name)
            .replace(/{{email}}/g, email);

        try {
            await sendMail({
                email,
                subject: options.subject,
                message: personalizedMessage,
            });

            console.log(`✅ [${i + 1}/${users.length}] Email sent to ${name} <${email}>`);
        } catch (err) {
            console.error(`❌ [${i + 1}/${users.length}] Failed to send email to ${email}:`, err.message);
        }

        if (i !== users.length - 1) {
            await sleep(delayMs); // Delay before next
        }
    }

    console.log(`📬 All emails processed.`);
}

module.exports = sendBulkEmails;

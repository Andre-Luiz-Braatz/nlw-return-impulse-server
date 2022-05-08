import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";
const transport = nodemailer.createTransport({
	host: "smtp.mailtrap.io",
	port: 2525,
	auth: {
		user: "2783d010bd61a4",
		pass: "db76345c8dd525",
	},
});

export class NodemailerMailAdapter implements MailAdapter {
	async sendMail({ subject, body }: SendMailData) {
		await transport.sendMail({
			from: "Equipe André Luiz Braatz <andreluiz.braatz@gmail.com>",
			to: "Nadiele Braatz <nadiele.braatz@gmail.com>",
			subject,
			html: body,
		});
	}
}

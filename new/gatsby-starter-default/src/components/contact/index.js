import React from "react"

import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa"

import "./styles.css"

export default function Contact() {
	return (
		<div className="container contact">
			<h3>Vamos construir algo incrível juntos?</h3>
			<div className="contact-section">
				<div className="social-icons">
					<FaGithub /> <FaInstagram /> <FaLinkedinIn />
				</div>
				<div className="contact-form">
					<form method="post" action="#">
						<div className="first-row">
							<label>
								<p>Nome</p>
								<div className="input">
									<input type="text" name="name" id="name" />
								</div>
							</label>

							<label>
								<p>Telefone</p>
								<div className="input">
									<input type="text" name="phone" id="phone" />
								</div>
							</label>
						</div>

						<label>
							<p>Email</p>
							<div className="input">
								<input type="email" name="email" id="email" />
							</div>
						</label>

						<label>
							<p>Mensagem</p>
							<div className="input">
								<textarea name="message" id="message" rows="5" />
							</div>
						</label>

						<button type="submit">Enviar</button>
					</form>
				</div>
			</div>
		</div>
	)
}

import React from "react"
import "./styles.css"
import { useDencrypt } from "use-dencrypt-effect"

const values = ["sistemas-web", "sites"]

export default function Intro({}) {
	const Example = () => {
		const { result, dencrypt } = useDencrypt()

		React.useEffect(() => {
			let i = 0

			const action = setInterval(() => {
				dencrypt(values[i])

				i = i === values.length - 1 ? 0 : i + 1
			}, 2250)

			return () => clearInterval(action)
		}, [])

		return <>{result}</>
	}

	return (
		<>
			<div className="container intro">
				<h3>
					Olá, eu me chamo <span>Vinicius Dias.</span>
				</h3>
				<h1>
					<span>Eu projeto e desenvolvo </span>
					<Example />
				</h1>
			</div>
		</>
	)
}

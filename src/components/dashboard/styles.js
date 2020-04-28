import styled, { css } from "styled-components"
import { shade } from "polished"

export const Title = styled.h2`
	margin: 8vh 0 2vh !important;
`
export const Repositories = styled.div`
	width: 100%;

	a {
		background: #fff;
		border-radius: 5px;
		width: 100%;
		padding: 1.2rem 0;
		display: flex;
		flex-wrap: wrap;
		text-decoration: none;
		justify-content: center;
		align-items: center;
		transition: transform 0.2s;

		&:hover {
			transform: translateX(10px);
		}

		& + a {
			margin-bottom: 8vh;
		}

		img {
			margin: 0;
			width: 4rem;
			height: 4rem;
			border-radius: 50%;
		}
		p {
			font-size: 0.8rem;
			color: #999;
			margin-top: 4px;
		}
		section {
			display: flex;
			flex-direction: column;
			min-width: 250px;
			margin: 0 1rem;
			flex: 1;
			justify-content: center;
			align-items: flex-start;

			strong {
				font-size: 1rem;
				color: var(--near-black);
			}
		}

		div {
			display: flex;
			flex-direction: column;
			margin: 0 1rem;
			align-items: center;

			span {
				font-size: 0.6rem;
				color: #a8a8b3;
				margin-top: 4px;
			}
		}
		svg {
			margin-left: auto;
			color: #cbcbd6;
		}
	}
`
export const Form = styled.form`
	max-width: 700px;
	display: flex;
	margin-bottom: 10vh;

	input {
		flex: 1;
		height: 4rem;
		padding: 0 1rem;
		font-size: 0.8rem;
		border: 0;
		border-radius: 5px 0 0 5px;
		background: #00000008;
		color: #3a3a3a;
		border: 2px solid #fff;

		${props =>
			props.hasError &&
			css`
				border-color: #c53030;
			`}

		&::placeholder {
			color: #a8a8b3;
		}
	}

	button {
		max-width: 210px;
		width: 28vw;
		height: 4rem;
		background: var(--orange-light);
		border-radius: 0px 5px 5px 0;
		border: 0;
		color: var(--dark-gray);
		font-weight: bold;
		transition: background-color 0.2s;
		cursor: pointer;
		font-size: 0.8rem;
		border: 2px solid #fff;

		&:hover {
			background: ${shade(0.1, "#ffc799")};
		}
	}
`

export const Error = styled.span`
	display: block;
	color: #c53030;
	margin-top: 8px;
`

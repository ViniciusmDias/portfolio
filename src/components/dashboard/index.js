import React, { useState, useEffect } from "react"
import { FiChevronRight } from "react-icons/fi"
import { api } from "../../services/api"

import { Title, Repositories } from "./styles"

const Dashboard = () => {
	const [repositories, setRepositories] = useState([])

	useEffect(() => {
		api.get(`/repos`).then(response => {
			const repo = response.data

			repo.sort(function compare(a, b) {
				let dateA = new Date(a.updated_at)
				let dateB = new Date(b.updated_at)
				return dateA - dateB
			})

			setRepositories(repo.slice(-2))
		})
	}, [])

	return (
		<>
			<Title>Latest repositories!</Title>

			<Repositories>
				{repositories.map(repository => (
					<a key={repository.full_name} href={`${repository.html_url}`}>
						<img
							src={repository.owner.avatar_url}
							alt={repository.owner.login}
						/>
						<section>
							<strong>{repository.full_name}</strong>
							<p>{repository.description}</p>
						</section>
						<div>
							<strong>{repository.stargazers_count}</strong>
							<span>Starts</span>
						</div>
						<div>
							<strong>{repository.open_issues_count}</strong>
							<span>Issues abertas</span>
						</div>
						<FiChevronRight size={20} />
					</a>
				))}
			</Repositories>
		</>
	)
}
export default Dashboard

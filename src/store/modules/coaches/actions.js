export default {
	async registerCoach({commit, rootGetters}, data) {
		const userId = rootGetters.userId
		const coachData = {
			firstName: data.first,
			lastName: data.last,
			description: data.desc,
			hourlyRate: data.rate,
			areas: data.areas
		}
		const link =
			`https://find-coach-vue-71e07.firebaseio.com/coaches/${userId}.json`
		await fetch(link, {method: 'PUT', body: JSON.stringify(coachData)})
		commit('registerCoach', {
			...coachData,
			id: userId
		})
	},
	async loadCoaches({commit, getters}, payload) {
		if (!payload.forceRefresh && !getters.shouldUpdate) {
			return
		}
		const link =
			`https://find-coach-vue-71e07.firebaseio.com/coaches.json`
		const response = await fetch(link)
		const responseData = await response.json()
		if (!response.ok) {
			throw new Error(responseData.message || 'Failed to fetch!')
		}
		const coaches = []
		Object
			.keys(responseData)
			.forEach(key => {
				const coach = {
					id: key,
					firstName: responseData[key].firstName,
					lastName: responseData[key].lastName,
					description: responseData[key].description,
					hourlyRate: responseData[key].hourlyRate,
					areas: responseData[key].areas
				}
				coaches.push(coach)
			})
		commit('setCoaches', coaches)
		commit('setFetchTimestamp')
	}
}

export default {
	async contactCoach({commit}, payload) {
		const newRequest = {
			userEmail: payload.email,
			message: payload.message
		}
		const link =
			`https://find-coach-vue-71e07.
			firebaseio.com/requests/${payload.coachId}.json`
		const response = await fetch(link, {
			method: 'POST',
			body: JSON.stringify(newRequest)
		})
		const responseData = await response.json()
		if (!response.ok) {
			throw new Error(responseData.message || 'Failed to send request')
		}
		newRequest.id = responseData.name
		newRequest.coachId = payload.coachId
		commit('addRequest', newRequest)
	},
	async fetchRequests({commit, rootGetters}) {
		const coachId = rootGetters.userId
		const link =
			`https://find-coach-vue-71e07.
			firebaseio.com/requests/${coachId}.json`
		const response = await fetch(link)
		const responseData = await response.json()
		if (!response.ok) {
			throw new Error(responseData.message || 'Failed to send request')
		}
		const requests = []
		Object
			.keys(responseData)
			.forEach(key => {
				const request = {
					id: key,
					coachId,
					userEmail: responseData[key].userEmail,
					message: responseData[key].message
				}
				requests.push(request)
			})
		commit('setRequests', requests)
	}
}

import {createApp} from 'vue'
import router from './router'
import store from './store/index'
import App from './App'

import BaseCard from '@/components/ui/BaseCard'
import BaseButton from '@/components/ui/BaseButton'
import BaseBadge from '@/components/ui/BaseBadge'
import BaseSpinner from '@/components/ui/BaseSpinner'
import BaseDialog from '@/components/ui/BaseDialog'


createApp(App)
	.component('base-card', BaseCard)
	.component('base-button', BaseButton)
	.component('base-badge', BaseBadge)
	.component('base-spinner', BaseSpinner)
	.component('base-dialog', BaseDialog)
	.use(router)
	.use(store)
	.mount('#app')

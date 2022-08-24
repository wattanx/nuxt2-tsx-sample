import { defineComponent } from '@nuxtjs/composition-api'
import HelloWorld from '~/components/HelloWorld'

export default defineComponent({
  components: {
    HelloWorld,
  },
  setup() {
    return () => (
      <div>
        <HelloWorld msg="HelloWorld" />
      </div>
    )
  },
})

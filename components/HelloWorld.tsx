import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    return () => (
      <div>
        <div class="title">{props.msg}</div>
      </div>
    )
  },
})

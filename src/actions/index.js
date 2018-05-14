//import axios from 'axios'
import { actions } from '../store';
import { doGetPaper } from '../firebase/db';

export default {
  getUserData: async () => {
    try {
      const data = await doGetPaper("66a2c6e9-ab88-48ab-8005-a882b29355e9")
      return {
        loading: false,
        items: data.val(),
      }
    } catch (err) {
      return {
        loading: false,
        error: err.message || "Sorry, looks like theres been an error"
      }
    }
  },
  fetch: (state) => {
    actions.getUserData()

    return {
      loading: true,
    }
  }
}

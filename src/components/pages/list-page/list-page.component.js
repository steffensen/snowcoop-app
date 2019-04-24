import mapView from '../../shared/map-view/map-view.component.vue';
import formAddAddress from './form-add-address/form-add-address.component.vue';
export default {
  name: 'listPage',
  components: {
    mapView,
    formAddAddress
  },
  data() {
    return {
      addressList: null,
    }
  },
  // Add SideNavigation to components
  mounted() {
    /* eslint-disable */
    console.log('mounted...');
    this.$store.dispatch('GET_ADDRESS_LIST').then(addressList => {
      this.addressList = addressList;
      /* eslint-disable */
      console.log(addressList);
    });
  },
  computed: {
    // Get user name from getter only if they are logged in
    // If not loged in they'll be re-route to login page
    pageInfo() {
      if (this.$store.getters.IS_LOGIN === true) {
        return 'List Page';
      } else {
        // Re-route to Login Page
        return this.$router.push('login');
      }
    }
  },
  methods: {
    showForm() {
      this.$refs.formAddress.toggleForm(true);
    }
  },
};
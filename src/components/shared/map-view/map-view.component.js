import {gmapApi} from 'vue2-google-maps';
export default {
    name: 'mapView',
    props: {
        showList: Boolean,
        addressList: Array
    },
    data() {
        return {
            markers: [],
            center: null,
            currentPlace: null,

        }
    },
    computed: {
        google: gmapApi,
        zoomValue() {
            return this.currentPlace ? 18 : 7;
        }
    },
    mounted() {
        this.initPlaces();
    },
    methods: {
        initPlaces() {
            this.markers = this.addressList.map(address => this.buildMarker(address));
            this.center = this.markers[0].position
        },
        
        setLocation(address) {
            this.center = this.buildMarker(address).position;
            this.currentPlace = address;
        },
        buildMarker(address) {
            const marker = {
                lat: address.lat,
                lng:address.lng
            };
            return { position: marker};
        }
    }
}
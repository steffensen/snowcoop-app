<template>
  <div id="mapView">
    <div class="map-view-wrapper">
      <div class="address-list-wrapper" v-if="showList">
        <div
          v-for="address in addressList"
          :key="address.id"
          @click="setLocation(address)"
          class="address-item"
          v-bind:class="{ 'current-place' : currentPlace && address.id === currentPlace.id}"
        >{{ address.street }}</div>
      </div>
      <div class="map-wrapper">
        <gmap-map
          v-if="center"
          :center="center"
          :zoom="zoomValue"
          style="width: 100%; height: 400px"
        >
          <gmap-marker v-for="(m, index) in markers" :key="index" :position="m.position"/>
        </gmap-map>
      </div>
    </div>
  </div>
</template>
<script src="./map-view.component.js"></script>
<style src="./map-view.component.css" scoped></style>
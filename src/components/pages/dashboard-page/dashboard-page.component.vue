    
<template>
  <div id="dashboardPage">
    <el-container>
      <el-main>
        <p class="name">Hi {{ $store.state.user.firstName }}, welcome to snowcoop.</p>
        <!-- Add map view to the dashboard -->
        <div class="list-wrapper">
          <div class="list-view-wrapper">
            <el-card class="map-view-card">
              <!-- Hiding the addressList -->
              <map-view v-if="addressList" v-bind:showList="false" v-bind:addressList="addressList"></map-view>
            </el-card>
          </div>
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<script src="./dashboard-page.component.js"></script>
<style src="./dashboard-page.component.css"></style>